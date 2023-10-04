const clientId = "ea43d6af1b0b42d091a688734a670250";
const redirectUri = "https://jammmingadrian9ng.netlify.app";
const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
let accessToken;

const Spotify = {
    getAccessToken() {

        if(accessToken){
            return accessToken;
        }
        
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/); //searches url for part that says access_token and doesnt have &
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/); // .match returns an array of all found matches

        console.log(accessTokenMatch);
        console.log(expiresInMatch);
        

        if (accessTokenMatch && expiresInMatch){ //if both have value
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = "", expiresIn * 1000);
            window.history.pushState("Access Token", null, "/"); // This clears the parameters, allowing us to grab a new access token when it expires. pushState(state, unused, url)
            
            console.log(accessToken);
            console.log(expiresIn);
            
            return accessToken
        } else {
            window.location = url;
        }
    },

    search(term){
        const accessToken = Spotify.getAccessToken();
        return fetch("https://api.spotify.com/v1/search?type=track&q=" + term ,
            {headers: {Authorization: "Bearer " + accessToken}}).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (!jsonResponse.tracks){
                    return [];
                }
                return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }));
            })
    },

    savePlaylist(playlistName, uriList){
        if (!playlistName || !uriList){
            return;
        } // if no values for either, return nothing

        const accessToken = Spotify.getAccessToken();
        let userId;

        return fetch("https://api.spotify.com/v1/me", {headers: {Authorization: "Bearer " + accessToken}} //returns username
        ).then(response => response.json() //turns response to json
        ).then(jsonResponse => {
            userId = jsonResponse.id;
            return fetch("https://api.spotify.com/v1/users/" + userId + "/playlists", {
                headers: {Authorization: "Bearer " + accessToken},
                method: "POST",
                body: JSON.stringify({name: playlistName})
            }).then(response => response.json()
            ).then(jsonResponse => {
                const playlistId = jsonResponse.id;
                return fetch("https://api.spotify.com/v1/users/" + userId + "/playlists/" + playlistId + "/tracks", {
                    headers: {Authorization: "Bearer " + accessToken},
                    method: "POST",
                    body: JSON.stringify({uris: uriList})
                });
            });
        })
    }
};
export default Spotify;
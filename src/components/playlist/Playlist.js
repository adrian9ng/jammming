import React from "react";
import Tracklist from "../tracklist/Tracklist";
import "./Playlist.css"

function Playlist(props){
    if(props.tracks){
        return (
        <div className="Playlist">
            <input type="text" defaultValue={"New Playlist"}/>
            <Tracklist tracks={props.tracks}/>
            <div className="saveButton">
                <button>Save to Spotify</button>
            </div>
        </div>
        );
    }
}

export default Playlist;
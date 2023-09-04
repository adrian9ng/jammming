import React from "react";
import Tracklist from "../tracklist/Tracklist";
import "./Playlist.css"

function Playlist(){
    return (
        <div className="Playlist">
            <input type="text" defaultValue={"New Playlist"}/>
            {/* <Tracklist/> */}
            <div className="saveButton">
                <button>Save to Spotify</button>
            </div>
            
        </div>
    );
}

export default Playlist;
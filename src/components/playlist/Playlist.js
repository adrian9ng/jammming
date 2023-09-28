import React from "react";
import Tracklist from "../tracklist/Tracklist";
import "./Playlist.css"

function Playlist(props){
    const handleNameChange = (e) => {
        props.onNameChange(e.target.value);
    }

    if(props.tracks){
        return (
        <div className="Playlist">
            <input type="text" defaultValue={"New Playlist"} onChange={handleNameChange}/>
            <Tracklist tracks={props.tracks} isRemove={true} onRemove={props.onRemove}/>
            <div className="saveButton">
                <button onClick={props.onSave}>Save to Spotify</button>
            </div>
        </div>
        );
    }
}

export default Playlist;
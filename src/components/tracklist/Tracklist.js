import React from "react";
import Track from "../track/Track";
import "./Tracklist.css"

function Tracklist(props){
    return (
        <div className="tracklist">
            {props.tracks.map((track) => {
                return (
                    <Track track={track} key={track.id}/>
                )
            })}
        </div>
    );
}

export default Tracklist;
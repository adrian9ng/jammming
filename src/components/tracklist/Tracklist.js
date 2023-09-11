import React from "react";
import Track from "../track/Track";
import "./Tracklist.css"

function Tracklist(props){
    if(props.tracks){
        return (
            <div className="tracklist">
                {props.tracks.map((track) => {
                    return (
                        <Track track={track} key={track.id} onAdd={props.onAdd}/>
                    )
                })}
            </div>
        );  
    }
    
}

export default Tracklist;
import React from "react";
import "./Track.css"

function Track(props){

    const removeTrack = (e) => {
        alert("minus clicked");
    }

    const addTrack = (e) => {
        console.log(props.track);
        props.onAdd(props.track);
    }

    const renderAction = () => {
        if(props.isRemoval){
            return (
                <button onClick={removeTrack}>-</button>
            )
        }
        else{
            return (
                <button onClick={addTrack}>+</button>
            )
        }
    }

    return (
        <div className="track">
            <div className="trackInfo">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            <div className="trackAction">
                {renderAction()}
            </div>
        </div>
    );
}

export default Track;
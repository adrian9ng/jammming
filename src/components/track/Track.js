import React from "react";
import "./Track.css"

function Track(props){

    const renderAction = () => {
        if(props.isRemoval){
            return (
                <button>-</button>
            )
        }
        else{
            return (
                <button>+</button>
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
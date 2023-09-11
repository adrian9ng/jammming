import React from "react";
import Tracklist from "../tracklist/Tracklist";
import "./SearchResults.css"

function SearchResults(props){
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist tracks={props.tracks} onAdd={props.onAdd}/>
        </div>
    );
}

export default SearchResults;
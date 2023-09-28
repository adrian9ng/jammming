import React, {useState} from "react";
import "./SearchBar.css"

function SearchBar(props){

    const [input, setInput] = useState("");

    const search = () => {
        props.onSearch(input)
    }

    return (
        <div className="SearchBar">
            <input 
                type="text" 
                placeholder="Enter a song to search"
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={search}>Search</button>
        </div>
    );
}

export default SearchBar;
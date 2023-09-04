import React, {useState} from "react";
import "./SearchBar.css"

function SearchBar(props){

    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // code to handle submit
        alert("Submit button pressed");
    }

    return (
        <div className="SearchBar">
            <form onSubmit={handleSubmit}>
                {/* <label for="searchInput"></label> */}
                <input 
                    type="text" 
                    id="searchInput" 
                    name="searchInput" 
                    value={input}
                    placeholder="Enter a song to search"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;
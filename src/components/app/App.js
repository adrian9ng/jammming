import React from "react";
import SearchBar from "../searchbar/SearchBar";
import SearchResults from "../searchresults/SearchResults";
import Playlist from "../playlist/Playlist";
import "./reset.css"
import './App.css';
// client ID ea43d6af1b0b42d091a688734a670250
// secret 0d350256680a42d7a8f8011102cbb145
//https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/jammming/projects/jammming-prj?_gl=1*1mulbql*_ga*NTg3OTM5NTE5NC4xNjg0MjAyNDcw*_ga_3LRZM6TM9L*MTY5MzMzNzY2NC4zLjEuMTY5MzMzNzcxNy4wLjAuMA..

function App() {
  const tracks = [{name: "TT", artist: "TWICE", album: "Twicecoaster Lane 1", id: 1}, {name: "Knock Knock", artist: "TWICE", album: "Twicecoaster Lane 2", id: 2}, {name: "Cheer Up", artist: "TWICE", album: "Page Two", id: 3}]
  return (
    <div>
      <header>
        <h1>Jammming</h1>
      </header>
      <main>
        <SearchBar/>
        <div className="trackListHolder">
          <SearchResults tracks={tracks}/>
          <Playlist/>
        </div>
        
      </main>
    </div>
  );
}

export default App;
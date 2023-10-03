import React, { useState } from "react";
import SearchBar from "../searchbar/SearchBar";
import SearchResults from "../searchresults/SearchResults";
import Playlist from "../playlist/Playlist";
import Spotify from "../../util/Spotify";
import "./reset.css"
import './App.css';

function App() {
  const [tracks, setTracks] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  const search = (input) => {
    Spotify.search(input).then(setTracks);
  }

  const addTrack = (track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)){
      return;
    }
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    console.log(playlistTracks);
  }

  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) => prevTracks.filter((currentTrack) => currentTrack !== track))
  }

  const updatePlaylistName = (newName) => {
    setPlaylistName(newName);
  }

  const savePlaylist = () => {
    const uriList = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, uriList).then(()=>{
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  };

  return (
    <div>
      <header>
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <main>
        <SearchBar onSearch={search}/>
        <div className="trackListHolder">
          <SearchResults tracks={tracks} onAdd={addTrack}/>
          <Playlist tracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist}/>
        </div>
      </main>
    </div>
  );
}

export default App;
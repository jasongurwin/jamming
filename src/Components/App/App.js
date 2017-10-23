import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {searchResults: [],playlistName: 'New Playlist',playlistTracks:[]};
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  };

  addTrack(track) {
  let tracks = this.state.playlistTracks;
  if (tracks.filter(song => song.id === track.id).length === 0){
    tracks.push(track);
  }

  this.setState({playlistTracks: tracks});
}

removeTrack(track) {
let tracks = this.state.playlistTracks;
tracks = tracks.filter(song => song.id !== track.id);
this.setState({playlistTracks: tracks});
}

updatePlaylistName(name) {
  this.setState({playlistName: name});
  // console.log(this.state.playlistName)
}

savePlaylist(){

    let trackUris = this.state.playlistTracks.map(track => {
        return track.uri
      })

    Spotify.savePlaylist(this.state.playlistName,trackUris)
    this.setState({playlistName: 'New Playlist'});

}

search(term){
  // console.log(term)
  // let results = Spotify.search(term)
  // console.log(results)
  Spotify.search(term).then(searchResults => {
    this.setState({searchResults: searchResults})
  });
  // this.setState({searchResults: results});
}

  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch={this.search}/>
    <div className="App-playlist">
      <SearchResults onAdd={this.addTrack} SearchResults={this.state.searchResults}/>
      <Playlist onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} onSave={this.savePlaylist} Playlist={this.state.playlistTracks}/>
    </div>
  </div>
</div>
    );
  }

}

export default App;

import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {SearchResults: [{id:'1231', name:'Tiny Dancer Live', artist: 'Ben Folds', album: 'Ben Folds Live'},{id:'1232', name:'Tiny Dancer', artist: 'Elton John', album: 'Madman Across The Water'}],playlistName: 'Jasons Playlist',playlistTracks:[{id:'1233',name:'Yellow', artist: 'Coldplay', album: 'Over The Water'},{id:'1234',name:'Piano Man', artist: 'Billy Joel', album: 'The Piano Man'}]};
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  };

  addTrack(track) {
  let tracks = this.state.playlistTracks;
  tracks.push(track);
  this.setState({playlistTracks: tracks});
}

removeTrack(track) {
let tracks = this.state.playlistTracks;
tracks.pop(track);
console.log(tracks)
tracks = tracks.filter(song => song.id !== track.id);
console.log(tracks)
this.setState({playlistTracks: tracks});
console.log(this.state.playlistTracks)
}

  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults onAdd={this.addTrack} SearchResults={this.state.SearchResults}/>
      <Playlist onRemove={this.removeTrack} Playlist={this.state.playlistTracks}/>
    </div>
  </div>
</div>
    );
  }

}

export default App;

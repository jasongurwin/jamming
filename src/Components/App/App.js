import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {SearchResults: [{name:'Tiny Dancer Live', artist: 'Ben Folds', album: 'Ben Folds Live'},{name:'Tiny Dancer', artist: 'Elton John', album: 'Madman Across The Water'}],Playlist:{playlistName: 'Jasons Playlist',playlistTracks:[{name:'Yellow', artist: 'Coldplay', album: 'Over The Water'},{name:'Piano Man', artist: 'Billy Joel', album: 'The Piano Man'}]} };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track){
    if (track.id == false){
      this.state.Playlist.playlistTracks.push(track)
    }
  }

  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults onAdd={addTrack()} SearchResults={this.state.SearchResults}/>
      <Playlist Playlist={this.state.Playlist}/>
    </div>
  </div>
</div>
    );
  }

}

export default App;

import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

class App extends React.Component {
  constructor(props){
    super(props);
  this.state = {SearchResults: [{name:'Tiny Dancer Live', artist: 'Ben Folds', album: 'Ben Folds Live'},{name:'Tiny Dancer', artist: 'Elton John', album: 'Madman Across The Water'}]};
  }

  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults SearchResults={this.state.SearchResults}/>
      <Playlist />
    </div>
  </div>
</div>
    );
  }
}

export default App;

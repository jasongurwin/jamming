import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList'

class Playlist extends React.Component{
  render(){
    return(
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <TrackList onRemove={this.props.onRemove} tracks={this.props.Playlist} isRemoval={true}/>
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }

}

export default Playlist

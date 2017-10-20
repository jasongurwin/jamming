import React from 'react';
import './TrackList.css';
import Track from '../Track/Track'

class TrackList extends React.Component{
  render(){
    console.log(this.props.onAdd)
    return (

      <div className="TrackList">
      {
        this.props.tracks.map(track => {
            return <Track key={track.id} onAdd={this.props.onAdd} track={track} />;
        })
      }
      </div>
    );

  }
}

export default TrackList

import React from 'react';
import './Track.css'

class Track extends React.Component{
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction(){

    let isRemoval = this.props.isRemoval

    if (isRemoval) {
      return <a className="Track-action" onClick={this.removeTrack}>-</a>
    } else {
      return <a className="Track-action" onClick={this.addTrack}>+</a>
    }

    // Step 27 Create a method called renderAction that displays a - anchor tag if the isRemoval property is true, and a + anchor tag if the isRemoval property is false. Set the class name to Track-action.
  }

  addTrack(event) {
  this.props.onAdd(this.props.track);
  // console.log(this.props.track)
}

removeTrack(event) {
this.props.onRemove(this.props.track);
// console.log(this.props.track)
}

  render(){
    return(
      <div className="Track">
  <div className="Track-information">
    <h3>{this.props.track.name}</h3>
    <p>{this.props.track.artist} | {this.props.track.album}</p>
  </div>
  {this.renderAction()}
</div>

    );
  }
}

export default Track

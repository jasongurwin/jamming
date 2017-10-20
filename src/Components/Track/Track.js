import React from 'react';
import './Track.css'


let isRemoval = true

class Track extends React.Component{
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }

  renderAction(){

    if (isRemoval) {
      return '+'
    } else {
      return '-'
    }

    // Step 27 Create a method called renderAction that displays a - anchor tag if the isRemoval property is true, and a + anchor tag if the isRemoval property is false. Set the class name to Track-action.
  }

  addTrack(event) {
  this.props.onAdd(this.props.track);
  console.log(this.props.track)
}

  render(){
    return(
      <div className="Track" key={this.props.key}>
  <div className="Track-information">
    <h3>{this.props.track.name}</h3>
    <p>{this.props.track.artist} | {this.props.track.album}</p>
  </div>
  <a className="Track-action" onClick={this.addTrack}>{this.renderAction()}</a>
</div>

    );
  }
}

export default Track

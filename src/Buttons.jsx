import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
      <div>
        <span><button onClick={() => this.props.handleStart()}>start</button></span>
        <span><button onClick={() => this.props.handleStop()}>stop</button></span>
      </div>
    )
  }
}

export default Buttons

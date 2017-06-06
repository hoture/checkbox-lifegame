import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.props.handleRandom()} disabled={this.props.started}>random</button>
          <button onClick={() => this.props.handleAllClear()} disabled={this.props.started}>all clear</button>
        </div>
        <div>
          <span><button onClick={() => this.props.handleStart()} disabled={this.props.started}>start</button></span>
          <span><button onClick={() => this.props.handleStop()}>stop</button></span>
        </div>
      </div>
    )
  }
}

export default Buttons

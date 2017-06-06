import React, { Component } from 'react';
import Table from './Table'
import Buttons from './Buttons'

class Lifegame extends Component {
  render() {
    return (
      <div>
        <Buttons 
          handleStart={this.props.handleStart} 
          handleStop={this.props.handleStop} 
          handleRandom={this.props.handleRandom}
          handleAllClear={this.props.handleAllClear}
          started={this.props.started}
        />
        <Table field={this.props.field} handleCheck={this.props.handleCheck} />
      </div>
    )
  }
}

export default Lifegame

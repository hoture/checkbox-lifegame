import React, { Component } from 'react';
import Table from './Table'
import Buttons from './Buttons'

class Lifegame extends Component {
  render() {
    return (
      <div>
        <Buttons 
          size={this.props.size}
          started={this.props.started}
          handleStart={this.props.handleStart} 
          handleStop={this.props.handleStop} 
          handleRandom={this.props.handleRandom}
          handleAllClear={this.props.handleAllClear}
          handleLarger={this.props.handleLarger}
          handleSmaller={this.props.handleSmaller}
        />
        <Table field={this.props.field} handleCheck={this.props.handleCheck} borderColor={this.props.borderColor} />
      </div>
    )
  }
}

export default Lifegame

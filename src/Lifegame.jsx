import React, { Component } from 'react';
import Table from './Table'
import Buttons from './Buttons'

class Lifegame extends Component {
  render() {
    return (
      <div>
        <Table field={this.props.field} handleCheck={this.props.handleCheck} />
        <Buttons handleStart={this.props.handleStart} handleStop={this.props.handleStop}/>
      </div>
    )
  }
}

export default Lifegame

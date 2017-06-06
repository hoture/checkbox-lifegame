import React, { Component } from 'react';

class Table extends Component {
  renderRow(row, irow) {
    return (
      <div key={String(irow)}>
        {row.map(item => (
          <span key={String(item.irow) + String(item.icol)}>
            <input 
              type='checkbox' checked={item.checked}
              onChange={() => this.props.handleCheck(item.irow, item.icol)}
             /> 
          </span>
        ))}
      </div>
    )
  }

  render() {
    const style = {
      borderStyle: 'solid',
      borderColor: this.props.borderColor,
      display: 'inline-block'
    }
    return (
      <div style={style}>
        {this.props.field.map((row, irow) => this.renderRow(row, irow))}      
      </div>
    )
  }
}

export default Table

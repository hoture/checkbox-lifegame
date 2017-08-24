import React from 'react';

const Table = ({ field, borderColor, handleCheck }) => {
  const style = {
    borderStyle: 'solid',
    borderColor,
    display: 'inline-block'
  }

  const renderRow = (row, irow) => (
    <div key={irow}>
      {row.map(item => (
        <span key={`${item.irow}-${item.icol}`}>
          <input 
            type='checkbox' checked={item.checked}
            onChange={() => handleCheck(item.irow, item.icol)}
            /> 
        </span>
      ))}
    </div>
  )

  return (
    <div style={style}>
      {field.map((row, irow) => renderRow(row, irow))}      
    </div>
  )
}
export default Table

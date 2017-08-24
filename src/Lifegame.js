import React from 'react';
import Table from './Table'
import Buttons from './Buttons'

const Lifegame = ({
  size, field, started, borderColor,
  handleCheck, handleStart, handleStop, 
  handleRandom, handleAllClear, handleLarger, handleSmaller,
}) => (
  <div>
    <Buttons 
      size={size} started={started}
      handleStart={handleStart} handleStop={handleStop} 
      handleRandom={handleRandom} handleAllClear={handleAllClear}
      handleLarger={handleLarger} handleSmaller={handleSmaller}
    />
    <Table field={field} handleCheck={handleCheck} borderColor={borderColor} />
  </div>
)

export default Lifegame

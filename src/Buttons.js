import React  from 'react';
import { minSize, maxSize } from './constants'

const Buttons = ({
  size, started,
  handleLarger, handleSmaller, 
  handleRandom, handleAllClear,
  handleStart, handleStop,
}) => (
  <div>
    <div>
      <button onClick={() => handleLarger()} disabled={started || (size >= maxSize)}>+</button>
      <button onClick={() => handleSmaller()} disabled={started || (size <= minSize)}>-</button>
    </div>
    <div>
      <button onClick={() => handleRandom()} disabled={started}>random</button>
      <button onClick={() => handleAllClear()} disabled={started}>all clear</button>
    </div>
    <div>
      <span><button onClick={() => handleStart()} disabled={started}>start</button></span>
      <span><button onClick={() => handleStop()}>stop</button></span>
    </div>
  </div>
)
export default Buttons

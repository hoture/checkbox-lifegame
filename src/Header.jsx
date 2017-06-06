import React, { Component } from 'react';

class Header extends Component {
  render() {
    const renderTitle = () => {
      let titleArray = new Array(5)
      for (let i = 0; i < 5; i++) {
        titleArray[i] = new Array(19).fill(false)
      }

      for (let i = 0; i < 5; i++) {
        titleArray[i][0] = true
        titleArray[i][6] = true
        titleArray[i][10] = true
        titleArray[i][12] = true
        titleArray[i][16] = true
      }
      for (let i of [0, 4])  {
        titleArray[i][1] = true
        titleArray[i][2] = true
      }
      for (let i of [0, 2])  {
        titleArray[i][13] = true
        titleArray[i][14] = true
      }
      for (let i of [0, 2, 4])  {
        titleArray[i][17] = true
        titleArray[i][18] = true
      }
      for (let i of [4])  {
        titleArray[i][4] = true
        titleArray[i][7] = true
        titleArray[i][8] = true
      }
      

      return (
        <div>
          {titleArray.map(row => {
            return (
              <div>
                {row.map(item => <span><input type='checkbox' checked={item} readOnly /></span>)}
              </div>
            )
           })}
        </div>
      )
    }

    return (
      <div>
        {renderTitle()}
      </div>
    )
  }
}

export default Header

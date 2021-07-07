import React from 'react'

function Quarter(props){
    const { quarter, changeQuarter } = props
    return (
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <div className="quarter__buttons">
          <button className="quarter__up" onClick={() => changeQuarter(true)}>+</button>
          <button className="quarter__down" onClick={() => changeQuarter(false)}>-</button>
        </div>
      </div>
    )
}

export default Quarter
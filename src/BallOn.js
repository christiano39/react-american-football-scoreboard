import React from 'react'

function BallOn(props){
    const { ballOn, changeBallOn, fieldSide, toggleFieldSide } = props
    return (
      <div className="ballOn">
        <h3 className="ballOn__title">Ball On</h3>
    <div className="ballOn__value">{ballOn + fieldSide}</div>
        <div className="ballOn__buttons">
          <button className="ballOn__up" onClick={() => changeBallOn(true)}>+</button>
          <button className="ballOn__ballOn" onClick={() => changeBallOn(false)}>-</button>
          <button className="field__side" onClick={toggleFieldSide}>Toggle Side</button>
        </div>
      </div>
    )
}

export default BallOn
import React from 'react'

function ToGo(props){
    const { toGo, changeToGo } = props
    return (
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
        <div className="toGo__buttons">
          <button className="toGo__up" onClick={() => changeToGo(true)}>+</button>
          <button className="toGo__toGo" onClick={() => changeToGo(false)}>-</button>
        </div>
      </div>
    )
}

export default ToGo
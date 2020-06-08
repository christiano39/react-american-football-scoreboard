import React from 'react'

function Down(props){
    const { down, changeDown } = props
    return (
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <div className="down__buttons">
          <button className="down__up" onClick={() => changeDown(true)}>+</button>
          <button className="down__down" onClick={() => changeDown(false)}>-</button>
        </div>
      </div>
    )
}

export default Down
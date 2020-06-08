import React from "react";
import "./App.css";

const BottomRow = (props) => {
  return (
    <div className="bottomRow">
      <Down down={props.down} changeDown={props.changeDown} />
      {/* <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div> */}
      <ToGo toGo={props.toGo} changeToGo={props.changeToGo}/>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <Quarter quarter={props.quarter} changeQuarter={props.changeQuarter}/>
    </div>
  );
};

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

export default BottomRow;

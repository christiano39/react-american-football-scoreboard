import React from "react";
import "./App.css";
import Quarter from './Quarter'
import Down from './Down'
import ToGo from './ToGo'
import BallOn from './BallOn'

const BottomRow = (props) => {
  return (
    <div className="bottomRow">
      <Down 
        down={props.down} 
        changeDown={props.changeDown} 
      />
      <ToGo 
        toGo={props.toGo} 
        changeToGo={props.changeToGo} 
      />
      <BallOn 
        ballOn={props.ballOn} 
        changeBallOn={props.changeBallOn} 
        fieldSide={props.fieldSide} 
        toggleFieldSide={props.toggleFieldSide} 
      />
      <Quarter 
        quarter={props.quarter} 
        changeQuarter={props.changeQuarter} 
      />
    </div>
  );
};

export default BottomRow;

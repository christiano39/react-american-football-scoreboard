//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react"
import BottomRow from "./BottomRow"
import "./App.css";
//eslint-disable-next-line
import { render } from "@testing-library/react"

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  const [quarter, setQuarter] = useState(1)
  const [down, setDown] = useState(1)
  const [toGo, setToGo] = useState(10)
  const [ballOn, setBallOn] = useState(20)
  const [fieldSide, setFieldSide] = useState('<')
  const homeTeam = "Colts"
  const awayTeam = "Broncos"

  const score = (isHome, amount, e) => {
    isHome ? setHomeScore(homeScore + amount) : setAwayScore(awayScore + amount)
  }
  const changeQuarter = (bool) => {
    if (bool && quarter < 4){
      setQuarter(quarter + 1)
    }else if (!bool && quarter > 1){
      setQuarter(quarter - 1)
    }
  }
  const changeDown = (bool) => {
    if (bool && down < 4){
      setDown(down + 1)
    }else if (!bool && down > 1){
      setDown(down - 1)
    }
  }
  const changeToGo = (bool) => {
    if (bool && toGo < 100){
      setToGo(toGo + 1)
    }else if (!bool && toGo > 1){
      setToGo(toGo - 1)
    }
  }
  const changeBallOn = (bool) => {
    if (bool && ballOn < 50){
      setBallOn(ballOn + 1)
    }else if (!bool && ballOn > 1){
      setBallOn(ballOn - 1)
    }
  }
  const toggleFieldSide = () => {
    if (fieldSide === '<'){
      setFieldSide('>')
    }else if (fieldSide === '>'){
      setFieldSide('')
    }else{
      setFieldSide('<')
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <TeamName isHome name={homeTeam} homeScore={homeScore} awayScore={awayScore} />
          <Timer />
          <TeamName isHome={false} name={awayTeam} homeScore={homeScore} awayScore={awayScore} />
        </div>
        <BottomRow 
          changeQuarter={changeQuarter} 
          quarter={quarter} changeDown={changeDown} 
          down={down} toGo={toGo} changeToGo={changeToGo} 
          ballOn={ballOn} changeBallOn={changeBallOn} 
          fieldSide={fieldSide} 
          toggleFieldSide={toggleFieldSide}
        />
      </section>
      <section className="buttons">
        <ScoreButtons isHome score={score} />
        <ScoreButtons isHome={false} score={score} />
      </section>
    </div>
  )
}

function TeamName(props){
  const { isHome, name, homeScore, awayScore } = props
  const prefix = isHome ? 'home' : 'away'
  return (
    <div className={prefix}>
      <h2 className={prefix + "__name"}>{name}</h2>
  <div className={prefix + "__score"}>{isHome ? homeScore : awayScore}</div>
    </div>
  )
}

function ScoreButtons(props){
  const { isHome, score } = props
  const prefix = isHome ? 'home' : 'away'
  return (
    <div className={prefix + 'Buttons'}>
      <button className={prefix + "Buttons__touchdown"} onClick={() => score(isHome, 7)}>{prefix.toUpperCase()} Touchdown</button>
      <button className={prefix + "Buttons__fieldGoal"} onClick={() => score(isHome, 3)}>{prefix.toUpperCase()} Field Goal</button>
    </div>
  )
}

function Timer(){
  return <div className="timer">00:03</div>
}

export default App;

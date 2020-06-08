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

  const touchdown = (isHome, e) => {
    isHome ? setHomeScore(homeScore + 7) : setAwayScore(awayScore + 7)
  }
  const fieldGoal = (isHome, e) => {
    isHome ? setHomeScore(homeScore + 3) : setAwayScore(awayScore + 3)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <TeamName isHome name="Lions" homeScore={homeScore} awayScore={awayScore} />
          <div className="timer">00:03</div>
          <TeamName isHome={false} name="Tigers" homeScore={homeScore} awayScore={awayScore} />
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <Buttons isHome touchdown={touchdown} fieldGoal={fieldGoal} />
        <Buttons isHome={false} touchdown={touchdown} fieldGoal={fieldGoal} />
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

function Buttons(props){
  const { isHome, touchdown, fieldGoal } = props
  const prefix = isHome ? 'home' : 'away'
  return (
    <div className={prefix + 'Buttons'}>
      <button className={prefix + "Buttons__touchdown"} onClick={() => touchdown(props.isHome)}>{prefix.toUpperCase()} Touchdown</button>
      <button className={prefix + "Buttons__fieldGoal"} onClick={() => fieldGoal(props.isHome)}>{prefix.toUpperCase()} Field Goal</button>
    </div>
  )
}

export default App;

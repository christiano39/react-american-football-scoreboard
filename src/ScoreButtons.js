import React from 'react'

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

export default ScoreButtons
import React from 'react'

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

  export default TeamName
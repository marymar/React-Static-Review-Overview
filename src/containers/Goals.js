import React from 'react'
import { getSiteProps } from 'react-static'

export default getSiteProps(({ id, period, goals }) => (
  <div className="goals">
    <div>Sprint: {id} | {period}</div>
    <ul className="goals-list">
      {goals.map((goal, i) => <li className="goals-list__item" key={`goal-${i}`}>{goal}</li>)}
    </ul>
  </div>
))

import React from 'react'
import { getSiteProps } from 'react-static'

//
import logoImg from '../logo.png'

export default getSiteProps(({ task }) => (
  <div className="task">
    <span className={`status status--${task.status}`} />
    <span className="task__key">{task.key}</span>
    <span className="task__summary">{task.summary}</span>
  </div>
))

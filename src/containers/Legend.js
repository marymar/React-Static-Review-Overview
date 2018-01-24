import React from 'react'
import { getSiteProps } from 'react-static'

//

export default getSiteProps(({ legend }) => (
  <ul className="legend-status">
    {legend.status.map((status, i) => {
      return (
        <li className="legend-status__item" key={`legend-${i}`}><span className={`status status--${status}`} />{status}</li>)}
      )
    }
  </ul>
))

import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'

import './css/app.scss'

export default () => (
  <Router>
    <div>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav> */}
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

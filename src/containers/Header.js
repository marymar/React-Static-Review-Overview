import React from 'react'
import { getSiteProps } from 'react-static'
import logoImg from '../logo-alodo.png'

export default getSiteProps(({ name, quote }) => (
  <header className="header">
    <div className="header__content">
      <img className="header__logo" src={logoImg} alt="Unicorn"/>
      <div className="header__sprintinfo">
        <h1 className="header__headline">Unicorn Review</h1>
        <div className="header__sprintinfo-name">Review: "{name}"</div>
        <div className="header__sprintinfo-quote">{quote}</div>
      </div>
    </div>
  </header>
))

import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'

// import * as process from './process'
import css from './index.solution.css'
import connected from 'State/connect'

class BadRequest extends Component {
  // TODO Challenge 4 create an error page.
  // You must use an image, have text on the screen, a link to your login/sign up pages
  // and something that is using animation
  render() {
    return (
      <div>
        <img src="./error.jpg" />
        <div styleName="flyingSquare" />
        <Link to="login">Try the login page</Link>
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(BadRequest, css)))

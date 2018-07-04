// TODO Challenge 4 - see below
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import { selector as Sloths } from 'Process/users/reducerSloths'

import css from './index.css'
import connected from 'State/connect'

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parentValue: ''
    }
  }

  handleZipChange = (event) => {
    event.preventDefault()
    this.setState({ parentValue: event.target.value })
  }
  render() {
    // Add another Link (react-router) to the page for the string manipulation challenge
    console.log('SLoths', this.props.Sloths)
    return (
      <div styleName="container">
        <div>Did you see the sloths? </div>
        <h1>Challenges</h1>
        <ol>
          <li>
            <Link to="/challenges/pyramid">Pyramid Challenge</Link>
          </li>
        </ol>
      </div>
    )
  }
}
export default connected([Sloths], [])(CSSModules(LandingPage, css))

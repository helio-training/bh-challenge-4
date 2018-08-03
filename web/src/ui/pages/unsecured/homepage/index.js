// TODO Challenge 4 - Create your own homepage with info about the site
// You need to include a modal and have a carousel
// You can use someone else's carousel library/implementation
// But you have to design/build the modal yourself...you can't use anyone else's modal

import React, { Component } from 'react'
import * as homepageActions from './actions'
import connected from 'State/connect'
import { selector as HomepageState } from './reducer'

class Homepage extends Component {

  componentDidMount() {
    this.props.homepageActions.fetch()
  }
  render() {
    return (
      <div>
        Homepage here!!!!!
      </div>
    )
  }
}

export default connected([HomepageState], [homepageActions])(Homepage)

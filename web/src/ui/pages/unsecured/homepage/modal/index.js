// TODO Challenge 4 - Create your own homepage with info about the site
// You need to include a modal and have a carousel
// You can use someone else's carousel library/implementation
// But you have to design/build the modal yourself...you can't use anyone else's modal
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import css from './index.css'

const { bool, func } = PropTypes

class Modal extends Component {
  static propTypes = {
    isModalOpen: bool.isRequired,
    toggleModal: func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      listenToMouse: false
    }
  }

  toggleMouse = (listen) => {
    this.setState({ listenToMouse: listen }, () => {
      console.log('Changed', this.state, listen)
    })
  }

  attemptToClose = () => {
    console.log('here', this.state.listenToMouse)
    if (this.state.listenToMouse)
      this.props.toggleModal()
  }

  render() {
    if (!this.props.isModalOpen)
      return null

    return (
      <div styleName="modalOverlay" onClick={this.attemptToClose}>
        <div styleName="modalContent" onMouseEnter={() => this.toggleMouse(false)} onMouseOut={() => this.toggleMouse(true)}>
          I'm the modal!!! Hello
          <div onClick={this.props.toggleModal}>Close</div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Modal, css)

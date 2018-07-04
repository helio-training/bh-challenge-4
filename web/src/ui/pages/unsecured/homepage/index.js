// TODO Challenge 4 - Create your own homepage with info about the site
// You need to include a modal and have a carousel
// You can use someone else's carousel library/implementation
// But you have to design/build the modal yourself...you can't use anyone else's modal

import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import css from './index.css'

import Modal from './modal'
class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  }

  handleOpenModal = () => {
    console.log('Open the modal', this.state.modalOpen)
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  render() {
    console.log('HERE', this.state.modalOpen)
    return (
      <div styleName="homepage-container">
        <div onClick={this.handleOpenModal}>Open Modal</div>
        <Modal open={this.state.modalOpen} />
        Homepage here!!!!!
      </div>
    )
  }
}

export default CSSModules(Homepage, css)

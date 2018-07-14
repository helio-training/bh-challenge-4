// TODO Challenge 4 - Create your own homepage with info about the site
// You need to include a modal and have a carousel
// You can use someone else's carousel library/implementation
// But you have to design/build the modal yourself...you can't use anyone else's modal

import React, { Component } from 'react'
// import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
// import css from 'pure-react-carousel/dist/react-carousel.es.css'
// import CSSModules from 'react-css-modules'
import Modal from './modal'

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false
    }
  }

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }

  render() {
    return (
      <div>
        <div onClick={this.toggleModal}>Open Modal</div>
        <Modal isModalOpen={this.state.isModalOpen} toggleModal={this.toggleModal} />
      </div>
    )
  }
}

export default Homepage

// TODO Challenge 4 - Create your own homepage with info about the site
// You need to include a modal and have a carousel
// You can use someone else's carousel library/implementation
// But you have to design/build the modal yourself...you can't use anyone else's modal
import PropTypes from 'prop-types'
import React, { Component } from 'react'

const { bool, func } = PropTypes

class Homepage extends Component {
  static propTypes = {
    isModalOpen: bool.isRequired,
    toggleModal: func.isRequired
  }

  render() {
    if (!this.props.isModalOpen)
      return null

    return (
      <div styleName="modalOverlay">
        <div styleName="modalContent">
          I'm the modal!!! Hello
          <div onClick={this.props.toggleModal}>Close</div>
        </div>
      </div>
    )
  }
}

export default Homepage

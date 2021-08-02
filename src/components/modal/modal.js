import React from 'react'
import './modal.scss'
import { createPortal } from 'react-dom'

const modalRoot = document.querySelector('#modal-root')

export default class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.onCloseModal()
    }
  }

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal()
    }
  }

  render() {
    return createPortal(
      <div onClick={this.handleBackdropClick} className="Overlay">
        <div className="Modal">
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>,
      modalRoot
    )
  }
}

import React from 'react'

import './Modal.css'

export const Modal = ({ isOpen, children }) => {
  if (!isOpen) {
    return null
  }
  return (
    <section className={`modalBackground ${!isOpen ? 'modalClose' : 'modalOpen'}`}    >
      <div className={'modalBody'}>{children}</div>
    </section>
  )
}

const Content = ({ children, width }) => {
  return (
    <div className={`modalBody-content ${!width ? '' : width}`}>{children}</div>
  )
}

const Buttons = ({ children, margin }) => {
  return (
    <div className={`modalBody-buttons ${!margin ? '' : margin}`}>
      {children}
    </div>
  )
}

Modal.Content = Content
Modal.Buttons = Buttons

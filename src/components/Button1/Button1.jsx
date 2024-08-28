import React from 'react'
import './Button1.css'

export const Button1 = ({ text, style, onClick, type = 'button', disabled = false }) => {
  return (
    <button
      className={`button1 ${style}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

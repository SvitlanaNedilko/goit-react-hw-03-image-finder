import React from 'react'
import './button.scss'

export default function Button({ click }) {
  return (
    <button type="button" onClick={click} className="Button">
      Load more
    </button>
  )
}

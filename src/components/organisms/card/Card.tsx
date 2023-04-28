import React from 'react'
import './Card.css'

function Card({ styles, children }) {
  return (
    <div className={`card ${styles}`}>
        { children }
    </div>
  )
}

export default Card
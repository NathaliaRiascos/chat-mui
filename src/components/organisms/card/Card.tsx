import React from 'react'
import './Card.css'

function Card({ styles = 'card--white', children }) {
  return (
    <div className={`card ${styles}`}>
        { children }
    </div>
  )
}

export default Card
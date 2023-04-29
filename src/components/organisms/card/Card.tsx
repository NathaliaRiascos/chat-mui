import React from 'react'
import './Card.css'

interface Props {
  styles?: string,
  children?: React.ReactElement | React.ReactElement[]
}

function Card({ styles = 'card--white', children }: Props) {
  return (
    <div className={`card ${styles}`}>
        { children }
    </div>
  )
}

export default Card
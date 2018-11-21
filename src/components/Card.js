import React from 'react'
import PropTypes from 'prop-types'

import './Card.css'

const Card = ({ title, text, image }) => {
  return (
    <div className="Card">
      <img src={image} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

Card.propTypes = {

}

export default Card

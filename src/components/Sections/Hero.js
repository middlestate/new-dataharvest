import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ background_image, title, image }) => (
  <div className="Hero" style={{background: `url(${background_image})`}}>
    <h1 className="title">{title}</h1>
    <img src={image} alt="hero" />
  </div>
)

Hero.propTypes = {
  background_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default Hero
import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ background_image, title, subtitle, image }) => (
  <div className="Hero" style={
    {
      background: `url(${background_image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }
  }>
    <h1 className="title">{title}</h1>
    <h3 className="subtitle">{subtitle}</h3>
    <img src={image} alt="hero" />
  </div>
)

Hero.propTypes = {
  background_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default Hero
import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ title, image }) => (
  <div className="Hero">
    <h1 className="title">{title}</h1>
    <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} alt="hero" />
  </div>
)

Hero.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default Hero
import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ background_image, title, subtitle, image }) => (
  <section className="Hero section" style={
    {
      background: `url(${background_image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      height: '80vh'
    }
  }>
    <img src={image} className="dataharvest-logo" alt="dataharvest_logo" />
    <div className="title-container">
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>    
    </div>
  </section>
)

Hero.propTypes = {
  background_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default Hero
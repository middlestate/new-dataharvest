import React from 'react'
import PropTypes from 'prop-types'

class Hero extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="Hero section" style={
        {
          background: `url(${this.props.background_image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          height: '100vh'
        }
      }>
        <img src={this.props.image} className="dataharvest-logo" alt="dataharvest_logo" />
        <div className="title-container">
          <h1 className="title">{this.props.title}</h1>
          <h3 className="subtitle">{this.props.subtitle}</h3>
          {/* <p className="subtitle">{useWindowWidth()}</p> */}
        </div>
      </section>
    )
  }
}

Hero.propTypes = {
  background_image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
}

export default Hero
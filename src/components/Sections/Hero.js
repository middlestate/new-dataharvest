import React from 'react'
import PropTypes from 'prop-types'

class Hero extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="hero section">
        <div className='hero-video' style={{bottom: 'inherit'}}>
          <video playsInline autoPlay muted loop poster='' style={{zIndex: -100}}>
            <source src='https://github.com/middlestate/Data-Harvest-netlify-gatsby/blob/54b1d7b81e828f023127874b7890e0b478ad1c62/src/assets/img/dataharvest-pah.mp4?raw=true' type='video/mp4' />
          </video>
        </div>
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
  // background_image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
}

export default Hero
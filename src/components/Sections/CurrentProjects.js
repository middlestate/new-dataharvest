import React from 'react'
import PropTypes from 'prop-types'

const CurrentProjects = ({ title, subtitle, side_image, logo, spotlight_title, spotlight_subtitle, description, button_text, button_link }) => (
  <div className="current_projects">
    <h3 className="subtitle">{subtitle}</h3>
    <h1 className="title">{title}</h1>
    <div className="spotlight_project">
      <div className="column-1"
        style={
          {
            height: '100%',
            width: '100%',
            backgroundImage: `url(${side_image})`,
            backgroundRepeat: 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
        }
      />
      <div className="column-2">
        <img src={logo} alt="logo" />
        <h4 className="title">{spotlight_title}</h4>
        <hr/>
        <h4 className="subtitle">{spotlight_subtitle}</h4>
        <p className="description">{description}</p>
        <a href={button_link}>
          <button>{button_text}</button>
        </a>
      </div>
    </div>
  </div>
)

CurrentProjects.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  side_image: PropTypes.string,
  logo: PropTypes.string,
  spotlight_title: PropTypes.string,
  spotlight_subtitle: PropTypes.string,
  description: PropTypes.string,
  button_link: PropTypes.string,
  button_text: PropTypes.string
}

export default CurrentProjects
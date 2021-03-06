import React from 'react'
import PropTypes from 'prop-types'

const PastProjects = ({ gridItems }) => {
  return (
    <div className="past_projects_section">
      {gridItems.map(({ project = {image: '', title: '', description: ''} }, keys) => {
        return (
          <div key={keys} className="project_container" style={keys % 2 === 0 ? {flexDirection: 'row-reverse'} : {flexDirection: 'initial'}}>
            {console.log(keys)}
            <div className="column-1">
              <img src={project.image} alt="project_image" />
            </div>
            <div className="column-2">
              <h1 className="past_project_title">{project.title}</h1>
              <p className="past_project_description">{project.description}</p>
            </div>
          </div>
        )
      })}
    </div>    
  )
}

PastProjects.propTypes = {
  past_projects: PropTypes.shape({
    project: PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  })
}

export default PastProjects
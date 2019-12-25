import React from 'react'
import PropTypes from 'prop-types'

const PastProjects = ({ gridItems }) => {
  return (
    <div className="past_projects_section">
      {gridItems.map(({ project }, keys) => {
        return (
          <div key={keys} className="project_container">
            {console.log(project)}
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
    project: PropTypes.object
  })
}

export default PastProjects
import React from 'react'
import PropTypes from 'prop-types'

const PastProjects = ({ gridItems }) => (
  <div className="past_projects_row">
    {gridItems.map(({ project }, keys) => {
      return (
        <div key={keys} className="project_column">
          {console.log(project)}
        </div>
      )
    })}
  </div>
)

PastProjects.propTypes = {
  past_projects: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string
  })
}

export default PastProjects
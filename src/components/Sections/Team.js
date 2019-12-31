import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Team = ({ gridItems }) => {
  return (
    <div className="team_section">
      <h1 className="section_title">Meet Our Team</h1>
      <div className="member_container">
        {gridItems.map(({ member = {name: '', linkedin_link: '', title: '', description: ''} }, keys) => {
          return (
            <div key={keys} className="member">
              <h2 className="name">{member.name}</h2>
              <a href={member.linkedin_link} className='member_icon' target="_blank">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
              </a>
              <h3 className="title">{member.title}</h3>
              <p className="description">{member.description}</p>
            </div>
          )
        })}      
      </div>
    </div>
  )
}

Team.propTypes = {
  team: PropTypes.shape({
    member: PropTypes.shape({
      name: PropTypes.string,
      linkedin_link: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  })
}

export default Team
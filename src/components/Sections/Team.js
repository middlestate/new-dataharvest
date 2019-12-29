import React from 'react'
import PropTypes from 'prop-types'

const Team = ({ gridItems }) => {
  return (
    <div className="team_section">
      <h1 className="title" style={{color: 'black'}}>Meet Our Team</h1>
      {gridItems.map(({ member = {name: '', icon: '', title: '', description: ''} }, keys) => {
        return (
          <div key={keys} className="member_container">
            {console.log(gridItems)}
            <h2 className="name">{member.name}</h2>
            <img src={member.icon} className="icon" alt="icon" />
            <h3 className="title">{member.title}</h3>
            <p className="description">{member.description}</p>
          </div>
        )
      })}
    </div>
  )
}

Team.propTypes = {
  team: PropTypes.shape({
    member: PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  })
}

export default Team
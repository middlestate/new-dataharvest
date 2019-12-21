import React from 'react'
import PropTypes from 'prop-types'

const Mission = ({ title, statement, image }) => (
  <div className="mission">
    <div className="column-1">
      <h1 className="title">{ title }</h1>
      <p className="statement">{ statement }</p>
    </div>
    <div className="column-2">
      <img src={ image } alt="lock" />
    </div>
  </div>
)

Mission.propTypes = {
  title: PropTypes.string,
  statement: PropTypes.string,
  image: PropTypes.string
}

export default Mission
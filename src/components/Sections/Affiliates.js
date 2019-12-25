import React from 'react'
import PropTypes from 'prop-types'

const Affiliates = ({ gridItems }) => {
  return (
    <div className="logo-row">
      {gridItems.map(({ image }, keys) => {
        return (
          <div key={keys} className="logo-column">
            <img src={image} alt="affiliate_logo" />
          </div>
        )
      })}
    </div>    
  )
}



Affiliates.propTypes ={
  images: PropTypes.shape({
    image: PropTypes.string,
  })
}

export default Affiliates
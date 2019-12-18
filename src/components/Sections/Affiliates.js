import React from 'react'
import PropTypes from 'prop-types'

const Affiliates = ({ logosArray }) => {
  return (
    <div className="logo-row">
      {logosArray.map(({ image }, keys) => {
        return (
          <div key={keys} className="logo-column">
            {console.log(image)}
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
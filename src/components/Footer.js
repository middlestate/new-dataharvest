import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <a href="https://mdst.typeform.com/to/SENQ20" className='button_link'>
          <button>Get In Touch</button>        
        </a>
        <div className="links_container">
          <a href="https://www.facebook.com/DataHarvest.co/" className='link_icon' target="_blank">
            <FontAwesomeIcon icon={['fab', 'facebook-square']} size="3x" />
          </a>
          <a href="https://www.linkedin.com/company/dataharvest.co/" className='link_icon' target="_blank">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
          </a>
          <a href="https://dataharvest.mn.co/landing?from=https%3A%2F%2Fdataharvest.mn.co%2Ffeed" className='link_icon' target="_blank">
            <img src="/img/MN.jpg" alt="MN" style={{height: '30px'}} />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer

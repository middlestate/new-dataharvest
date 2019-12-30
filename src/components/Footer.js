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
          <a href="#" className='link_icon'>
            <FontAwesomeIcon icon={['fab', 'facebook-square']} size="3x" />
          </a>
          <a href="#" className='link_icon'>
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
          </a>
          <a href="#" className='link_icon'>
            <img src="/img/MN.jpg" alt="MN" style={{height: '30px'}} />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer

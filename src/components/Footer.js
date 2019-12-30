import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <a href="https://mdst.typeform.com/to/SENQ20">
          <button>Get In Touch</button>        
        </a>
        <div className="links_container">
          <a href="#">
            <FontAwesomeIcon icon={['fab', 'facebook-square']} size="lg" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
          </a>
          <a href="#">
            <img src="/img/MN.jpg" alt="MN" />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer

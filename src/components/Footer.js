import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <a href="https://mdst.typeform.com/to/SENQ20">
          <button>Get In Touch</button>        
        </a>
        <div className="links_container"></div>
      </footer>
    )
  }
}

export default Footer

import React from 'react'
import './footer.css'
import footer_logo from '../../../assets/logo.png'
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" className='footer-logo' />
                <p>I make  software solutions to real world problems</p>
            </div>
            </div>
            
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy;{new Date().getFullYear()} Leon Nelson. All rights reserved</p>
        <div className="footer-bottom-right">
<div className="social-icons">
    <a href="https://www.instagram.com/leon.nelson.121?igsh=MWFhcTJsazNpZGFkeA==" target="_blank" rel="noopener noreferrer" className="social-link">
        <FaInstagram size={30} />
    </a>
    <a href="https://www.facebook.com/share/1Gt78JbMaw/" target="_blank" rel="noopener noreferrer" className="social-link">
        <FaFacebook size={30} />
    </a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
        <FaGithub size={30} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
        <FaLinkedin size={30} />
    </a>
</div>
            
        </div>
      </div>
    
    </div>
  )
}

export default Footer

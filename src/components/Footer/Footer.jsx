import React from 'react'
import './footer.css'
import footer_logo from '../../../assets/logo.png'
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';

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
    <a href="https://www.instagram.com/leon.nelson.121?igsh=MWFhcTJsazNpZGFkeA==" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
        <FaInstagram size={28} />
    </a>
    <a href="https://www.tiktok.com/@nelson_leon6?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
        <FaTiktok size={26} />
    </a>
    <a href="https://www.facebook.com/share/1Gt78JbMaw/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
        <FaFacebook size={28} />
    </a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
        <FaGithub size={28} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
        <FaLinkedin size={28} />
    </a>
</div>
            
        </div>
      </div>
    
    </div>
  )
}

export default Footer

import React from 'react'
import './contact.css'
import  theme_pattern from'../../../assets/theme_pattern.svg'
import mail_icon from '../../../assets/mail_icon.svg'
import location_icon from '../../../assets/location_icon.svg'
import call_icon from '../../../assets/call_icon.svg'
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1 data-aos="fade-up">Get in touch</h1>
            <img data-aos="fade-up" src={theme_pattern} alt="" />
        </div>
        <section className="contact-section">
      

      <div className="contact-container">
        
        <div className="contact-info">
          <h1  data-aos="fade-up"className="accent-text">Let's talk</h1>
          <p data-aos="fade-left"className='lets-talk'>
            I'm always available to be of help to you and your business. 
            Feel free to reach out and send your inquiries and proposals. 
            Let's work together and make impact one project at a time.
          </p>
          
<div data-aos="zoom-in" className="social-icons">
    <a href="https://www.instagram.com/leon.nelson.121?igsh=MWFhcTJsazNpZGFkeA==" target="_blank" rel="noopener noreferrer" className="social-link">
        <FaInstagram size={30} />
    </a>
    <a href="https://www.facebook.com/share/1Gt78JbMaw/" target="_blank" rel="noopener noreferrer" className="social-link">
        <FaFacebook size={30} />
    </a>
    <a href="https://github.com/gichy2" target="_blank" rel="noopener noreferrer" className="social-link">
        <FaGithub size={30} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
        <FaLinkedin size={30} />
    </a>
</div>
         
          
          <div  data-aos="fade-up"className="info-details">
            <div className="info-item">
              <img src={mail_icon} alt="mail icon"/><p>leonshireku@gmail.com</p>
            </div>
            <div className="info-item">
              <img src={call_icon} alt="call icon" /> <p>+254-741-766-710</p>
            </div>
            <div className="info-item">
              <img src={location_icon} alt="location icon"/>
              <p>Kenya</p>
            </div>
          </div>

          
        </div>

      
        <form data-aos="fade-up" className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="input-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-group">
              <label>Your Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="input-group">
            <label>Write your message here</label>
            <textarea placeholder="Enter your message" rows="6"></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit now
          </button>
        </form>
      </div>
    </section>

      </div>
      
  )
}
export default Contact;



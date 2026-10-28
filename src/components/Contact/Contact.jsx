import React, { useState } from 'react'
import './contact.css'
import { FiArrowUpRight, FiCheck, FiPhone, FiFileText } from 'react-icons/fi'
import { FaInstagram, FaGithub, FaWhatsapp, FaTiktok } from 'react-icons/fa6'

const Contact = () => {
  const [copied, setCopied] = useState(false)
  const emailAddress = 'leonshireku@gmail.com'
  const resumeUrl = 'https://docs.google.com/document/d/1ysB4CDrRh2jZUjOp3PFblqdg8njHe-kTuuGXMdi2ZNQ/edit?usp=sharing'

  const handleContactClick = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(emailAddress)
    } else {
      const textArea = document.createElement('textarea')
      textArea.value = emailAddress
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
    }

    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2800)
  }

  return (
    <section id="contact" className="contact-canvas-section">
      {/* Editorial Watermark Header matching project theme */}
      <div className="contact-header" data-aos="fade-up">
        <span className="contact-watermark" aria-hidden="true">
          CONTACT
        </span>
        <h2 className="contact-main-title">/GET IN TOUCH</h2>
      </div>

      {/* Atmospheric Cloud Canvas */}
      <div className="contact-atmospheric-stage" data-aos="fade-up" data-aos-delay="150">
        <div className="contact-content-center">
          {/* Main Statement Heading */}
          <h2 className="contact-hero-heading">
            HAVE A PROJECT IN MIND?
          </h2>

          {/* Subtext description */}
          <p className="contact-hero-subtext">
            Together, we can create something clear and impactful. Let’s collaborate to bring our ideas to life in a way that resonates with everyone.
          </p>

          {/* Centered Action Buttons: Contact Me & Call Me */}
          <div className="contact-cta-wrapper">
            <a
              href={`mailto:${emailAddress}`}
              className="contact-primary-btn"
              onClick={handleContactClick}
              aria-label={`Send email to ${emailAddress}`}
            >
              <span>{copied ? 'Copied to clipboard! ✓' : 'Contact Me'}</span>
              {!copied && <FiArrowUpRight className="contact-btn-arrow" />}
            </a>

            <a
              href="tel:+254741766710"
              className="contact-secondary-btn"
              aria-label="Call Leon Nelson directly at +254 741 766 710"
            >
              <FiPhone className="contact-btn-phone-icon" />
              <span>Call Me</span>
              <FiArrowUpRight className="contact-btn-arrow" />
            </a>
          </div>
        </div>

        {/* Floating Bottom Pill Badges */}
        <div className="contact-bottom-pills-row" data-aos="fade-up" data-aos-delay="250">
          {/* Profile Pill with Avatar */}
          <div className="contact-profile-pill">
            <img
              src="/picha.png"
              alt="Leon Nelson"
              className="contact-profile-avatar"
            />
            <span className="contact-profile-name">Leon Nelson</span>
          </div>

          {/* Resume Pill */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-platform-pill contact-resume-pill"
            aria-label="View Leon Nelson's Resume"
          >
            <FiFileText className="pill-platform-icon resume-icon" />
            <span>Resume / CV</span>
            <FiArrowUpRight className="pill-arrow-sm" />
          </a>

          {/* Platform Pills */}
          <a
            href="https://github.com/leonokumu254"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-platform-pill"
          >
            <FaGithub className="pill-platform-icon" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.instagram.com/leon.nelson.121"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-platform-pill"
          >
            <FaInstagram className="pill-platform-icon" />
            <span>Instagram</span>
          </a>

          <a
            href="https://www.tiktok.com/@nelson_leon6?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-platform-pill"
            aria-label="TikTok"
          >
            <FaTiktok className="pill-platform-icon" />
            <span>TikTok</span>
          </a>

          <a
            href="https://wa.me/254741766710"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-platform-pill"
          >
            <FaWhatsapp className="pill-platform-icon whatsapp-icon" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

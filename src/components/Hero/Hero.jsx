import React, { useState, useEffect } from 'react'
import './hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaInstagram, FaLinkedinIn, FaTiktok, FaGithub } from 'react-icons/fa6'

const roleItems = [
  {
    title: 'Full-Stack Software Engineer',
    description: 'Building robust backend systems and responsive web applications.'
  },
  {
    title: 'Social Media Manager',
    description: 'Executing engaging content strategies and growing online brand communities.'
  },
  {
    title: 'Digital Marketer & SEO Specialist',
    description: 'Driving organic search traffic, site visibility, and conversion funnels.'
  }
]

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect synced with active role item
  useEffect(() => {
    const currentTitle = roleItems[roleIndex].title
    const typingSpeed = isDeleting ? 35 : 75
    const pauseDuration = isDeleting ? 300 : 2200

    let timer

    if (!isDeleting && displayText === currentTitle) {
      // Finished typing full title, pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, pauseDuration)
    } else if (isDeleting && displayText === '') {
      // Finished deleting, move to next role
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roleItems.length)
      timer = setTimeout(() => {}, 200)
    } else {
      // Type or delete characters
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentTitle.substring(0, prev.length - 1)
            : currentTitle.substring(0, prev.length + 1)
        )
      }, typingSpeed)
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  const activeDescription = roleItems[roleIndex].description

  return (
    <section id="home" className="hero-fullscreen-section">
      {/* Giant Background Typography: Stroke LEON + Solid NELSON */}
      <div className="hero-giant-typography" aria-hidden="true">
        <span className="hero-name-stroke">LEON</span>
        <span className="hero-name-solid">NELSON</span>
      </div>

      {/* Center Foreground Cutout Portrait */}
      <div className="hero-portrait-container">
        <img
          src="/picha.png"
          alt="Leon Nelson - Full-Stack Software Engineer"
          className="hero-cutout-image"
        />
      </div>

      {/* Bottom Left Content Block */}
      <div className="hero-bottom-left" data-aos="fade-up" data-aos-delay="200">
        <div className="hero-role-heading">
          <span className="hero-typewriter-text">{displayText}</span>
          <span className="hero-typewriter-cursor"></span>
        </div>

        <p className="hero-bio-description">
          {activeDescription}
        </p>

        <AnchorLink href="#contact" offset={80} className="hero-collab-btn">
          <span>Let's collaborate</span>
          <FiArrowUpRight className="hero-collab-arrow" />
        </AnchorLink>
      </div>

      {/* Bottom Right Social Links Block */}
      <div className="hero-bottom-right" data-aos="fade-up" data-aos-delay="300">
        <a
          href="https://github.com/leonokumu254"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social-pill"
        >
          <FaGithub className="social-pill-icon" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social-pill"
        >
          <FaInstagram className="social-pill-icon" />
          <span>Instagram</span>
        </a>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social-pill"
        >
          <FaLinkedinIn className="social-pill-icon" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social-pill"
        >
          <FaTiktok className="social-pill-icon" />
          <span>TikTok</span>
        </a>
      </div>
    </section>
  )
}

export default Hero

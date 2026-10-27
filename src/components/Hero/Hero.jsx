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
  const [activeIndex, setActiveIndex] = useState(0)

  // Slot machine vertical wheel roll timer
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % roleItems.length)
    }, 3200)

    return () => clearInterval(interval)
  }, [])

  const translateYPercent = activeIndex * (100 / roleItems.length)

  return (
    <section id="home" className="hero-fullscreen-section">
      {/* 1. Name appears FIRST coming DOWNWARDS: LEON on left, NELSON + SHIREKU (stroke, smaller) on right */}
      <div
        className="hero-giant-typography"
        aria-hidden="true"
        data-aos="fade-down"
        data-aos-duration="1400"
        data-aos-delay="300"
      >
        <span className="hero-name-stroke">LEON</span>
        <div className="hero-name-right-group">
          <span className="hero-name-solid">NELSON</span>
          <span className="hero-name-shireku-stroke">SHIREKU</span>
        </div>
      </div>

      {/* 4. Picture comes the LAST UPWARDS, centered in viewport */}
      <div
        className="hero-portrait-wrapper"
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-delay="1350"
      >
        <div className="hero-portrait-container">
          <img
            src="/picha.png"
            alt="Leon Nelson Shireku"
            className="hero-cutout-image"
          />
        </div>
      </div>

      {/* 2. Roles follow coming from SIDEWAYS (left) */}
      <div
        className="hero-bottom-left"
        data-aos="fade-right"
        data-aos-duration="1400"
        data-aos-delay="700"
      >
        {/* Slot Machine / Vertical Wheel Reel */}
        <div className="slot-machine-container">
          <div className="slot-wheel-viewport">
            <div
              className="slot-wheel-reel"
              style={{ transform: `translateY(-${translateYPercent}%)` }}
            >
              {roleItems.map((item, idx) => (
                <div key={idx} className="slot-wheel-item">
                  <h2 className="slot-role-title">{item.title}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* Description Reel synced with active role */}
          <div className="slot-desc-viewport">
            <div
              className="slot-desc-reel"
              style={{ transform: `translateY(-${translateYPercent}%)` }}
            >
              {roleItems.map((item, idx) => (
                <div key={idx} className="slot-desc-item">
                  <p className="hero-bio-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA with midnight color accent */}
        <AnchorLink href="#contact" offset={80} className="hero-collab-btn">
          <span>Let's collaborate</span>
          <FiArrowUpRight className="hero-collab-arrow" />
        </AnchorLink>
      </div>

      {/* 3. Social platforms come from the RIGHT */}
      <div
        className="hero-bottom-right"
        data-aos="fade-left"
        data-aos-duration="1400"
        data-aos-delay="1050"
      >
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

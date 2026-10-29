import React, { useState, useEffect } from 'react'
import './navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      const sections = ['home', 'about', 'services', 'work', 'contact']
      const scrollPos = window.scrollY + 250

      sections.forEach((section) => {
        const el = document.getElementById(section)
        if (el) {
          const offsetTop = el.offsetTop
          const offsetHeight = el.offsetHeight
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`modern-nav-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="modern-nav-container">

        {/* Center: Nav links in matching page order */}
        <ul className="nav-links-desktop">
          <li>
            <AnchorLink
              className={`nav-link-item ${activeSection === 'about' ? 'active' : ''}`}
              href="#about"
              offset={80}
            >
              <span>About</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className={`nav-link-item ${activeSection === 'services' ? 'active' : ''}`}
              href="#services"
              offset={80}
            >
              <span>Services</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className={`nav-link-item ${activeSection === 'work' ? 'active' : ''}`}
              href="#work"
              offset={80}
            >
              <span>Projects</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className={`nav-link-item ${activeSection === 'contact' ? 'active' : ''}`}
              href="#contact"
              offset={80}
            >
              <span>Contact</span>
            </AnchorLink>
          </li>
        </ul>

        {/* Right: Resume Link & Let's Talk CTA button */}
        <div className="nav-cta-wrapper">
          <a
            href="https://docs.google.com/document/d/1ysB4CDrRh2jZUjOp3PFblqdg8njHe-kTuuGXMdi2ZNQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn"
            aria-label="View Leon Nelson's Resume"
          >
            <span>Resume</span>
            <FiArrowUpRight className="nav-resume-arrow" />
          </a>

          <AnchorLink
            className="nav-cta-btn"
            href="#contact"
            offset={80}
            aria-label="Let's collaborate — contact section"
          >
            <span>Let's Talk</span>
            <FiArrowUpRight className="nav-cta-arrow" />
          </AnchorLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="nav-mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-drawer"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div id="mobile-nav-drawer" className={`nav-mobile-drawer ${isMenuOpen ? 'open' : ''}`}>

        <ul className="nav-links-mobile">
          <li>
            <AnchorLink
              className="nav-link-item-mobile"
              href="#about"
              offset={60}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>About</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="nav-link-item-mobile"
              href="#services"
              offset={60}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Services</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="nav-link-item-mobile"
              href="#work"
              offset={60}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Projects</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="nav-link-item-mobile"
              href="#contact"
              offset={60}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Contact</span>
            </AnchorLink>
          </li>
        </ul>

        <div className="mobile-drawer-footer">
          <a
            href="https://docs.google.com/document/d/1ysB4CDrRh2jZUjOp3PFblqdg8njHe-kTuuGXMdi2ZNQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn mobile-resume-btn"
            aria-label="View Leon Nelson's Resume"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Resume / CV</span>
            <FiArrowUpRight className="nav-resume-arrow" />
          </a>
          <AnchorLink
            className="nav-cta-btn mobile-cta-btn"
            href="#contact"
            offset={60}
            aria-label="Let's collaborate — contact section"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Let's Talk</span>
            <FiArrowUpRight className="nav-cta-arrow" />
          </AnchorLink>
        </div>
      </div>
    </header>
  )
}

export default Navbar
import React from 'react'
import './footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa'
import { FaTiktok, FaXTwitter } from 'react-icons/fa6'
import { FiArrowUpRight } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      {/* 3-Column Structured Layout */}
      <div className="footer-columns">
        {/* Left Column: Portrait Avatar Badge & Tagline */}
        <div className="footer-col footer-col-brand">
          <AnchorLink href="#home" className="footer-portrait-link" aria-label="Back to top">
            <div className="footer-portrait-wrapper">
              <img
                src="/picha.webp"
                alt="Leon Nelson"
                width="76"
                height="76"
                loading="lazy"
                decoding="async"
                className="footer-portrait-img"
              />
            </div>
            <div className="footer-brand-meta">
              <span className="footer-brand-name">LEON NELSON</span>
              <span className="footer-brand-role">Software Engineer & Strategist</span>
            </div>
          </AnchorLink>
          <p className="footer-tagline">
            I make software solutions to real world problems
          </p>
        </div>

        {/* Middle Column: Quick Navigation Anchor Links */}
        <div className="footer-col footer-col-nav">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-nav-list">
            <li>
              <AnchorLink href="#about" offset={80} className="footer-nav-link">
                <span>About</span>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#services" offset={80} className="footer-nav-link">
                <span>Services</span>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#work" offset={80} className="footer-nav-link">
                <span>Projects</span>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact" offset={80} className="footer-nav-link">
                <span>Contact</span>
              </AnchorLink>
            </li>
          </ul>
        </div>

        {/* Right Column: Social Channels */}
        <div className="footer-col footer-col-socials">
          <h4 className="footer-col-title">Connect</h4>
          <div className="footer-social-list">
            <a
              href="https://github.com/leonshireku"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub profile"
            >
              <FaGithub className="footer-social-icon" />
              <span>GitHub</span>
              <FiArrowUpRight className="footer-link-arrow" />
            </a>

            <a
              href="https://x.com/Leon_Nelson25"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="X (formerly Twitter) profile @Leon_Nelson25"
            >
              <FaXTwitter className="footer-social-icon" />
              <span>@Leon_Nelson25</span>
              <FiArrowUpRight className="footer-link-arrow" />
            </a>

            <a
              href="https://www.instagram.com/leon.nelson.121?igsh=MWFhcTJsazNpZGFkeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram profile"
            >
              <FaInstagram className="footer-social-icon" />
              <span>Instagram</span>
              <FiArrowUpRight className="footer-link-arrow" />
            </a>

            <a
              href="https://www.tiktok.com/@nelson_leon6?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="TikTok profile"
            >
              <FaTiktok className="footer-social-icon" />
              <span>TikTok</span>
              <FiArrowUpRight className="footer-link-arrow" />
            </a>

            <a
              href="https://www.facebook.com/share/1Gt78JbMaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Facebook profile"
            >
              <FaFacebook className="footer-social-icon" />
              <span>Facebook</span>
              <FiArrowUpRight className="footer-link-arrow" />
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Bottom Sub-Footer Bar */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Leon Nelson. All rights reserved.
        </p>
        <AnchorLink href="#home" className="footer-back-to-top">
          <span>Back to Top</span>
          <FiArrowUpRight />
        </AnchorLink>
      </div>
    </footer>
  )
}

export default Footer

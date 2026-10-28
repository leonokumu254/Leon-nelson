import React, { useState, useEffect } from 'react'
import './hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaInstagram, FaTiktok, FaGithub } from 'react-icons/fa6'

const roleItems = [
  {
    title: 'Full-Stack Software Engineer',
    description: 'Building robust backend systems and responsive web applications.'
  },
  {
    title: 'DevOps & Cloud Engineer',
    description: 'Automating CI/CD pipelines, container orchestration, and 24/7 system  uptime.'
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

const GLYPHS = '01#X_@$8&*'

const StaggeredChar = ({ char, index, isHovered }) => {
  const [displayChar, setDisplayChar] = useState(char)

  useEffect(() => {
    // Slower, cinematic Staggered Scramble & Reveal on initial mount
    const startDelay = 160 + index * 85
    const scrambleDuration = 280
    let frameId
    let startTime = null

    const timeout = setTimeout(() => {
      const step = (now) => {
        if (!startTime) startTime = now
        const elapsed = now - startTime

        if (elapsed < scrambleDuration) {
          const randomGlyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          setDisplayChar(randomGlyph)
          frameId = requestAnimationFrame(step)
        } else {
          setDisplayChar(char)
        }
      }
      frameId = requestAnimationFrame(step)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [char, index])

  // Re-scramble on interactive hover with smoother duration
  useEffect(() => {
    if (!isHovered) return
    const scrambleDuration = 260
    let frameId
    let startTime = null

    const step = (now) => {
      if (!startTime) startTime = now
      const elapsed = now - startTime

      if (elapsed < scrambleDuration) {
        const randomGlyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        setDisplayChar(randomGlyph)
        frameId = requestAnimationFrame(step)
      } else {
        setDisplayChar(char)
      }
    }
    frameId = requestAnimationFrame(step)

    return () => {
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [isHovered, char])

  return (
    <span
      className="staggered-char"
      style={{ '--char-index': index }}
      aria-hidden="true"
    >
      {displayChar}
    </span>
  )
}

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverCount, setHoverCount] = useState(0)
  const [cycleKey, setCycleKey] = useState(0)

  // Slot machine vertical wheel roll timer
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % roleItems.length)
    }, 3200)

    return () => clearInterval(interval)
  }, [])

  // Periodically repeat the Leon Nelson animation sometime after completion
  useEffect(() => {
    // ~2.6s animation duration + ~6.5s delay after completion = repeats every 9.1s
    const repeatTimer = setInterval(() => {
      setCycleKey((prev) => prev + 1)
    }, 9100)

    return () => clearInterval(repeatTimer)
  }, [])

  const translateYPercent = activeIndex * (100 / roleItems.length)

  const renderStaggeredChars = (text, startIndex = 0) => {
    return text.split('').map((char, i) => (
      <StaggeredChar
        key={`${cycleKey}-${startIndex + i}-${char}`}
        char={char}
        index={startIndex + i}
        isHovered={hoverCount > 0}
      />
    ))
  }

  return (
    <section id="home" className="hero-fullscreen-section">
      {/* 1. Name: Character Staggered Fade / Blur (Scramble & Reveal) */}
      <h1
        className="hero-giant-typography"
        aria-label="Leon Nelson Shireku"
        onMouseEnter={() => setHoverCount((prev) => prev + 1)}
      >
        <span className="hero-name-stroke">
          {renderStaggeredChars('LEON', 0)}
        </span>
        <div className="hero-name-right-group">
          <span className="hero-name-solid">
            {renderStaggeredChars('NELSON', 4)}
          </span>
          <span className="hero-name-shireku-stroke">
            {renderStaggeredChars('SHIREKU', 10)}
          </span>
        </div>
      </h1>

      {/* 4. Picture comes the LAST UPWARDS, centered in viewport */}
      <div
        className="hero-portrait-wrapper"
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-delay="1350"
      >
        <div className="hero-portrait-container">
          <img
            src="/picha.webp"
            alt="Leon Nelson Shireku"
            width="671"
            height="817"
            fetchPriority="high"
            decoding="async"
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
        <AnchorLink href="#contact" offset={80} className="hero-collab-btn" aria-label="Let's collaborate — contact section">
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
          href="https://github.com/leonshireku"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social-pill"
          aria-label="GitHub profile"
        >
          <FaGithub className="social-pill-icon" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.instagram.com/leon.nelson.121"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social-pill"
          aria-label="Instagram profile"
        >
          <FaInstagram className="social-pill-icon" />
          <span>Instagram</span>
        </a>

        <a
          href="https://www.tiktok.com/@nelson_leon6?is_from_webapp=1&sender_device=pc"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social-pill"
          aria-label="TikTok profile"
        >
          <FaTiktok className="social-pill-icon" />
          <span>TikTok</span>
        </a>
      </div>
    </section>
  )
}

export default Hero

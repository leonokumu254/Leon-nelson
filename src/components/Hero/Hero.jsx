import React, { useState, useEffect, useRef } from 'react'
import './hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaInstagram, FaTiktok, FaGithub, FaXTwitter } from 'react-icons/fa6'

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
    title: 'Digital Marketer, SEO & AEO Specialist',
    description: 'Driving organic search traffic, AI bot recommendations (ChatGPT, Gemini, Claude), and high-conversion funnels.'
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
  const [cursorOffset, setCursorOffset] = useState({ x: 0, y: 0, rotX: 0, rotY: 0 })
  const [isPhotoHovered, setIsPhotoHovered] = useState(false)
  const [isPhotoActive, setIsPhotoActive] = useState(false)
  const portraitRef = useRef(null)

  // Fluid 3D direction calculation across mouse & mobile touches
  const update3DTarget = (clientX, clientY, containerRect) => {
    let normX = 0
    let normY = 0

    if (portraitRef.current) {
      const pRect = portraitRef.current.getBoundingClientRect()
      const centerX = pRect.left + pRect.width / 2
      const centerY = pRect.top + pRect.height / 2
      // Span boundaries relative to viewport for intuitive touch/mouse distance
      const spanX = Math.max(window.innerWidth * 0.42, 130)
      const spanY = Math.max(window.innerHeight * 0.35, 130)
      normX = Math.max(-1, Math.min(1, (clientX - centerX) / spanX))
      normY = Math.max(-1, Math.min(1, (clientY - centerY) / spanY))
    } else if (containerRect) {
      normX = ((clientX - containerRect.left) / containerRect.width - 0.5) * 2
      normY = ((clientY - containerRect.top) / containerRect.height - 0.5) * 2
    }

    setCursorOffset({
      x: Number((normX * 22).toFixed(2)),
      y: Number((normY * 15).toFixed(2)),
      rotY: Number((normX * 18).toFixed(2)), // directs 3D portrait facing the touch/pointer
      rotX: Number((-normY * 14).toFixed(2)) // leans 3D portrait towards touch/pointer
    })
  }

  const handleHeroMouseMove = (e) => {
    update3DTarget(e.clientX, e.clientY, e.currentTarget.getBoundingClientRect())
  }

  const handleHeroMouseLeave = () => {
    setCursorOffset({ x: 0, y: 0, rotX: 0, rotY: 0 })
  }

  // Mobile / Small Screen Touch Steering
  const handleHeroTouchMove = (e) => {
    if (!e.touches || e.touches.length === 0) return
    const touch = e.touches[0]
    update3DTarget(touch.clientX, touch.clientY, e.currentTarget.getBoundingClientRect())
  }

  const handleHeroTouchStart = (e) => {
    setIsPhotoActive(true) // Immediately reveal color on touch
    handleHeroTouchMove(e)
  }

  const handleHeroTouchEnd = () => {
    // Smoothly springs back to zero-gravity neutral float
    setCursorOffset({ x: 0, y: 0, rotX: 0, rotY: 0 })
  }

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
    <section
      id="home"
      className="hero-fullscreen-section"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      onTouchStart={handleHeroTouchStart}
      onTouchMove={handleHeroTouchMove}
      onTouchEnd={handleHeroTouchEnd}
      onTouchCancel={handleHeroTouchEnd}
    >
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

      {/* 4. Picture comes the LAST UPWARDS, centered in viewport with 3D cursor & touch following and uninterrupted floating */}
      <div
        ref={portraitRef}
        className="hero-portrait-wrapper"
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-delay="1350"
      >
        {/* Layer 1: Follows cursor / touch movement and leans dynamically in 3D */}
        <div
          className="hero-portrait-cursor-tracker"
          style={{
            transform: `perspective(1000px) translate3d(${cursorOffset.x}px, ${cursorOffset.y}px, 0px) rotateX(${cursorOffset.rotX}deg) rotateY(${cursorOffset.rotY}deg)`
          }}
        >
          {/* Layer 2: Continuous 3D floating animation (never paused on hover or touch) */}
          <div
            className={`hero-portrait-float-layer ${isPhotoHovered ? 'is-hovered' : ''} ${isPhotoActive ? 'is-active' : ''}`}
            onMouseEnter={() => setIsPhotoHovered(true)}
            onMouseLeave={() => setIsPhotoHovered(false)}
            onClick={() => setIsPhotoActive((prev) => !prev)}
            onTouchStart={() => setIsPhotoActive(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setIsPhotoActive((prev) => !prev)
              }
            }}
            aria-label="Leon Nelson portrait — hover or tap to reveal color in 3D"
          >
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
          href="https://x.com/Leon_Nelson25"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social-pill hero-social-pill-icon-only"
          aria-label="X profile @Leon_Nelson25"
        >
          <FaXTwitter className="social-pill-icon" />
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

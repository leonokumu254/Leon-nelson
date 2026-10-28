import React, { useState, useEffect } from 'react'
import './work.css'
import Projects_Data from '../../../assets/projects_data.js'
import { FiArrowUpRight, FiX, FiExternalLink } from 'react-icons/fi'

const Work = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCaseStudy(null)
      }
    }
    if (selectedCaseStudy) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedCaseStudy])

  const [project1, project2] = Projects_Data

  // Graceful Pause on Out-of-View (Save Resources with Intersection Observer)
  useEffect(() => {
    const videos = document.querySelectorAll('.project-video')
    if (!videos.length) return

    if (!('IntersectionObserver' in window)) {
      videos.forEach((video) => {
        video.muted = true
        video.play().catch(() => {})
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          if (entry.isIntersecting) {
            // Pre-buffers and plays 200px before entering viewport
            video.muted = true
            const playPromise = video.play()
            if (playPromise !== undefined) {
              playPromise.catch(() => {})
            }
          } else {
            // Pauses when scrolled out of view to save CPU, bandwidth, and battery
            if (!video.paused) {
              video.pause()
            }
          }
        })
      },
      {
        rootMargin: '200px 0px 200px 0px',
        threshold: 0.05,
      }
    )

    videos.forEach((video) => {
      observer.observe(video)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Pause videos when modal is open, resume visible ones when modal closes
  useEffect(() => {
    const videos = document.querySelectorAll('.project-video')
    if (selectedCaseStudy) {
      videos.forEach((video) => {
        if (!video.paused) video.pause()
      })
    } else {
      videos.forEach((video) => {
        const rect = video.getBoundingClientRect()
        const inView = rect.top < window.innerHeight && rect.bottom > 0
        if (inView) {
          video.play().catch(() => {})
        }
      })
    }
  }, [selectedCaseStudy])

  return (
    <section id="work" className="work-section">
      {/* Editorial Header matching Brand Theme */}
      <div className="work-header" data-aos="fade-up">
        <span className="work-watermark" aria-hidden="true">
          PORTFOLIO
        </span>
        <h2 className="work-main-title">/SELECTED WORK</h2>
        <a href="#contact" className="work-all-btn">
          <span>Get in Touch</span>
          <FiArrowUpRight className="work-all-arrow" />
        </a>
      </div>

      {/* Magazine-Style Editorial Flow with Asymmetric Spacing */}
      <div className="work-editorial-flow" data-aos="fade-up" data-aos-delay="150">
        {/* Project 1: Wide, Cinematic Landscape View */}
        {project1 && (
          <article
            className="project-editorial-item project-card project-layout-landscape"
            onClick={() => setSelectedCaseStudy(project1)}
            tabIndex={0}
            role="button"
            aria-label={`View project details for ${project1.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setSelectedCaseStudy(project1)
              }
            }}
          >
            {/* Top Editorial Index Bar */}
            <div className="editorial-meta-bar">
              <div className="editorial-num-wrapper">
                <span className="editorial-num">01</span>
                <span className="editorial-divider">/</span>
                <span className="editorial-category">FEATURED CLIENT PLATFORM</span>
              </div>
            </div>

            {/* Wide Cinematic Landscape Image Frame */}
            <div className={`editorial-landscape-frame device-mockup ${project1.video ? 'has-video-preview' : ''}`}>
              <img
                src={project1.image}
                alt={project1.title}
                className="editorial-image mockup-frame"
                loading="lazy"
              />

              {project1.video && (
                <video
                  className="project-video"
                  src={project1.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  loading="lazy"
                  poster={project1.image}
                  aria-hidden="true"
                />
              )}

              <div className="editorial-overlay"></div>

              {/* Clear Hover CTA */}
              <div className="editorial-hover-badge" aria-hidden="true">
                <span>View Project</span>
                <FiArrowUpRight />
              </div>
            </div>

            {/* Editorial Caption / Split Info with Clear CTA */}
            <div className="editorial-landscape-info">
              <div className="editorial-title-col">
                <h3 className="editorial-headline">{project1.title}</h3>
                <p className="editorial-deck">{project1.subtitle}</p>
              </div>
              <div className="editorial-cta-col">
                <span className="editorial-link-btn">
                  <span>View Project</span>
                  <FiArrowUpRight />
                </span>
              </div>
            </div>
          </article>
        )}

        {/* Project 2: Asymmetric Dropdown with Bold Typography-First Introduction */}
        {project2 && (
          <article
            className="project-editorial-item project-card project-layout-asymmetric"
            onClick={() => setSelectedCaseStudy(project2)}
            tabIndex={0}
            role="button"
            aria-label={`View project details for ${project2.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setSelectedCaseStudy(project2)
              }
            }}
          >
            {/* Asymmetric Typography-First Lead Column */}
            <div className="editorial-asymmetric-content">
              <div className="editorial-num-wrapper">
                <span className="editorial-num">02</span>
                <span className="editorial-divider">/</span>
                <span className="editorial-category">HOSPITALITY AUTOMATION</span>
              </div>

              <h3 className="editorial-headline-large">{project2.title}</h3>
              <p className="editorial-deck-lead">{project2.subtitle}</p>

              <div className="editorial-action-wrapper">
                <span className="editorial-link-btn editorial-link-btn-prominent">
                  <span>View Project</span>
                  <FiArrowUpRight />
                </span>
              </div>
            </div>

            {/* Asymmetric Visual Frame with Organic Dropdown */}
            <div className="editorial-asymmetric-visual">
              <div className={`editorial-visual-frame device-mockup ${project2.video ? 'has-video-preview' : ''}`}>
                <img
                  src={project2.image}
                  alt={project2.title}
                  className="editorial-image mockup-frame"
                  loading="lazy"
                />

                {project2.video && (
                  <video
                    className="project-video"
                    src={project2.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    loading="lazy"
                    poster={project2.image}
                    aria-hidden="true"
                  />
                )}

                <div className="editorial-overlay"></div>

                {/* Clear Hover CTA */}
                <div className="editorial-hover-badge" aria-hidden="true">
                  <span>View Project</span>
                  <FiArrowUpRight />
                </div>
              </div>
            </div>
          </article>
        )}
      </div>

      {/* Architectural Digest & Vogue Living Multi-Column Case Study Spread */}
      {selectedCaseStudy && (
        <div
          className="case-study-modal-backdrop"
          onClick={() => setSelectedCaseStudy(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <div
            className="spread-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Architectural Masthead */}
            <div className="spread-modal-masthead">
              <div className="masthead-left">
                <span className="masthead-tag">/ ARCHITECTURAL DIGEST DOSSIER</span>
                <span className="masthead-divider">•</span>
                <span className="masthead-case-ref">CASE STUDY SPREAD</span>
              </div>
              <button
                type="button"
                className="spread-close-btn"
                onClick={() => setSelectedCaseStudy(null)}
                aria-label="Close Case Study"
              >
                <span className="spread-close-label">Close Spread</span>
                <FiX className="spread-close-icon" />
              </button>
            </div>

            {/* Mobile Floating Thumb-Friendly Close Button */}
            <button
              type="button"
              className="spread-mobile-floating-close-btn"
              onClick={() => setSelectedCaseStudy(null)}
              aria-label="Close Case Study Spread"
            >
              <FiX className="floating-close-icon" />
              <span>Close Spread</span>
            </button>

            {/* Multi-Column Scrollable Body */}
            <div className="spread-modal-scroll-pane">
              <div className="spread-columns-grid">

                {/* Column 1: Sticky Sidebar */}
                <aside className="spread-sticky-sidebar">
                  <div className="sidebar-sticky-inner">
                    <div className="sidebar-header-block">
                      <span className="sidebar-issue-label">PROJECT SPECIFICATIONS</span>
                      <h4 className="sidebar-project-title">
                        {selectedCaseStudy.title.split('—')[0].trim()}
                      </h4>
                    </div>

                    <div className="sidebar-meta-list">
                      {selectedCaseStudy.client && (
                        <div className="sidebar-meta-row">
                          <span className="sidebar-meta-label">Client</span>
                          <span className="sidebar-meta-value">{selectedCaseStudy.client}</span>
                        </div>
                      )}

                      {selectedCaseStudy.timeline && (
                        <div className="sidebar-meta-row">
                          <span className="sidebar-meta-label">Timeline</span>
                          <span className="sidebar-meta-value">{selectedCaseStudy.timeline}</span>
                        </div>
                      )}

                      {selectedCaseStudy.role && (
                        <div className="sidebar-meta-row">
                          <span className="sidebar-meta-label">Role</span>
                          <span className="sidebar-meta-value">{selectedCaseStudy.role}</span>
                        </div>
                      )}

                      {selectedCaseStudy.tags && (
                        <div className="sidebar-meta-row">
                          <span className="sidebar-meta-label">Discipline</span>
                          <span className="sidebar-meta-value">{selectedCaseStudy.tags[0]}</span>
                        </div>
                      )}
                    </div>

                    {/* Live Visit Site Button */}
                    <div className="sidebar-cta-block">
                      {selectedCaseStudy.liveUrl && (
                        <a
                          href={selectedCaseStudy.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sidebar-visit-btn"
                        >
                          <span>Visit Live Project</span>
                          <FiExternalLink />
                        </a>
                      )}
                    </div>

                    {/* Tech Stack List in Sticky Sidebar */}
                    {selectedCaseStudy.techStack && (
                      <div className="sidebar-tech-block">
                        <span className="sidebar-meta-label">Tech Stack & Tools</span>
                        <div className="sidebar-tech-list">
                          {selectedCaseStudy.techStack.map((tech, idx) => (
                            <span key={idx} className="sidebar-tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </aside>

                {/* Columns 2 & 3: The Narrative Body */}
                <main className="spread-narrative-body">
                  {/* Title & Deck */}
                  <header className="narrative-header">
                    <div className="narrative-rubric">
                      <span>/ 01. EDITORIAL DOSSIER</span>
                    </div>
                    <h2 id="case-study-title" className="narrative-main-title">
                      {selectedCaseStudy.title}
                    </h2>
                    <p className="narrative-deck-lead">
                      {selectedCaseStudy.subtitle}
                    </p>
                  </header>

                  {/* Overview with Drop Cap */}
                  {selectedCaseStudy.overview && (
                    <section className="narrative-section">
                      <h4 className="narrative-section-title">
                        <span className="subheading-slash">/</span> OVERVIEW & ARCHITECTURE
                      </h4>
                      <p className="narrative-paragraph editorial-dropcap">
                        {selectedCaseStudy.overview}
                      </p>
                    </section>
                  )}

                  {/* Dramatic Pull Quote */}
                  {selectedCaseStudy.pullQuote && (
                    <blockquote className="editorial-pull-quote">
                      <span className="pull-quote-mark" aria-hidden="true">“</span>
                      <p className="pull-quote-text">{selectedCaseStudy.pullQuote}</p>
                    </blockquote>
                  )}

                  {/* Inline Visual Breakout (Spanning Edge-to-Edge Between Paragraphs) */}
                  <figure className="spread-inline-visual-breakout">
                    <div className="breakout-img-wrapper">
                      <img
                        src={selectedCaseStudy.image}
                        alt={selectedCaseStudy.title}
                        className="breakout-img"
                      />
                      <div className="breakout-scrim"></div>
                    </div>
                    <figcaption className="breakout-caption">
                      <span className="breakout-caption-title">{selectedCaseStudy.visualCaption}</span>
                      <span className="breakout-badge">FEATURE SPREAD</span>
                    </figcaption>
                  </figure>

                  {/* The Challenge: Problem Faced & How I Solved It */}
                  {selectedCaseStudy.challenge && (
                    <section className="narrative-section">
                      <h4 className="narrative-section-title">
                        <span className="subheading-slash">/</span> THE CHALLENGE & CLIENT HURDLES
                      </h4>
                      <div className="modal-callout-box">
                        {typeof selectedCaseStudy.challenge === "object" ? (
                          <div className="modal-challenge-split">
                            <div className="modal-challenge-item">
                              <span className="modal-challenge-tag">The Problem Faced</span>
                              <p className="modal-text">{selectedCaseStudy.challenge.problem}</p>
                            </div>
                            <div className="modal-challenge-divider"></div>
                            <div className="modal-challenge-item">
                              <span className="modal-challenge-tag">How I Solved It</span>
                              <p className="modal-text">{selectedCaseStudy.challenge.solution}</p>
                            </div>
                          </div>
                        ) : (
                          <p className="modal-text">{selectedCaseStudy.challenge}</p>
                        )}
                      </div>
                    </section>
                  )}

                  {/* Solution & Deliverables */}
                  {selectedCaseStudy.solution && (
                    <section className="narrative-section">
                      <h4 className="narrative-section-title">
                        <span className="subheading-slash">/</span> DELIVERABLES & TECHNICAL IMPLEMENTATION
                      </h4>
                      <ul className="modal-solution-list">
                        {selectedCaseStudy.solution.map((step, idx) => (
                          <li key={idx} className="modal-solution-item">
                            <span className="solution-step-num">0{idx + 1}</span>
                            <span className="solution-step-text">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Bottom Footer CTA Bar */}
                  <div className="spread-footer-cta">
                    <div className="spread-footer-text">
                      <h5>Ready to engineer your next digital platform?</h5>
                      <p>Available for bespoke architecture, end-to-end full-stack development, and SEO growth.</p>
                    </div>
                    <div className="spread-footer-actions">
                      <a
                        href="#contact"
                        className="spread-action-btn"
                        onClick={() => setSelectedCaseStudy(null)}
                      >
                        <span>Discuss Your Project</span>
                        <FiArrowUpRight />
                      </a>
                      <button
                        type="button"
                        className="spread-footer-close-btn"
                        onClick={() => setSelectedCaseStudy(null)}
                      >
                        <span>Close Spread</span>
                        <FiX />
                      </button>
                    </div>
                  </div>
                </main>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Work

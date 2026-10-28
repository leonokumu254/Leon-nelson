import React, { useState, useEffect } from 'react'
import './work.css'
import Projects_Data from '../../../assets/projects_data.js'
import { FiArrowUpRight, FiX } from 'react-icons/fi'

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

      {/* Projects Grid */}
      <div className="work-grid" data-aos="fade-up" data-aos-delay="200">
        {Projects_Data.map((project, index) => (
          <article
            key={project.id}
            className="project-card"
            onClick={() => setSelectedCaseStudy(project)}
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector('.project-video')
              if (video) {
                video.currentTime = 0
                video.play().catch(() => {})
              }
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector('.project-video')
              if (video) {
                video.pause()
                video.currentTime = 0
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Open case study for ${project.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setSelectedCaseStudy(project)
              }
            }}
          >
            {/* Card Image Area with Badge & Interactive Hover Action */}
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                loading="lazy"
              />

              {project.video && (
                <video
                  className="project-video"
                  src={project.video}
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={project.image}
                  aria-hidden="true"
                />
              )}

              <div className="project-image-overlay"></div>

              {/* Hover Floating Action Button */}
              <div className="project-hover-action" aria-hidden="true">
                <FiArrowUpRight className="project-action-icon" />
              </div>
            </div>

            {/* Card Meta Content */}
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>

              {/* Tags & Case Study CTA */}
              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag-pill">{tag}</span>
                  ))}
                </div>

                <span className="case-study-cta-link">
                  Case Study <FiArrowUpRight />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Case Study Modal */}
      {selectedCaseStudy && (
        <div
          className="case-study-modal-backdrop"
          onClick={() => setSelectedCaseStudy(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <div
            className="case-study-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="case-study-modal-header">
              <div className="modal-header-meta">
                <span className="modal-category-text">/ CASE STUDY</span>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedCaseStudy(null)}
                aria-label="Close Case Study"
              >
                <FiX />
              </button>
            </div>

            <div className="case-study-modal-body">
              {/* Modal Hero Banner */}
              <div className="modal-hero-wrapper">
                <img
                  src={selectedCaseStudy.image}
                  alt={selectedCaseStudy.title}
                  className="modal-hero-img"
                />
                <div className="modal-hero-scrim"></div>
                <div className="modal-hero-content">
                  <h3 id="case-study-title" className="modal-hero-title">
                    {selectedCaseStudy.title}
                  </h3>
                  <p className="modal-hero-subtitle">
                    {selectedCaseStudy.subtitle}
                  </p>
                </div>
              </div>

              {/* Project Overview */}
              {selectedCaseStudy.overview && (
                <div className="modal-section-block">
                  <h4 className="modal-subheading">
                    <span className="subheading-slash">/</span> 01. OVERVIEW
                  </h4>
                  <p className="modal-text">{selectedCaseStudy.overview}</p>
                </div>
              )}

              {/* Client Brief & Challenge */}
              {selectedCaseStudy.challenge && (
                <div className="modal-section-block">
                  <h4 className="modal-subheading">
                    <span className="subheading-slash">/</span> 02. THE CHALLENGE
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
                </div>
              )}

              {/* Engineering & Digital Strategy */}
              {selectedCaseStudy.solution && (
                <div className="modal-section-block">
                  <h4 className="modal-subheading">
                    <span className="subheading-slash">/</span> 03. SOLUTION & DELIVERABLES
                  </h4>
                  <ul className="modal-solution-list">
                    {selectedCaseStudy.solution.map((step, idx) => (
                      <li key={idx} className="modal-solution-item">
                        <span className="solution-step-num">0{idx + 1}</span>
                        <span className="solution-step-text">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack & Tags */}
              {selectedCaseStudy.techStack && (
                <div className="modal-section-block">
                  <h4 className="modal-subheading">
                    <span className="subheading-slash">/</span> 04. TECH STACK & TOOLS
                  </h4>
                  <div className="modal-tech-grid">
                    {selectedCaseStudy.techStack.map((tech, idx) => (
                      <span key={idx} className="modal-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom CTA Bar */}
              <div className="modal-footer-cta">
                <div className="modal-footer-text">
                  <h5>Ready to build something impactful?</h5>
                  <p>Let's collaborate on scalable engineering and strategic digital growth.</p>
                </div>
                <a
                  href="#contact"
                  className="modal-action-btn"
                  onClick={() => setSelectedCaseStudy(null)}
                >
                  <span>Discuss Your Project</span>
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Work

import React, { useState, useEffect } from 'react'
import './work.css'
import Projects_Data from '../../../assets/projects_data.js'
import { FiArrowUpRight, FiX, FiCheckCircle, FiZap, FiLayers } from 'react-icons/fi'

const categories = ['All', 'Real Project', 'Exploration']

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)

  // Filter projects based on active tab
  const filteredProjects = activeFilter === 'All'
    ? Projects_Data
    : Projects_Data.filter(p => p.category === activeFilter)

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
      </div>

      {/* Sub-header navigation row with filter tabs & CTA */}
      <div className="work-controls-row" data-aos="fade-up" data-aos-delay="150">
        <div className="work-filter-tabs">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`work-filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <a href="#contact" className="work-all-btn">
          <span>Get in Touch</span>
          <FiArrowUpRight className="work-all-arrow" />
        </a>
      </div>

      {/* Projects Grid */}
      <div className="work-grid" data-aos="fade-up" data-aos-delay="250">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            className="project-card"
            onClick={() => setSelectedCaseStudy(project)}
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
              <div className="project-image-overlay"></div>

              {/* Top Category Badge */}
              <div className="project-badge-pill">
                {project.badge}
              </div>

              {/* Hover Floating Action Button */}
              <div className="project-hover-action" aria-hidden="true">
                <FiArrowUpRight className="project-action-icon" />
              </div>

              {/* Quick Case Study Metric Banner */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="project-highlight-badge">
                  <FiZap className="highlight-zap" />
                  <span>{project.metrics[0].value} {project.metrics[0].label}</span>
                </div>
              )}
            </div>

            {/* Card Meta Content */}
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>

              {/* Metric Highlights Row */}
              <div className="project-metrics-row">
                {project.metrics?.map((m, mIdx) => (
                  <div key={mIdx} className="metric-chip">
                    <span className="metric-chip-value">{m.value}</span>
                    <span className="metric-chip-label">{m.label}</span>
                  </div>
                ))}
              </div>

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
                <span className="modal-badge">{selectedCaseStudy.badge}</span>
                <span className="modal-category-text">Case Study Overview</span>
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

              {/* Key Results Grid */}
              <div className="modal-results-banner">
                <h4 className="modal-subheading">
                  <FiZap className="icon-blue" /> Key Measured Impact
                </h4>
                <div className="modal-results-grid">
                  {selectedCaseStudy.metrics?.map((m, idx) => (
                    <div key={idx} className="result-metric-box">
                      <span className="result-metric-num">{m.value}</span>
                      <span className="result-metric-name">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Brief & Challenge */}
              <div className="modal-section-block">
                <h4 className="modal-subheading">
                  <FiLayers className="icon-blue" /> The Challenge
                </h4>
                <p className="modal-text">{selectedCaseStudy.challenge}</p>
              </div>

              {/* Engineering & Digital Strategy */}
              <div className="modal-section-block">
                <h4 className="modal-subheading">
                  <FiCheckCircle className="icon-blue" /> Solution & Architecture
                </h4>
                <ul className="modal-solution-list">
                  {selectedCaseStudy.solution?.map((step, idx) => (
                    <li key={idx} className="modal-solution-item">
                      <span className="solution-bullet-dot"></span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack & Tags */}
              <div className="modal-section-block">
                <h4 className="modal-subheading">Technologies & Deliverables</h4>
                <div className="modal-tech-grid">
                  {selectedCaseStudy.techStack?.map((tech, idx) => (
                    <span key={idx} className="modal-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Bar */}
              <div className="modal-footer-cta">
                <div className="modal-footer-text">
                  <h5>Ready to build something impactful?</h5>
                  <p>Let's architect scalable engineering and organic growth for your brand.</p>
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

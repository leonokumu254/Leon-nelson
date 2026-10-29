import React, { useState, useEffect, useRef } from 'react'
import './services.css'
import Services_Data from '../../../assets/services_data.js'
import { FiArrowUpRight, FiX } from 'react-icons/fi'
import AOS from 'aos'

const Services = () => {
  // Service 01 starts open by default so users see the full service card at first hand
  const [expandedIndex, setExpandedIndex] = useState(0)
  const [hasCompletedAutoTour, setHasCompletedAutoTour] = useState(false)
  const rowRefs = useRef([])
  const sectionRef = useRef(null)
  const isManualOverrideRef = useRef(false)
  const revealedIndicesRef = useRef(new Set([0]))

  const toggleService = (index) => {
    // Manual click immediately and permanently switches to user-controlled accordion
    isManualOverrideRef.current = true
    setHasCompletedAutoTour(true)
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  // Preload all service images on component mount so they appear instantaneously
  useEffect(() => {
    Services_Data.forEach((service) => {
      if (service.s_image) {
        const preloadImg = new Image()
        preloadImg.src = service.s_image
      }
    })
  }, [])

  // Smooth scroll-driven auto reveal: Each subsequent service smoothly reveals
  // as soon as it enters the comfortable viewport reading area, well before the user scrolls past it.
  useEffect(() => {
    if (hasCompletedAutoTour) return

    let rafId = null

    const handleScroll = () => {
      if (isManualOverrideRef.current || hasCompletedAutoTour) return

      if (rafId) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        if (isManualOverrideRef.current || hasCompletedAutoTour) return

        // Check if user has scrolled past the services section
        if (sectionRef.current) {
          const sectionRect = sectionRef.current.getBoundingClientRect()
          if (sectionRect.bottom < 120) {
            setHasCompletedAutoTour(true)
            return
          }
        }

        // Generous, early trigger zone (70% down from viewport top)
        // Reveals the card as soon as it enters the screen, well before scrolling past it
        const triggerY = window.innerHeight * 0.70

        let targetIndex = null
        rowRefs.current.forEach((el, index) => {
          if (!el) return
          const rect = el.getBoundingClientRect()
          if (rect.top <= triggerY && rect.bottom >= 100) {
            targetIndex = index
          }
        })

        if (targetIndex !== null) {
          revealedIndicesRef.current.add(targetIndex)
          setExpandedIndex((prev) => {
            if (prev === targetIndex) return prev
            return targetIndex
          })

          // Once the last service is reached and passed, finalize auto tour
          if (targetIndex === Services_Data.length - 1) {
            setHasCompletedAutoTour(true)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [hasCompletedAutoTour])

  return (
    <section id="services" ref={sectionRef} className="services-section">
      {/* Header with ghost watermark and bold /SERVICE title */}
      <div className="services-header" data-aos="fade-up">
        <span className="services-watermark" aria-hidden="true">
          SERVICE
        </span>
        <h2 className="services-main-title">/SERVICE</h2>
      </div>

      {/* Services List / Accordion */}
      <div className="services-list">
        {Services_Data.map((service, index) => {
          const isExpanded = expandedIndex === index

          return (
            <div
              key={index}
              ref={(el) => (rowRefs.current[index] = el)}
              data-service-index={index}
              className={`service-item-row ${isExpanded ? 'active-card' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              data-aos-duration="650"
              data-aos-offset="60"
            >
              {isExpanded ? (
                /* Active Dark Card State with Floating Mockup */
                <div className="service-card-expanded">
                  <div className="service-card-content">
                    <div className="service-card-header">
                      <span className="service-card-num">{service.s_no}</span>
                      <h3 className="service-card-title">{service.s_name}</h3>
                    </div>

                    <p className="service-card-desc">{service.s_desc}</p>
                  </div>

                  {service.s_image && (
                    <div className="service-card-mockup-wrapper">
                      <img
                        src={service.s_image}
                        alt={`${service.s_name} preview mockup`}
                        width="736"
                        height="534"
                        className="service-card-mockup-img"
                        loading="eager"
                        decoding="sync"
                        fetchPriority="high"
                      />
                    </div>
                  )}

                  <button
                    className="service-card-close-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleService(index)
                    }}
                    aria-label={`Close ${service.s_name}`}
                  >
                    <FiX className="service-close-icon" />
                  </button>
                </div>
              ) : (
                /* Inactive Collapsed Row State */
                <div
                  className="service-row-collapsed"
                  onClick={() => toggleService(index)}
                  role="button"
                  tabIndex={0}
                  aria-expanded="false"
                  aria-label={`Expand details for ${service.s_name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleService(index)
                    }
                  }}
                >
                  <div className="service-row-left">
                    <span className="service-row-num">{service.s_no}</span>
                    <h3 className="service-row-title">{service.s_name}</h3>
                  </div>
                  <div className="service-row-arrow-wrap">
                    <FiArrowUpRight className="service-row-arrow" />
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Offscreen Pre-warmed Image Cache for 0ms Instant Photo Paint */}
      <div
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          overflow: 'hidden',
          opacity: 0,
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      >
        {Services_Data.map((s, idx) => (
          <img
            key={idx}
            src={s.s_image}
            alt=""
            width="736"
            height="534"
            decoding="sync"
            loading="eager"
          />
        ))}
      </div>
    </section>
  )
}

export default Services
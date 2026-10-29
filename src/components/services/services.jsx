import React, { useState, useEffect, useRef } from 'react'
import './services.css'
import Services_Data from '../../../assets/services_data.js'
import { FiArrowUpRight, FiX } from 'react-icons/fi'
import AOS from 'aos'

const Services = () => {
  // Starts collapsed so users experience the clean list first
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [hasCompletedAutoTour, setHasCompletedAutoTour] = useState(false)
  const rowRefs = useRef([])
  const sectionRef = useRef(null)
  const isManualOverrideRef = useRef(false)
  const revealedIndicesRef = useRef(new Set())
  const lastScrollYRef = useRef(0)

  const toggleService = (index) => {
    // Manual click immediately and permanently disables auto-scroll tour
    isManualOverrideRef.current = true
    setHasCompletedAutoTour(true)
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  // Preload all service images on component mount so they appear instantaneously upon click
  useEffect(() => {
    Services_Data.forEach((service) => {
      if (service.s_image) {
        const preloadImg = new Image()
        preloadImg.src = service.s_image
      }
    })
  }, [])

  // Refresh AOS when accordion row is toggled so the image animation triggers
  useEffect(() => {
    AOS.refresh()
  }, [expandedIndex])

  // Scroll-driven auto reveal: Each service auto-expands when scrolled into view,
  // then closes when scrolling to the next service. Runs ONCE, then switches to click-only.
  useEffect(() => {
    if (hasCompletedAutoTour) return

    const handleScroll = () => {
      if (isManualOverrideRef.current || hasCompletedAutoTour) return

      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY >= lastScrollYRef.current - 10
      lastScrollYRef.current = currentScrollY

      // Check if user has scrolled past the services section
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect()
        if (sectionRect.bottom < 160) {
          setHasCompletedAutoTour(true)
          setExpandedIndex(null)
          return
        }
      }

      // Reading sweet-spot zone in the viewport (between 30% and 65% of viewport height)
      const triggerY = window.innerHeight * 0.45

      let targetIndex = null
      rowRefs.current.forEach((el, index) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.top <= triggerY && rect.bottom >= triggerY * 0.4) {
          targetIndex = index
        }
      })

      if (targetIndex !== null && isScrollingDown) {
        if (!revealedIndicesRef.current.has(targetIndex)) {
          revealedIndicesRef.current.add(targetIndex)
          setExpandedIndex(targetIndex)

          // Once the last service is reached, finalize tour after user passes it
          if (targetIndex === Services_Data.length - 1) {
            setTimeout(() => {
              setHasCompletedAutoTour(true)
            }, 2500)
          }
        } else if (expandedIndex !== targetIndex && !revealedIndicesRef.current.has(targetIndex + 1)) {
          setExpandedIndex(targetIndex)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasCompletedAutoTour, expandedIndex])

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
                    <div
                      className="service-card-mockup-wrapper"
                      data-aos="fade-left"
                      data-aos-duration="600"
                      data-aos-delay="100"
                    >
                      <img
                        src={service.s_image}
                        alt={`${service.s_name} preview mockup`}
                        width="736"
                        height="534"
                        className="service-card-mockup-img"
                        loading="eager"
                        decoding="async"
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
    </section>
  )
}

export default Services
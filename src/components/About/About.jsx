import React from 'react'
import './about.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaAngular, FaNodeJs } from 'react-icons/fa6'
import { SiNextdotjs, SiPostgresql, SiDocker } from 'react-icons/si'
import { FiFileText, FiArrowUpRight } from 'react-icons/fi'

const resumeUrl = 'https://docs.google.com/document/d/1ysB4CDrRh2jZUjOp3PFblqdg8njHe-kTuuGXMdi2ZNQ/edit?usp=sharing'

const techStack = [
  { name: 'HTML', icon: <FaHtml5 className="tech-icon html-icon" /> },
  { name: 'CSS', icon: <FaCss3Alt className="tech-icon css-icon" /> },
  { name: 'JavaScript', icon: <FaJs className="tech-icon js-icon" /> },
  { name: 'React', icon: <FaReact className="tech-icon react-icon" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="tech-icon next-icon" /> },
  { name: 'Node.js', icon: <FaNodeJs className="tech-icon node-icon" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="tech-icon postgres-icon" /> },
  { name: 'Docker / DevOps', icon: <SiDocker className="tech-icon docker-icon" /> },
  { name: 'Python', icon: <FaPython className="tech-icon python-icon" /> },
  { name: 'Angular', icon: <FaAngular className="tech-icon angular-icon" /> },
]

const About = () => {
  return (
    <section id="about" className="about-section-wrapper">
      <div className="about">
        {/* Header with watermark and bold slash title matching the project theme */}
        <div className="about-header" data-aos="fade-up">
          <span className="about-watermark" aria-hidden="true">
            ABOUT
          </span>
          <h2 className="about-main-title">/ABOUT ME</h2>
        </div>

        <div className="about-content" data-aos="fade-up" data-aos-delay="200">
          {/* Concise, impactful narrative */}
          <div className="about-para">
            <p>
              I’m a Full-Stack Software Engineer and Digital Strategist specializing in modern web architecture, cloud deployment, and organic growth.
            </p>
            <p>
              Rather than just writing code, I bridge technical capability with tangible business impact—engineering high-performance digital platforms that load fast, rank on search engines, and convert visitors into loyal clients.
            </p>
          </div>

          {/* Direct Resume / CV Access Button */}
          <div className="about-resume-action" data-aos="fade-up" data-aos-delay="280">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="about-resume-btn"
            >
              <FiFileText className="about-resume-icon" />
              <span>View Full Resume / CV</span>
              <FiArrowUpRight className="about-resume-arrow" />
            </a>
          </div>

          {/* Tech Stack Logos */}
          <div className="about-tech-stack" data-aos="fade-up" data-aos-delay="380">
            <h3 className="tech-stack-heading">Tech Stack</h3>
            <div className="tech-grid">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="tech-card"
                  data-aos="zoom-in"
                  data-aos-delay={100 + index * 50}
                >
                  <span className="tech-icon-wrap">{tech.icon}</span>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

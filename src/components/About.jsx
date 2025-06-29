import React from 'react';
import './About.css';
import { FaDownload, FaUser, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';
import resumeFile from '../assets/Awaneesh_Resume.pdf';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">
            <FaUser className="section-icon" />
            About Me
          </h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <p>
                I am a dedicated and enthusiastic <strong>Frontend Web Developer</strong> with a strong passion for
                creating interactive and user-friendly web applications. As a fresher, I have hands-on
                experience with modern technologies like React.js, JavaScript, HTML, and CSS.
              </p>
              <p>
                I am eager to apply my knowledge and continue learning to contribute effectively to exciting
                projects in the tech industry. My goal is to create beautiful, functional, and accessible
                digital experiences that make a difference.
              </p>
            </div>

            <div className="about-features">
              <div className="feature-item">
                <FaCode className="feature-icon" />
                <div className="feature-content">
                  <h3>Web Development</h3>
                  <p>Creating responsive and modern web applications</p>
                </div>
              </div>

              <div className="feature-item">
                <FaLightbulb className="feature-icon" />
                <div className="feature-content">
                  <h3>Problem Solving</h3>
                  <p>Finding creative solutions to complex challenges</p>
                </div>
              </div>

              <div className="feature-item">
                <FaRocket className="feature-icon" />
                <div className="feature-content">
                  <h3>Continuous Learning</h3>
                  <p>Always exploring new technologies and best practices</p>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <a 
                href={resumeFile} 
                download="Awaneesh_Singh_Resume.pdf" 
                className="btn-download"
              >
                <FaDownload />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
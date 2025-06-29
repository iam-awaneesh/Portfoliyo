import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaGithub } from 'react-icons/fa';
import profilePic from './assets/ProfileB.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPositionWithOffset = scrollPosition + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPositionWithOffset >= offsetTop && scrollPositionWithOffset < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* Navigation - Always visible and fixed */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <img src={profilePic} alt="Profile" className="nav-profile-pic" />
            <span className="nav-name">Awaneesh Singh</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'nav-open' : ''}`}>
            <button 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              <FaHome /> Home
            </button>
            <button 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              <FaUser /> About
            </button>
            <button 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => scrollToSection('skills')}
            >
              <FaCode /> Skills
            </button>
            <button 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              <FaBriefcase /> Projects
            </button>
            <button 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              <FaEnvelope /> Contact
            </button>
            <a 
              href="https://github.com/iam-awaneesh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-link github-link"
            >
              <FaGithub /> GitHub
            </a>
          </div>

          <button className="nav-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="gradient-text">Frontend Developer</span>
                <br />
                Creating Beautiful Digital Experiences
              </h1>
              <p className="hero-subtitle">
                Passionate about building interactive and user-friendly web applications 
                with modern technologies like React.js, JavaScript, and CSS.
              </p>
              <div className="hero-buttons">
                <button 
                  className="btn-primary"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-container">
                <img src={profilePic} alt="Awaneesh Singh" className="hero-profile-pic" />
                <div className="profile-glow"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Awaneesh Singh. All rights reserved.</p>
          <p>Designed with ❤️ by Awaneesh Singh</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 


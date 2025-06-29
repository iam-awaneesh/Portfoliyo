import React from 'react';
import './Projects.css';
import { FaExternalLinkAlt, FaGithub, FaCode, FaLaptop, FaMobile } from 'react-icons/fa';

function Projects() {
  const projectList = [
    {
      name: 'Google Sheet Automation',
      description: 'Creating dynamic tools and automations using JavaScript and Google Sheets to streamline data management and enhance productivity.',
      technologies: ['JavaScript', 'Google Sheets API', 'HTML', 'CSS'],
      link: 'https://google-sheet-eta.vercel.app/',
      github: null,
      type: 'web',
      image: null
    },
    {
      name: 'Spotify Clone',
      description: 'Building a Spotify-inspired music streaming web application using HTML, CSS, and JavaScript, providing a user-friendly listening experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Audio API'],
      link: 'https://iam-awaneesh.github.io/Web_Clone/',
      github: 'https://github.com/iam-awaneesh/Web_Clone',
      type: 'web',
      image: null
    },
    {
      name: 'Login Page',
      description: 'Creating a modern login page using React.js with advanced form validation and user authentication features.',
      technologies: ['React.js', 'JavaScript', 'CSS', 'Form Validation'],
      link: 'https://login-page-zeta-taupe.vercel.app/',
      github: null,
      type: 'web',
      image: null
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'web':
        return <FaLaptop />;
      case 'mobile':
        return <FaMobile />;
      default:
        return <FaCode />;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">
            <FaCode className="section-icon" />
            My Projects
          </h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="projects-content">
          <div className="projects-grid">
            {projectList.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <div className="project-type">
                    {getTypeIcon(project.type)}
                  </div>
                  <h3 className="project-title">{project.name}</h3>
                </div>

                <div className="project-description">
                  <p>{project.description}</p>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-project btn-primary"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-project btn-secondary"
                    >
                      <FaGithub />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
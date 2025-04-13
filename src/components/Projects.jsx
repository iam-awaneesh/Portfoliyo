import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    { name: 'Google_Sheet', description: '"Creating dynamic tools and automations using JavaScript and Google Sheets to streamline data management and enhance productivity."', link: 'https://google-sheet-eta.vercel.app/' },
    { name: 'Spotify_Clone', description: '"Building a Spotify-inspired music streaming web application using HTML, CSS, and JavaScript , user-friendly listening experience."', link: 'https://iam-awaneesh.github.io/Web_Clone/' },
    { name: 'Login_Page', description: '"Creating Longin Page Using By the react.js some fuction of react and Javascript"', link: 'https://login-page-zeta-taupe.vercel.app/' },

  ];

  return (
    <section id="projects" className="section card">
      <h2>Projects</h2>
      <div className="card-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
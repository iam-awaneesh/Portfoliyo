import React from 'react';
import './About.css';
import resumeFile from '../assets/Awaneesh_Resume.pdf'; // Place the resume in the "public" or "assets" folder
function About() {
  return (
    <section id="about" className="section card ">
      <h2>About Me</h2>
      <p>
        I am a dedicated and enthusiastic frontend web developer with a strong passion for
        creating interactive and user-friendly web applications. As a fresher, I have hands-on
        experience with modern technologies like React.js, JavaScript, HTML, and CSS. I am eager
        to apply my knowledge and continue learning to contribute effectively to exciting
        projects in the tech industry.
      </p>
      {/* Download Resume Button */}
      <a id='resume' href={resumeFile} download="Awaneesh_Singh_Resume.pdf" className="btn-download">
        📥 Download Resume
      </a>
    </section>
  );
}

export default About;
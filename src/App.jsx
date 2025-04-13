import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import profilePic from './assets/ProfileB.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Welcome to My Portfolio</h1>
        <nav className="nav-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="btn-contact">Contact Me</a>
          <a href="https://github.com/iam-awaneesh" target="_blank" rel="noopener noreferrer" className="btn-github">GitHub</a>
        </nav>
      </header>
      <div className="content-container">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App; 


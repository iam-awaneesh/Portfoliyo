import React from 'react';
import { FaPhoneAlt, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Let's Connect</h2>
      <div className="contact-cards">
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel:+919191091910" className="contact-text">+91 91XXXXXX49</a>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:awaneesh9463@gmail.com" className="contact-text">awaneesh@gmail.com</a>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/awaneesh-singh-48948b35b/" target="_blank" rel="noreferrer" className="contact-text">
            LinkedIn
          </a>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/iam-awaneesh" target="_blank" rel="noreferrer" className="contact-text">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

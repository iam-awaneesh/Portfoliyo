import React from 'react';
import { FaPhoneAlt, FaLinkedin, FaEnvelope, FaGithub, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      value: '+91 91XXXXXX49',
      link: 'tel:+919191091910',
      color: '#25D366'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'awaneesh@gmail.com',
      link: 'mailto:awaneesh9463@gmail.com',
      color: '#EA4335'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'awaneesh-singh-48948b35b',
      link: 'https://www.linkedin.com/in/awaneesh-singh-48948b35b/',
      color: '#0077B5'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'iam-awaneesh',
      link: 'https://github.com/iam-awaneesh',
      color: '#333'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">
            <FaEnvelope className="section-icon" />
            Get In Touch
          </h2>
          <p className="section-subtitle">Let's work together on your next project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-grid">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target={contact.title === 'Phone' || contact.title === 'Email' ? '_self' : '_blank'}
                rel={contact.title === 'Phone' || contact.title === 'Email' ? '' : 'noopener noreferrer'}
                className="contact-card"
                style={{ '--accent-color': contact.color }}
              >
                <div className="contact-icon-wrapper">
                  {contact.icon}
                </div>
                <div className="contact-details">
                  <h3 className="contact-title">{contact.title}</h3>
                  <p className="contact-value">{contact.value}</p>
                </div>
                <div className="contact-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-message">
            <div className="message-content">
              <h3>Ready to Start a Project?</h3>
              <p>
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a specific project in mind or just want to chat about possibilities, 
                I'd love to hear from you!
              </p>
              <div className="availability">
                <FaClock className="clock-icon" />
                <span>Available for new opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import React from 'react';
import './Skills.css';
import { FaCode, FaDatabase, FaTools, FaDesktop } from 'react-icons/fa';

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 }
      ]
    },
    {
      title: "Backend & Database",
      icon: <FaDatabase />,
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'Express.js', level: 70 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools />,
      skills: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'Vercel', level: 75 }
      ]
    },
    {
      title: "Office Tools",
      icon: <FaDesktop />,
      skills: [
        { name: 'Microsoft Excel', level: 85 },
        { name: 'MS Office Suite', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">
            <FaCode className="section-icon" />
            Skills & Expertise
          </h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-content">
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-category">
                <div className="category-header">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
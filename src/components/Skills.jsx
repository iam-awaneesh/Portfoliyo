import React from 'react';
import './Skills.css';

function Skills() {
  const skills = ['React.js', 'JavaScript', 'HTML', 'CSS', 'Node.js' , 'Excel(MS Office)'];

  return (
    <section id="skills" className="section card">
      <h2>Skills</h2>
      <div className="card-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item card">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
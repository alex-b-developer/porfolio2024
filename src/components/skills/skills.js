import React from 'react';
import './skills.css';
import reactIcon from '../../assets/react-icon.png';

const skillsData = [
  { icon: reactIcon, name: 'React' },
  { icon: reactIcon, name: 'Git' },
  { icon: reactIcon, name: 'HTML' },
  { icon: reactIcon, name: 'CSS' },
  { icon: reactIcon, name: 'JavaScript' }
];

function Skills() {
  return (
    <div className="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
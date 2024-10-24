import React from 'react';
import './skills.css';
import { Button } from '@nextui-org/react';
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
      <h1 className="skills-title">Tech Stack and Core Competencies</h1>
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
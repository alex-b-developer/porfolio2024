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
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
      <Button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        auto
      >
        Click Me
      </Button>
    </div>
  );
}

export default Skills;
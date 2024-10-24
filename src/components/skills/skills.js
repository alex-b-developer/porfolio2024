import React from 'react';
import './skills.css';
import { Button } from '@nextui-org/react';
import figmaIcon from '../../assets/figma-icon.png';
import reactIcon from '../../assets/react-icon.png';
import htmlIcon from '../../assets/html5-icon.png';
import cssIcon from '../../assets/css-icon.png';
import jsIcon from '../../assets/js-icon.png';
import mysqlIcon from '../../assets/mysql2-icon.png';
import wordpressIcon from '../../assets/wordpress-icon.png';
import nodejsIcon from '../../assets/nodejs-icon.png';
import gitIcon from '../../assets/git-icon.png'


const skillsData = [
  { icon: figmaIcon, name: 'Figma' },
  { icon: htmlIcon, name: 'HTML' },
  { icon: cssIcon, name: 'CSS' },
  { icon: jsIcon, name: 'JavaScript' },
  { icon: mysqlIcon, name: 'MySql' },
  { icon: wordpressIcon, name: 'Wordpress' },
  { icon: reactIcon, name: 'React' },
  { icon: nodejsIcon, name: 'NodeJS' },
  { icon: gitIcon, name: 'GIT' }
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
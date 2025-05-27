import React from 'react';
import './Skills.css';

const skillsData = {
  frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Tailwind", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "MongoDB", level: 80 },
    { name: "SQL", level: 70 },
    { name: "RESTful", level: 70 },
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "VS Code", level: 85 },
    { name: "Figma", level: 70 },
    { name: "Postman", level: 75 },
  ],
};

const Skills = () => {
  return (
    <div className="skills" id='skills'>
      <h2>My Skills</h2>
      <div className="skills-category">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div className="skill-group" key={category}>
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            {skills.map(skill => (
              <div className="skill-bar" key={skill.name}>
                <div className="label">{skill.name}</div>
                <div className="bar-bg">
                  <div className="bar-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

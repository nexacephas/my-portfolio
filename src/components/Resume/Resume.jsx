import React from 'react';
import './Resume.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const education = [
  {
    icon: <FaGraduationCap />,
    title: 'B.Sc in Computer Science',
    institution: 'Federal University of Technology, Minna',
    year: '2020 - 2025',
    description: 'Focused on software engineering, web development, and database systems.'
  },
  {
    icon: <FaGraduationCap />,
    title: 'Web Development Bootcamp',
    institution: 'Online Course (Udemy)',
    year: '2023',
    description: 'Hands-on learning with full-stack web technologies including React and Node.js.'
  }
];

const experience = [
  {
    icon: <FaBriefcase />,
    title: 'Frontend Developer Intern',
    company: 'TechHub Solutions',
    year: '2023 - 2024',
    description: 'Worked on responsive user interfaces using React and Tailwind CSS.'
  },
  {
    icon: <FaBriefcase />,
    title: 'Freelance Web Developer',
    company: 'Remote',
    year: '2022 - Present',
    description: 'Designed and developed websites and apps for clients across different industries.'
  }
];

const Resume = () => {
  return (
    <div className="resume-section" id='resume'>
      <h2>My Resume</h2>
      <div className="resume-container">
        <div className="resume-column">
          <h3>Education</h3>
          {education.map((item, index) => (
            <div className="resume-item" key={index}>
              <div className="resume-icon">{item.icon}</div>
              <div className="resume-content">
                <h4>{item.title}</h4>
                <h5>{item.institution} | {item.year}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="resume-column">
          <h3>Experience</h3>
          {experience.map((item, index) => (
            <div className="resume-item" key={index}>
              <div className="resume-icon">{item.icon}</div>
              <div className="resume-content">
                <h4>{item.title}</h4>
                <h5>{item.company} | {item.year}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;

import React from 'react';
import './Resume.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="resume-section" id="resume">
      <h2>My Resume</h2>
      <div className="resume-container">
        <div className="resume-column">
          <h3>Education</h3>
          {education.map((item, index) => (
            <motion.div
              className="resume-item"
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={fadeUp}
            >
              <div className="resume-icon-wrapper">
                <div className="resume-icon-bg" />
                <div className="resume-icon">{item.icon}</div>
              </div>
              <div className="resume-content">
                <h4>{item.title}</h4>
                <h5>{item.institution} | {item.year}</h5>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="resume-column">
          <h3>Experience</h3>
          {experience.map((item, index) => (
            <motion.div
              className="resume-item"
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={fadeUp}
            >
              <div className="resume-icon-wrapper">
                <div className="resume-icon-bg" />
                <div className="resume-icon">{item.icon}</div>
              </div>
              <div className="resume-content">
                <h4>{item.title}</h4>
                <h5>{item.company} | {item.year}</h5>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;

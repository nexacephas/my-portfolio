import React from 'react';
import './Service.css';
import { FaCode, FaLaptopCode, FaMobileAlt, FaTools } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode />,
    title: 'Frontend Development',
    description: 'Building responsive and interactive websites using React, Tailwind, HTML, and CSS.',
  },
  {
    icon: <FaCode />,
    title: 'Backend Development',
    description: 'Creating scalable APIs and server logic using Node.js, Express, and MongoDB.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Responsive Design',
    description: 'Designing layouts that work seamlessly across mobile, tablet, and desktop devices.',
  },
  {
    icon: <FaTools />,
    title: 'Tools & Deployment',
    description: 'Version control with Git, collaboration on GitHub, and deployment via Netlify or Vercel.',
  },
];

const Service = () => {
  return (
    <div className="service-section" id='services'>
      <h2>My Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

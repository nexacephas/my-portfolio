import React from 'react';
import './Portfoilo.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import project_1 from '../../assets/Project-1.png';
import project_2 from '../../assets/project-2.png'; 
import project_3 from '../../assets/project-3.png';
import project_4 from '../../assets/project-4.png';
import project_5 from '../../assets/project-5.png';
import project_6 from '../../assets/project-6.jpg';

const portfolioProjects = [
  {
    title: 'Educity - College Website',
    image: project_1,
    description: 'A fully responsive college website built with React for dynamic navigation and styled with Tailwind CSS.',
    github: 'https://github.com/nexacephas/educity',
    live: 'https://educitycollege.netlify.app',
  },
  {
  
  title: 'LinkedIn Clone',
  image: project_2,
    description: 'A LinkedIn-style professional network interface built with React and Firebase for authentication.',
    github: 'https://github.com/nexacephas/linkedin-clone',
    live: 'https://linkedin-nexa.netlify.app',
  },
  {
    title: 'Netflix Clone',
    image: project_3,
    description: 'A Netflix-style UI with movie trailers, category browsing, and modern animations using React and TMDB API.',
    github: 'https://github.com/nexacephas/netflix-clone',
    live: 'https://netflix-nexa.netlify.app',
  },
  {
    title: 'Developer Portfolio',
    image: project_4,
    description: 'A sleek, responsive portfolio to showcase development skills and projects using React and Tailwind.',
    github: 'https://github.com/nexacephas/portfolio',
    live: 'https://cephasdev.netlify.app',
  },
  {
    title: 'CephaStore - E-Commerce Website',
    image: project_5,
    description: 'A modern e-commerce platform built with MERN stack featuring user authentication, cart, and payment integration.',
    github: 'https://github.com/nexacephas/cephastore',
    live: 'https://cephastore.netlify.app',
  },
  {
    title: 'Coffee Shop Website',
    image: project_6,
    description: 'A beautifully designed responsive coffee shop website built using HTML, CSS, and JavaScript. Features interactive menu, animated hero section, and a contact form.',
    github: 'https://github.com/nexacephas/coffee-shop',
    live: 'https://coffeeweb.netlify.app',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="section-title">My Projects</h2>
      <div className="portfolio-grid">
        {portfolioProjects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img loading="lazy" src={project.image} alt={project.title} className="portfolio-img" />
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="portfolio-links">
                <a href={project.github} target="_blank" rel="noreferrer" title="View Code">
                  <FaGithub />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" title="Live Preview">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

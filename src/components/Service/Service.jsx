import React from 'react';
import './Service.css';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
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

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const card = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

export default function Service() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="service-section" id="services">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: 'transparent' },
          fpsLimit: 60,
          particles: {
            color: { value: '#07aecf' },
            links: { color: '#07aecf', distance: 150, enable: true, opacity: 0.2, width: 1 },
            collisions: { enable: false },
            move: { direction: 'none', enable: true, outModes: 'bounce', random: true, speed: 0.7, straight: false },
            number: { density: { enable: true, area: 800 }, value: 30 },
            opacity: { value: 0.4 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />

      <span className="section-tag">Services</span>
      <h2>What I Offer</h2>

      <motion.div
        className="service-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map((service, idx) => (
          <motion.div key={idx} variants={card}>
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#07aecf"
              glarePosition="all"
              scale={1.05}
              transitionSpeed={2500}
            >
              <div className="service-card">
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

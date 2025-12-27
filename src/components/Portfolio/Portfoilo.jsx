import React, { useRef, useEffect } from "react";
import "./Portfoilo.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";

import project_1 from "../../assets/project/1227 (1).mp4";
import project_2 from "../../assets/project/screen_1766868870362.mp4";
import project_3 from "../../assets/project/screen_1766869436025.mp4";
import project_4 from "../../assets/project/screen_1766869623418.mp4";
import project_5 from "../../assets/project/screen_1766869812974.mp4";
import project_6 from "../../assets/project/screen_1766869948745.mp4";
import project_7 from "../../assets/project/screen_1766870300827.mp4";
import project_8 from "../../assets/project/screen_1766870406722.mp4";

const projects = [
  {
    title: "Project Alpha",
    video: project_1,
    description: "Modern web app built with React and Tailwind CSS.",
    github: "https://github.com/nexacephas/Fxmarket", // Direct link to GitHub
    live: "https://fxmarket.vercel.app/"
  },
  {
    title: "Project Beta",
    video: project_2,
    description: "Responsive e-commerce website with smooth UI animations.",
    github: "https://github.com/nexacephas/Travel-agency", // Corrected
    live: "https://travel-agency-three-lovat.vercel.app/"
  },
  {
    title: "Project Gamma",
    video: project_3,
    description: "Dashboard app showing real-time analytics and charts.",
    github: "https://github.com/nexacephas/next-door-frontend",
    live: "https://next-door-frontend.vercel.app/"
  },
  {
    title: "Project Delta",
    video: project_4,
    description: "Portfolio website showcasing modern UI/UX design.",
    github: "https://github.com/nexacephas/cepahzz",
    live: "https://cepahzz-zo63.vercel.app/"
  },
  {
    title: "Project Epsilon",
    video: project_5,
    description: "Landing page for a brand with product showcase.",
    github: "https://github.com/nexacephas/carbon",
    live: "https://carbon-vrq6.vercel.app/"
  },
  {
    title: "Project Zeta",
    video: project_6,
    description: "Mobile-first web app with interactive components.",
    github: "https://github.com/nexacephas/Energy-meter",
    live: "https://energy-meter-dc1k.vercel.app/"
  },
  {
    title: "Project Eta",
    video: project_7,
    description: "Mobile-first web app with interactive components.",
    github: "https://github.com/nexacephas/fashion-design-",
    live: "https://fashion-design-rouge.vercel.app/"
  },
  {
    title: "Project Theta",
    video: project_8,
    description: "Mobile-first web app with interactive components.",
    github: "https://github.com/nexacephas/Teqilah_Brand",
    live: "https://teqilah-brand.vercel.app/"
  },
];


const PortfolioCard = ({ project, index }) => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.5 }); // trigger when 50% visible
  const controls = useAnimation();

  // Trigger fade-in animation
  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  // Autoplay/pause video
  useEffect(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    if (inView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView]);

  return (
    <motion.div
      className="portfolio-card"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.2 } },
      }}
    >
      <div className="portfolio-img-wrapper">
        <video
          ref={videoRef}
          src={project.video}
          className="portfolio-img"
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="portfolio-overlay">
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
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="section-title">My Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <PortfolioCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

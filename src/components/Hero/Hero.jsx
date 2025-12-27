import React from "react";
import "./Hero.css";
import profileImg from "../../assets/my-profile-pic.jpg";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Tilt from "react-parallax-tilt";

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="hero" id="home">
      {/* Background Particles */}
      <Particles
        id="tsparticles-hero"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            color: { value: "#07aecf" },
            links: { color: "#07aecf", distance: 120, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 0.6, direction: "none", outModes: "bounce" },
            number: { value: 30, density: { enable: true, area: 800 } },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      <div className="hero-overlay" />

      <div className="hero-container">
        {/* Animated Text */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="hero-tag">Full Stack Developer</span>
          <h1>
            I build <span>scalable</span> & <span>modern</span> web experiences
          </h1>
          <p>
            Hi, I’m <strong>Cephas (Nexa)</strong> — a full stack developer focused on crafting fast, secure,
            and visually stunning applications.
          </p>
          <div className="hero-actions">
            <a href="#portfolio" className="btn primary">View Projects</a>
            <a href="#contact" className="btn outline">Contact Me</a>
          </div>
        </motion.div>

        {/* Tilted Profile Image */}
        <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05} transitionSpeed={2500}>
          <div className="hero-image">
            <div className="image-glow" />
            <img src={profileImg} alt="Cephas" />
          </div>
        </Tilt>
      </div>
    </section>
  );
}

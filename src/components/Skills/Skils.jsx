import React from 'react';
import "./Skills.css";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiFigma } from "react-icons/si";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <span className="section-tag">Skills</span>
      <h2>Technologies I Work With</h2>

      <motion.div
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skillsData.map((group) => (
          <motion.div
            className="skill-card"
            key={group.title}
            variants={card}
            whileHover={{ y: -8 }}
          >
            <h3>{group.title}</h3>

            <ul>
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <span className="icon">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

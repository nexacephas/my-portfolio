import "./About.css";
import profilePic from "../../assets/my-profile-pic.jpg";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaGlobe,
  FaLinkedin,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Image */}
        <div className="about-image">
          <div className="image-frame" />
          <img src={profilePic} alt="Nexa Cephas" />
        </div>

        {/* Content */}
        <div className="about-content">
          <span className="section-tag">About Me</span>
          <h2>Crafting digital experiences that matter</h2>

          <p>
            I’m <strong>Cephas (Nexa)</strong>, a full stack web developer with
            over <strong>3 years</strong> of experience building scalable,
            performant, and visually refined applications.
          </p>

          <p>
            I specialize in turning complex ideas into clean, user-focused
            products — from frontend interfaces to backend systems that scale.
          </p>

          {/* Highlights */}
          <div className="about-stats">
            <div className="stat">
              <FaBriefcase />
              <span>3+ Years Experience</span>
            </div>

            <div className="stat">
              <FaMapMarkerAlt />
              <span>Minna, Nigeria</span>
            </div>

            <div className="stat">
              <FaGlobe />
              <span>Freelance Available</span>
            </div>

            <div className="stat">
              <FaLinkedin />
              <span>LinkedIn Profile</span>
            </div>
          </div>

          {/* CTA */}
          <div className="about-actions">
            <a
              href="/nexa new resume.pdf"
              download
              className="btn primary"
            >
              Download CV
            </a>
            <a href="#contact" className="btn outline">
              Let’s Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import './About.css';
import { FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaBirthdayCake, FaGlobe, FaLinkedin } from 'react-icons/fa';
import profile_pic from '../../assets/my-profile-pic.jpg';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-left">
        <img src={profile_pic} alt="Nexa Cephas" />
      </div>

      <div className="about-right">
        <h2>Discover</h2>
        <h1>About Me</h1>
        <p>
          Hi, I'm a passionate Full Stack Web Developer who specializes in building modern,
          responsive, and user-friendly web applications. I combine strong frontend and backend
          skills to craft clean, scalable, and maintainable solutions. I enjoy solving complex
          problems and collaborating on projects that deliver real value.
        </p>

        <div className="about-box">
          <div className="box-left">
            <p><FaUser /> <span>Name</span>: Nexa Cephas</p>
            <p><FaPhoneAlt /> <span>Phone</span>: +234 813 149 5622</p>
            <p><FaBriefcase /> <span>Experience</span>: 3 years</p>
            <p><FaEnvelope /> <span>Mail</span>: preciousayo773@gmail.com</p>
          </div>

          <div className="box-right">
            <p><FaBirthdayCake /> <span>Age</span>: 20</p>
            <p><FaMapMarkerAlt /> <span>Address</span>: Minna, Nigeria</p>
            <p><FaGlobe /> <span>Freelance</span>: Available</p>
            <p><FaLinkedin /> <span>LinkedIn</span>: Nexa cephas</p>
          </div>
        </div>

        <a href="/nexa new resume.pdf" download className="btn">
  Download CV
</a>

      </div>
    </div>
  );
};

export default About;

import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Nexa Cephas</h3>
        <p>Full Stack Web Developer</p>

        <div className="footer-socials">
          <a href="https://github.com/nexacephas" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://ng.linkedin.com/in/nexa-cephas-b50b30343" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/Cephware" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>

        <p className="footer-contact">Contact: preiouayo773@gmail.com</p>
        <p className="footer-copy">© {new Date().getFullYear()} Nexa Cephas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

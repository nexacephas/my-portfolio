import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'services', 'resume', 'portfolio', 'blog', 'contact'];
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offset = section.offsetTop - 100;
          const height = section.offsetHeight;
          if (window.scrollY >= offset && window.scrollY < offset + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`nav ${sticky ? 'dark-nav' : ''}`}>
      <div className="nav-left">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="nav-middle">
        <ul className="nav-list">
          {['home', 'about', 'skills', 'services', 'resume', 'portfolio', 'blog', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? 'active-link' : ''}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-right">
        <button className="btn"> <a href="#contact">Contact</a></button>
      </div>
    </div>
  );
};

export default Navbar;

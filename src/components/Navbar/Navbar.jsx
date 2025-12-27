import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const sections = [
  "home",
  "about",
  "skills",
  "services",
  "portfolio",
  "contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.offsetTop - 120;
        const bottom = top + el.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Logo */}
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
          </div>

          {/* Desktop links */}
          <ul className="nav-links">
            {sections.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={active === item ? "active" : ""}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#contact" className="nav-cta">
            Let’s Talk
          </a>

          {/* Mobile toggle */}
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>

        <ul>
          {sections.map((item) => (
            <li key={item} onClick={() => setMenuOpen(false)}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

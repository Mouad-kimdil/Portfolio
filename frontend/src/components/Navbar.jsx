import { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import './Navbar.scss';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="#home" onClick={closeMenu}>
          <img src={logo} alt="Portfolio Logo" />
        </a>
      </div>
      
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={isMenuOpen ? 'active' : ''}></span>
        <span className={isMenuOpen ? 'active' : ''}></span>
        <span className={isMenuOpen ? 'active' : ''}></span>
      </button>
      
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <div className="menu-header">
          <h3>Navigation</h3>
          <button className="close-btn" onClick={closeMenu}>✕</button>
        </div>
        <div className="menu-items">
          <a href="#work" onClick={closeMenu}>
            <span className="menu-icon">💼</span>
            <span>Work</span>
          </a>
          <a href="#experience" onClick={closeMenu}>
            <span className="menu-icon">🎓</span>
            <span>Experience</span>
          </a>
          <a href="#contact" onClick={closeMenu}>
            <span className="menu-icon">📧</span>
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} className="logo" alt="Logo" />
        </Link>
      </div>

      <button className="hamburger" onClick={toggleNavbar}>
        {isOpen ? (
          <span className="cross-icon">&times;</span>
        ) : (
          <span className="hamburger-icon">&#9776;</span>
        )}
      </button>

      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <div className="dropdown">
          <span className="nav-link">Products</span>
          <div className="dropdown-content">
            <Link to="/product/se03-lite" className="dropdown-link">SE03 Lite</Link>
            <Link to="/product/se03" className="dropdown-link">SE03</Link>
            <Link to="/product/se03-max" className="dropdown-link">SE03 Max</Link>
            <Link to="/compare" className="dropdown-link">Compare All</Link>
          </div>
        </div>
        <Link to="/contact" className="nav-link">Contact Us</Link>
        <Link to="/pre-book" className="nav-link">Pre-Book Now</Link>
      </nav>

      <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;

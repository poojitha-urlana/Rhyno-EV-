import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        <a href="/refund-policy" className="footer-link">Refund Policy</a>
        <a href="/website-policy" className="footer-link">Website Policy</a>
        <a href="/contact" className="footer-link">Contact Us</a>
        <a href="/products" className="footer-link">Products</a>
        <a href="https://linkedin.com/company/rhyno_ev" target="_blank" rel="noopener noreferrer" className="footer-link">Career</a>
        <a href="/rentals" className="footer-link">Rentals</a>
      </div>
      <div className="social-icons">
        <a href="https://instagram.com/rhyno_ev" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com/company/rhyno_ev" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://facebook.com/rhyno_ev" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com/rhyno_ev" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://youtube.com/rhyno_ev" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <hr />
      <p>&copy; 2024 RHYNO EV. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

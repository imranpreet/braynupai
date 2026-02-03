import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🧠</span>
              <span className="logo-text">BraynupAI</span>
            </div>
            <p className="footer-description">
              Empowering global learners with cutting-edge AI education. 
              Master the future of technology with industry-aligned programs.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook">📘</a>
              <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
              <a href="#" className="social-icon" aria-label="LinkedIn">💼</a>
              <a href="#" className="social-icon" aria-label="Instagram">📸</a>
              <a href="#" className="social-icon" aria-label="YouTube">▶️</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">All Courses</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-section">
            <h3>Programs</h3>
            <ul className="footer-links">
              <li><Link to="/courses">AI Digital Marketing</Link></li>
              <li><Link to="/courses">Full Stack with AI</Link></li>
              <li><Link to="/courses">Machine Learning</Link></li>
              <li><Link to="/courses">Data Science</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><a href="#">Student Dashboard</a></li>
              <li><a href="#">Free Resources</a></li>
              <li><a href="#">Career Support</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Refund Policy</a>
          </div>
          <p className="footer-copyright">
            © 2026 BraynupAI - Global School of AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

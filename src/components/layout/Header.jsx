import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-text">BraynupAI</span>
        </Link>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => setOpenDropdown(openDropdown === 'courses' ? null : 'courses')}
              >
                Our Courses <span className="arrow">▼</span>
              </button>
              {openDropdown === 'courses' && (
                <div className="dropdown-menu">
                  <Link to="/courses" className="dropdown-item">Digital Marketing with AI</Link>
                  <Link to="/courses" className="dropdown-item">Full Stack Engineering with AI</Link>
                  <Link to="/courses" className="dropdown-item">All Courses</Link>
                </div>
              )}
            </li>
            <li><Link to="/about" className="nav-link">For Students</Link></li>
            <li><Link to="/about" className="nav-link">For Graduates</Link></li>
            <li><Link to="/about" className="nav-link">For Professionals</Link></li>
            <li><Link to="/contact" className="nav-link">Hire From Us</Link></li>
          </ul>

          <div className="auth-buttons">
            <Link to="/login" className="btn btn-login">Login / Sign up</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

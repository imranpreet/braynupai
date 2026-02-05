import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login functionality will be implemented with backend!');
  };

  return (
    <div className="auth-page">
      <div className="auth-split-container">
        {/* Left Side - Illustration */}
        <div className="auth-left-panel">
          <div className="illustration-container">
            <div className="rocket-illustration">
              <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
                {/* Rocket Body */}
                <ellipse cx="100" cy="180" rx="35" ry="80" fill="#E74C3C"/>
                {/* Rocket Top */}
                <path d="M100 80 L140 150 L60 150 Z" fill="#E74C3C"/>
                {/* Window */}
                <circle cx="100" cy="140" r="20" fill="white"/>
                <circle cx="100" cy="140" r="12" fill="#5DADE2"/>
                {/* Left Fin */}
                <path d="M65 200 L50 260 L65 240 Z" fill="#C0392B"/>
                {/* Right Fin */}
                <path d="M135 200 L150 260 L135 240 Z" fill="#C0392B"/>
                {/* Rocket Bottom */}
                <ellipse cx="100" cy="230" rx="35" ry="15" fill="#C0392B"/>
                {/* Fire/Exhaust */}
                <ellipse cx="100" cy="245" rx="25" ry="20" fill="#F39C12" opacity="0.8"/>
                <ellipse cx="100" cy="255" rx="20" ry="25" fill="#E67E22" opacity="0.7"/>
                <ellipse cx="100" cy="270" rx="15" ry="20" fill="#E74C3C" opacity="0.6"/>
              </svg>
            </div>
            
            {/* Clouds */}
            <div className="cloud cloud-1">
              <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="25" cy="30" rx="20" ry="15" fill="white" opacity="0.9"/>
                <ellipse cx="45" cy="25" rx="25" ry="18" fill="white" opacity="0.9"/>
                <ellipse cx="65" cy="30" rx="20" ry="15" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <div className="cloud cloud-2">
              <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="25" cy="30" rx="20" ry="15" fill="white" opacity="0.9"/>
                <ellipse cx="45" cy="25" rx="25" ry="18" fill="white" opacity="0.9"/>
                <ellipse cx="65" cy="30" rx="20" ry="15" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <div className="cloud cloud-3">
              <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="25" cy="30" rx="20" ry="15" fill="white" opacity="0.9"/>
                <ellipse cx="45" cy="25" rx="25" ry="18" fill="white" opacity="0.9"/>
                <ellipse cx="65" cy="30" rx="20" ry="15" fill="white" opacity="0.9"/>
              </svg>
            </div>
          </div>
          
          <div className="welcome-text">
            <h1>Hey there!</h1>
            <p className="welcome-subtitle">Welcome back</p>
            <p className="welcome-description">You are just one step away from your feed</p>
          </div>
          
          <div className="register-section">
            <p>Don't have an account?</p>
            <Link to="/signup" className="register-btn">REGISTER NOW</Link>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="auth-right-panel">
          <div className="auth-form-container">
            <h2 className="form-title">Sign in</h2>
            
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="yourname@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="••••••••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={keepLoggedIn}
                    onChange={(e) => setKeepLoggedIn(e.target.checked)}
                  />
                  <span>Keep me logged in</span>
                </label>
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>

              <button type="submit" className="signin-btn">
                Sign In
              </button>
            </form>

            <div className="social-divider">
              <span>Or Use social media to Sign In</span>
            </div>

            <div className="social-buttons">
              <button className="social-btn-round google-btn">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </button>
              <button className="social-btn-round twitter-btn">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

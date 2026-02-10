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
        {/* Left Side - Illustration & Content */}
        <div className="auth-left-panel">
          <div className="left-content">
            <div className="brand-section">
              <h1 className="brand-title">Learn smarter with BrainupAI</h1>
              <p className="brand-description">
                A platform where students grow, learn, and upskill with AI-powered courses
              </p>
            </div>

            <div className="illustration-wrapper">
              <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="student-illustration">
                {/* Desk */}
                <rect x="80" y="280" width="340" height="15" rx="7" fill="#8B4513" opacity="0.3"/>
                
                {/* Laptop Base */}
                <rect x="180" y="240" width="140" height="8" rx="4" fill="#4A5568"/>
                
                {/* Laptop Screen */}
                <rect x="185" y="160" width="130" height="85" rx="5" fill="#2D3748"/>
                <rect x="195" y="170" width="110" height="65" rx="3" fill="#63B3ED"/>
                
                {/* Screen Content Lines */}
                <rect x="205" y="180" width="90" height="4" rx="2" fill="#E2E8F0"/>
                <rect x="205" y="190" width="70" height="4" rx="2" fill="#E2E8F0"/>
                <rect x="205" y="200" width="85" height="4" rx="2" fill="#E2E8F0"/>
                
                {/* Books Stack */}
                <rect x="100" y="260" width="60" height="12" rx="3" fill="#E63946"/>
                <rect x="105" y="248" width="55" height="12" rx="3" fill="#F39C12"/>
                <rect x="110" y="236" width="50" height="12" rx="3" fill="#3498DB"/>
                
                {/* Coffee Cup */}
                <ellipse cx="370" cy="265" rx="18" ry="5" fill="#8B4513" opacity="0.3"/>
                <rect x="352" y="250" width="36" height="20" rx="5" fill="#E8E8E8"/>
                <path d="M352 260 Q350 265 352 270" stroke="#CBD5E0" strokeWidth="2" fill="none"/>
                
                {/* Coffee Steam */}
                <path d="M365 240 Q367 235 365 230" stroke="#CBD5E0" strokeWidth="1.5" fill="none" opacity="0.6"/>
                <path d="M375 238 Q377 233 375 228" stroke="#CBD5E0" strokeWidth="1.5" fill="none" opacity="0.6"/>
                
                {/* Student Head */}
                <circle cx="250" cy="140" r="35" fill="#FBBF77"/>
                
                {/* Hair */}
                <path d="M215 140 Q215 105 250 100 Q285 105 285 140" fill="#2C3E50"/>
                
                {/* Eyes */}
                <circle cx="235" cy="140" r="3" fill="#2C3E50"/>
                <circle cx="265" cy="140" r="3" fill="#2C3E50"/>
                
                {/* Smile */}
                <path d="M235 152 Q250 160 265 152" stroke="#2C3E50" strokeWidth="2" fill="none" strokeLinecap="round"/>
                
                {/* Body/Shirt */}
                <path d="M215 175 L215 250 L285 250 L285 175" fill="#E63946"/>
                <circle cx="250" cy="175" r="30" fill="#E63946"/>
                
                {/* Arms */}
                <rect x="195" y="190" width="15" height="60" rx="7" fill="#FBBF77"/>
                <rect x="290" y="190" width="15" height="60" rx="7" fill="#FBBF77"/>
                
                {/* Hands */}
                <circle cx="202" cy="245" r="10" fill="#FBBF77"/>
                <circle cx="298" cy="245" r="10" fill="#FBBF77"/>
                
                {/* Pencil in hand */}
                <rect x="295" y="235" width="3" height="35" fill="#F39C12" transform="rotate(-30 297 252)"/>
                <path d="M305 225 L310 220 L307 230 Z" fill="#2C3E50" transform="rotate(-30 307 225)"/>
                
                {/* Notebook */}
                <rect x="70" y="200" width="45" height="60" rx="3" fill="#F8F9FA"/>
                <line x1="75" y1="210" x2="110" y2="210" stroke="#CBD5E0" strokeWidth="1"/>
                <line x1="75" y1="220" x2="110" y2="220" stroke="#CBD5E0" strokeWidth="1"/>
                <line x1="75" y1="230" x2="110" y2="230" stroke="#CBD5E0" strokeWidth="1"/>
                
                {/* Floating Elements - Ideas */}
                <circle cx="150" cy="100" r="25" fill="#FED7D7" opacity="0.6"/>
                <text x="145" y="110" fontSize="20" fill="#E63946">💡</text>
                
                <circle cx="360" cy="120" r="22" fill="#C6F6D5" opacity="0.6"/>
                <text x="355" y="128" fontSize="18" fill="#38A169">📚</text>
                
                <circle cx="130" cy="180" r="20" fill="#BEE3F8" opacity="0.6"/>
                <text x="126" y="188" fontSize="16" fill="#3182CE">🎯</text>
                
                <circle cx="380" cy="200" r="23" fill="#FEFCBF" opacity="0.6"/>
                <text x="375" y="208" fontSize="18" fill="#D69E2E">⭐</text>
              </svg>
            </div>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>AI-Powered Learning Paths</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Expert-Led Courses</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Real-World Projects</span>
              </div>
            </div>
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

            <div className="signup-prompt">
              <p>Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

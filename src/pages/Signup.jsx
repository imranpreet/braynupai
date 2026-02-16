import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!agreeTerms) {
      alert('Please agree to the Terms and Privacy Policy.');
      return;
    }
    alert('Signup functionality will be implemented with backend!');
  };

  return (
    <div className="auth-page">
      <div className="auth-split-container">
        {/* Left Side - Illustration & Content */}
        <div className="auth-left-panel">
          <div className="left-content">
            <div className="brand-section">
              <h1 className="brand-title">Join BrainupAI Today</h1>
              <p className="brand-description">
                Start your learning journey with thousands of students worldwide. Access AI-powered courses and unlock your potential.
              </p>
            </div>

            <div className="illustration-wrapper">
              <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="student-illustration">
                {/* Desk */}
                <rect x="50" y="280" width="400" height="15" rx="7" fill="#8B4513" opacity="0.3"/>
                
                {/* Student 1 - Left */}
                <circle cx="150" cy="150" r="30" fill="#FFD4A3"/>
                <path d="M120 180 Q120 145 150 140 Q180 145 180 180" fill="#34495E"/>
                <circle cx="140" cy="150" r="3" fill="#2C3E50"/>
                <circle cx="160" cy="150" r="3" fill="#2C3E50"/>
                <path d="M140 160 Q150 165 160 160" stroke="#2C3E50" strokeWidth="2" fill="none"/>
                <path d="M120 180 L120 260 L180 260 L180 180" fill="#3498DB"/>
                <circle cx="150" cy="180" r="25" fill="#3498DB"/>
                <rect x="105" y="200" width="12" height="50" rx="6" fill="#FFD4A3"/>
                <rect x="183" y="200" width="12" height="50" rx="6" fill="#FFD4A3"/>
                
                {/* Student 2 - Center */}
                <circle cx="250" cy="140" r="32" fill="#FBBF77"/>
                <path d="M218 140 Q218 105 250 100 Q282 105 282 140" fill="#2C3E50"/>
                <circle cx="237" cy="140" r="3" fill="#2C3E50"/>
                <circle cx="263" cy="140" r="3" fill="#2C3E50"/>
                <path d="M237 152 Q250 158 263 152" stroke="#2C3E50" strokeWidth="2" fill="none"/>
                <path d="M218 170 L218 260 L282 260 L282 170" fill="#E63946"/>
                <circle cx="250" cy="170" r="28" fill="#E63946"/>
                <rect x="200" y="190" width="13" height="55" rx="6" fill="#FBBF77"/>
                <rect x="287" y="190" width="13" height="55" rx="6" fill="#FBBF77"/>
                
                {/* Student 3 - Right */}
                <circle cx="350" cy="155" r="28" fill="#FFE4C4"/>
                <path d="M322 155 Q322 122 350 118 Q378 122 378 155" fill="#5D4037"/>
                <circle cx="340" cy="155" r="3" fill="#2C3E50"/>
                <circle cx="360" cy="155" r="3" fill="#2C3E50"/>
                <path d="M340 165 Q350 170 360 165" stroke="#2C3E50" strokeWidth="2" fill="none"/>
                <path d="M322 185 L322 260 L378 260 L378 185" fill="#9B59B6"/>
                <circle cx="350" cy="185" r="26" fill="#9B59B6"/>
                <rect x="307" y="200" width="12" height="48" rx="6" fill="#FFE4C4"/>
                <rect x="381" y="200" width="12" height="48" rx="6" fill="#FFE4C4"/>
                
                {/* Books */}
                <rect x="90" y="268" width="35" height="10" rx="2" fill="#E63946"/>
                <rect x="400" y="265" width="40" height="13" rx="2" fill="#3498DB"/>
                <rect x="405" y="252" width="35" height="13" rx="2" fill="#F39C12"/>
                
                {/* Laptop */}
                <rect x="220" y="265" width="60" height="5" rx="2" fill="#4A5568"/>
                <rect x="225" y="220" width="50" height="48" rx="3" fill="#2D3748"/>
                <rect x="232" y="228" width="36" height="32" rx="2" fill="#63B3ED"/>
                
                {/* Floating Elements */}
                <circle cx="80" cy="100" r="22" fill="#FED7D7" opacity="0.7"/>
                <text x="75" y="108" fontSize="18">✨</text>
                
                <circle cx="420" cy="110" r="24" fill="#C6F6D5" opacity="0.7"/>
                <text x="415" y="118" fontSize="18">📚</text>
                
                <circle cx="250" cy="50" r="26" fill="#BEE3F8" opacity="0.7"/>
                <text x="244" y="60" fontSize="20">🎓</text>
                
                <circle cx="100" cy="200" r="20" fill="#FEFCBF" opacity="0.7"/>
                <text x="96" y="208" fontSize="16">⭐</text>
                
                <circle cx="410" cy="180" r="21" fill="#E9D8FD" opacity="0.7"/>
                <text x="406" y="188" fontSize="16">💡</text>
              </svg>
            </div>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Personalized Learning Dashboard</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Certificate of Completion</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>24/7 Community Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="auth-right-panel">
          <div className="auth-form-container">
            <h2 className="form-title">Create Account</h2>
            <p className="form-subtitle">Join thousands of students learning smarter</p>
            
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
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

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="••••••••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  required
                />
              </div>

              <div className="terms-checkbox">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    required
                  />
                  <span>I agree to the <a href="#" className="terms-link">Terms & Conditions</a> and <a href="#" className="terms-link">Privacy Policy</a></span>
                </label>
              </div>

              <button type="submit" className="signup-btn">
                Create Account
              </button>
            </form>

            <div className="social-divider">
              <span>Or sign up with</span>
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

            <div className="login-prompt">
              <p>Already have an account? <Link to="/login" className="login-link">Sign In</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

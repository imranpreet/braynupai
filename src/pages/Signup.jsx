import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [agreeNewsletter, setAgreeNewsletter] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!agreeTerms) {
      alert('Please agree to the Terms, Privacy Policy and Fees.');
      return;
    }
    alert('Signup functionality will be implemented with backend!');
  };

  return (
    <div className="auth-page">
      <div className="auth-split-container">
        {/* Left Side - Illustration */}
        <div className="auth-left-panel">
          <div className="illustration-container">
            <div className="startup-logo">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                {/* Rocket */}
                <ellipse cx="100" cy="120" rx="30" ry="60" fill="white"/>
                <path d="M100 50 L130 110 L70 110 Z" fill="white"/>
                <circle cx="100" cy="100" r="15" fill="#E74C3C"/>
                <path d="M70 140 L60 180 L70 165 Z" fill="#ddd"/>
                <path d="M130 140 L140 180 L130 165 Z" fill="#ddd"/>
              </svg>
              <div className="startup-text">STARTUP</div>
            </div>
            
            {/* Decorative circles */}
            <div className="deco-circle circle-1"></div>
            <div className="deco-circle circle-2"></div>
            <div className="deco-circle circle-3"></div>
          </div>
          
          <div className="welcome-text">
            <h1>Get Started!</h1>
            <p className="welcome-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          </div>
          
          <div className="designer-credit">
            <p>Design by <span>Designer Name</span></p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="auth-right-panel">
          <button className="close-btn" onClick={() => window.history.back()}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="auth-form-container">
            <h2 className="form-title">Get your free StartUp account now</h2>
            <p className="form-subtitle">Let's get you all set up so you can verify your personal account and begin setting up your profile.</p>
            
            <form className="auth-form signup-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="📞 456-789"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="example@mail.co.in"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={agreeNewsletter}
                    onChange={(e) => setAgreeNewsletter(e.target.checked)}
                  />
                  <span>Yes, I want to receive email newsletter</span>
                </label>
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                  />
                  <span>I agree to all the <a href="#">Terms</a>, <a href="#">Privacy Policy</a> and <a href="#">Fees</a></span>
                </label>
              </div>

              <button type="submit" className="create-account-btn">
                Create Account
              </button>
            </form>

            <p className="auth-footer">
              Already have an account? <Link to="/login">Log In.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-badge">ABOUT US</div>
          <h1 className="about-main-title">
            Empowering <span className="highlight-text">50,000+ Learners</span> Across{' '}
            <span className="highlight-text">120+ Countries</span>
          </h1>
          <p className="about-subtitle">
            BraynupAI is a revolutionary AI-based IT training platform designed to deliver 
            future-ready education. We specialize in cutting-edge programs that transform 
            careers through innovative AI-powered learning experiences.
          </p>
        </div>
      </section>

      {/* Main Content Section with Image */}
      <section className="about-content-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text-content">
              <div className="section-label">OUR MISSION</div>
              <h2 className="animated-heading">Transforming Lives Through AI Education</h2>
              <p className="about-description">
                At BraynupAI, we are working towards building a more knowledgeable tomorrow. 
                Our commitment lies in making AI education accessible to everyone, everywhere. 
                We've pioneered an innovative approach that combines cutting-edge technology 
                with personalized learning experiences.
              </p>
              <p className="about-description">
                We are dedicated to creating industry-aligned programs that prepare our students 
                for real-world challenges. Our AI-powered platform adapts to each learner's pace, 
                ensuring optimal learning outcomes. With expert mentors and hands-on projects, 
                we bridge the gap between learning and doing.
              </p>
              <p className="about-description">
                Our vision extends beyond traditional education - we're building a global community 
                of tech professionals who are ready to shape the future. Join thousands of learners 
                who have already transformed their careers with BraynupAI.
              </p>
              <button className="learn-more-btn">LEARN MORE</button>
            </div>
            <div className="about-image-content">
              <div className="image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                  alt="BraynupAI Learning Community" 
                  className="about-main-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">50,000+</h3>
              <p className="stat-label">ACTIVE STUDENTS</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">95%</h3>
              <p className="stat-label">PLACEMENT RATE</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">120+</h3>
              <p className="stat-label">COUNTRIES</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">40% AVG.</h3>
              <p className="stat-label">SALARY HIKE</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

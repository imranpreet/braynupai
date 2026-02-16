import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>About BraynupAI</h1>
          <p>Global School of AI Education</p>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            To empower global learners with cutting-edge AI education and transform careers through industry-aligned programs.
          </p>

          <h2>Our Vision</h2>
          <p>
            To become the world's leading AI education platform, serving millions of learners worldwide.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li>🎯 Excellence in Education</li>
            <li>💡 Innovation & Technology</li>
            <li>🌍 Global Accessibility</li>
            <li>🤝 Student Success</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;

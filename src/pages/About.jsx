import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-new section">
      <div className="content-track">
        <div className="about-grid columns">
          {/* LEFT: Heading + feature cards */}
          <div className="column about-left">
            <h2 className="about-title">BraynupAI — Introduction to Transformative AI Learning</h2>
            <p className="about-sub">BraynupAI is a revolutionary AI-based IT training platform designed to deliver future-ready education. We specialize in cutting-edge programs that transform careers.</p>

            <div className="feature-cards">
              <div className="feature-card">
                <div className="feat-icon">✓</div>
                <div className="feat-body">
                  <h4>Best Price Guaranteed</h4>
                  <p>Affordable programs with transparent pricing and scholarship options.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feat-icon">📊</div>
                <div className="feat-body">
                  <h4>Finance Analysis</h4>
                  <p>Career-oriented courses with salary projections and ROI guidance.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feat-icon">👥</div>
                <div className="feat-body">
                  <h4>Professional Team</h4>
                  <p>Expert faculty (IIT & industry veterans) and career mentors.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Two-column descriptive paragraphs */}
          <div className="column about-right">
            <div className="about-paragraphs">
              <div className="para-col">
                <p><strong>Why BraynupAI?</strong> We provide hands-on projects, live mentorship, and community support to help learners acquire real-world skills and land jobs in the AI/IT industry.</p>
                <p>Community support to engineer your skills successfully and live project exposure that builds employer-ready portfolios.</p>
              </div>
              <div className="para-col">
                <p><strong>Expert Faculty</strong> Our instructors include experienced industry professionals and academicians from top institutes providing practical guidance.</p>
                <p>We offer personalized mentorship, mock interviews, portfolio reviews, and continuous career support to ensure you graduate job-ready.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Overlapping visuals */}
        <div className="about-visuals">
          <div className="visual-large" aria-hidden="true" />
          <div className="visual-thumb" role="button" aria-label="Play video">
            <div className="play-circle">▶</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

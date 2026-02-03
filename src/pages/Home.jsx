import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-animation"></div>

        {/* Floating Puzzle Boxes - Right Side */}
        <div className="floating-boxes right-boxes">
          <div className="puzzle-box box-5" data-aos="fade-left">
            <div className="box-icon">📊</div>
            <div className="box-content">
              <h4>Real-Time</h4>
              <p>Analytics</p>
            </div>
          </div>
          <div className="puzzle-box box-6" data-aos="fade-left" data-aos-delay="100">
            <div className="box-icon">🎯</div>
            <div className="box-content">
              <h4>Job Ready</h4>
              <p>Skills</p>
            </div>
          </div>
          <div className="puzzle-box box-7" data-aos="fade-left" data-aos-delay="200">
            <div className="box-icon">🏅</div>
            <div className="box-content">
              <h4>Certified</h4>
              <p>Programs</p>
            </div>
          </div>
          <div className="puzzle-box box-8" data-aos="fade-left" data-aos-delay="300">
            <div className="box-icon">💼</div>
            <div className="box-content">
              <h4>Placement</h4>
              <p>Support</p>
            </div>
          </div>
        </div>
        
        <div className="container hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🚀</span>
            <span>Welcome to the Future of AI Education</span>
          </div>
          
          <h1 className="hero-title">
            Master AI & Transform<br />
            <span className="gradient-text">Your Career Forever</span>
          </h1>
          
          <p className="hero-subtitle">
            Join 50,000+ learners worldwide mastering Digital Marketing with AI 
            and Full Stack Engineering with AI
          </p>
          
          <div className="hero-cta">
            <button className="cta-btn cta-primary">
              Start Free Trial
              <span className="btn-arrow">→</span>
            </button>
            <button className="cta-btn cta-secondary">
              Explore Courses
              <span className="btn-arrow">→</span>
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon">👨‍🎓</div>
              <div className="stat-number">50K+</div>
              <div className="stat-label">Active Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">95%</div>
              <div className="stat-label">Job Placement</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">⭐</div>
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Student Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">10K+</div>
              <div className="stat-label">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About BraynupAI</h2>
            <p className="section-subtitle">
              World's Leading Platform for AI-Powered Education
            </p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <h3>Empowering Global Learners</h3>
              <p>
                BraynupAI is a revolutionary AI-based IT training platform designed to deliver 
                future-ready education. We specialize in two cutting-edge programs:
              </p>
              <ul className="about-features">
                <li>🎯 Digital Marketing with AI - Master the art of AI-powered marketing</li>
                <li>💻 Full Stack Engineering with AI - Build intelligent web applications</li>
                <li>🌍 Global Recognition - Industry-aligned certifications</li>
                <li>📈 Career Transformation - 150% average salary increase</li>
              </ul>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">🧠</span>
                <p>AI Education Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose BraynupAI?</h2>
            <p className="section-subtitle">
              10 Reasons to Start Your AI Journey With Us
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>Expert Faculty</h3>
              <p>Learn from industry professionals with 10+ years of AI experience</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Job Guarantee</h3>
              <p>95% placement rate with top companies like Google, Microsoft, Amazon</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Hands-On Projects</h3>
              <p>Build 50+ real-world AI projects and deploy to production</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Global Network</h3>
              <p>Join 50,000+ learners from 120+ countries worldwide</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3>Flexible Learning</h3>
              <p>Self-paced courses with lifetime access and 24/7 support</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏅</div>
              <h3>Certifications</h3>
              <p>Industry-recognized certificates verified by blockchain technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Courses */}
      <section className="courses-highlight-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Flagship Programs</h2>
            <p className="section-subtitle">
              Transform Your Career with Industry-Leading AI Courses
            </p>
          </div>
          
          <div className="courses-grid">
            {/* Course Card 1 */}
            <div className="course-card">
              <div className="course-image">
                <img src="https://via.placeholder.com/400x200/1a1a1a/e63946?text=BraynupAI+Campus" alt="Campus" />
                <div className="course-badge-top">BraynupAI</div>
              </div>
              <div className="course-content">
                <h3 className="course-title">Digital Marketing with AI & Analytics</h3>
                <div className="course-meta">
                  <span className="course-duration">⏱ 06 Months</span>
                  <span className="course-mode">💻 Online</span>
                </div>
                <p className="course-date">Batch Starts on <strong>13 Jun 2026</strong></p>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="course-card">
              <div className="course-image">
                <img src="https://via.placeholder.com/400x200/1a1a1a/e63946?text=AI+Technology" alt="AI Tech" />
                <div className="course-badge-top">BraynupAI</div>
              </div>
              <div className="course-content">
                <h3 className="course-title">Full Stack Engineering with AI</h3>
                <div className="course-meta">
                  <span className="course-duration">⏱ 06 Months</span>
                  <span className="course-mode">💻 Online</span>
                </div>
                <p className="course-date">Qualifier Test Date <strong>08 Feb 2026</strong></p>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="course-card">
              <div className="course-image">
                <img src="https://via.placeholder.com/400x200/1a1a1a/e63946?text=Modern+Campus" alt="Campus Building" />
                <div className="course-badge-top">IIM Mumbai</div>
              </div>
              <div className="course-content">
                <h3 className="course-title">Advanced Digital Marketing & Analytics</h3>
                <div className="course-meta">
                  <span className="course-duration">⏱ 06 Months</span>
                  <span className="course-mode">💻 Online</span>
                </div>
                <p className="course-date">Qualifier Test Date <strong>08 Feb 2026</strong></p>
              </div>
            </div>

            {/* Course Card 4 */}
            <div className="course-card">
              <div className="course-image">
                <img src="https://via.placeholder.com/400x200/1a1a1a/e63946?text=AI+Institute" alt="Institute" />
                <div className="course-badge-top">IIM Rohtak</div>
              </div>
              <div className="course-content">
                <h3 className="course-title">AI-Powered Product Management & Growth Marketing</h3>
                <div className="course-meta">
                  <span className="course-duration">⏱ 5 Months</span>
                  <span className="course-mode">💻 Online</span>
                </div>
                <p className="course-date">Qualifier Test Date <strong>08 Feb 2026</strong></p>
              </div>
            </div>

            {/* Course Card 5 - Featured */}
            <div className="course-card featured">
              <div className="course-image">
                <img src="https://via.placeholder.com/400x200/e63946/ffffff?text=AI+%26+ML+Program" alt="AI ML" />
                <div className="course-badge-top special">Featured</div>
              </div>
              <div className="course-content">
                <h3 className="course-title">Artificial Intelligence and Machine Learning</h3>
                <div className="course-meta">
                  <span className="course-duration">⏱ 06 Months</span>
                  <span className="course-mode">💻 Online</span>
                </div>
                <button className="learn-more-btn">learn more →</button>
              </div>
            </div>

            {/* Course Card 6 */}
            <div className="course-card">
              <div className="course-image">
                <img src="https://via.placeholder.com/400x200/1a1a1a/e63946?text=Tech+Hub" alt="Tech Hub" />
                <div className="course-badge-top">IHUB Divyasampark</div>
              </div>
              <div className="course-content">
                <h3 className="course-title">Certification Program in Agentic Systems and Design</h3>
                <div className="course-meta">
                  <span className="course-duration">⏱ 06 Months</span>
                  <span className="course-mode">💻 Online</span>
                </div>
                <p className="course-date">Qualifier Test Date <strong>08 Feb 2026</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="partners-section">
        <div className="container">
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <div className="partners-slider">
            <div className="partner-logo">Google</div>
            <div className="partner-logo">Microsoft</div>
            <div className="partner-logo">Amazon</div>
            <div className="partner-logo">Meta</div>
            <div className="partner-logo">IBM</div>
            <div className="partner-logo">Tesla</div>
          </div>
        </div>
      </section>

      {/* Student Reviews */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Student Success Stories</h2>
            <p className="section-subtitle">
              Hear from our amazing alumni who transformed their careers
            </p>
          </div>
          
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">
                "BraynupAI changed my life! I went from zero coding to landing a $120K job at Google in just 6 months. The AI curriculum is outstanding!"
              </p>
              <div className="review-author">
                <div className="author-avatar">RS</div>
                <div className="author-info">
                  <h4>Rahul Sharma</h4>
                  <p>Full Stack Engineer at Google</p>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">
                "The Digital Marketing with AI course helped me 3x my client revenue. The hands-on projects and mentor support are incredible!"
              </p>
              <div className="review-author">
                <div className="author-avatar">PK</div>
                <div className="author-info">
                  <h4>Priya Kapoor</h4>
                  <p>Digital Marketing Manager at Amazon</p>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">
                "Best investment in my career! The AI integration in Full Stack course is cutting-edge. Now working at Microsoft!"
              </p>
              <div className="review-author">
                <div className="author-avatar">AJ</div>
                <div className="author-info">
                  <h4>Amit Joshi</h4>
                  <p>Senior Developer at Microsoft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about BraynupAI
            </p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>❓ Who can join these courses?</h3>
              <p>UG & PG students, working professionals, entrepreneurs, and anyone interested in AI-powered IT skills. No prior experience required for beginner tracks.</p>
            </div>
            <div className="faq-item">
              <h3>❓ What's included in the course?</h3>
              <p>Live sessions, recorded lectures, hands-on projects, 24/7 mentor support, industry certifications, and lifetime access to all materials.</p>
            </div>
            <div className="faq-item">
              <h3>❓ Is job placement guaranteed?</h3>
              <p>Yes! We have 95% placement rate with our Job Guarantee Program. Average salary hike is 150% for our graduates.</p>
            </div>
            <div className="faq-item">
              <h3>❓ What payment options are available?</h3>
              <p>We offer flexible EMI options, one-time payment discounts, and early bird offers. Multiple payment gateways supported.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enroll CTA Section */}
      <section className="enroll-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Career?</h2>
            <p>Join 50,000+ students who are building their AI-powered future</p>
            <div className="cta-buttons">
              <button className="cta-btn cta-large cta-primary">
                Enroll Now - Get 50% Off
              </button>
              <button className="cta-btn cta-large cta-secondary">
                Schedule Free Counseling
              </button>
            </div>
            <p className="cta-note">
              🔥 Limited Time Offer - Only 50 seats left this month!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

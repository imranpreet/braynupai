import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-icon">🎓</span>
                <span>ONLINE LEARNING COURSE</span>
              </div>
              
              <h1 className="hero-title">
                Online Education<br />
                <span className="title-highlight">Feels Like Real Classroom</span>
              </h1>

              <div className="hero-features-list">
                <div className="feature-item">
                  <span className="check-icon">✓</span>
                  <span>Get Certified</span>
                </div>
                <div className="feature-item">
                  <span className="check-icon">✓</span>
                  <span>Daily Lectures 50+</span>
                </div>
                <div className="feature-item">
                  <span className="check-icon">✓</span>
                  <span>Course Life</span>
                </div>
              </div>

              <div className="hero-buttons">
                <button className="cta-btn cta-primary">Get Started</button>
                <button className="cta-btn cta-secondary">Learn More ▶</button>
              </div>
            </div>

            <div className="hero-image-section">
              <div className="hero-circle-bg"></div>
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=700&fit=crop" 
                alt="Student Learning" 
                className="hero-student-image"
              />
              
              <div className="stat-badge badge-students">
                <div className="stat-icon">👥</div>
                <div className="stat-content">
                  <div className="stat-number">16500+</div>
                  <div className="stat-label">Total Students</div>
                </div>
              </div>

              <div className="stat-badge badge-courses">
                <div className="stat-icon">📚</div>
                <div className="stat-content">
                  <div className="stat-number">7500+</div>
                  <div className="stat-label">Total Courses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features Icons */}
      <section className="quick-features">
        <div className="container">
          <div className="features-row">
            <div className="feature-box">
              <div className="feature-icon-circle">📖</div>
              <div className="feature-text">300+ Online Courses</div>
            </div>
            <div className="feature-box">
              <div className="feature-icon-circle">🎯</div>
              <div className="feature-text">Lifetime Access</div>
            </div>
            <div className="feature-box">
              <div className="feature-icon-circle">💰</div>
              <div className="feature-text">Value For Money</div>
            </div>
            <div className="feature-box">
              <div className="feature-icon-circle">🤝</div>
              <div className="feature-text">Lifetime Support</div>
            </div>
            <div className="feature-box">
              <div className="feature-icon-circle">👥</div>
              <div className="feature-text">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-layout">
            <div className="mission-left">
              <div className="mission-image-wrapper">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop" alt="Students learning together" className="mission-image" />
                <div className="mission-play-button">
                  <div className="play-icon">▶</div>
                </div>
              </div>
            </div>
            <div className="mission-right">
              <div className="section-label">GET TO KNOW ABOUT US</div>
              <h2 className="section-title">Dive into our Online Courses<br />and Ignite Your Learning!</h2>
              <p className="section-description">
                BraynupAI is a revolutionary AI-based IT training platform designed to deliver 
                future-ready education. We specialize in cutting-edge programs that transform careers.
              </p>
              <ul className="mission-features">
                <li>
                  <span className="check-mark">✓</span>
                  Community support to engineer your skills successfully
                </li>
                <li>
                  <span className="check-mark">✓</span>
                  Expert faculty from IIT 30+ years for best guidance
                </li>
                <li>
                  <span className="check-mark">✓</span>
                  Learn the language from top notch programs every week
                </li>
              </ul>
              <button className="cta-btn cta-primary">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="popular-courses-section">`
        <div className="container">
          <div className="section-header-center">
            <div className="section-label">POPULAR COURSES</div>
            <h2 className="section-title">Our Popular Online Courses</h2>
          </div>
          
          <div className="course-categories">
            <button className="category-btn active">Digital Marketing</button>
            <button className="category-btn">UI/UX Design</button>
            <button className="category-btn">Graphic Design</button>
            <button className="category-btn">Web Development</button>
          </div>
          
          <div className="courses-grid">
            <div className="course-card">
              <div className="course-image-container">
                <img src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=400&h=250&fit=crop" alt="Course" className="course-image" />
                <div className="course-badge badge-red">BESTSELLER</div>
              </div>
              <div className="course-content">
                <div className="course-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating-number">(5.0)</span>
                </div>
                <h3 className="course-title">Learn Figma – UI/UX Design Essential Training</h3>
                <div className="course-footer">
                  <div className="course-author">
                    <div className="author-avatar">K</div>
                    <span>Kevin Perry</span>
                  </div>
                  <div className="course-price">FREE</div>
                </div>
              </div>
            </div>
            
            <div className="course-card">
              <div className="course-image-container">
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop" alt="Course" className="course-image" />
                <div className="course-badge badge-red">HOT</div>
              </div>
              <div className="course-content">
                <div className="course-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating-number">(4.9)</span>
                </div>
                <h3 className="course-title">Education Software and PHP and JS System Script</h3>
                <div className="course-footer">
                  <div className="course-author">
                    <div className="author-avatar">M</div>
                    <span>Max Alexa</span>
                  </div>
                  <div className="course-price">FREE</div>
                </div>
              </div>
            </div>
            
            <div className="course-card">
              <div className="course-image-container">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop" alt="Course" className="course-image" />
                <div className="course-badge badge-red">NEW</div>
              </div>
              <div className="course-content">
                <div className="course-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating-number">(5.0)</span>
                </div>
                <h3 className="course-title">IT Statistics Data Science and Business Analysis</h3>
                <div className="course-footer">
                  <div className="course-author">
                    <div className="author-avatar">J</div>
                    <span>Janet More</span>
                  </div>
                  <div className="course-price">FREE</div>
                </div>
              </div>
            </div>
            
            <div className="course-card">
              <div className="course-image-container">
                <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?w=400&h=250&fit=crop" alt="Course" className="course-image" />
                <div className="course-badge badge-red">TRENDING</div>
              </div>
              <div className="course-content">
                <div className="course-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating-number">(4.8)</span>
                </div>
                <h3 className="course-title">Advanced Android 12 & Kotlin Development Course</h3>
                <div className="course-footer">
                  <div className="course-author">
                    <div className="author-avatar">R</div>
                    <span>Rosy Adams</span>
                  </div>
                  <div className="course-price">FREE</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="view-all-section">
            <button className="cta-btn cta-primary">View All Courses</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-layout">
            <div className="about-content">
              <div className="section-label">ABOUT US</div>
              <h2 className="section-title">
                Empowering <span className="highlight-text">50,000+ Learners</span><br />
                Across 120+ Countries
              </h2>
              <p className="about-description">
                BraynupAI is a revolutionary AI-based IT training platform designed to deliver 
                future-ready education. We specialize in cutting-edge programs that transform careers 
                through innovative AI-powered learning experiences.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Active Students</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Placement Rate</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">120+</div>
                  <div className="stat-label">Countries</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">150%</div>
                  <div className="stat-label">Avg. Salary Hike</div>
                </div>
              </div>
            </div>
            <div className="about-video">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/JMUxmLyrhSk"
                  title="BraynupAI Education"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="video-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-label">WHY CHOOSE US</div>
            <h2 className="section-title">10 Reasons to Start Your <span className="highlight-text">AI Journey</span> With Us</h2>
          </div>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🎓</div>
              <h3>Expert Faculty</h3>
              <p>Learn from industry professionals with 10+ years of AI experience</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💼</div>
              <h3>Job Guarantee</h3>
              <p>95% placement rate with top companies like Google, Microsoft, Amazon</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🚀</div>
              <h3>Hands-On Projects</h3>
              <p>Build real-world AI projects and deploy to production</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🌐</div>
              <h3>Global Network</h3>
              <p>Join 50,000+ learners from 120+ countries worldwide</p>
            </div>
            <div className="why-card">
              <div className="why-icon">⏰</div>
              <h3>Flexible Learning</h3>
              <p>Self-paced courses with lifetime access and 24/7 support</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🏅</div>
              <h3>Certifications</h3>
              <p>Industry-recognized certificates verified by blockchain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Programs */}
      <section className="programs-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-label">OUR PROGRAMS</div>
            <h2 className="section-title">Our <span className="highlight-text">Flagship Programs</span></h2>
            <p className="section-description">Transform Your Career with Industry-Leading AI Courses</p>
          </div>
          
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-badge">🔥 Trending</div>
              <div className="program-icon">🎯</div>
              <h3>Digital Marketing with AI</h3>
              <p>Master AI-powered marketing strategies and analytics</p>
              <ul className="program-features">
                <li>✓ 6 Months Duration</li>
                <li>✓ 50+ Live Projects</li>
                <li>✓ Job Guarantee</li>
              </ul>
              <button className="program-btn">Learn More →</button>
            </div>

            <div className="program-card featured">
              <div className="program-badge special">⭐ Most Popular</div>
              <div className="program-icon">💻</div>
              <h3>Full Stack Engineering with AI</h3>
              <p>Build intelligent web applications with AI integration</p>
              <ul className="program-features">
                <li>✓ 6 Months Duration</li>
                <li>✓ MERN + AI Stack</li>
                <li>✓ 95% Placement</li>
              </ul>
              <button className="program-btn primary">Enroll Now →</button>
            </div>

            <div className="program-card">
              <div className="program-badge">🚀 New</div>
              <div className="program-icon">🤖</div>
              <h3>AI & Machine Learning</h3>
              <p>Deep dive into artificial intelligence and ML algorithms</p>
              <ul className="program-features">
                <li>✓ 6 Months Duration</li>
                <li>✓ Advanced AI Projects</li>
                <li>✓ Industry Certification</li>
              </ul>
              <button className="program-btn">Learn More →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-label">TESTIMONIALS</div>
            <h2 className="section-title">Student <span className="highlight-text">Success Stories</span></h2>
            <p className="section-description">Hear from our amazing alumni who transformed their careers</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "BraynupAI changed my life! I went from zero coding to landing a $120K job at Google in just 6 months. The AI curriculum is outstanding!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">RS</div>
                <div className="author-details">
                  <h4>Rahul Sharma</h4>
                  <p>Full Stack Engineer at Google</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card featured">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "The Digital Marketing with AI course helped me 3x my client revenue. The hands-on projects and mentor support are incredible!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">PK</div>
                <div className="author-details">
                  <h4>Priya Kapoor</h4>
                  <p>Digital Marketing Manager at Amazon</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Best investment in my career! The AI integration in Full Stack course is cutting-edge. Now working at Microsoft!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">AJ</div>
                <div className="author-details">
                  <h4>Amit Joshi</h4>
                  <p>Software Engineer at Microsoft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <h3 className="partners-title">Trusted by Industry Leaders</h3>
          <div className="partners-grid">
            <div className="partner-item">
              <div className="partner-logo">Google</div>
            </div>
            <div className="partner-item">
              <div className="partner-logo">Microsoft</div>
            </div>
            <div className="partner-item">
              <div className="partner-logo">Amazon</div>
            </div>
            <div className="partner-item">
              <div className="partner-logo">Meta</div>
            </div>
            <div className="partner-item">
              <div className="partner-logo">Netflix</div>
            </div>
            <div className="partner-item">
              <div className="partner-logo">Tesla</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Frequently Asked <span className="highlight-text">Questions</span></h2>
            <p className="section-description">Everything you need to know about BraynupAI</p>
          </div>
          
          <div className="faq-list">
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

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Transform Your Career?</h2>
            <p>Join 50,000+ students who are building their AI-powered future</p>
            <div className="cta-buttons">
              <button className="cta-btn cta-primary">
                Enroll Now - Get 50% Off
              </button>
              <button className="cta-btn cta-secondary">
                Schedule Free Counseling
              </button>
            </div>
            <p className="cta-urgency">⏰ Limited seats available - Batch starts in 3 days!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

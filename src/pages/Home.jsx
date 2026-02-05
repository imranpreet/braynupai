import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [detailOverlay, setDetailOverlay] = useState(null);

  const phaseDetails = {
    foundation: {
      title: "Week 1-2: Foundation & Onboarding",
      icon: "🎓",
      description: "Start your journey with a comprehensive orientation program designed to set you up for success.",
      highlights: [
        "Welcome orientation with program overview and expectations",
        "Meet your dedicated mentors and join your learning cohort",
        "Set up complete development environment and tools",
        "Introduction to version control (Git & GitHub)",
        "Basic programming fundamentals refresher",
        "Time management and study strategies",
        "Access to learning resources and community platforms",
        "First coding assignment to assess baseline skills",
        "Weekly check-ins and progress tracking setup"
      ],
      tools: ["VS Code", "Git", "GitHub", "Slack", "Zoom"],
      outcomes: "By the end of Week 2, you'll have a fully configured development environment, understand the program structure, and be ready to dive into intensive skill development with a supportive community behind you.",
      images: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
      ]
    },
    core: {
      title: "Week 3-8: Core Skills Development",
      icon: "💻",
      description: "Dive deep into your chosen specialization with intensive hands-on training and real-world projects.",
      highlights: [
        "50+ live interactive coding sessions with expert instructors",
        "Master frontend (React, Vue) or backend (Node.js, Python, Django) technologies",
        "In-depth data structures and algorithms training",
        "Build 7 progressive mini-projects from scratch",
        "Code reviews and peer programming sessions",
        "Weekly assessments to track your progress",
        "Debug and problem-solving workshops",
        "Introduction to testing and quality assurance",
        "Agile development methodologies"
      ],
      tools: ["React", "Node.js", "Python", "MongoDB", "PostgreSQL", "Docker"],
      outcomes: "Complete this phase with strong foundational skills in your chosen tech stack, a portfolio of 7 working projects, and the confidence to tackle complex programming challenges independently.",
      images: [
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
      ]
    },
    advanced: {
      title: "Week 9-16: Advanced Concepts & Specialization",
      icon: "🚀",
      description: "Master cutting-edge technologies and advanced architectural patterns used by industry leaders.",
      highlights: [
        "AI/ML integration with TensorFlow and PyTorch basics",
        "Cloud architecture on AWS, Azure, or Google Cloud",
        "Microservices architecture and containerization",
        "Advanced React patterns and state management (Redux, Context)",
        "RESTful API design and GraphQL",
        "WebSockets and real-time applications",
        "Security best practices and authentication (OAuth, JWT)",
        "Performance optimization and scalability",
        "CI/CD pipelines and DevOps fundamentals"
      ],
      tools: ["AWS", "Kubernetes", "Redis", "GraphQL", "TensorFlow", "Jenkins"],
      outcomes: "Emerge as an advanced developer capable of designing scalable systems, implementing modern architectural patterns, and working with enterprise-level technologies.",
      images: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
      ]
    },
    capstone: {
      title: "Week 17-20: Capstone & Portfolio Development",
      icon: "📁",
      description: "Build your flagship project that showcases all your skills and creates a stunning professional portfolio.",
      highlights: [
        "Design and develop a complete full-stack application from scratch",
        "Implement all modern best practices and design patterns",
        "Create comprehensive project documentation",
        "Build a professional portfolio website showcasing your work",
        "Write compelling project descriptions and case studies",
        "Resume building with ATS optimization",
        "LinkedIn profile optimization for recruiters",
        "GitHub profile enhancement and README best practices",
        "Present your capstone project to peers and mentors"
      ],
      tools: ["React", "Node.js", "AWS", "MongoDB", "Git", "Figma"],
      outcomes: "Graduate with a production-ready capstone project deployed live, a professional portfolio that stands out to employers, and all materials needed to land interviews at top companies.",
      images: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
      ]
    },
    interview: {
      title: "Week 21-24: Interview Prep & Job Placement",
      icon: "🎯",
      description: "Master the interview process with intensive preparation, mock interviews, and direct company connections.",
      highlights: [
        "Data structures & algorithms interview training (150+ problems)",
        "System design interviews for senior positions",
        "Behavioral interview preparation with STAR method",
        "15+ mock interviews with experienced interviewers",
        "Company-specific interview preparation guides",
        "Salary negotiation strategies and techniques",
        "Direct referrals to 50+ partner companies",
        "Resume reviews and cover letter optimization",
        "Post-offer negotiation support and guidance"
      ],
      tools: ["LeetCode", "HackerRank", "Pramp", "interviewing.io"],
      outcomes: "Walk into interviews with confidence, having practiced with real interview scenarios. Our alumni report 3-5 job offers on average, with salary increases of 50-150% compared to their previous roles.",
      images: [
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
      ]
    },
    career: {
      title: "Week 25+: Career Launch & Ongoing Support",
      icon: "🏆",
      description: "Celebrate your success and continue growing with lifetime career support, networking, and continuous learning.",
      highlights: [
        "Job offer acceptance guidance and contract review",
        "First 90 days on-the-job support and mentorship",
        "Access to exclusive alumni network of 10,000+ professionals",
        "Monthly alumni events, webinars, and workshops",
        "Advanced upskilling courses and certifications",
        "Career transitions and promotions guidance",
        "Startup founding support and resources",
        "Freelancing and consulting opportunities",
        "Lifetime access to all course updates and new content"
      ],
      tools: ["LinkedIn", "Blind", "Levels.fyi", "Company Slack Channels"],
      outcomes: "Join a thriving community of successful alumni, continue learning and growing throughout your career, and give back by mentoring the next generation of developers. Our community is your competitive advantage for life.",
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
      ]
    }
  };

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

      {/* Learning Journey Section */}
      <section className="learning-journey-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-label">YOUR PATH TO SUCCESS</div>
            <h2 className="section-title">Complete Learning <span className="highlight-text">Journey</span></h2>
            <p className="section-description">
              From basics to advanced concepts - follow our structured 24-week program
            </p>
          </div>
          
          <div className="journey-grid">
            {/* Foundation Card */}
            <div className="journey-card" data-phase="foundation">
              <div className="journey-card-inner">
                <div className="journey-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop" 
                    alt="Foundation & Onboarding" 
                    className="journey-image"
                  />
                  <div className="journey-icon">🎓</div>
                </div>
                <div className="journey-content">
                  <h3 className="journey-title">Week 1-2: Foundation & Onboarding</h3>
                  <p className="journey-description">
                    Start with a comprehensive orientation where you'll meet your mentors, join your cohort, 
                    and set up your development environment.
                  </p>
                  <div className="journey-tags">
                    <span className="journey-tag">✓ Welcome Kit</span>
                    <span className="journey-tag">✓ Mentor Assignment</span>
                    <span className="journey-tag">✓ Dev Environment Setup</span>
                  </div>
                  <button className="journey-expand-btn" onClick={() => setDetailOverlay('foundation')}>
                    ▼ View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Core Skills Card */}
            <div className="journey-card" data-phase="core">
              <div className="journey-card-inner">
                <div className="journey-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop" 
                    alt="Core Skills Development" 
                    className="journey-image"
                  />
                  <div className="journey-icon">💻</div>
                </div>
                <div className="journey-content">
                  <h3 className="journey-title">Week 3-8: Core Skills Development</h3>
                  <p className="journey-description">
                    Dive deep into your chosen specialization. Master frontend or backend technologies, 
                    data structures, and algorithms.
                  </p>
                  <div className="journey-tags">
                    <span className="journey-tag">✓ 50+ Live Sessions</span>
                    <span className="journey-tag">✓ 7 Mini Projects</span>
                    <span className="journey-tag">✓ Weekly Assessments</span>
                  </div>
                  <button className="journey-expand-btn" onClick={() => setDetailOverlay('core')}>
                    ▼ View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Advanced Card */}
            <div className="journey-card" data-phase="advanced">
              <div className="journey-card-inner">
                <div className="journey-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                    alt="Advanced Concepts" 
                    className="journey-image"
                  />
                  <div className="journey-icon">🚀</div>
                </div>
                <div className="journey-content">
                  <h3 className="journey-title">Week 9-16: Advanced Concepts & Specialization</h3>
                  <p className="journey-description">
                    Master advanced topics including AI/ML integration, cloud architecture, and microservices.
                  </p>
                  <div className="journey-tags">
                    <span className="journey-tag">✓ Advanced Projects</span>
                    <span className="journey-tag">✓ Cloud Deployment</span>
                    <span className="journey-tag">✓ Industry Best Practices</span>
                  </div>
                  <button className="journey-expand-btn" onClick={() => setDetailOverlay('advanced')}>
                    ▼ View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Capstone Card */}
            <div className="journey-card" data-phase="capstone">
              <div className="journey-card-inner">
                <div className="journey-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                    alt="Capstone Project" 
                    className="journey-image"
                  />
                  <div className="journey-icon">📁</div>
                </div>
                <div className="journey-content">
                  <h3 className="journey-title">Week 17-20: Capstone & Portfolio Development</h3>
                  <p className="journey-description">
                    Build your flagship capstone project showcasing all your skills. Create professional portfolio.
                  </p>
                  <div className="journey-tags">
                    <span className="journey-tag">✓ Capstone Project</span>
                    <span className="journey-tag">✓ Portfolio Website</span>
                    <span className="journey-tag">✓ Resume Building</span>
                  </div>
                  <button className="journey-expand-btn" onClick={() => setDetailOverlay('capstone')}>
                    ▼ View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Interview Card */}
            <div className="journey-card" data-phase="interview">
              <div className="journey-card-inner">
                <div className="journey-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop" 
                    alt="Interview Preparation" 
                    className="journey-image"
                  />
                  <div className="journey-icon">🎯</div>
                </div>
                <div className="journey-content">
                  <h3 className="journey-title">Week 21-24: Interview Prep & Job Placement</h3>
                  <p className="journey-description">
                    Master the preparation process with mock interviews and coding challenges.
                  </p>
                  <div className="journey-tags">
                    <span className="journey-tag">✓ DSA Interview</span>
                    <span className="journey-tag">✓ Company Referrals</span>
                    <span className="journey-tag">✓ Offer Negotiations</span>
                  </div>
                  <button className="journey-expand-btn" onClick={() => setDetailOverlay('interview')}>
                    ▼ View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Career Card */}
            <div className="journey-card" data-phase="career">
              <div className="journey-card-inner">
                <div className="journey-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                    alt="Career Launch" 
                    className="journey-image"
                  />
                  <div className="journey-icon">🏆</div>
                </div>
                <div className="journey-content">
                  <h3 className="journey-title">Week 25+: Career Launch & Ongoing Support</h3>
                  <p className="journey-description">
                    Land your dream job and continue growing with lifetime career support and resources.
                  </p>
                  <div className="journey-tags">
                    <span className="journey-tag">✓ Job Offers</span>
                    <span className="journey-tag">✓ Alumni Network</span>
                    <span className="journey-tag">✓ Lifetime Updates</span>
                  </div>
                  <button className="journey-expand-btn" onClick={() => setDetailOverlay('career')}>
                    ▼ View Details
                  </button>
                </div>
              </div>
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

      {/* Detail Overlay Modal */}
      {detailOverlay && (
        <div className="detail-overlay" onClick={() => setDetailOverlay(null)}>
          <div className="detail-overlay-container" onClick={(e) => e.stopPropagation()}>
            <button className="detail-close-btn" onClick={() => setDetailOverlay(null)}>
              ×
            </button>
            
            <div className="detail-split-screen">
              {/* Left Side - Content */}
              <div className="detail-left-content">
                <div className="detail-header">
                  <div className="detail-icon">{phaseDetails[detailOverlay].icon}</div>
                  <h2 className="detail-title">{phaseDetails[detailOverlay].title}</h2>
                </div>
                
                <p className="detail-description">{phaseDetails[detailOverlay].description}</p>
                
                <div className="detail-section">
                  <h3 className="detail-section-title">📚 Key Highlights</h3>
                  <ul className="detail-highlights-list">
                    {phaseDetails[detailOverlay].highlights.map((highlight, index) => (
                      <li key={index} className="detail-highlight-item">{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="detail-section">
                  <h3 className="detail-section-title">🛠️ Technologies & Tools</h3>
                  <div className="detail-tools-grid">
                    {phaseDetails[detailOverlay].tools.map((tool, index) => (
                      <span key={index} className="detail-tool-badge">{tool}</span>
                    ))}
                  </div>
                </div>
                
                <div className="detail-section">
                  <h3 className="detail-section-title">🎯 Learning Outcomes</h3>
                  <p className="detail-outcomes">{phaseDetails[detailOverlay].outcomes}</p>
                </div>
              </div>
              
              {/* Right Side - Image Slideshow */}
              <div className="detail-right-images">
                <div className="detail-slideshow">
                  {phaseDetails[detailOverlay].images.map((image, index) => (
                    <div key={index} className="detail-slide" style={{ animationDelay: `${index * 4}s` }}>
                      <img src={image} alt={`${phaseDetails[detailOverlay].title} - Image ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

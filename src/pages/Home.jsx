import React, { useState, useRef } from 'react';
import './Home.css';

function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const testimonialScrollRef = useRef(null);

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const scrollTestimonials = (direction) => {
    if (testimonialScrollRef.current) {
      const scrollAmount = 420;
      testimonialScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Detailed person data
  const personDetails = {
    'kamya': {
      name: 'Kamya Malhotra',
      role: 'Statistical Analyst',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      journey: {
        before: 'Fresh graduate with a degree in Mathematics, struggling to find relevant job opportunities',
        started: 'Enrolled in BraynupAI\'s Data Science & AI program in January 2024',
        learning: [
          'Completed Python & Statistics fundamentals in first 2 months',
          'Mastered Machine Learning algorithms and data visualization',
          'Built 8 real-world projects including predictive analytics models',
          'Learned advanced SQL, Tableau, and AI integration'
        ],
        growth: [
          'Started as complete beginner in programming',
          'Became proficient in Python, R, and SQL within 4 months',
          'Developed strong portfolio with end-to-end data projects',
          'Received multiple job offers from top companies'
        ],
        outcome: 'Landed job as Statistical Analyst with 8 LPA salary package within 6 months of starting the course',
        achievement: 'Now working on critical healthcare analytics projects, helping hospitals optimize patient care'
      }
    },
    'rahul': {
      name: 'Rahul Sharma',
      role: 'Full Stack Engineer at Google',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      journey: {
        before: 'Non-tech background, worked in retail management with zero coding experience',
        started: 'Joined BraynupAI\'s Full Stack Development with AI program in March 2024',
        learning: [
          'Started with HTML, CSS, JavaScript basics',
          'Progressed to React, Node.js, and MongoDB',
          'Learned AI integration, prompt engineering, and automation',
          'Built 12+ full-stack applications including e-commerce and social platforms'
        ],
        growth: [
          'From zero coding knowledge to full-stack developer in 6 months',
          'Contributed to open-source projects',
          'Participated in hackathons and won 2 competitions',
          'Developed strong problem-solving and system design skills'
        ],
        outcome: 'Cracked Google interview and secured $120K package',
        achievement: 'Currently working on Google Cloud products, mentoring junior developers'
      }
    },
    'priya': {
      name: 'Priya Kapoor',
      role: 'Digital Marketing Manager at Amazon',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      journey: {
        before: 'Traditional marketer with basic digital skills, struggling to scale client businesses',
        started: 'Enrolled in Digital Marketing with AI course in February 2024',
        learning: [
          'Mastered AI-powered marketing automation tools',
          'Learned advanced SEO, SEM, and social media advertising',
          'Campaign optimization using machine learning',
          'Data analytics and conversion rate optimization'
        ],
        growth: [
          'Transformed from traditional to AI-powered marketer',
          'Increased client ROI by average 300%',
          'Built personal brand with 50K+ followers',
          'Became certified in Google Ads, Facebook, and AI marketing'
        ],
        outcome: 'Tripled client revenue and got recruited by Amazon',
        achievement: 'Managing multi-million dollar campaigns for Amazon Prime'
      }
    },
    'amit': {
      name: 'Amit Joshi',
      role: 'Software Engineer at Microsoft',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      journey: {
        before: 'Computer Science graduate from tier-3 college with limited practical skills',
        started: 'Joined Full Stack with AI Integration program in April 2024',
        learning: [
          'Deep dive into modern JavaScript frameworks',
          'Backend development with Node.js and microservices',
          'Cloud computing (Azure, AWS) and DevOps',
          'AI/ML integration in web applications'
        ],
        growth: [
          'Enhanced coding skills from basic to advanced level',
          'Built scalable applications with 10K+ users',
          'Contributed to 15+ GitHub projects',
          'Cleared 8 company interviews including FAANG'
        ],
        outcome: 'Received 4 job offers, chose Microsoft with 28 LPA package',
        achievement: 'Working on Microsoft Teams, implementing AI features'
      }
    },
    'sneha': {
      name: 'Sneha Kulkarni',
      role: 'ML Engineer at IBM',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      journey: {
        before: 'Commerce graduate with interest in AI but no technical background',
        started: 'Started Machine Learning specialization in January 2024',
        learning: [
          'Python programming from scratch',
          'Mathematics for ML (Linear Algebra, Statistics)',
          'Deep Learning, Neural Networks, NLP',
          'Built 10 ML models including image recognition and chatbots'
        ],
        growth: [
          'Complete career switch from commerce to tech',
          'Published 3 ML research papers',
          'Won IBM AI Challenge 2024',
          'Became AI community influencer'
        ],
        outcome: 'Got placed at IBM as ML Engineer with 22 LPA',
        achievement: 'Developing AI solutions for Fortune 500 clients'
      }
    },
    'vikram': {
      name: 'Vikram Gupta',
      role: 'Data Scientist at Accenture',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      journey: {
        before: 'Mechanical engineer with 3 years experience, wanted career change',
        started: 'Enrolled in Data Science program in March 2024',
        learning: [
          'Data analysis with Python, Pandas, NumPy',
          'Advanced statistics and hypothesis testing',
          'Machine Learning and predictive modeling',
          'Big Data tools: Spark, Hadoop'
        ],
        growth: [
          'Successfully transitioned from mechanical to data science',
          'Built impressive portfolio with 15 projects',
          'Expertise in data visualization and storytelling',
          'Got 180% salary hike'
        ],
        outcome: 'Joined Accenture as Data Scientist with 18 LPA',
        achievement: 'Leading data analytics team for retail clients'
      }
    },
    'neha': {
      name: 'Neha Patel',
      role: 'AI Team Lead at Infosys',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      journey: {
        before: 'Working professional in IT with 5 years experience, wanted to upskill in AI',
        started: 'Joined AI Engineering course while working full-time in May 2024',
        learning: [
          'Advanced AI/ML algorithms and frameworks',
          'Natural Language Processing and Computer Vision',
          'MLOps and model deployment',
          'AI ethics and responsible AI development'
        ],
        growth: [
          'Balanced full-time job with learning',
          'Implemented AI solutions in current company',
          'Got promoted twice during the course',
          'Became AI thought leader in organization'
        ],
        outcome: 'Promoted to AI Team Lead with 40% salary increase',
        achievement: 'Managing team of 12 engineers, driving AI transformation'
      }
    },
    'rohan': {
      name: 'Rohan Kumar',
      role: 'Cloud Architect at AWS',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop',
      journey: {
        before: 'Mechanical engineer feeling stuck in career, no IT background',
        started: 'Enrolled in Cloud Computing with AI in February 2024',
        learning: [
          'AWS, Azure, Google Cloud fundamentals',
          'Infrastructure as Code (Terraform, CloudFormation)',
          'Kubernetes, Docker, and containerization',
          'AI/ML services on cloud platforms'
        ],
        growth: [
          'Career pivot from mechanical to cloud computing',
          'Got AWS Solutions Architect certification',
          'Built and deployed 20+ cloud applications',
          'Mastered DevOps and CI/CD pipelines'
        ],
        outcome: 'Hired by AWS as Cloud Solutions Architect with 32 LPA',
        achievement: 'Designing cloud infrastructure for enterprise clients'
      }
    },
    'anjali': {
      name: 'Anjali Desai',
      role: 'Senior UX Designer at Adobe',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
      journey: {
        before: 'Graphic designer with basic UI skills, wanted to transition to UX',
        started: 'Joined UI/UX with AI Integration course in April 2024',
        learning: [
          'User research and design thinking methodologies',
          'Figma, Adobe XD, and prototyping tools',
          'AI-powered design automation and testing',
          'Accessibility and inclusive design principles'
        ],
        growth: [
          'Transformed from graphic designer to UX expert',
          'Built portfolio with 25+ UX case studies',
          'Learned to integrate AI in design workflow',
          'Won 3 design competitions'
        ],
        outcome: 'Landed Senior UX role at Adobe within 2 months',
        achievement: 'Designing next-generation creative tools at Adobe'
      }
    },
    'manish': {
      name: 'Manish Singh',
      role: 'DevOps Engineer at Netflix',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
      journey: {
        before: 'System administrator wanting to move to DevOps',
        started: 'Started DevOps with AI course in March 2024',
        learning: [
          'Linux administration and scripting',
          'CI/CD pipelines with Jenkins, GitLab',
          'Container orchestration with Kubernetes',
          'Monitoring tools and AI-powered automation'
        ],
        growth: [
          'Advanced from sysadmin to DevOps engineer',
          'Automated 100+ manual processes',
          'Reduced deployment time by 80%',
          'Became Kubernetes certified'
        ],
        outcome: 'Recruited by Netflix with 35 LPA package',
        achievement: 'Managing Netflix\'s streaming infrastructure'
      }
    },
    'karan': {
      name: 'Karan Mehta',
      role: 'Blockchain Developer at Coinbase',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop',
      journey: {
        before: 'Developer interested in blockchain but limited knowledge',
        started: 'Enrolled in Blockchain Development program in January 2024',
        learning: [
          'Blockchain fundamentals and cryptography',
          'Smart contract development with Solidity',
          'DApp development and Web3.js',
          'DeFi protocols and NFT development'
        ],
        growth: [
          'Mastered blockchain technology stack',
          'Built 5 DApps and multiple smart contracts',
          'Contributed to open-source blockchain projects',
          'Became blockchain security expert'
        ],
        outcome: 'Secured position at Coinbase with $95K salary',
        achievement: 'Developing secure crypto trading features'
      }
    },
    'divya': {
      name: 'Divya Rao',
      role: 'Product Manager at Salesforce',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
      journey: {
        before: 'Software engineer wanting to transition to product management',
        started: 'Joined Product Management with AI course in February 2024',
        learning: [
          'Product strategy and roadmap planning',
          'User research and market analysis',
          'Agile methodologies and sprint planning',
          'AI-powered product analytics'
        ],
        growth: [
          'Successfully transitioned from engineering to product',
          'Launched 3 successful products during course',
          'Built strong stakeholder management skills',
          'Learned data-driven decision making'
        ],
        outcome: 'Hired by Salesforce as Product Manager with 30 LPA',
        achievement: 'Leading AI product initiatives at Salesforce'
      }
    },
    'aditya': {
      name: 'Aditya Sharma',
      role: 'Security Engineer at Cisco',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      journey: {
        before: 'Network engineer interested in cybersecurity',
        started: 'Started Cybersecurity with AI specialization in April 2024',
        learning: [
          'Ethical hacking and penetration testing',
          'Network security and cryptography',
          'AI-powered threat detection',
          'Security compliance and risk management'
        ],
        growth: [
          'Became certified ethical hacker',
          'Found and reported 15 security vulnerabilities',
          'Mastered security tools and frameworks',
          'Built AI-based security monitoring system'
        ],
        outcome: 'Joined Cisco as Security Engineer with 25 LPA',
        achievement: 'Protecting critical infrastructure at enterprise level'
      }
    }
  };

  const openPersonModal = (personId) => {
    setSelectedPerson(personId);
    document.body.style.overflow = 'hidden';
  };

  const closePersonModal = () => {
    setSelectedPerson(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="home">
      {/* Person Detail Modal */}
      {selectedPerson && personDetails[selectedPerson] && (
        <div className="person-modal-overlay" onClick={closePersonModal}>
          <div className="person-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closePersonModal}>×</button>
            
            <div className="modal-header">
              <div className="modal-person-avatar">
                <img src={personDetails[selectedPerson].image} alt={personDetails[selectedPerson].name} />
              </div>
              <div className="modal-person-info">
                <h2>{personDetails[selectedPerson].name}</h2>
                <p>{personDetails[selectedPerson].role}</p>
              </div>
            </div>

            <div className="modal-body">
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-card-icon">📚</div>
                  <div className="stat-card-value">6-12</div>
                  <div className="stat-card-label">Months</div>
                </div>
                <div className="stat-card">
                  <div className="stat-card-icon">💼</div>
                  <div className="stat-card-value">100+</div>
                  <div className="stat-card-label">Hours</div>
                </div>
                <div className="stat-card">
                  <div className="stat-card-icon">🚀</div>
                  <div className="stat-card-value">10+</div>
                  <div className="stat-card-label">Projects</div>
                </div>
                <div className="stat-card">
                  <div className="stat-card-icon">⭐</div>
                  <div className="stat-card-value">5/5</div>
                  <div className="stat-card-label">Rating</div>
                </div>
              </div>

              <div className="journey-section-with-image">
                <div className="journey-image">
                  <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop" alt="Before Journey" />
                </div>
                <div className="journey-content">
                  <h3>🎯 Before BraynupAI</h3>
                  <p>{personDetails[selectedPerson].journey.before}</p>
                </div>
              </div>

              <div className="journey-section-with-image reverse">
                <div className="journey-content">
                  <h3>🚀 The Journey Begins</h3>
                  <p>{personDetails[selectedPerson].journey.started}</p>
                </div>
                <div className="journey-image">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" alt="Learning" />
                </div>
              </div>

              <div className="journey-section">
                <h3>📚 What They Learned</h3>
                <div className="learning-grid">
                  {personDetails[selectedPerson].journey.learning.map((item, index) => (
                    <div key={index} className="learning-item">
                      <span className="learning-icon">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="journey-section-with-image">
                <div className="journey-image">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" alt="Growth" />
                </div>
                <div className="journey-content">
                  <h3>📈 Growth & Development</h3>
                  <div className="growth-list">
                    {personDetails[selectedPerson].journey.growth.slice(0, 3).map((item, index) => (
                      <div key={index} className="growth-item">• {item}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="outcome-section">
                <div className="outcome-icon">🎉</div>
                <h3>Success Achieved</h3>
                <p>{personDetails[selectedPerson].journey.outcome}</p>
              </div>

              <div className="achievement-section">
                <div className="achievement-icon">⭐</div>
                <h3>Current Role</h3>
                <p>{personDetails[selectedPerson].journey.achievement}</p>
              </div>
            </div>

            <div className="modal-footer">
              <p className="modal-footer-text">
                Start your success story like {personDetails[selectedPerson].name.split(' ')[0]}
              </p>
              <button className="cta-btn cta-primary" onClick={closePersonModal}>
                Begin Your Journey
              </button>
            </div>
          </div>
        </div>
      )}

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
                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop" alt="UI/UX Design Course" className="course-image" />
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
            <div className="section-label-bold">WHY CHOOSE US</div>
            <p className="section-subtitle">Discover what makes BraynupAI the perfect choice for your learning journey</p>
            <h2 className="section-title">10 Reasons to Start Your <span className="highlight-text">AI Journey</span> With Us</h2>
          </div>
          
          <div className="why-grid-animated"> 
            {/* Card 1: Expert Faculty */}
            <div 
              className={`why-card slide-in ${hoveredCard === 1 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(1)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=200&fit=crop" alt="Expert Faculty" />
              </div>
              <div className="why-icon">🎓</div>
              <h3>Expert Faculty</h3>
              <p>Learn from industry professionals with 10+ years of AI experience</p>
              
              <div className={`card-expanded-content ${hoveredCard === 1 ? 'visible' : ''}`}>
                <div className="expanded-header">
                  <div className="expanded-icon">🎓</div>
                  <h4>Expert Faculty</h4>
                </div>
                <p className="expanded-description">
                  Our instructors bring over a decade of real-world AI expertise from leading tech companies. They've built production ML systems, published research papers, and mentored hundreds of successful AI engineers.
                </p>
                <ul className="expanded-benefits">
                  <li>Industry veterans from Google, Meta, and Amazon</li>
                  <li>Published researchers with 100+ citations</li>
                  <li>Hands-on mentorship throughout your journey</li>
                  <li>Live Q&A sessions every week</li>
                </ul>
                <button className="expanded-cta">Learn More →</button>
              </div>
            </div>
            
            {/* Card 2: Job Guarantee */}
            <div 
              className={`why-card slide-in ${hoveredCard === 2 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(2)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=200&fit=crop" alt="Job Guarantee" />
              </div>
              <div className="why-icon">💼</div>
              <h3>Job Guarantee</h3>
              <p>95% placement rate with top companies like Google, Microsoft, Amazon</p>
              
              <div className={`card-expanded-content ${hoveredCard === 2 ? 'visible' : ''}`}>
                <div className="expanded-header">
                  <div className="expanded-icon">💼</div>
                  <h4>Job Guarantee</h4>
                </div>
                <p className="expanded-description">
                  We're committed to your career success. Our comprehensive placement program includes interview preparation, resume building, and direct connections with hiring managers at top tech companies.
                </p>
                <ul className="expanded-benefits">
                  <li>95% placement rate within 6 months</li>
                  <li>Average salary increase of $40,000+</li>
                  <li>Partnerships with 500+ companies</li>
                  <li>Full refund if not placed within 12 months</li>
                </ul>
                <button className="expanded-cta">Explore Careers →</button>
              </div>
            </div>
            
            {/* Card 3: Hands-On Projects */}
            <div 
              className={`why-card slide-in ${hoveredCard === 3 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(3)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop" alt="Hands-On Projects" />
              </div>
              <div className="why-icon">🚀</div>
              <h3>Hands-On Projects</h3>
              <p>Build real-world AI projects and deploy to production</p>
              
              <div className={`card-expanded-content ${hoveredCard === 3 ? 'visible' : ''}`}>
                <div className="expanded-header">
                  <div className="expanded-icon">🚀</div>
                  <h4>Hands-On Projects</h4>
                </div>
                <p className="expanded-description">
                  Learn by doing with our project-first approach. Build portfolio-worthy applications using cutting-edge AI technologies and deploy them to production environments.
                </p>
                <ul className="expanded-benefits">
                  <li>15+ real-world projects from beginner to advanced</li>
                  <li>Build chatbots, recommendation engines, and more</li>
                  <li>Deploy on AWS, GCP, and Azure</li>
                  <li>Create a professional portfolio</li>
                </ul>
                <button className="expanded-cta">View Projects →</button>
              </div>
            </div>
            
            {/* Card 4: Global Network */}
            <div 
              className={`why-card slide-in ${hoveredCard === 4 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(4)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop" alt="Global Network" />
              </div>
              <div className="why-icon">🌐</div>
              <h3>Global Network</h3>
              <p>Join 50,000+ learners from 120+ countries worldwide</p>
              
              <div className={`card-expanded-content ${hoveredCard === 4 ? 'visible' : ''}`}>
                <div className="expanded-header">
                  <div className="expanded-icon">🌐</div>
                  <h4>Global Network</h4>
                </div>
                <p className="expanded-description">
                  Connect with a diverse community of AI enthusiasts, professionals, and thought leaders. Collaborate on projects, share knowledge, and build lasting professional relationships.
                </p>
                <ul className="expanded-benefits">
                  <li>50,000+ active learners worldwide</li>
                  <li>24/7 community support and discussions</li>
                  <li>Monthly networking events and webinars</li>
                  <li>Exclusive access to alumni network</li>
                </ul>
                <button className="expanded-cta">Join Community →</button>
              </div>
            </div>
            
            {/* Card 5: Flexible Learning - Most Popular */}
            <div 
              className={`why-card most-popular slide-in ${hoveredCard === 5 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(5)}
              onMouseLeave={handleCardLeave}
            >
              <div className="popular-badge">⭐ Most Popular</div>
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop" alt="Flexible Learning" />
              </div>
              <div className="why-icon">⏰</div>
              <h3>Flexible Learning</h3>
              <p>Self-paced courses with lifetime access and 24/7 support</p>
              
              <div className={`card-expanded-content ${hoveredCard === 5 ? 'visible' : ''}`}>
                <div className="expanded-header">
                  <div className="expanded-icon">⏰</div>
                  <h4>Flexible Learning</h4>
                </div>
                <p className="expanded-description">
                  Learn at your own pace, on your own schedule. Our platform adapts to your lifestyle, whether you're a busy professional, student, or career changer.
                </p>
                <ul className="expanded-benefits">
                  <li>Self-paced learning with no deadlines</li>
                  <li>Lifetime access to all course materials</li>
                  <li>Mobile app for learning on the go</li>
                  <li>24/7 instructor support and Q&A</li>
                </ul>
                <button className="expanded-cta">Start Learning →</button>
              </div>
            </div>
            
            {/* Card 6: Certifications */}
            <div 
              className={`why-card slide-in ${hoveredCard === 6 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(6)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=400&h=200&fit=crop" alt="Certifications" />
              </div>
              <div className="why-icon">🏅</div>
              <h3>Certifications</h3>
              <p>Industry-recognized certificates verified by blockchain</p>
              
              <div className={`card-expanded-content ${hoveredCard === 6 ? 'visible' : ''}`}>
                <div className="expanded-header">
                  <div className="expanded-icon">🏅</div>
                  <h4>Certifications</h4>
                </div>
                <p className="expanded-description">
                  Earn industry-recognized certifications that boost your credibility. Our blockchain-verified certificates are respected by employers worldwide.
                </p>
                <ul className="expanded-benefits">
                  <li>Blockchain-verified and tamper-proof</li>
                  <li>Recognized by 1000+ companies globally</li>
                  <li>Shareable on LinkedIn and resume</li>
                  <li>Continuous education credits available</li>
                </ul>
                <button className="expanded-cta">View Certificates →</button>
              </div>
            </div>
            
            {/* Card 7: Cutting-Edge Curriculum */}
            <div 
              className={`why-card slide-in ${hoveredCard === 7 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(7)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop" alt="Cutting-Edge Curriculum" />
              </div>
              <div className="why-icon">💡</div>
              <h3>Cutting-Edge Curriculum</h3>
              <p>Stay ahead with latest AI trends, tools, and technologies</p>
              
              <div className={`card-expanded-content ${hoveredCard === 7 ? 'visible' : ''}`}>
                <div className="expanded-header">
                  <div className="expanded-icon">💡</div>
                  <h4>Cutting-Edge Curriculum</h4>
                </div>
                <p className="expanded-description">
                  Our curriculum is constantly updated to reflect the latest developments in AI. Learn the tools and techniques being used by leading companies today.
                </p>
                <ul className="expanded-benefits">
                  <li>GPT-4, LLaMA, and latest LLM technologies</li>
                  <li>Generative AI and Stable Diffusion</li>
                  <li>MLOps and deployment best practices</li>
                  <li>Updated quarterly with new content</li>
                </ul>
                <button className="expanded-cta">See Curriculum →</button>
              </div>
            </div>
            
            {/* Card 8: Personalized Mentorship */}
            <div 
              className={`why-card slide-in ${hoveredCard === 8 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(8)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop" alt="Personalized Mentorship" />
              </div>
              <div className="why-icon">👨‍🏫</div>
              <h3>Personalized Mentorship</h3>
              <p>One-on-one guidance from dedicated mentors throughout your journey</p>
              
              <div className={`card-expanded-content ${hoveredCard === 8 ? 'visible' : ''}`}>
                <div className="expanded-header">
                  <div className="expanded-icon">👨‍🏫</div>
                  <h4>Personalized Mentorship</h4>
                </div>
                <p className="expanded-description">
                  Get personalized guidance tailored to your goals and learning style. Our mentors are committed to your success every step of the way.
                </p>
                <ul className="expanded-benefits">
                  <li>Dedicated mentor assigned to each student</li>
                  <li>Weekly 1-on-1 video sessions</li>
                  <li>Personalized learning roadmap</li>
                  <li>Code reviews and project feedback</li>
                </ul>
                <button className="expanded-cta">Meet Mentors →</button>
              </div>
            </div>
            
            {/* Card 9: Affordable Pricing */}
            <div 
              className={`why-card slide-in ${hoveredCard === 9 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(9)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=200&fit=crop" alt="Affordable Pricing" />
              </div>
              <div className="why-icon">💰</div>
              <h3>Affordable Pricing</h3>
              <p>Premium education at competitive prices with flexible payment options</p>
              
              <div className={`card-expanded-content ${hoveredCard === 9 ? 'visible' : ''}`}>
                <div className="expanded-header">
                  <div className="expanded-icon">💰</div>
                  <h4>Affordable Pricing</h4>
                </div>
                <p className="expanded-description">
                  Quality education shouldn't break the bank. We offer competitive pricing with flexible payment plans to make AI education accessible to everyone.
                </p>
                <ul className="expanded-benefits">
                  <li>Starting at $49/month with installments</li>
                  <li>30-day money-back guarantee</li>
                  <li>Scholarships available for students</li>
                  <li>Corporate training discounts</li>
                </ul>
                <button className="expanded-cta">View Pricing →</button>
              </div>
            </div>
            
            {/* Card 10: Continuous Updates */}
            <div 
              className={`why-card slide-in ${hoveredCard === 10 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(10)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop" alt="Continuous Updates" />
              </div>
              <div className="why-icon">🔄</div>
              <h3>Continuous Updates</h3>
              <p>Access to new content and features added regularly at no extra cost</p>
              
              <div className={`card-expanded-content ${hoveredCard === 10 ? 'visible' : ''}`}>
                <div className="expanded-header">
                  <div className="expanded-icon">🔄</div>
                  <h4>Continuous Updates</h4>
                </div>
                <p className="expanded-description">
                  AI moves fast, and so do we. Get access to new courses, features, and content updates regularly included with your enrollment at no additional cost.
                </p>
                <ul className="expanded-benefits">
                  <li>New courses added every month</li>
                  <li>Platform updates and improvements</li>
                  <li>Latest AI tools and libraries</li>
                  <li>No additional fees for new content</li>
                </ul>
                <button className="expanded-cta">What's New →</button>
              </div>
            </div>

            {/* Duplicate Set for Seamless Loop - Same cards without hover */}
            <div className="why-card slide-in">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=200&fit=crop" alt="Expert Faculty" />
              </div>
              <div className="why-icon">🎓</div>
              <h3>Expert Faculty</h3>
              <p>Learn from industry professionals with 10+ years of AI experience</p>
              <div className="full-info">
                <p>Our expert faculty members are seasoned professionals with over a decade of experience in AI and machine learning.</p>
              </div>
            </div>
            
            <div className="why-card slide-in">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=200&fit=crop" alt="Job Guarantee" />
              </div>
              <div className="why-icon">💼</div>
              <h3>Job Guarantee</h3>
              <p>95% placement rate with top companies like Google, Microsoft, Amazon</p>
              <div className="full-info">
                <p>We are committed to your success with a 95% placement guarantee. Our graduates work at top companies worldwide.</p>
              </div>
            </div>
            
            <div className="why-card slide-in">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop" alt="Hands-On Projects" />
              </div>
              <div className="why-icon">🚀</div>
              <h3>Hands-On Projects</h3>
              <p>Build real-world AI projects and deploy to production</p>
              <div className="full-info">
                <p>Learn by doing with 50+ hands-on projects that simulate real-world scenarios and build your portfolio.</p>
              </div>
            </div>
            
            <div className="why-card slide-in">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop" alt="Global Network" />
              </div>
              <div className="why-icon">🌐</div>
              <h3>Global Network</h3>
              <p>Join 50,000+ learners from 120+ countries worldwide</p>
              <div className="full-info">
                <p>Become part of a thriving global community of 50,000+ learners from over 120 countries worldwide.</p>
              </div>
            </div>
            
            <div className="why-card most-popular slide-in">
              <div className="popular-badge">⭐ Most Popular</div>
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop" alt="Flexible Learning" />
              </div>
              <div className="why-icon">⏰</div>
              <h3>Flexible Learning</h3>
              <p>Self-paced courses with lifetime access and 24/7 support</p>
              <div className="full-info">
                <p>Learn at your own pace with lifetime access. Our platform is available 24/7 with round-the-clock support.</p>
              </div>
            </div>
            
            <div className="why-card slide-in">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=400&h=200&fit=crop" alt="Certifications" />
              </div>
              <div className="why-icon">🏅</div>
              <h3>Certifications</h3>
              <p>Industry-recognized certificates verified by blockchain</p>
              <div className="full-info">
                <p>Earn industry-recognized certificates that are verified on blockchain, making them globally verifiable.</p>
              </div>
            </div>
            
            <div className="why-card slide-in">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop" alt="Cutting-Edge Curriculum" />
              </div>
              <div className="why-icon">💡</div>
              <h3>Cutting-Edge Curriculum</h3>
              <p>Stay ahead with latest AI trends, tools, and technologies</p>
              <div className="full-info">
                <p>Our curriculum is constantly updated to reflect the latest trends in AI, machine learning, and deep learning.</p>
              </div>
            </div>
            
            <div className="why-card slide-in">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop" alt="Personalized Mentorship" />
              </div>
              <div className="why-icon">👨‍🏫</div>
              <h3>Personalized Mentorship</h3>
              <p>One-on-one guidance from dedicated mentors throughout your journey</p>
              <div className="full-info">
                <p>Get personalized mentorship from dedicated industry experts who guide you throughout your journey.</p>
              </div>
            </div>
            
            <div className="why-card slide-in">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=200&fit=crop" alt="Affordable Pricing" />
              </div>
              <div className="why-icon">💰</div>
              <h3>Affordable Pricing</h3>
              <p>Premium education at competitive prices with flexible payment options</p>
              <div className="full-info">
                <p>We offer premium AI education at competitive prices with flexible payment options including EMI plans.</p>
              </div>
            </div>
            
            <div className="why-card slide-in">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop" alt="Continuous Updates" />
              </div>
              <div className="why-icon">🔄</div>
              <h3>Continuous Updates</h3>
              <p>Access to new content and features added regularly at no extra cost</p>
              <div className="full-info">
                <p>With lifetime access, you get all future course updates, new modules, and features at no additional cost.</p>
              </div>
            </div>
          </div>
          
          <div className="why-cta-container">
            <button className="why-cta-btn">
              <span>Start Your AI Journey</span>
              <span className="cta-arrow">→</span>
            </button>
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
          
          {/* Featured Large Testimonial */}
          <div className="featured-testimonial-large" onClick={() => openPersonModal('kamya')} style={{cursor: 'pointer'}}>
            <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text-large">
              "BraynupAI's curriculum is the best curriculum available online. <span style={{color: '#999'}}>BraynupAI's program is engaging, comprehensive, and student-centered. The hands-on projects and AI integration sets it apart from other platforms. If you're serious about accelerating your tech career and mastering cutting-edge technologies,</span> <strong>you cannot ask for a better platform than BraynupAI.</strong>"
            </p>
            <div className="testimonial-author-large">
              <div className="author-avatar-large">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Kamya Malhotra" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
              </div>
              <div className="author-details-large">
                <h4>Kamya Malhotra</h4>
                <p>Statistical Analyst</p>
              </div>
            </div>
            <div className="click-hint">Click to read full story →</div>
          </div>
          
          {/* Testimonials Navigation */}
          <div className="testimonials-navigation">
            <button 
              className="testimonial-nav-btn testimonial-nav-left"
              onClick={() => scrollTestimonials('left')}
              aria-label="Previous testimonials"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="testimonials-scroll-container" ref={testimonialScrollRef}>
              <div className="testimonials-grid">
            <div className="testimonial-card" onClick={() => openPersonModal('rahul')} style={{cursor: 'pointer'}}>
              <p className="testimonial-text">
                "BraynupAI changed my life! I went from zero coding knowledge to landing a $120K job at Google in just 6 months. The AI curriculum is outstanding! The mentorship sessions and hands-on projects gave me real-world experience that employers value."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Rahul Sharma" />
                </div>
                <div className="author-details">
                  <h4>Rahul Sharma</h4>
                  <p>Full Stack Engineer at Google</p>
                </div>
              </div>
              <div className="click-hint-small">Click for full story →</div>
            </div>

            <div className="testimonial-card" onClick={() => openPersonModal('priya')} style={{cursor: 'pointer'}}>
              <p className="testimonial-text">
                "The Digital Marketing with AI course helped me 3x my client revenue. The hands-on projects and mentor support are incredible! I learned how to leverage AI tools for campaign optimization and data analysis. Best investment I've made in my career!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Priya Kapoor" />
                </div>
                <div className="author-details">
                  <h4>Priya Kapoor</h4>
                  <p>Digital Marketing Manager at Amazon</p>
                </div>
              </div>
              <div className="click-hint-small">Click for full story →</div>
            </div>

            <div className="testimonial-card" onClick={() => openPersonModal('amit')} style={{cursor: 'pointer'}}>
              <p className="testimonial-text">
                "Best investment in my career! The AI integration in Full Stack course is cutting-edge. Now working at Microsoft! The curriculum is up-to-date with latest technologies, and the placement support helped me land multiple offers."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="Amit Joshi" />
                </div>
                <div className="author-details">
                  <h4>Amit Joshi</h4>
                  <p>Software Engineer at Microsoft</p>
                </div>
              </div>
              <div className="click-hint-small">Click for full story →</div>
            </div>

            <div className="testimonial-card" onClick={() => openPersonModal('sneha')} style={{cursor: 'pointer'}}>
              <p className="testimonial-text">
                "The Machine Learning specialization exceeded all my expectations. The instructors are industry experts who explain complex concepts in simple terms. Within 4 months, I transitioned from a non-tech background to becoming an ML Engineer at IBM!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="Sneha Kulkarni" />
                </div>
                <div className="author-details">
                  <h4>Sneha Kulkarni</h4>
                  <p>ML Engineer at IBM</p>
                </div>
              </div>
              <div className="click-hint-small">Click for full story →</div>
            </div>

            <div className="testimonial-card" onClick={() => openPersonModal('vikram')} style={{cursor: 'pointer'}}>
              <p className="testimonial-text">
                "BraynupAI's Data Science program is phenomenal! The project-based learning approach helped me build a strong portfolio. Got placed at Accenture with a 180% salary hike. The community support and weekly doubt-clearing sessions are invaluable!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="Vikram Gupta" />
                </div>
                <div className="author-details">
                  <h4>Vikram Gupta</h4>
                  <p>Data Scientist at Accenture</p>
                </div>
              </div>
              <div className="click-hint-small">Click for full story →</div>
            </div>

            <div className="testimonial-card" onClick={() => openPersonModal('neha')} style={{cursor: 'pointer'}}>
              <p className="testimonial-text">
                "As a working professional, the flexibility of BraynupAI was perfect for me. Completed the AI Engineering course while working full-time. The lifetime access and regular updates ensure I'm always learning the latest technologies. Now leading an AI team at Infosys!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Neha Patel" />
                </div>
                <div className="author-details">
                  <h4>Neha Patel</h4>
                  <p>AI Team Lead at Infosys</p>
                </div>
              </div>
              <div className="click-hint-small">Click for full story →</div>
            </div>

            <div className="testimonial-card" onClick={() => openPersonModal('rohan')} style={{cursor: 'pointer'}}>
              <p className="testimonial-text">
                "The Cloud Computing with AI course opened doors I never thought possible. From a mechanical engineer to a Cloud Solutions Architect at AWS - this transformation happened because of BraynupAI's world-class training and career support!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop" alt="Rohan Kumar" />
                </div>
                <div className="author-details">
                  <h4>Rohan Kumar</h4>
                  <p>Cloud Architect at AWS</p>
                </div>
              </div>
              <div className="click-hint-small">Click for full story →</div>
            </div>

            <div className="testimonial-card" onClick={() => openPersonModal('anjali')} style={{cursor: 'pointer'}}>
              <p className="testimonial-text">
                "BraynupAI's UI/UX with AI Integration course is a game-changer! I learned how to use AI tools for design automation and user research. Landed a design role at Adobe within 2 months of completing the course. Forever grateful!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop" alt="Anjali Desai" />
                </div>
                <div className="author-details">
                  <h4>Anjali Desai</h4>
                  <p>Senior UX Designer at Adobe</p>
                </div>
              </div>
              <div className="click-hint-small">Click for full story →</div>
            </div>

            <div className="testimonial-card" onClick={() => openPersonModal('manish')} style={{cursor: 'pointer'}}>
              <p className="testimonial-text">
                "Exceptional learning experience! The DevOps with AI course taught me cutting-edge automation techniques. The live projects and real-world scenarios prepared me perfectly for the industry. Now working at Netflix with a fantastic team!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Manish Singh" />
                </div>
                <div className="author-details">
                  <h4>Manish Singh</h4>
                  <p>DevOps Engineer at Netflix</p>
                </div>
              </div>
              <div className="click-hint-small">Click for full story →</div>
            </div>

            <div className="testimonial-card" onClick={() => openPersonModal('karan')} style={{cursor: 'pointer'}}>
              <p className="testimonial-text">
                "The Blockchain Development course was comprehensive and practical. I built 5 real-world projects that helped me secure a position at Coinbase. The instructors are passionate and the community is incredibly supportive. Highly recommend!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop" alt="Karan Mehta" />
                </div>
                <div className="author-details">
                  <h4>Karan Mehta</h4>
                  <p>Blockchain Developer at Coinbase</p>
                </div>
              </div>
              <div className="click-hint-small">Click for full story →</div>
            </div>

            <div className="testimonial-card" onClick={() => openPersonModal('divya')} style={{cursor: 'pointer'}}>
              <p className="testimonial-text">
                "BraynupAI's Product Management with AI course gave me the skills to transition from engineering to product. The case studies and real product launches we worked on prepared me for my role at Salesforce. Worth every penny!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" alt="Divya Rao" />
                </div>
                <div className="author-details">
                  <h4>Divya Rao</h4>
                  <p>Product Manager at Salesforce</p>
                </div>
              </div>
              <div className="click-hint-small">Click for full story →</div>
            </div>

            <div className="testimonial-card" onClick={() => openPersonModal('aditya')} style={{cursor: 'pointer'}}>
              <p className="testimonial-text">
                "The Cybersecurity with AI specialization changed my career trajectory. I learned ethical hacking, penetration testing, and AI-powered security tools. Now protecting critical infrastructure at Cisco. BraynupAI's training is world-class!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Aditya Sharma" />
                </div>
                <div className="author-details">
                  <h4>Aditya Sharma</h4>
                  <p>Security Engineer at Cisco</p>
                </div>
              </div>
              <div className="click-hint-small">Click for full story →</div>
            </div>
            </div>
          </div>

          <button 
            className="testimonial-nav-btn testimonial-nav-right"
            onClick={() => scrollTestimonials('right')}
            aria-label="Next testimonials"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
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

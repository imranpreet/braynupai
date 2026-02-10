import React, { useEffect, useState, useRef } from 'react';
import './Slider.css';
import slide1 from '../pehlislide.jpg';
import slide2 from '../dusrislide.jpg';
import slide3 from '../3rdslide.jpg';
import slide4 from '../4thslide.jpg';
import slide5 from '../1stslide.jpg';

function HeroSlider() {
  const slides = [
    {
      id: 1,
      type: 'hero',
      backgroundImage: slide1,
      badge: '🎯 Your Success, Our Mission!',
      title: 'Learn, build & Secure Your Career in Tech',
      highlight: 'AI Engineering',
      subtitle: 'Get certified from Top institutes and land jobs in high growth tech roles.',
      ctaPrimary: 'Talk to Career Expert',
      ctaSecondary: 'Discover All Courses',
      collageImages: [
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop'
      ],
      stats: [
        { label: 'Total Students', value: '16500+', icon: '👥' },
        { label: 'Total Courses', value: '7500+', icon: '📚' },
        { label: '10x Growth', value: 'AI Skill', icon: '📈' }
      ]
    },

    {
      id: 2,
      type: 'images',
      backgroundImage: slide2,
      title: 'Explore Our Platform & Success Stories',
      description: 'BraynupAI offers world-class AI education with hands-on projects, expert mentorship, and lifetime community support. Join 3000+ professionals who transformed their careers.',
      images: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
      ],
      features: [
        { icon: '🎓', text: '300+ Online Courses' },
        { icon: '🤝', text: 'Expert Faculty from IIT' },
        { icon: '💼', text: '95% Placement Rate' },
        { icon: '🌐', text: '120+ Countries' }
      ]
    },

    {
      id: 3,
      type: 'video-right',
      backgroundImage: slide3,
      title: 'Transform Your Future with AI',
      boldTitle: 'Watch Our Success Stories',
      description: 'See how our students landed jobs at Google, Microsoft, and Amazon. Learn from industry experts and build real-world AI projects.',
      bookImages: [
        'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=500&fit=crop',
        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=500&fit=crop',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop'
      ],
      highlights: [
        '✓ Live Interactive Sessions',
        '✓ Industry-Ready Projects',
        '✓ Job Placement Support',
        '✓ Lifetime Access'
      ]
    },

    {
      id: 4,
      type: 'animated-boxes',
      backgroundImage: slide4,
      title: 'Why Choose BraynupAI?',
      subtitle: 'Everything You Need to Build Your AI Career',
      fullDescription: 'BraynupAI is a revolutionary AI-based IT training platform designed to deliver future-ready education. We specialize in cutting-edge programs that transform careers through innovative AI-powered learning experiences. Our comprehensive curriculum covers AI, Machine Learning, Deep Learning, and cutting-edge technologies. Learn from industry professionals with 10+ years of experience, work on real-world projects, and get guaranteed placement support with top tech companies like Google, Microsoft, and Amazon. Join our global community of 50,000+ learners from 120+ countries and transform your career with our industry-recognized certifications, lifetime access to courses, and 24/7 expert support. With a 95% placement rate and 150% average salary hike, BraynupAI is your gateway to a successful AI career.',
      items: []
    },

    {
      id: 5,
      type: 'video-bg',
      backgroundImage: slide5,
      title: 'Start Your AI Journey Today',
      subtitle: 'Join 16,500+ Students Learning AI Engineering',
      description: 'Transform your career with cutting-edge AI skills • Avg 150% salary hike • Learn from anywhere • Flexible schedules • Lifetime support',
      ctaPrimary: 'Enroll Now',
      ctaSecondary: 'Download Brochure',
      stats: [
        { value: '3000+', label: 'Careers Transformed' },
        { value: '95%', label: 'Placement Rate' },
        { value: '150%', label: 'Avg Salary Hike' }
      ],
      features: [
        { icon: '🚀', text: 'Transform your career with cutting-edge AI skills', color: '#ff6b6b' },
        { icon: '💰', text: 'Avg 150% salary hike', color: '#ffd93d' },
        { icon: '🌍', text: 'Learn from anywhere', color: '#6bcf7f' },
        { icon: '⏰', text: 'Flexible schedules', color: '#6ba3ff' },
        { icon: '🎯', text: 'Lifetime support', color: '#ff6bff' }
      ]
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);
  const delay = 4000; // 4 seconds per slide

  useEffect(() => {
    if (isPaused) return;

    const next = (index) => (index + 1) % slides.length;

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    resetTimeout();
    timeoutRef.current = setTimeout(() => setCurrent((c) => next(c)), delay);

    return () => resetTimeout();
  }, [current, isPaused, slides.length]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((c) => (c + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="hero-slider"
    >
      <div className="slider-window">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`slide ${idx === current ? 'active' : ''}`}
            aria-hidden={idx !== current}
          >
            {/* SLIDE 1: Hero with proper information */}
            {s.type === 'hero' && (
              <div className="slide-inner hero-slide" style={{
                backgroundImage: `url(${s.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                <div className="slide-content-left">
                  <div className="hero-badge">
                    <span className="badge-icon">🎓</span>
                    <span>World Class Education. Engineered for Outcome</span>
                  </div>
                  <h1 className="hero-title">
                    {s.title}<br />
                    <span className="title-highlight">{s.highlight}</span>
                  </h1>
                  <p className="hero-subtitle">{s.subtitle}</p>
                  <div className="hero-ctas">
                    <button className="cta-btn cta-primary">
                      {s.ctaPrimary} <span className="arrow">→</span>
                    </button>
                    <button className="cta-btn cta-secondary">
                      {s.ctaSecondary}
                    </button>
                  </div>
                  <div className="hero-stats">
                    {s.stats.map((stat, i) => (
                      <div key={i} className="stat-item">
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-details">
                          <div className="stat-value">{stat.value}</div>
                          <div className="stat-label">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="slide-content-right">
                  {/* Single Hero Image */}
                  <div className="hero-single-image-wrapper">
                    <img src="/src/img.jpg" alt="BraynupAI Education" className="hero-single-image" />
                    <div className="hero-image-badge">
                      <div className="badge-icon-large">📈</div>
                      <div className="badge-content">
                        <div className="badge-num">10x</div>
                        <div className="badge-text">Growth in AI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 2: Images and website information */}
            {s.type === 'images' && (
              <div className="slide-inner images-slide" style={{
                backgroundImage: `url(${s.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                {/* Background Video */}
                <video
                  className="images-bg-video"
                  src="/src/side.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
                <div className="images-overlay"></div>
                
                <div className="images-content-left">
                  <div className="section-badge">ABOUT BRAYNUPAI</div>
                  <h2 className="images-title">{s.title}</h2>
                  <p className="images-description">{s.description}</p>
                  <div className="features-grid">
                    {s.features.map((feature, i) => (
                      <div key={i} className="feature-item">
                        <span className="feature-icon">{feature.icon}</span>
                        <span className="feature-text">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  <button className="cta-btn cta-primary">Learn More About Us</button>
                </div>
                <div className="images-content-right">
                  {/* Side Video */}
                  <div className="side-video-wrapper">
                    <video
                      key={`video-slide-${idx}`}
                      src="/src/side.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="side-video"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 3: Video on right side with bold heading */}
            {s.type === 'video-right' && (
              <div className="slide-inner video-right-slide" style={{
                backgroundImage: `url(${s.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                <div className="video-content-left">
                  <div className="section-badge">SUCCESS STORIES</div>
                  <h2 className="video-title">
                    <strong>{s.boldTitle}</strong>
                  </h2>
                  <h3 className="video-subtitle">{s.title}</h3>
                  <p className="video-description">{s.description}</p>
                  <ul className="video-highlights">
                    {s.highlights.map((highlight, i) => (
                      <li key={i} className="highlight-item">{highlight}</li>
                    ))}
                  </ul>
                  <button className="cta-btn cta-primary">View All Success Stories</button>
                </div>
                <div className="video-content-right">
                  {/* Rotating Book Images Collage */}
                  <div className="books-collage-container">
                    <div className="books-collage-wrapper">
                      {s.bookImages.map((img, i) => (
                        <div
                          key={i}
                          className={`book-item book-item-${i + 1}`}
                          style={{ animationDelay: `${i * 0.2}s` }}
                        >
                          <img src={img} alt={`Book ${i + 1}`} className="book-img" />
                        </div>
                      ))}
                      <div className="center-circle">
                        <div className="center-icon">📚</div>
                        <div className="center-text">Our Resources</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 4: Animated boxes line-wise with images */}
            {s.type === 'animated-boxes' && (
              <div className="slide-inner boxes-slide" style={{
                backgroundImage: `url(${s.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                {/* Background Image */}
                <div className="boxes-overlay"></div>
                
                <div className="boxes-content-center">
                  <div className="section-badge light">OUR STRENGTHS</div>
                  <h2 className="boxes-main-title">{s.title}</h2>
                  <h3 className="boxes-main-subtitle">{s.subtitle}</h3>
                  <p className="boxes-main-description">{s.fullDescription}</p>
                </div>
              </div>
            )}

            {/* SLIDE 5: Background image with complete information */}
            {s.type === 'video-bg' && (
              <div className="slide-inner video-bg-slide" style={{
                backgroundImage: `url(${s.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                {/* Background Image */}
                <div className="video-bg-overlay">
                  <div className="video-bg-content">
                    <div className="section-badge light">ENROLL TODAY</div>
                    <h2 className="video-bg-title">{s.title}</h2>
                    <h3 className="video-bg-subtitle">{s.subtitle}</h3>
                    
                    {/* Features List */}
                    {s.features && (
                      <div className="features-list">
                        {s.features.map((feature, i) => (
                          <div key={i} className="feature-item">
                            <span className="feature-icon">{feature.icon}</span>
                            <span className="feature-text">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="video-bg-stats">
                      {s.stats.map((stat, i) => (
                        <div key={i} className="bg-stat-item">
                          <div className="bg-stat-value">{stat.value}</div>
                          <div className="bg-stat-label">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="video-bg-ctas">
                      <button className="cta-btn cta-primary large">
                        {s.ctaPrimary} <span className="arrow">→</span>
                      </button>
                      <button className="cta-btn cta-secondary large">
                        {s.ctaSecondary}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Controls - Hidden for auto-play */}
      {/* <div className="slider-controls">
        <button
          className="nav-arrow nav-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <div className="slider-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          className="nav-arrow nav-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>
      </div> */}
    </section>
  );
}

export default HeroSlider;

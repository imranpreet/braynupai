import React, { useEffect, useState, useRef } from 'react';
import './Slider.css';
import slide1 from '../pehlislide.jpg';
import slide2 from '../dusrislide.jpg';
import slide3 from '../3rdslide.jpg';
import slide4 from '../4thslide.jpg';
import slide5 from '../1stslide.jpg';
import aie from '../aie.jpg';

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
      /* extended copy to give more context and fill the left column so the
         text block expands and covers the gap between the copy and the
         rotating collage on the right */
      extra: 'Our programs combine mentor-led sessions, real-world capstone projects, and interview preparation. Students graduate with hands-on experience, portfolio-ready projects, and industry connections that accelerate hiring timelines. Explore project-based learning, peer code reviews, and continuous career support.',
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
      fullDescription: 'BraynupAI is a revolutionary AI-based IT training platform designed to deliver future-ready education. We specialize in cutting-edge programs that transform careers through innovative AI-powered learning experiences. Our comprehensive curriculum covers AI, Machine Learning, Deep Learning, and cutting-edge technologies. Learn from industry professionals with 10+ years of experience, work on real-world projects, and get guaranteed placement support with top tech companies. Join our global community of learners and transform your career with our industry-recognized certifications, lifetime access to courses, and 24/7 expert support.',
      extra: 'Our approach blends mentor-led sessions, hands-on projects, career coaching, and a strong placement network. Students work on capstone projects, receive mock interviews, and get personalized resume feedback. Outcomes include job-ready portfolios, real interview experience, and industry connections that accelerate hiring timelines.',
      items: [
        'Mentor-led live sessions & office hours',
        'Capstone projects & real-world briefs',
        'Resume & interview coaching',
        'Lifetime community & networking'
      ]
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
                    {s.title} <span className="title-highlight">{s.highlight}</span>
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
                  {s.extra && <p className="video-description-extended">{s.extra}</p>}
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
                  <div className="boxes-grid">
                    <div className="boxes-left">
                      <div className="section-badge light">OUR STRENGTHS</div>
                      {(() => {
                        const title = s.title || '';
                        const highlightKey = 'BraynupAI';
                        if (title.includes(highlightKey)) {
                          const parts = title.split(highlightKey);
                          return (
                            <h2 className="boxes-main-title">{parts[0]}<span className="title-highlight-orange">{highlightKey}</span>{parts[1]}</h2>
                          );
                        }
                        // fallback: highlight the last word
                        const words = title.split(' ');
                        const last = words.pop();
                        return (
                          <h2 className="boxes-main-title">{words.join(' ')} {last && <span className="title-highlight-orange">{last}</span>}</h2>
                        );
                      })()}
                      <h3 className="boxes-main-subtitle">{s.subtitle}</h3>
                      <p className="boxes-main-description">{
                        // Combine all pieces of copy into a single paragraph to remove
                        // large gaps between separate <p> tags and improve readability.
                        `${s.fullDescription}${s.extra ? ' ' + s.extra : ''} We also provide personalized mentorship, mock interviews, portfolio reviews, and continuous career support to ensure you graduate job-ready. Our alumni network and industry partners help accelerate hiring and long-term career growth.`
                      }</p>
                      {/* Additional bottom filler text to occupy remaining vertical space */}
                      <p className="boxes-main-description boxes-bottom">{
                        `Join our community to access capstone projects, industry-mentored assignments, mock interviews with hiring partners, resume and portfolio reviews, and continuous career coaching. Become job-ready faster with hands-on experience and mentor feedback.`
                      }</p>
                      {/* Extra stats + CTA added to remove remaining empty space in the left column */}
                      <div className="boxes-bottom-cta">
                        <div className="boxes-stats-row">
                          <div className="boxes-stat">
                            <div className="boxes-stat-icon">🧾</div>
                            <div className="boxes-stat-content">
                              <div className="boxes-stat-value">Job-ready Portfolios</div>
                              <div className="boxes-stat-label">Capstone projects & demos</div>
                              <div className="boxes-stat-desc">Build production-ready projects and a showcase portfolio that impresses recruiters.</div>
                            </div>
                          </div>
                          <div className="boxes-stat">
                            <div className="boxes-stat-icon">🎯</div>
                            <div className="boxes-stat-content">
                              <div className="boxes-stat-value">Mock Interviews</div>
                              <div className="boxes-stat-label">Practice with hiring partners</div>
                              <div className="boxes-stat-desc">Get repeated mock interviews with feedback from industry interviewers to boost confidence.</div>
                            </div>
                          </div>
                          <div className="boxes-stat">
                            <div className="boxes-stat-icon">🤝</div>
                            <div className="boxes-stat-content">
                              <div className="boxes-stat-value">Alumni Network</div>
                              <div className="boxes-stat-label">Industry connections & support</div>
                              <div className="boxes-stat-desc">Join an active alumni community for referrals, mentorship, and job leads.</div>
                            </div>
                          </div>
                        </div>
                        <div className="boxes-cta-row">
                          <button className="cta-btn cta-primary">Join Our Community <span className="arrow">→</span></button>
                          <button className="cta-btn cta-secondary">Request Syllabus</button>
                        </div>
                      </div>
                    </div>
                    <div className="boxes-right">
                      <div className="boxes-image-wrapper">
                        <img src={aie} alt="BraynupAI visual" className="boxes-image" />
                      </div>
                      {/* keep the features below the image for smaller screens if needed */}
                      <ul className="boxes-features">
                        {s.items && s.items.map((it, i) => (
                          <li key={i} className="boxes-feature-item">{it}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
                <div
                  className="video-bg-overlay"
                  // Expand the dark overlay for slide 5 to match expanded features width
                  style={{
                    maxWidth: 'none',
                    width: 'calc(100% + 160px)',
                    marginLeft: '-80px',
                    marginRight: '-80px',
                    paddingLeft: '40px',
                    paddingRight: '40px'
                  }}
                >
                  <div className="video-bg-row">
                    <div className="video-bg-left">
                      <div className="video-bg-content">
                        <div className="section-badge light">ENROLL TODAY</div>
                        <h2 className="video-bg-title">{s.title}</h2>
                        <h3 className="video-bg-subtitle">{s.subtitle}</h3>

                        {/* Features List (slide-5 only): expand horizontally to cover extra left/right gaps */}
                        {s.features && (
                          <div
                            className="features-list"
                            // Inline styles applied only for slide 5 so other slides remain unaffected
                            style={{
                              maxWidth: 'none',
                              width: 'calc(100% + 160px)',
                              marginLeft: '-80px',
                              marginRight: '-80px',
                              paddingLeft: '40px',
                              paddingRight: '40px'
                            }}
                          >
                            {s.features.map((feature, i) => (
                              <div
                                key={i}
                                className="feature-item"
                                // ensure each pill fills the available (expanded) width
                                style={{ width: '100%', boxSizing: 'border-box' }}
                              >
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
                    {/* right column removed per request (side-info-card) */}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        {/* Navigation controls: previous / dots / next centered below slides */}
        <div className="slider-nav" role="navigation" aria-label="Slider navigation">
          <div className="slider-dots" role="tablist" aria-label="Slide navigation">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-pressed={i === current}
              />
            ))}
          </div>
        </div>
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

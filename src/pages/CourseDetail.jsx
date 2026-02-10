import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CourseDetail.css';

function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Sample course data (in real app, fetch from API based on courseId)
  const courseData = {
    title: "Complete AI & Machine Learning Bootcamp 2026",
    subtitle: "Master AI, Deep Learning, NLP, Computer Vision with Python",
    rating: 5.0,
    reviewCount: 2845,
    students: 3500,
    lastUpdated: "January 2026",
    language: "English",
    price: 19999,
    originalPrice: 49999,
    instructor: {
      name: "Dr. Rahul Sharma",
      title: "AI Research Scientist, Google",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      bio: "10+ years of experience in AI and Machine Learning. Published 50+ research papers in top AI conferences.",
      students: 15000,
      courses: 8,
      rating: 4.9
    },
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80",
    promoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "This comprehensive AI & Machine Learning bootcamp is designed to take you from beginner to expert. Learn cutting-edge AI technologies including Deep Learning, Natural Language Processing, Computer Vision, and more. Build 15+ real-world projects and get job-ready in 6 months.",
    whatYouLearn: [
      "Master Python programming for AI and Machine Learning",
      "Build and train Deep Learning models with TensorFlow and PyTorch",
      "Implement Natural Language Processing (NLP) applications",
      "Create Computer Vision systems for image and video analysis",
      "Work with large datasets and perform data preprocessing",
      "Deploy AI models to production using cloud platforms",
      "Understand neural networks, CNNs, RNNs, and Transformers",
      "Build recommendation systems and chatbots"
    ],
    requirements: [
      "Basic programming knowledge (any language)",
      "High school mathematics",
      "Computer with internet connection",
      "Willingness to learn and practice"
    ],
    curriculum: [
      {
        section: "Introduction to AI & ML",
        lectures: 12,
        duration: "2h 30m",
        topics: [
          "What is Artificial Intelligence?",
          "Machine Learning Fundamentals",
          "Python Setup and Basics",
          "Numpy and Pandas for Data Science"
        ]
      },
      {
        section: "Deep Learning Fundamentals",
        lectures: 18,
        duration: "4h 15m",
        topics: [
          "Neural Networks Basics",
          "Activation Functions",
          "Backpropagation Algorithm",
          "Building Your First Neural Network"
        ]
      },
      {
        section: "Computer Vision with CNNs",
        lectures: 15,
        duration: "3h 45m",
        topics: [
          "Convolutional Neural Networks",
          "Image Classification Projects",
          "Object Detection with YOLO",
          "Face Recognition System"
        ]
      },
      {
        section: "Natural Language Processing",
        lectures: 14,
        duration: "3h 20m",
        topics: [
          "Text Processing and Tokenization",
          "Word Embeddings and Word2Vec",
          "Building Chatbots with RNNs",
          "Sentiment Analysis Project"
        ]
      },
      {
        section: "Advanced AI Topics",
        lectures: 10,
        duration: "2h 50m",
        topics: [
          "Transformers and BERT",
          "Generative AI and GANs",
          "Reinforcement Learning",
          "AI Model Deployment"
        ]
      }
    ],
    features: [
      { icon: "📚", title: "45 Hours Content", desc: "Comprehensive video lectures" },
      { icon: "🎯", title: "15+ Projects", desc: "Build real-world applications" },
      { icon: "🎓", title: "Certificate", desc: "Industry-recognized certification" },
      { icon: "♾️", title: "Lifetime Access", desc: "Learn at your own pace" },
      { icon: "💼", title: "Job Support", desc: "Career guidance and placement" },
      { icon: "👥", title: "Community", desc: "Join 3500+ learners" }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
        rating: 5,
        date: "2 weeks ago",
        comment: "Best AI course I've ever taken! The projects are amazing and the instructor explains complex concepts in a very simple way."
      },
      {
        name: "Priya Sharma",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
        rating: 5,
        date: "1 month ago",
        comment: "Landed my dream job as an AI Engineer after completing this course. Highly recommended!"
      },
      {
        name: "Rahul Verma",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
        rating: 5,
        date: "3 weeks ago",
        comment: "Outstanding course content and excellent support from the instructor. Worth every penny!"
      }
    ]
  };

  return (
    <div className="course-detail-page">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-hero-left">
              <button className="back-button" onClick={() => navigate(-1)}>
                <span className="back-arrow">←</span> Back to Courses
              </button>
              <div className="course-breadcrumb">
                <span>Home</span> / <span>Courses</span> / <span>AI & ML</span>
              </div>
              <h1 className="course-detail-title">{courseData.title}</h1>
              <p className="course-detail-subtitle">{courseData.subtitle}</p>
              
              <div className="course-meta-info">
                <div className="meta-item-detail">
                  <span className="rating-badge">⭐ {courseData.rating}</span>
                  <span>({courseData.reviewCount.toLocaleString()} reviews)</span>
                </div>
                <div className="meta-item-detail">
                  <span className="student-count">👥 {courseData.students.toLocaleString()}+ students</span>
                </div>
                <div className="meta-item-detail">
                  <span>🕐 Last updated: {courseData.lastUpdated}</span>
                </div>
                <div className="meta-item-detail">
                  <span>🌐 {courseData.language}</span>
                </div>
              </div>

              <div className="instructor-mini">
                <img src={courseData.instructor.image} alt={courseData.instructor.name} />
                <div>
                  <div className="instructor-mini-name">Created by {courseData.instructor.name}</div>
                  <div className="instructor-mini-title">{courseData.instructor.title}</div>
                </div>
              </div>
            </div>

            <div className="course-hero-right">
              <div className="course-preview-card">
                <div className="preview-image-wrapper">
                  <img src={courseData.thumbnail} alt={courseData.title} className="preview-image" />
                  <div className="play-overlay">
                    <div className="play-button">▶</div>
                    <span>Preview this course</span>
                  </div>
                </div>
                
                <div className="preview-card-content">
                  <div className="price-section">
                    <span className="current-price">₹{courseData.price.toLocaleString()}</span>
                    <span className="original-price-detail">₹{courseData.originalPrice.toLocaleString()}</span>
                    <span className="discount-badge">60% OFF</span>
                  </div>
                  
                  <button className="enroll-now-btn">Enroll Now</button>
                  <button className="add-to-cart-btn">Add to Cart</button>
                  
                  <div className="money-back">30-Day Money-Back Guarantee</div>
                  
                  <div className="course-includes">
                    <h4>This course includes:</h4>
                    <ul>
                      <li>📹 45 hours on-demand video</li>
                      <li>📄 50+ downloadable resources</li>
                      <li>🎯 15+ coding exercises</li>
                      <li>♾️ Full lifetime access</li>
                      <li>📱 Access on mobile and TV</li>
                      <li>🎓 Certificate of completion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="course-main-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="content-left">
              {/* Tabs */}
              <div className="course-tabs">
                <button 
                  className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'curriculum' ? 'active' : ''}`}
                  onClick={() => setActiveTab('curriculum')}
                >
                  Curriculum
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'instructor' ? 'active' : ''}`}
                  onClick={() => setActiveTab('instructor')}
                >
                  Instructor
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="tab-content">
                  <h2>Course Description</h2>
                  <p className="course-description-text">{courseData.description}</p>
                  
                  <h3>What you'll learn</h3>
                  <div className="learn-grid">
                    {courseData.whatYouLearn.map((item, index) => (
                      <div key={index} className="learn-item">
                        <span className="check-icon">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <h3>Requirements</h3>
                  <ul className="requirements-list">
                    {courseData.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>

                  <h3>Course Features</h3>
                  <div className="features-grid-detail">
                    {courseData.features.map((feature, index) => (
                      <div key={index} className="feature-card-detail">
                        <div className="feature-icon-detail">{feature.icon}</div>
                        <div className="feature-title-detail">{feature.title}</div>
                        <div className="feature-desc-detail">{feature.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'curriculum' && (
                <div className="tab-content">
                  <h2>Course Curriculum</h2>
                  <p className="curriculum-stats">
                    {courseData.curriculum.length} sections • {courseData.curriculum.reduce((acc, s) => acc + s.lectures, 0)} lectures • 
                    Total duration: {courseData.curriculum.reduce((acc, s) => {
                      const [h, m] = s.duration.split('h ');
                      return acc + parseInt(h) * 60 + parseInt(m.replace('m', ''));
                    }, 0) / 60}h+
                  </p>
                  
                  <div className="curriculum-list">
                    {courseData.curriculum.map((section, index) => (
                      <div key={index} className="curriculum-section">
                        <div className="section-header">
                          <div className="section-title">
                            <span className="section-icon">📂</span>
                            <h4>{section.section}</h4>
                          </div>
                          <div className="section-meta">
                            {section.lectures} lectures • {section.duration}
                          </div>
                        </div>
                        <ul className="topic-list">
                          {section.topics.map((topic, idx) => (
                            <li key={idx} className="topic-item">
                              <span className="topic-icon">▶</span>
                              <span>{topic}</span>
                              <span className="topic-duration">10:24</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'instructor' && (
                <div className="tab-content">
                  <h2>Your Instructor</h2>
                  <div className="instructor-detail-card">
                    <img src={courseData.instructor.image} alt={courseData.instructor.name} className="instructor-detail-avatar" />
                    <div className="instructor-detail-info">
                      <h3>{courseData.instructor.name}</h3>
                      <p className="instructor-detail-title">{courseData.instructor.title}</p>
                      <p className="instructor-bio">{courseData.instructor.bio}</p>
                      
                      <div className="instructor-stats">
                        <div className="stat-item-instructor">
                          <div className="stat-value">⭐ {courseData.instructor.rating}</div>
                          <div className="stat-label">Instructor Rating</div>
                        </div>
                        <div className="stat-item-instructor">
                          <div className="stat-value">👥 {courseData.instructor.students.toLocaleString()}</div>
                          <div className="stat-label">Students</div>
                        </div>
                        <div className="stat-item-instructor">
                          <div className="stat-value">📚 {courseData.instructor.courses}</div>
                          <div className="stat-label">Courses</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="tab-content">
                  <h2>Student Reviews</h2>
                  <div className="reviews-summary">
                    <div className="reviews-summary-left">
                      <div className="avg-rating">{courseData.rating}</div>
                      <div className="stars-large">⭐⭐⭐⭐⭐</div>
                      <div className="reviews-count">{courseData.reviewCount.toLocaleString()} reviews</div>
                    </div>
                  </div>
                  
                  <div className="reviews-list">
                    {courseData.reviews.map((review, index) => (
                      <div key={index} className="review-card">
                        <div className="review-header">
                          <img src={review.avatar} alt={review.name} className="review-avatar" />
                          <div className="review-meta">
                            <h4>{review.name}</h4>
                            <div className="review-rating">
                              {'⭐'.repeat(review.rating)}
                              <span className="review-date">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="review-comment">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="content-right">
              {/* Sticky sidebar can go here if needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseDetail;

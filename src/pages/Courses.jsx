import React from 'react';
import './Courses.css';

function Courses() {
  return (
    <div className="courses-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Courses</h1>
          <p>Explore World-Class AI Programs</p>
        </div>
      </section>

      <section className="courses-listing">
        <div className="container">
          <div className="course-item">
            <h2>📱 Digital Marketing with AI</h2>
            <p>Master AI-powered marketing strategies and automation</p>
            <button className="enroll-btn">Learn More</button>
          </div>

          <div className="course-item">
            <h2>💻 Full Stack Engineer with AI</h2>
            <p>Build intelligent web applications with AI integration</p>
            <button className="enroll-btn">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;

import React, { useState, useEffect } from 'react';
import './SignUp.css'; // Import your CSS file
import log1 from "../../images/log1.jpeg";
import log2 from "../../images/log2.jpg";

export const SignUp = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const images = [log1, log1, log2]; // Array of image paths

  // Image slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  // Password toggle logic
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="signup-container">
      <div className="left-section">
        <div className="slider-container">
          {images.map((image, index) => (
            <img
              key={index}
              className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
              src={image}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="right-section">
        <div className="arrow-icon">
          <a href="/">→</a>
        </div>
        <h5 className="text-center">Welcome to AVERIXIS SOLUTIONS ..!</h5>

        <div className="button-group">
          <button className="btn login text-white">
            <a href="/login">Login</a>
          </button>
          <button className="btn sign">
            <a href="/signup">Sign Up</a>
          </button>
        </div>

        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <form>
          <div className="form-group">
            <label className="form-label">Learner ID / Email ID</label>
            <input
              type="text"
              className="form-control border border-warning"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="text"
              className="form-control border border-warning"
              placeholder="Enter your User name"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control border border-warning"
                placeholder="Enter your Password"
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                {showPassword ? '👁️‍🗨️' : '👁️'}
              </span>
            </div>
          </div>

          <button type="submit" className="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};


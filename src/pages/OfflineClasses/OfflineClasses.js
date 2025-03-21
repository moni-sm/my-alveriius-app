import React from "react";
import "./OfflineClasses.css"; // Separate CSS file for styles

const OfflineClasses = () => {
  return (
    <div className="offline-classes">
      {/* Hero Section */}
      <div className="hero">
        <iframe src="/Alverixis solutions/offlineBanner.html" title="Offline Banner"></iframe>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature">
          <img src="/Alverixis solutions/images/img5.jpg" alt="Personal Interaction" />
          <h3>Personal Interaction</h3>
          <p>Engage directly with instructors and classmates.</p>
        </div>

        <div className="feature">
          <img src="/Alverixis solutions/images/offline1.webp" alt="Structured Schedule" />
          <h3>Structured Schedule</h3>
          <p>Follow a fixed timetable for better discipline.</p>
        </div>

        <div className="feature">
          <img src="/Alverixis solutions/images/offline2.webp" alt="Hands-On Learning" />
          <h3>Hands-On Learning</h3>
          <p>Gain practical experience through physical activities and labs.</p>
        </div>

        <div className="feature">
          <img src="/Alverixis solutions/images/offline3.webp" alt="Local Community" />
          <h3>Local Community</h3>
          <p>Be part of a local community and network in person.</p>
        </div>
      </div>
    </div>
  );
};

export default OfflineClasses;

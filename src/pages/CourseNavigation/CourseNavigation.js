import React, { useState,  useRef } from "react";
import "./CourseNavigation.css"; // Create a CSS file for styling

const CourseNavigation = () => {
  const [openCourses, setOpenCourses] = useState({});
  const [openWeeks, setOpenWeeks] = useState({});
  const containerRef = useRef(null);

  // Toggle Course Schedule
  const toggleCourseSchedule = (scheduleId) => {
    setOpenCourses((prev) => {
      const newState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = key === scheduleId ? !prev[key] : false;
      });
      return newState;
    });
  };

  // Toggle Week Content
  const toggleWeek = (weekId, courseId) => {
    setOpenWeeks((prev) => ({
      ...prev,
      [courseId]: prev[courseId] === weekId ? null : weekId,
    }));
  };

  // Scroll Functions
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Redirect to Course Details
//   const redirectToCourse = (course) => {
//     window.location.href = `/course-details?course=${course}`;
//   };

  return (
    <div className="courses-container">
      <button className="left-btn" onClick={scrollLeft}>←</button>
      <div className="courses-list" ref={containerRef}>
        {/* Example Course Item */}
        <div className="course">
          <button onClick={() => toggleCourseSchedule("course1")}>
            See Course 1
          </button>
          <div
            id="course1"
            className="course-schedule"
            style={{ display: openCourses["course1"] ? "block" : "none" }}
          >
            <button onClick={() => toggleWeek("week1", "course1")}>
              Week 1
            </button>
            <div
              id="week1"
              className="week-content"
              style={{ display: openWeeks["course1"] === "week1" ? "block" : "none" }}
            >
              Week 1 Content
            </div>
          </div>
        </div>
      </div>
      <button className="right-btn" onClick={scrollRight}>→</button>
    </div>
  );
};

export default CourseNavigation;

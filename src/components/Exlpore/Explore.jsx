import React, { useState } from "react";
import "./Explore.css";
import Navbar from "../Navbar/Navbar";
import "../Navbar/Navbar.css";
import Background from "../Background/Background";

const heroSlides = [
  { text1: "Unlock Your Learning", text2: "Discover Your Academic Strength" },
  { text1: "Achieve Excellence", text2: "Step-by-step Guided Tutorials" },
  { text1: "Master Any Subject", text2: "Explore Courses Tailored for You" },
];

const Home = () => {
  const [heroCount] = useState(0);

  return (
    <>
      <div className="homepage">
        <Navbar />
        <Background heroCount={heroCount} />

        {/* Courses */}
        <section id="courses" className="courses-section">
          <div className="container">
            <h3>Top Courses</h3>
            <div className="course-cards">
              <div className="course-card">
                <h4>Mathematics</h4>
                <p>From algebra to calculus, we make math simple.</p>
              </div>
              <div className="course-card">
                <h4>Science</h4>
                <p>Explore physics, chemistry, and biology in depth.</p>
              </div>
              <div className="course-card">
                <h4>English</h4>
                <p>Improve reading, writing, and speaking skills.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p>
              &copy; {new Date().getFullYear()} Tut-Hub Tutorials. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;

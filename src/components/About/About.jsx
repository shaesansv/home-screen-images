// src/components/About/About.jsx
import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar";

const About = () => {
  const [heroCount] = useState(0);
  return (
    <>
      <div className="about-page">
        <Navbar />
        <Background heroCount={heroCount} />
        <div className="about-container">
          <h1>About BrightFuture Tutorial Centre</h1>
          <p>
            At BrightFuture, we are passionate about helping students unlock
            their full academic potential. Founded in 2010, we have helped
            thousands of learners improve their understanding, boost confidence,
            and achieve academic excellence.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver quality, personalized education using
            engaging, interactive methods—online and in-person. We aim to make
            learning fun and accessible for every student.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>Experienced and certified tutors</li>
            <li>Flexible learning schedules</li>
            <li>Customized learning plans</li>
            <li>Interactive online sessions</li>
            <li>Proven track record of academic success</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;

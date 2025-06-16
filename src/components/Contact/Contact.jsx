// src/components/Contact/Contact.jsx
import { React, useState } from "react";
import "./Contact.css";
import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  const [heroCount] = useState(1);
  return (
    <>
      <div className="contact-page">
        <Navbar />
        <Background heroCount={heroCount} />
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Please fill out the form below.</p>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Other Ways to Reach Us</h3>
            <p>
              Address: Sivakasi, India
              <br />
              Phone: +91 00000 00000
              <br />
              Email: saranya1991@samp.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

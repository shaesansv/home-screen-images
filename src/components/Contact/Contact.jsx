import { React, useRef, useState } from "react";
import "./Contact.css";
import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar";
import { firestore } from "../../firebase";
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";

const Contact = () => {
  const [heroCount] = useState(1);

  const ref = collection(firestore, "message");

  const messageRef = useRef();

  const handleSave = async (e) => {
    e.preventDefaut();
    console.log(messageRef.current.value);

    let data = {
      message: messageRef.current.value,
    };
    try {
      addDoc(ref, data);
    } catch {
      console.log(e);
    }
  };
  return (
    <>
      <div className="contact-page">
        <Navbar />
        <Background heroCount={heroCount} />
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Please fill out the form below.</p>

          <form className="contact-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                ref={messageRef}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                ref={messageRef}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="text">Message:</label>
              <textarea
                type="text"
                id="message"
                name="message"
                required
                rows={5}
                ref={messageRef}
              />
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

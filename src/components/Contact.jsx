// src/components/Contact.jsx
import React from "react";
import "./Contact.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      className="contact-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="contact"
    >
      <h2 className="section-title">Get in Touch</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" placeholder="Write your message..." rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      <div className="contact-info">
        <p>Or reach me on</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/elankumaran-s-61b73a208" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/your-github-id" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub /> GitHub
          </a>
          <a href="mailto:yourmail@example.com" className="social-link">
            <FaEnvelope /> Email
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

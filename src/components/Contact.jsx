// src/components/Contact.jsx
import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ukakr7f",       // ✅ Your Service ID
        "template_pemktpl",      // ✅ Your Template ID
        form.current,
        "NmbMmWLbkMk-jabHO"      // ✅ Your Public Key
      )
      .then(
        (result) => {
          setMessage({ type: "success", text: "Message sent successfully ✅" });
          form.current.reset();
        },
        (error) => {
          setMessage({ type: "error", text: "Something went wrong ❌" });
        }
      );
  };

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

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="user_name" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" name="user_email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea name="message" id="message" placeholder="Write your message..." rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>

        {/* ✅ Moved the alert message just below the button */}
        {message && (
          <div
            className={`floating-alert form-message ${
              message.type === "success" ? "success" : "error"
            }`}
          >
            {message.text}
          </div>
        )}
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

// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CodeWithElanLogo from "./CodeWithElanLogo"; 
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="footer-container"
      id="footer"
    >
      <div className="footer-content">
        {/* Column 1 - Name and Tagline */}
        <div className="footer-brand">
          <CodeWithElanLogo />
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-links">
          <h4 className="footer-title">Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="footer-contact">
          <h4 className="footer-title">Contact Info</h4>
          <p><FaPhoneAlt /> +91 80985 64048</p>
          <p><FaEnvelope /> elankumaran.dev@gmail.com</p>
          <p><FaMapMarkerAlt /> Chennai, Tamil Nadu</p>
        </div>
      </div>

      <div className="footer-divider"></div>

      {/* Bottom Row - Social Icons */}
      <div className="footer-socials">
        <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
        <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
      </div>

      <p className="footer-credit">© 2025 Elankumaran. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;

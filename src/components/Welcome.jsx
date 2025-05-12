import React from 'react';
import { motion } from 'framer-motion';
import './Welcome.css';
import profileImage from '../assets/Elan.jpg';

const Welcome = () => {
  return (
    <section id="home" className="welcome-section">
      <div className="welcome-container">
        {/* Left Content - Text Section */}
        <motion.div
          className="text-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* "Welcome to My Portfolio" Title */}
          <motion.h1
            className="welcome-title"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Welcome to My Portfolio
          </motion.h1>

          {/* Name and Role */}
          <motion.h2
            className="typing-name glow-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Hi, I'm <span className="highlight">Elankumaran S</span>
          </motion.h2>

          <motion.p
            className="typing-role glow-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            className="welcome-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            I build responsive, scalable web applications using modern technologies. Let's make something great!
          </motion.p>

          <motion.button
            className="contact-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Right Content - Image Section */}
        <motion.div
          className="image-content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1.2 }}
        >
          <img src={profileImage} alt="Profile" className="profile-image-rectangle glowing-border" />
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;

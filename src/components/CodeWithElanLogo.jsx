// src/components/CodeWithElanLogo.jsx
import React from "react";
import { motion } from "framer-motion";
import "./CodeWithElanLogo.css";

const CodeWithElanLogo = () => {
  return (
    <motion.div
      className="codewithelan-logo"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <span className="main-logo">CodeWith</span>
      <span className="highlight">Elan</span>
      <motion.div
        className="tagline"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Crafting Code with Passion
      </motion.div>
    </motion.div>
  );
};

export default CodeWithElanLogo;

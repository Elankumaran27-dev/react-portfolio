import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

const AboutMe = () => {
  const [text, setText] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
  const content =
    "I'm a Full Stack Developer with 2 years of experience in iOS development. I have transitioned to full-stack development using Java, React.js, and MySQL. I love learning new technologies and building creative, efficient applications.";
  
  let i = 0;

  const typing = setInterval(() => {
    if (i < content.length) {
      setText(prev => prev + content.charAt(i));
      i++;
    } else {
      clearInterval(typing);
      setTimeout(() => setShowDetails(true), 500);
    }
  }, 20);

  return () => clearInterval(typing);
}, []);


  return (
    <motion.section
      className="aboutme-section"
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="aboutme-title">About Me</h2>
      <motion.p
        className="aboutme-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {text}
      </motion.p>

      {showDetails && (
        <>
          <motion.div
            className="aboutme-card fade-up"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3>🚀 What I Do</h3>
            <p>
              Passionate about building <span className="highlight">scalable full-stack applications</span> with clean UI/UX using <strong>React, Java, and MySQL</strong>.
            </p>
          </motion.div>

          <motion.div
            className="aboutme-card fade-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3>📌 Experience Timeline</h3>
            <ul>
              <li><strong>2022 – 2024:</strong> iOS Developer @ Casperon Technologies</li>
              <li><strong>2024 – Present:</strong> Full Stack Developer (Java, React, MySQL)</li>
            </ul>
          </motion.div>

          <motion.div
            className="aboutme-card fade-right"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3>🎯 Currently Learning</h3>
            <p>✅ Spring Boot for Java backend development</p>
            <p>✅ Building real-world full-stack projects</p>
          </motion.div>

          <motion.div
            className="skills-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="skills-title">🛠 My Tech Stack</h3>
            <div className="skills-grid">
              {[
                { icon: 'fab fa-html5', label: 'HTML5' },
                { icon: 'fab fa-css3-alt', label: 'CSS3' },
                { icon: 'fab fa-js', label: 'JavaScript' },
                { icon: 'fab fa-react', label: 'React' },
                { icon: 'fab fa-java', label: 'Java' },
                { icon: 'fas fa-database', label: 'MySQL' },
                { icon: 'fab fa-git-alt', label: 'Git' },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <i className={`${skill.icon} colored`}></i>
                  <p>{skill.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </motion.section>
  );
};

export default AboutMe;

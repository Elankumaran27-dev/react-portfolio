import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projectData = [
  {
    title: "Portfolio Website",
    description:
      "Built a responsive personal portfolio using React, Tailwind CSS, and Framer Motion. Includes smooth scrolling, animations, and reusable components.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Event Ticketing System",
    description:
      "Designed and implemented a full-stack system to manage events, ticket sales, and user reservations using Java, MySQL, and JSP.",
    tech: ["Java", "MySQL", "JSP"],
    github: "https://github.com/yourusername/event-ticketing-system",
  },
  {
    title: "SmileCare Website",
    description:
      "Created a responsive dental care site with HTML, CSS, and JavaScript. Features include hero section, services, testimonials, and a contact form.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/smilecare-website",
  },
  {
    title: "Employee Attendance System",
    description:
      "Developed a system to track employee attendance, departments, and leave using MySQL with stored procedures and views.",
    tech: ["MySQL", "Stored Procedures", "Views"],
    github: "https://github.com/yourusername/employee-attendance-system",
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card glow-on-hover"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <motion.span
                  key={idx}
                  className="tech-badge"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px var(--secondary-color)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              View on GitHub
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;

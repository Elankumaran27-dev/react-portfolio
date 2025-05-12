import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'; // Importing the Navbar component
import Welcome from './components/Welcome';  // Import the Welcome component
import AboutMe from './components/AboutMe';  // Import the AboutMe component
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';  // Global styles (if needed)

const App = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);

  // Using useEffect to show the AboutMe section after a certain delay (e.g., 3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAboutMe(true); // Show AboutMe after 3 seconds
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer); // Clean up the timer when the component is unmounted
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar /> {/* Render the Navbar */}
      <Welcome />  {/* Render the Welcome section */}
      {showAboutMe && <AboutMe />} {/* Render the AboutMe section after the timer */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

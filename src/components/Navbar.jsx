import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import useWindowWidth from './useWindowWidth';
import CodeWithElanLogo from "./CodeWithElanLogo"; 
import './Navbar.css';

const Navbar = () => {
  const width = useWindowWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open', !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  const scrollOffset = width <= 768 ? -90 : -120;

  const links = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
  <CodeWithElanLogo />
</div>


        {/* Desktop Links */}
        <ul className="navbar-links desktop">
          {links.map((link) => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                spy={true}
                smooth={true}
                offset={scrollOffset}
                duration={500}
                className={activeLink === link.to ? 'active' : ''}
                onSetActive={handleSetActive}
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {width <= 768 && isMenuOpen && (
            <motion.ul
              className="navbar-links mobile"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {links.map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={scrollOffset}
                    duration={500}
                    className={activeLink === link.to ? 'active' : ''}
                    onClick={() => {
                      handleSetActive(link.to);
                      closeMenu();
                    }}
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

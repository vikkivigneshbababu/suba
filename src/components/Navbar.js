import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: '/', label: 'Home', delay: 0.1 },
    { path: '/profile', label: 'Profile', delay: 0.2 },
    { path: '/about', label: 'About', delay: 0.3 },
    { path: '/skills', label: 'Skills', delay: 0.4 },
    { path: '/education', label: 'Education', delay: 0.5 },
    { path: '/experience', label: 'Experience', delay: 0.6 },
    { path: '/certifications', label: 'Certifications', delay: 0.7 }
  ];

  return (
    <motion.nav 
      className={scrolled ? 'navbar scrolled' : 'navbar'}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      data-theme={theme}
    >
      <div className="navbar-container">
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="navbar-logo">
            <span>S</span>ubashini <span>S</span>ankar
          </Link>
        </motion.div>
        
        <div className="nav-right">
          <ThemeToggle />
          
          <div className="menu-icon" onClick={toggleMenu}>
            <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {navItems.map((item) => (
            <motion.li 
              key={item.path}
              className="nav-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: item.delay }}
            >
              <Link 
                to={item.path} 
                className={location.pathname === item.path ? 'nav-links active' : 'nav-links'}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import './Footer.css';

function Footer() {
  const { theme } = useContext(ThemeContext);
  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' },
    { name: 'GitHub', icon: 'fab fa-github', url: '#' },
    { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:contact@example.com' }
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certifications', path: '/certifications' }
  ];

  return (
    <footer className="footer" data-theme={theme}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Link to="/">
                <span>S</span>ubashini <span>S</span>ankar
              </Link>
            </div>
            <p className="footer-tagline">
              Experienced Software Test Engineer with expertise in Manual and Automation Testing
            </p>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                >
                  <i className={link.icon}></i>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-nav">
              <ul>
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              <i className="fas fa-map-marker-alt mr-2"></i> Chennai, Tamil Nadu
            </p>
            <p>
              <i className="fas fa-envelope mr-2"></i> contact@example.com
            </p>
            <p>
              <i className="fas fa-phone mr-2"></i> +91 1234567890
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Subashini Sankar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
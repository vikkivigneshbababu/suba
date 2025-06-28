import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import './Home.css';

function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section" data-theme={theme}>
        <div className="container">
          <div className="hero-container">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Software Test Engineer
              </motion.span>
              
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Hi, I'm <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >Subashini Sankar</motion.span>
              </motion.h1>
              
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Experienced in Manual and Automation Testing with expertise in Selenium, API Testing, and Performance Testing
              </motion.p>
              
              <motion.div 
                className="hero-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Link to="/about" className="btn btn-primary">
                  <i className="fas fa-user-circle mr-2"></i> About Me
                </Link>
                <Link to="/experience" className="btn btn-outline">
                  <i className="fas fa-briefcase mr-2"></i> My Experience
                </Link>
              </motion.div>
              
              <motion.div 
                className="hero-stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="hero-stat">
                  <span className="hero-stat-number">2+</span>
                  <span className="hero-stat-text">Years Experience</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">10+</span>
                  <span className="hero-stat-text">Projects Completed</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">5+</span>
                  <span className="hero-stat-text">Certifications</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hero-image-container"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-image"></div>
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
          </div>
        </div>
        
        {/* Background shapes */}
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </section>
      
      {/* Services Section */}
      <section className="services-section" data-theme={theme}>
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center">My Expertise</h2>
            <p className="section-subtitle text-center">
              Specialized in various testing methodologies to ensure software quality
            </p>
          </motion.div>
          
          <div className="services-grid">
            {[
              {
                icon: 'fas fa-laptop-code',
                title: 'Manual Testing',
                description: 'Comprehensive manual testing to ensure functionality, usability, and reliability of software applications.'
              },
              {
                icon: 'fas fa-robot',
                title: 'Automation Testing',
                description: 'Efficient test automation using Selenium and other frameworks to improve test coverage and reduce testing time.'
              },
              {
                icon: 'fas fa-exchange-alt',
                title: 'API Testing',
                description: 'Thorough testing of API endpoints to ensure proper data exchange and system integration.'
              },
              {
                icon: 'fas fa-tachometer-alt',
                title: 'Performance Testing',
                description: 'Evaluating system performance under various conditions to ensure optimal speed and stability.'
              },
              {
                icon: 'fas fa-mobile-alt',
                title: 'Mobile Testing',
                description: 'Testing mobile applications across different devices and platforms to ensure consistent user experience.'
              },
              {
                icon: 'fas fa-shield-alt',
                title: 'Security Testing',
                description: 'Identifying vulnerabilities and ensuring the application is secure against potential threats.'
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to="/skills" className="btn-link">
                  Learn more <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="about-section" data-theme={theme}>
        <div className="container">
          <div className="about-container">
            <motion.div 
              className="about-image-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="about-image-bg"></div>
              
            </motion.div>
            <motion.div 
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="about-title">About Me</h2>
              <p className="about-description">
                To give effective as well as efficient efforts towards attainment of organizational goals with exploring wide scope of knowledge and intelligence. 
                To work in an environment that provides a challenging and rewarding career ensuring a high-level job satisfaction.
              </p>
              
              <div className="about-features">
                {[
                  { icon: 'fas fa-check-circle', text: 'Manual Testing' },
                  { icon: 'fas fa-check-circle', text: 'Selenium' },
                  { icon: 'fas fa-check-circle', text: 'API Testing' },
                  { icon: 'fas fa-check-circle', text: 'Performance Testing' },
                  { icon: 'fas fa-check-circle', text: 'Test Planning' },
                  { icon: 'fas fa-check-circle', text: 'Bug Tracking' }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="about-feature"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="about-feature-icon">
                      <i className={feature.icon}></i>
                    </div>
                    <span className="about-feature-text">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-4"
              >
                <Link to="/about" className="btn btn-primary">
                  More About Me
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section" data-theme={theme}>
        <div className="container">
          <motion.div 
            className="cta-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Interested in my work?</h2>
            <p className="cta-description">
              Feel free to explore my portfolio to learn more about my skills, experience, and certifications in software testing.
            </p>
            <div className="cta-buttons">
              <Link to="/experience" className="btn btn-outline-white">
                <i className="fas fa-briefcase mr-2"></i> View Experience
              </Link>
              <Link to="/certifications" className="btn btn-outline-white">
                <i className="fas fa-certificate mr-2"></i> View Certification
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
import React from 'react';
import { motion } from 'framer-motion';
import './Pages.css';

function About() {
  return (
    <div className="page-container">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>ABOUT ME</h1>
      </motion.div>
      
      <motion.div 
        className="page-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="about-content">
          <motion.div
            className="about-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="section-title">Professional Summary</h3>
            <p>
              To give effective as well as efficient efforts towards attainment of organizational goals with exploring wide scope of knowledge and intelligence. 
              To work in an environment that provides a challenging and rewarding career ensuring a high-level job satisfaction. 
              In the process apart from benefiting my employer, I also expect to learn for my overall development.
            </p>
          </motion.div>
          
          <motion.div 
            className="about-qualities"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ marginTop: '30px' }}
          >
            <h3 className="section-title">Key Qualities</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '20px',
              marginTop: '20px'
            }}>
              <div className="card" style={{ padding: '20px' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>
                  <i className="fas fa-check-circle" style={{ marginRight: '10px' }}></i>
                  Detail-Oriented
                </h4>
                <p>Meticulous attention to detail in testing and quality assurance processes.</p>
              </div>
              
              <div className="card" style={{ padding: '20px' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>
                  <i className="fas fa-check-circle" style={{ marginRight: '10px' }}></i>
                  Problem Solver
                </h4>
                <p>Analytical approach to identifying and resolving software issues efficiently.</p>
              </div>
              
              <div className="card" style={{ padding: '20px' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>
                  <i className="fas fa-check-circle" style={{ marginRight: '10px' }}></i>
                  Team Player
                </h4>
                <p>Collaborative mindset with excellent communication skills.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-interests"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2>INTERESTS</h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '15px',
                marginTop: '20px'
              }}
            >
              {['Software Testing', 'Automation', 'Quality Assurance', 'API Testing', 'Performance Testing'].map((interest, index) => (
                <motion.span 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    padding: '8px 16px',
                    background: 'var(--card-color)',
                    borderRadius: 'var(--border-radius-md)',
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}
                >
                  {interest}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
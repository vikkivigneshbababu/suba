import React from 'react';
import { motion } from 'framer-motion';
import './Pages.css';

function Education() {
  return (
    <div className="page-container">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>EDUCATION</h1>
      </motion.div>
      
      <motion.div 
        className="page-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="education-timeline">
          <motion.div 
            className="education-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <div className="education-year">2015-2018</div>
            <motion.div 
              className="education-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3>B.SC (PHYSICS)</h3>
              <p className="education-institution">THIRUVALLUVAR UNIVERSITY - GOVERNMENT ARTS AND SCIENCE COLLEGE</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="education-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <div className="education-year">2014-2015</div>
            <motion.div 
              className="education-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3>HSC</h3>
              <p className="education-institution">R.C.T Hr. Sec School, Chidambaram</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="education-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <div className="education-year">2012-2013</div>
            <motion.div 
              className="education-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3>SSLC</h3>
              <p className="education-institution">R.C.T Hr. Sec School, Chidambaram</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Education;
import React from 'react';
import { motion } from 'framer-motion';
import './Pages.css';

function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="page-container">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>CERTIFICATIONS</h1>
      </motion.div>
      
      <div className="page-content">
        <motion.div 
          className="certifications-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="certification-card"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
              transition: { duration: 0.2 }
            }}
          >
            <h3>Certified Software Testing</h3>
            <p className="certification-provider">Qtree Technologies</p>
            <p className="certification-year">2023</p>
          </motion.div>
          
          <motion.div 
            className="certification-card"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
              transition: { duration: 0.2 }
            }}
          >
            <h3>Manual and Automation Testing</h3>
            <p className="certification-skills">Skills: Test Case Design, Test Execution, Defect Tracking</p>
          </motion.div>
          
          <motion.div 
            className="certification-card"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
              transition: { duration: 0.2 }
            }}
          >
            <h3>API Testing & Performance Testing</h3>
            <p className="certification-skills">Skills: Postman, JMeter, API Validation</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Certifications;
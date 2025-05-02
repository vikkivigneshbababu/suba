import React from 'react';
import { motion } from 'framer-motion';
import './Pages.css';

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
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
        <h1>TECHNICAL SKILLS</h1>
      </motion.div>
      
      <div className="page-content">
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="skill-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h3>Hardware/Platforms</h3>
            <ul>
              <li>Windows</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="skill-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h3>Languages</h3>
            <ul>
              <li>Java</li>
              <li>HTML</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="skill-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h3>Testing Methodology</h3>
            <ul>
              <li>Agile</li>
              <li>Waterfall</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="skill-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h3>Build Automation</h3>
            <ul>
              <li>Apache Maven</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="skill-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h3>Platform</h3>
            <ul>
              <li>Web</li>
              <li>Android</li>
              <li>IOS</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="skill-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h3>Software Tools</h3>
            <ul>
              <li>Selenium</li>
              <li>Bugzilla</li>
              <li>Postman</li>
              <li>Eclipse</li>
              <li>J-Meter</li>
              <li>PyCharm</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="skill-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h3>Documentation Tools</h3>
            <ul>
              <li>MS Office</li>
              <li>MS Word</li>
              <li>MS Excel</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
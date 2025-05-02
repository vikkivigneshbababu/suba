import React from 'react';
import { motion } from 'framer-motion';
import './Pages.css';

function Experience() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
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
        <h1>WORK EXPERIENCE</h1>
      </motion.div>
      
      <motion.div 
        className="page-content"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="experience-container">
          <motion.div 
            className="job-header"
            variants={fadeIn}
          >
            <h2>Software Test Engineer</h2>
            <p className="company-name">HEPL (Hema's Enterprises Pvt Ltd), Cuddalore</p>
            <p className="job-duration">December 2023 – Present</p>
          </motion.div>
          
          <motion.div 
            className="project-card"
            variants={fadeIn}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h3>BUDGIE</h3>
            <p className="project-type">Application: Organizational Tools Development</p>
            <p className="project-description">
              Budgie is a comprehensive organizational tool developed for internal and external use in a company. 
              It features a variety of modules including employee profiles, settings, colleague birthday notifications, 
              organization charts, and more, aimed at enhancing workplace collaboration and management.
            </p>
            
            <h4>Responsibilities:</h4>
            <motion.ul 
              className="responsibilities-list"
              variants={staggerContainer}
            >
              <motion.li variants={listItem}>Understanding test requirements and analyzing the AUT (Application Under Test).</motion.li>
              <motion.li variants={listItem}>Developed and maintained modules such as profiles, settings, colleague birthdays, and Separation.</motion.li>
              <motion.li variants={listItem}>Analyzed project requirements for automation feasibility.</motion.li>
              <motion.li variants={listItem}>Implemented Page Object Model automation frameworks using Selenium.</motion.li>
              <motion.li variants={listItem}>Worked on mobile and web applications using a Hybrid framework.</motion.li>
              <motion.li variants={listItem}>Created and optimized automation scripts using java with Selenium and tested client API'.</motion.li>
              <motion.li variants={listItem}>Designed and executed manual test cases and automation scripts.</motion.li>
              <motion.li variants={listItem}>Tracked defects using Bugzilla</motion.li>
            </motion.ul>
          </motion.div>
          
          <motion.div 
            className="project-card"
            variants={fadeIn}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h3>NERAM</h3>
            <p className="project-type">Application: Daily task management mobile and web application</p>
            <p className="project-description">
              Neram is an all-in-one daily task management tool designed for both internal and external use within a company. 
              It includes various modules such as employee timesheets, member activity tracking, product member activity, 
              swipe details, raised request, masters, reporting, and more, all aimed at improving workplace collaboration and management.
            </p>
            
            <h4>Responsibilities:</h4>
            <motion.ul 
              className="responsibilities-list"
              variants={staggerContainer}
            >
              <motion.li variants={listItem}>Performed various types of testing such as functional, regression, system, mobile, and performance testing.</motion.li>
              <motion.li variants={listItem}>Regularly attended sprint planning, sprint-wise product walkthroughs, and daily scrum meetings for all products, as they were under an agile model.</motion.li>
              <motion.li variants={listItem}>Preparing automation scripts in java with Selenium & validating response using Postman.</motion.li>
              <motion.li variants={listItem}>Proficient experience in Test Case Design and Test Execution.</motion.li>
              <motion.li variants={listItem}>Collaborated with developers, business analysts, and other stakeholders to ensure effective communication and understanding of requirements.</motion.li>
              <motion.li variants={listItem}>Raise and track defects until closure using Bugzilla.</motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;
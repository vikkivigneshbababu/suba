import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import './Profile.css';

function Profile() {
  const { theme } = useContext(ThemeContext);

  // Education data
  const education = [
    {
      id: 1,
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Anna University",
      location: "Chennai, India",
      duration: "2015 - 2019",
      description: "Graduated with First Class Honors. Specialized in software engineering and testing methodologies."
    },
    {
      id: 2,
      degree: "Advanced Certification in Software Testing",
      institution: "ISTQB",
      location: "Online",
      duration: "2020",
      description: "Certified Foundation Level and Advanced Level Test Analyst with focus on automation testing frameworks."
    }
  ];

  // Skills data
  const skills = {
    testing: [
      { name: "Manual Testing", level: 95 },
      { name: "Automation Testing", level: 90 },
      { name: "API Testing", level: 85 },
      { name: "Performance Testing", level: 80 },
      { name: "Mobile Testing", level: 85 }
    ],
    tools: [
      { name: "Selenium", level: 90 },
      { name: "Postman", level: 85 },
      { name: "JIRA", level: 95 },
      { name: "TestRail", level: 90 },
      { name: "Jenkins", level: 80 }
    ],
    programming: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 85 },
      { name: "HTML/CSS", level: 70 }
    ]
  };

  // Certifications data
  const certifications = [
    {
      id: 1,
      name: "ISTQB Certified Tester - Foundation Level",
      issuer: "International Software Testing Qualifications Board",
      date: "2019",
      icon: "fa-certificate"
    },
    {
      id: 2,
      name: "ISTQB Certified Tester - Advanced Level Test Analyst",
      issuer: "International Software Testing Qualifications Board",
      date: "2020",
      icon: "fa-certificate"
    },
    {
      id: 3,
      name: "Selenium WebDriver with Java",
      issuer: "Udemy",
      date: "2020",
      icon: "fa-code"
    },
    {
      id: 4,
      name: "API Testing with Postman",
      issuer: "Coursera",
      date: "2021",
      icon: "fa-code-branch"
    }
  ];

  // Languages data
  const languages = [
    { name: "English", level: "Professional", percentage: 95 },
    { name: "Tamil", level: "Native", percentage: 100 },
    { name: "Hindi", level: "Intermediate", percentage: 70 }
  ];

  return (
    <div className="profile-page" data-theme={theme}>
      {/* Header Section */}
      <section className="profile-header">
        <div className="container">
          <motion.div 
            className="profile-header-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="profile-image-container">
              <div className="profile-image-bg"></div>
             
            </div>
            <div className="profile-info">
              <h1 className="profile-name">Subashini Sankar</h1>
              <h2 className="profile-title">Software Test Engineer</h2>
              <p className="profile-bio">
                Dedicated Software Test Engineer with expertise in manual and automation testing.
                Passionate about ensuring software quality and enhancing user experience through
                comprehensive testing methodologies.
              </p>
              <div className="profile-contact">
                <a href="mailto:subashini.sankar@example.com" className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>Subashinisankar25@gmail.com</span>
                </a>
                <a href="tel:+1234567890" className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+91 9360001729</span>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <i className="fab fa-linkedin"></i>
                  <span>9 560451295/
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="profile-content">
        <div className="container">
          <div className="profile-grid">
            {/* Left Column */}
            <div className="profile-left">
              {/* About Me */}
              <motion.div 
                className="profile-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="card-title">
                  <i className="fas fa-user"></i>
                  About Me
                </h3>
                <div className="card-content">
                  <p>
                    I am a detail-oriented Software Test Engineer with 4+ years of experience in ensuring 
                    software quality through comprehensive testing methodologies. My expertise spans across 
                    manual testing, automation testing, and API testing.
                  </p>
                  <p>
                    I am passionate about delivering high-quality software products by implementing 
                    effective test strategies and identifying potential issues before they reach production. 
                    My goal is to contribute to creating seamless user experiences through thorough testing 
                    and quality assurance.
                  </p>
                  <p>
                    I continuously update my skills to stay current with the latest testing tools and 
                    methodologies, ensuring that I can provide the most effective testing solutions for 
                    any project.
                  </p>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div 
                className="profile-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="card-title">
                  <i className="fas fa-graduation-cap"></i>
                  Education
                </h3>
                <div className="card-content">
                  <div className="timeline">
                    {education.map(item => (
                      <div className="timeline-item" key={item.id}>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h4>{item.degree}</h4>
                          <div className="timeline-info">
                            <span>{item.institution}, {item.location}</span>
                            <span className="timeline-period">{item.duration}</span>
                          </div>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div 
                className="profile-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="card-title">
                  <i className="fas fa-certificate"></i>
                  Certifications
                </h3>
                <div className="card-content">
                  <div className="certifications-grid">
                    {certifications.map(cert => (
                      <div className="certification-item" key={cert.id}>
                        <div className="certification-icon">
                          <i className={`fas ${cert.icon}`}></i>
                        </div>
                        <div className="certification-info">
                          <h4>{cert.name}</h4>
                          <p>{cert.issuer} • {cert.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="profile-right">
              {/* Skills */}
              <motion.div 
                className="profile-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="card-title">
                  <i className="fas fa-code"></i>
                  Professional Skills
                </h3>
                <div className="card-content">
                  <div className="skills-section">
                    <h4>Testing Skills</h4>
                    <div className="skills-grid">
                      {skills.testing.map((skill, index) => (
                        <div className="skill-item" key={index}>
                          <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                          </div>
                          <div className="skill-bar">
                            <div 
                              className="skill-level" 
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="skills-section">
                    <h4>Testing Tools</h4>
                    <div className="skills-grid">
                      {skills.tools.map((skill, index) => (
                        <div className="skill-item" key={index}>
                          <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                          </div>
                          <div className="skill-bar">
                            <div 
                              className="skill-level" 
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="skills-section">
                    <h4>Programming Languages</h4>
                    <div className="skills-grid">
                      {skills.programming.map((skill, index) => (
                        <div className="skill-item" key={index}>
                          <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                          </div>
                          <div className="skill-bar">
                            <div 
                              className="skill-level" 
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div 
                className="profile-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="card-title">
                  <i className="fas fa-language"></i>
                  Languages
                </h3>
                <div className="card-content">
                  <div className="languages-grid">
                    {languages.map((language, index) => (
                      <div className="language-item" key={index}>
                        <div className="language-info">
                          <h4>{language.name}</h4>
                          <span>{language.level}</span>
                        </div>
                        <div className="language-bar">
                          <div 
                            className="language-level" 
                            style={{ width: `${language.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Interests */}
              <motion.div 
                className="profile-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="card-title">
                  <i className="fas fa-heart"></i>
                  Interests
                </h3>
                <div className="card-content">
                  <div className="interests-grid">
                    <div className="interest-item">
                      <div className="interest-icon">
                        <i className="fas fa-book"></i>
                      </div>
                      <span>Reading</span>
                    </div>
                    <div className="interest-item">
                      <div className="interest-icon">
                        <i className="fas fa-music"></i>
                      </div>
                      <span>Music</span>
                    </div>
                    <div className="interest-item">
                      <div className="interest-icon">
                        <i className="fas fa-plane"></i>
                      </div>
                      <span>Travel</span>
                    </div>
                    <div className="interest-item">
                      <div className="interest-icon">
                        <i className="fas fa-camera"></i>
                      </div>
                      <span>Photography</span>
                    </div>
                    <div className="interest-item">
                      <div className="interest-icon">
                        <i className="fas fa-laptop-code"></i>
                      </div>
                      <span>Coding</span>
                    </div>
                    <div className="interest-item">
                      <div className="interest-icon">
                        <i className="fas fa-utensils"></i>
                      </div>
                      <span>Cooking</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Resume Section */}
      <section className="resume-section">
        <div className="container">
          <motion.div 
            className="resume-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="resume-content">
              <h2>Want to know more about my experience?</h2>
              <p>Download my complete resume to get detailed information about my work experience, projects, and skills.</p>
            </div>
            <a href="#" className="btn btn-primary">
              <i className="fas fa-download"></i>
              Download Resume
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
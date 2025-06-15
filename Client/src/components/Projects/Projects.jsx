import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';
import ticketvideo from '../../assets/vedio/chennai museum.mp4';
import quiz from '../../assets/vedio/Ai Quiz.mp4';
import app from '../../assets/vedio/app.mp4';

const projects = [
  {
    id: 1,
    title: 'Ticket Booking Chatbot',
    description: 'An AI chatbot system for Chennai Museum that lets users explore exhibits, book tickets, and make payments. Built with React.js, Flask, and MongoDB, it uses LangChain with LLaMA 3 for smart, natural conversations. Razorpay handles secure payments.',
    tags: ['React.js', 'Flask', 'MongoDB', 'Razorpay', 'LangChain', 'LLaMA 3'],
    video: ticketvideo,
    github: 'https://github.com/Sanjayraj-k/TicketBookingchatbot.git',
    live: 'https://drive.google.com/drive/folders/13dqocupCOYRtiv6-7IjBPsy6PmxXyL9F?usp=sharing',
  },
  {
    id: 2,
    title: 'AI Quiz Generator with Proctoring System',
    description: 'An AI-powered quiz platform that generates questions from PDFs and auto-creates Google Forms for quizzes. Includes proctoring features like face tracking, tab switch detection, and speech monitoring. Built using React.js, Flask, MongoDB, and LLaMA 3 via LangChain.',
    tags: ['React.js', 'Flask', 'MongoDB', 'LangChain', 'LangGraph', 'LLaMA 3', 'Google Forms', 'Computer Vision'],
    video: quiz,
    github: 'https://github.com/Sanjayraj-k/Ai-quiz-Generator.git',
    live: 'https://drive.google.com/drive/folders/13dqocupCOYRtiv6-7IjBPsy6PmxXyL9F?usp=sharing',
  },
  {
    id: 3,
    title: "Fitness App with User Authentication",
    description: "A mobile fitness application built with React Native, featuring user authentication via Firebase. Includes login, signup, and social login options (Google, Facebook, Apple) with a sleek UI, gradient backgrounds, and navigation between welcome, login, signup, and home screens.",
    tags: ["React Native", "Firebase", "Authentication", "Expo", "React Navigation", "Mobile App", "Clerk"],
    video: app,
    github: 'https://github.com/Sanjayraj-k/Fitness_app.git',
    live: 'https://drive.google.com/drive/folders/13dqocupCOYRtiv6-7IjBPsy6PmxXyL9F?usp=sharing',
  }
];

const Projects = ({ projectEnter, projectLeave, buttonEnter, buttonLeave }) => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProjects(prev => prev + 2);
      setLoading(false);
    }, 500);
  };

  const handleVideoError = (e) => {
    console.log('Video failed to load:', e.target.src);
    e.target.style.display = 'none';
  };

  const handleVideoLoad = (e) => {
    if (!isMobile) {
      const playPromise = e.target.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Autoplay prevented:', error);
        });
      }
    }
  };

  return (
    <motion.div
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="projects-container">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onMouseEnter={projectEnter}
          onMouseLeave={projectLeave}
        >
          My Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.slice(0, isMobile ? visibleProjects : projects.length).map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: isMobile ? 0.3 : 0.5, 
                delay: isMobile ? 0 : index * 0.1 
              }}
              viewport={{ once: true, margin: isMobile ? "0px" : "100px" }}
              onMouseEnter={projectEnter}
              onMouseLeave={projectLeave}
            >
              <div className="project-image">
                <video
                  src={project.video}
                  alt={project.title}
                  muted
                  loop
                  playsInline
                  preload={isMobile ? "none" : "metadata"}
                  onLoadedData={handleVideoLoad}
                  onError={handleVideoError}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    backgroundColor: '#1a1a1a',
                    display: isMobile ? 'none' : 'block'
                  }}
                />
                {isMobile && (
                  <div className="mobile-placeholder">
                    <h3>{project.title}</h3>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onMouseEnter={buttonEnter}
                      onMouseLeave={buttonLeave}
                    >
                      <FiGithub />
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onMouseEnter={buttonEnter}
                      onMouseLeave={buttonLeave}
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {isMobile && visibleProjects < projects.length && (
          <div className="load-more-container">
            <motion.button
              className="load-more-btn"
              onClick={loadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}
            >
              Load More Projects
              {loading && <span className="loading-spinner"></span>}
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;

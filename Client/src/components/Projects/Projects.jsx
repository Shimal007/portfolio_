import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';
import ticketvideo from 'Client/src/assets/vedio/Ai Quiz.mp4';
import quiz from 'Client/src/assets/vedio/chennai museum.mp4';

const projects = [
  {
    id: 1,
    title: 'Ticket Booking Chatbot',
    description:
      'An AI chatbot system for Chennai Museum that lets users explore exhibits, book tickets, and make payments. Built with React.js, Flask, and MongoDB, it uses LangChain with LLaMA 3 for smart, natural conversations. Razorpay handles secure payments.',
    tags: ['React.js', 'Flask', 'MongoDB', 'Razorpay', 'LangChain', 'LLaMA 3'],
    video: ticketvideo,
    github: 'https://github.com/Sanjayraj-k/TicketBookingchatbot.git',
    live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg',
  },
  {
    id: 2,
    title: 'AI Quiz Generator with Proctoring System',
    description:
      'An AI-powered quiz platform that generates questions from PDFs and auto-creates Google Forms for quizzes. Includes proctoring features like face tracking, tab switch detection, and speech monitoring. Built using React.js, Flask, MongoDB, and LLaMA 3 via LangChain.',
    tags: ['React.js', 'Flask', 'MongoDB', 'LangChain', 'LangGraph', 'LLaMA 3', 'Google Forms', 'Computer Vision'],
    video: quiz,
    github: 'https://github.com/jeyachandranj/Google-Form-AI.git',
    live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg',
  }
];

const Projects = ({ projectEnter, projectLeave, buttonEnter, buttonLeave }) => {
  return (
    <motion.div
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="projects-container">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onMouseEnter={projectEnter}
              onMouseLeave={projectLeave}
            >
              <div className="project-image">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img src={project.image} alt={project.title} />
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
      </div>
    </motion.div>
  );
};

export default Projects;

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { FiAward, FiCode, FiUsers, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Resume from '../components/Resume/Resume';
import Contact from '../components/Contact/Contact';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';
import './HomePage.css';
import csd from '../assets/images/csd_2.jpg';
import eie from '../assets/images/eie_1.jpg';
const HomePage = ({ 
  textEnter, 
  textLeave, 
  buttonEnter, 
  buttonLeave,
  projectEnter,
  projectLeave,
  setActiveSection
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  const achievements = [
    {
      id: 1,
      title: "CSD 24 Hour Hackathon 2nd Prize",
      description: "Built an Ayurveda Ecommerce Website with Chatbot for Assistance and won the CSD 24 Hackathon.",
      date: "March 2025",
      image: csd // Replace with actual image path
    },
    {
      id: 2,
      title: "Project Presentation 1st Price",
      description: "Presenta a project on Chatbot based Ticket Booking System and won the 1st prize.",
      date: "February 2025",
      image: eie// Replace with actual image path
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextAchievement();
    }, 10000); // Change slide every 4 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentAchievement]); // Dependency on currentAchievement to restart interval if needed

  const nextAchievement = () => {
    setCurrentAchievement((prev) => (prev + 1) % achievements.length);
  };

  const prevAchievement = () => {
    setCurrentAchievement((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="home-page">
      {/* Starry Background */}
      

      {/* Home Section */}
      <SectionWrapper id="home" onVisible={() => handleSectionChange('home')}>
        <motion.div 
          className="home-section-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="home-hero-content">
            <div className="home-content">
              <motion.div 
                className="home-text"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h4>Hello, I'm</h4>
                <h1 
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  Shimal Akmal D
                </h1>
                <div className="type-animation">
                  <TypeAnimation
                    sequence={[
                      'I am a Full Stack Developer',
                      1000,
                      'I am a AI Developer',
                      1000,
                      'I love solving problems',
                      1000,
                      'I create amazing experiences',
                      1000
                    ]}
                    wrapper="h3"
                    cursor={true}
                    repeat={Infinity}
                    speed={50}
                    deletionSpeed={70}
                  />
                </div>
              </motion.div>

              <motion.div
                className="home-buttons"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.a 
                  href="#contact" 
                  className="btn primary"
                  onMouseEnter={buttonEnter}
                  onMouseLeave={buttonLeave}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
<motion.a 
  href="https://drive.google.com/file/d/1EZzRs3rhGvCutasnaGoi7KgFqKVYXtWt/view?usp=drive_link" 
  className="btn secondary"
  onMouseEnter={buttonEnter}
  onMouseLeave={buttonLeave}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  download // This attribute triggers the download
>
  Download Resume
</motion.a>
              </motion.div>
            </div>

            {/* Achievements Slider */}
            <div className="achievements-slider " style={{"margin-left":"50px"}}>
              <div className="slider-controls">
                <motion.button 
                  onClick={prevAchievement} 
                  className="slider-arrow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiChevronLeft />
                </motion.button>
                <motion.button 
                  onClick={nextAchievement} 
                  className="slider-arrow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiChevronRight />
                </motion.button>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAchievement}
                  className="achievement-card"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="achievement-content">
                    <h3>{achievements[currentAchievement].title}</h3>
                    <div className="achievement-details">
                      <p>{achievements[currentAchievement].description}</p>
                      <div className="achievement-date">
                        {achievements[currentAchievement].date}
                      </div>
                    </div>
                  </div>
                  <div className="achievement-image">
                    <img 
                      src={achievements[currentAchievement].image} 
                      alt={achievements[currentAchievement].title}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.div 
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span>Scroll Down</span>
            <div className="arrow"></div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper id="about" dark onVisible={() => handleSectionChange('about')}>
        <About 
          textEnter={textEnter} 
          textLeave={textLeave}
        />
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper id="skills" dark onVisible={() => handleSectionChange('skills')}>
        <Skills 
          textEnter={textEnter} 
          textLeave={textLeave}
        />
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper id="projects" onVisible={() => handleSectionChange('projects')}>
        <Projects 
          projectEnter={projectEnter}
          projectLeave={projectLeave}
          buttonEnter={buttonEnter}
          buttonLeave={buttonLeave}
        />
      </SectionWrapper>

      {/* Resume Section */}
      <SectionWrapper id="resume" dark onVisible={() => handleSectionChange('resume')}>
        <Resume 
          textEnter={textEnter} 
          textLeave={textLeave}
          buttonEnter={buttonEnter}
          buttonLeave={buttonLeave}
        />
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact" onVisible={() => handleSectionChange('contact')}>
        <Contact 
          textEnter={textEnter} 
          textLeave={textLeave}
          buttonEnter={buttonEnter}
          buttonLeave={buttonLeave}
        />
      </SectionWrapper>
    </div>
  );
};

export default HomePage;

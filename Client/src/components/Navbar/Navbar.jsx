import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleEmailClick = (e) => {
    // Fallback for devices without an email client
    const canOpenMailto = window.navigator.userAgent.includes('Mobi')
      ? !!navigator.userAgent.match(/(iPhone|iPad|Android)/) // Check for mobile devices likely to have an email app
      : !!window.navigator.mimeTypes['x-scheme-handler/mailto']; // Check for desktop email client support

    if (!canOpenMailto) {
      e.preventDefault(); // Prevent opening a new tab
      alert(
        'No email client detected. You can reach me at shimalakmal12@gmail.com or use the Contact section below.'
      );
      // Optionally scroll to the Contact section
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => handleLinkClick(item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span 
                    className="underline"
                    layoutId="underline"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-social">
          <a 
            href="https://github.com/shimal007" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <FiGithub />
            <span className="tooltip">GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/shimal-akmal/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <FiLinkedin />
            <span className="tooltip">LinkedIn</span>
          </a>
          <a 
            href="mailto:shimalakmal12@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Shimal,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20connect.%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]"
            target="_self"
            onClick={handleEmailClick}
            aria-label="Send an email to Shimal"
          >
            <FiMail />
            <span className="tooltip">Send Email</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

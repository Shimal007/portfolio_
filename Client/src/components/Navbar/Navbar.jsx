import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import './Navbar.css'

const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Stats' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div className="navbar-logo">
          <span style={{"marginLeft":"60px"}}>{"<Portfolio />"}</span>
        </div>
        
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => setActiveSection(item.id)}
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
          <a href="https://github.com/shimal007" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/shimal-akmal-a7b0ba291/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
          <a href="shimalakmal12@gmail.com">
            <FiMail />
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

import { motion } from 'framer-motion'
import './Resume.css'

const Resume = ({ textEnter, textLeave }) => {
  return (
    <motion.div 
      className="stats-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="stats-container">
        <motion.h2 
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Coding Stats
        </motion.h2>

        <div className="stats-grid">
          {/* GitHub Stats Section */}
          <motion.div
            className="stat-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              GitHub Activity
            </motion.h3>
            <div className="streak-container">
              <a href="https://github.com/shimal007">
                <img align="center" src="https://github-readme-stats.vercel.app/api?username=Shimal007&count_private=true&show_icons=true&theme=nightowl&bg_color=0,000000,441350&title_color=c56a90&text_color=ffffff&rank_icon=github&hide=prs,issues,contribs&show=reviews,prs_merged,prs_merged_percentage" alt="GitHub Stats" />
              </a>
            </div>
          </motion.div>

          {/* LeetCode Stats Section */}
          <motion.div
            className="stat-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h3
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              LeetCode Progress
            </motion.h3>
            <div className="leetcode-container">
              <a href="https://leetcode.com/Shimal07/">
                <img 
                  src="https://leetcard.jacoblin.cool/Shimal07?theme=dark&font=source_code_pro&ext=heatmap" 
                  alt="LeetCode Stats" 
                  className="stats-image"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume

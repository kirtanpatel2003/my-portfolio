// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import Tile from '../components/Tile'; // from previous examples or your own
import PageWrapper from './PageWrapper'; // from previous examples

// Variants for sections
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function Home() {
  return (
    <PageWrapper>
      {/* HERO SECTION */}
      <motion.section
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: '80px' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
          Hi, I'm <span style={{ color: '#0077b6' }}>Kirtan Patel</span>
        </motion.h1>
        <motion.h2 style={{ fontSize: '1.5rem', color: '#555', marginBottom: '40px' }}>
          A Passionate Full-Stack Developer & Open-Source Enthusiast
        </motion.h2>
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          style={{ 
            padding: '15px 30px', 
            fontSize: '1rem', 
            cursor: 'pointer', 
            backgroundColor: '#0077b6', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px' 
          }}
          onClick={() => window.location.href = '/experience'} // or a scroll to next section
        >
          View My Work
        </motion.button>
      </motion.section>

      {/* ABOUT SECTION */}
      <motion.section
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '80px 20px', gap: '40px' }}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img 
          src="your-profile-picture.jpg" 
          alt="Kirtan Patel"
          style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #0077b6' }}
        />
        <div style={{ maxWidth: '500px' }}>
          <h2 style={{ marginBottom: '20px' }}>About Me</h2>
          <p style={{ lineHeight: '1.6', color: '#444' }}>
            I’m Kirtan Patel, a software engineer with a strong focus on building scalable web applications and crafting intuitive user experiences. 
            With a passion for continuous learning, I regularly contribute to open-source projects and love staying updated with the latest tech trends. 
            I thrive on challenges and enjoy turning complex problems into elegant solutions.
          </p>
        </div>
      </motion.section>

      {/* SKILLS / HIGHLIGHTS SECTION */}
      <motion.section
        style={{ padding: '80px 20px', textAlign: 'center' }}
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeInUp} style={{ marginBottom: '40px' }}>Skills & Technologies</motion.h2>
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px' }}
        >
          {['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Git', 'AWS'].map((skill, i) => (
            <motion.div 
              key={skill} 
              className="skill-card"
              variants={fadeInUp}
              style={{ 
                padding: '30px', 
                border: '1px solid #ccc', 
                borderRadius: '5px', 
                background: '#fff' 
              }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* PROJECTS / ACCOMPLISHMENTS SECTION */}
      <motion.section
        style={{ padding: '80px 20px', textAlign: 'center' }}
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeInUp} style={{ marginBottom: '40px' }}>Featured Projects</motion.h2>
        <motion.div 
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <Tile
            frontContent={<div style={{ padding: '20px' }}>Project One</div>}
            backContent={<div style={{ padding: '20px' }}>A full-stack web application streamlining [X] for [Y]. <a href="https://github.com/kirtanpatel2003/project-one" style={{ color: '#0077b6' }}>View on GitHub</a></div>}
          />
          <Tile
            frontContent={<div style={{ padding: '20px' }}>Project Two</div>}
            backContent={<div style={{ padding: '20px' }}>An open-source CLI tool that automates [Z]. <a href="https://github.com/kirtanpatel2003/project-two" style={{ color: '#0077b6' }}>View on GitHub</a></div>}
          />
          <Tile
            frontContent={<div style={{ padding: '20px' }}>Project Three</div>}
            backContent={<div style={{ padding: '20px' }}>A React Native app that brings [feature] to [platform]. <a href="https://github.com/kirtanpatel2003/project-three" style={{ color: '#0077b6' }}>View on GitHub</a></div>}
          />
        </motion.div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section
        style={{ padding: '80px 20px', textAlign: 'center', background: '#eee' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ marginBottom: '20px' }}>Interested in Collaborating?</h2>
        <p style={{ marginBottom: '40px', color: '#444' }}>
          Let’s build something amazing together. Whether it’s a web app, mobile solution, or open-source project, I’m always excited about new opportunities.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          style={{ 
            padding: '15px 30px', 
            fontSize: '1rem', 
            cursor: 'pointer', 
            backgroundColor: '#0077b6', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px' 
          }}
          onClick={() => window.location.href = '/contact'}
        >
          Get in Touch
        </motion.button>
      </motion.section>

      {/* FOOTER SECTION */}
      <footer style={{ padding: '20px', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Kirtan Patel. All rights reserved.
      </footer>
    </PageWrapper>
  );
}

export default Home;

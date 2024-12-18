import React from 'react';
import { motion } from 'framer-motion';
import './App.css'; // We can style things here

function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Animated React Site!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Hosted on GitHub Pages, with React and Framer Motion.
      </motion.p>
    </div>
  );
}

export default App;

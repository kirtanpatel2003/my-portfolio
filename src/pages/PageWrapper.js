// src/pages/PageWrapper.js
import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};

function PageWrapper({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      style={{ padding: '40px', minHeight: 'calc(100vh - 60px)' }}
    >
      {children}
    </motion.div>
  );
}

export default PageWrapper;

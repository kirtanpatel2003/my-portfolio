// src/components/Tile.js
import React from 'react';
import { motion } from 'framer-motion';
import './Tile.css';

function Tile({ frontContent, backContent }) {
  return (
    <motion.div className="tile-container" whileHover={{ rotateY: 180 }}>
      <div className="tile">
        <div className="tile-face tile-front">
          {frontContent}
        </div>
        <div className="tile-face tile-back">
          {backContent}
        </div>
      </div>
    </motion.div>
  );
}

export default Tile;

// src/pages/Experience.js
import React from 'react';
import PageWrapper from './PageWrapper';
import Tile from '../components/Tile';

function Experience() {
  return (
    <PageWrapper>
      <h1>Experience</h1>
      <p>Here’s some of my professional background.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Tile 
          frontContent={<div>Job 1</div>} 
          backContent={<div>Role, Duration, Key Achievements</div>} 
        />
        <Tile 
          frontContent={<div>Job 2</div>} 
          backContent={<div>Role, Duration, Key Achievements</div>}
        />
      </div>
    </PageWrapper>
  );
}

export default Experience;

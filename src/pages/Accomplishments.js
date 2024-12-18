// src/pages/Accomplishments.js
import React from 'react';
import PageWrapper from './PageWrapper';
import Tile from '../components/Tile';

function Accomplishments() {
  return (
    <PageWrapper>
      <h1>Accomplishments</h1>
      <p>Some notable milestones.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Tile 
          frontContent={<div>Award 1</div>}
          backContent={<div>Description</div>}
        />
        <Tile 
          frontContent={<div>Award 2</div>}
          backContent={<div>Description</div>}
        />
      </div>
    </PageWrapper>
  );
}

export default Accomplishments;

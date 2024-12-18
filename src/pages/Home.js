// src/pages/Home.js
import React from 'react';
import PageWrapper from './PageWrapper';
import Tile from '../components/Tile';

function Home() {
  return (
    <PageWrapper>
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page of my animated site!</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Tile 
          frontContent={<div>Project A</div>}
          backContent={<div>Project A Details</div>}
        />
        <Tile 
          frontContent={<div>Project B</div>}
          backContent={<div>Project B Details</div>}
        />
        <Tile 
          frontContent={<div>Project C</div>}
          backContent={<div>Project C Details</div>}
        />
      </div>
    </PageWrapper>
  );
}

export default Home;

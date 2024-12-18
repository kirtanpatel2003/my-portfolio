// src/pages/Resume.js
import React from 'react';
import PageWrapper from './PageWrapper';

function Resume() {
  return (
    <PageWrapper>
      <h1>Resume</h1>
      <p>Download my resume <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>
      {/* Make sure to place resume.pdf in the public folder for direct access */}
    </PageWrapper>
  );
}

export default Resume;

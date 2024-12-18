// src/pages/Contact.js
import React, { useState } from 'react';
import PageWrapper from './PageWrapper';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <PageWrapper>
      <h1>Contact Me</h1>
      <form style={{ maxWidth: '400px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input 
            type="text" 
            value={formData.name} 
            onChange={e => setFormData({...formData, name: e.target.value})} 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input 
            type="email" 
            value={formData.email} 
            onChange={e => setFormData({...formData, email: e.target.value})}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Message:</label><br />
          <textarea 
            value={formData.message} 
            onChange={e => setFormData({...formData, message: e.target.value})}
            style={{ width: '100%', padding: '8px', height: '100px' }}
          />
        </div>
        <motion.button 
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Submit
        </motion.button>
      </form>
    </PageWrapper>
  );
}

export default Contact;

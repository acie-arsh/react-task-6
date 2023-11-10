import React from 'react';
import './App.css';
import profileImage from './arsh.jpeg';

function App() {
  return (
    <div className="portfolio">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h1>Arsh Chaudhary</h1>
      <p>City: Hyderabad, India</p>
      <p>College Reg No: 21BCG10114</p>
      <p>Email: arshchaudhary903@gmail.com</p>
      <p>Mobile: +91 XXXXXXXXXXX</p>
      <div className="social-links">
        <a href="https://github.com/acie-arsh" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/acie-arsh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://drive.google.com/file/d/143kRJ2k4ib7AcEk-Tq2oIxFJ0hwvD0pW/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
//import the required modules from React for the icons of the social media 
import { FaGithub, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

//here whe define the JSX component thaht will represent the footer of our website
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media-links">
          <a href="https://github.com/ChemaKing13" target="_blank" rel="noopener noreferrer">
            <FaGithub size={45} />
          </a>
          <a href="mailto:jm2000ho@gmail.com">
            <FaEnvelope size={45} />
          </a>
          <a href="https://www.instagram.com/chema2_7/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={45} />
          </a>
          <a href="https://www.linkedin.com/in/josé-maría-hernández-b64257284" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={45} />
          </a>
        </div>
      </div>
    </footer>
  );
};

//export the Footer component to make it available elsewhere
export default Footer;

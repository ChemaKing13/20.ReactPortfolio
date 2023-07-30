import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>
        {/* Your contact information */}
        You can reach out to me via email at: your.email@example.com
      </p>
      <div className="social-media-links">
        {/* Add your social media links */}
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {/* Add more social media links as needed */}
      </div>
    </div>
  );
};

export default Contact;

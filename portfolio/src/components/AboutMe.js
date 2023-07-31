import React from 'react';


const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="container">
        <div className="about-me-content">
          <div className="about-me-text">
            <h2>About Me</h2>
          </div>
          <div className="about-me-image animation-bounce">
            <img src='./images/pic.JPG' alt="My Picture" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;


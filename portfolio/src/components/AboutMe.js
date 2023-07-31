import React from 'react';


const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="container">
        <div className="about-me-content">
          <div className="about-me-text">
            <h2>About Me</h2>
            <p>
              Welcome to my portfolio website! My name is [Your Name], and I am a passionate web developer based in [Your Location]. I enjoy creating interactive and user-friendly web applications using the latest technologies.
            </p>
            <p>
              [More about yourself and your experiences, skills, and interests.]
            </p>
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


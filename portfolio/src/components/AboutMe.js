import React from 'react';

const name = 'José María Hernández'
const age = '23'

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="container">
        <div className="about-me-content">
          <div className="about-me-text">
            <p>Hi, my name is {name}, I'm {age} years old, im an engineering studend. I'm really passionate about music and sports.<br/>
               Right now I'm incredibly excited cause I am on the week 20 of my bootcamp for Fullstack Web Development. It has been a journey, <br/>
               and although it has been challengeing and sometimes stressfull but the effort is worth it. I have notice that i really <br/>
               enjoy coding. I know it's just the begining of my career and learning will never end, but I'm really sure that theres nothing that discipline and passion can't do.
               This is my Portfolio where i would like to showcase some of my projects and also provide my contact information, hope you enjoy!!
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


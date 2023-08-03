import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import pic from '../assets/pic.JPG'; 


const name = 'José María Hernández'
const age = '23'
const week = '21'


const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className='about-title'>About Me</h2>
      <div className="container">
        <div className="about-me-content">
          <div className="about-me-text">
            <p className=''>Hi, my name is {name}, I'm {age} years old, im an engineering studend. I'm really passionate about music and sports.
               Right now I'm incredibly excited cause I am on the week {week} of my bootcamp for Fullstack Web Development. It has been a journey, 
               and although it has been challengeing and sometimes stressfull but the effort is worth it. I have notice that i really 
               enjoy coding. I know it's just the begining of my career and learning will never end, but I'm really sure that theres nothing that discipline and passion can't do.
               This is my Portfolio where i would like to showcase some of my projects and also provide my contact information, hope you enjoy!!
            </p>
            <br/>
            <Link to = '/portfolio'>
              <button className='lets-start-button'>Let's Start!</button>
            </Link>
          </div>
          <div className="about-me-image animation-bounce">
            <img src={pic} alt="My Picture" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;


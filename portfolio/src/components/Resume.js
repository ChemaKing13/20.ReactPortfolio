import React from 'react';

const technologies = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  // Add more technologies you know
];

const Resume = () => {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <p>
        {/* Add a brief introduction or summary of your skills */}
        I am a passionate web developer with experience in various technologies. Below is a
        list of some of the technologies I'm proficient in:
      </p>
      <ul>
        {/* Create a list item for each technology */}
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;

import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of Project 1.',
    imageUrl: 'project1-image-url.jpg', // Add the URL of an image representing the project
    demoUrl: 'https://project1-demo.com', // Add the URL to the live demo of the project
    codeUrl: 'https://github.com/user/project1', // Add the URL to the GitHub repository
  },
  // Add more project objects with similar structure for your other projects
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

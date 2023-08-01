import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Opti Crew',
    imageSrc: './images/opticrew.png',
    description: 'Description of Project 1',
  },
  {
    id: 2,
    title: 'Progressive Web App',
    imageSrc: './images/project2.jpg',
    description: 'Description of Project 2',
  },
  {
    id: 3,
    title: 'Meal PreApp',
    imageSrc: './images/meal.png',
    description: 'Description of Project 2',
  },
  {
    id: 4,
    title: 'Tech Blog',
    imageSrc: './images/teg',
    description: 'Description of Project 2',
  },
  {
    id: 5,
    title: 'Social Network Api',
    imageSrc: './images/api.png',
    description: 'Description of Project 2',
  },
  {
    id: 6,
    title: 'Project 6',
    imageSrc: './images/tech.png',
    description: 'Description of Project 2',
  },
];


const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="container">
        <div className="projects">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <img src={project.imageSrc} alt={project.title} />
              {/* <h3>{project.title}</h3>
              <p>{project.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

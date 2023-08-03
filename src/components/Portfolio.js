import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import project1 from '../assets/opti.png';
import project2 from  '../assets/password.png';
import project3 from  '../assets/meal.png'; 
import project4 from '../assets/note.png';
import project5 from  '../assets/ecommerce.png'; 
import project6 from '../assets/underconst.png'; 

const projects = [
  {
    id: 1,
    title: 'Opti Crew',
    imageSrc: project1,
    description: 'Description of Project 1',
    githubLink: 'https://github.com/jony0418/OptiCrew'
  },
  {
    id: 2,
    title: 'Password Strength Tester',
    imageSrc: project2,
    description: 'Description of Project 2',
    githubLink: 'https://github.com/ChemaKing13/PasswordStrengthTester'
  },
  {
    id: 3,
    title: 'Meal PreApp',
    imageSrc: project3,
    description: 'Description of Project 2',
    githubLink: 'https://github.com/Maelikah/P1_MealPreApp'
  },
  {
    id: 4,
    title: 'Note Taker',
    imageSrc: project4,
    description: 'Description of Project 2',
    githubLink: 'https://github.com/ChemaKing13/11.NoteTaker'
  },
  {
    id: 5,
    title: 'E-CommerceBackEnd ',
    imageSrc: project5,
    description: 'Description of Project 2',
    githubLink: 'https://github.com/ChemaKing13/13.E-CommerceBackEnd'
  },
  {
    id: 6,
    title: 'Project 6',
    imageSrc: project6,
    description: 'Description of Project 2',
    githubLink: '',
  },
];


const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className='portfolio-title'>Portfolio</h2>
      <div className="container">
        <div className="projects">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <img src={project.imageSrc} alt={project.title} />
              <div className='content'>
                <h1>{project.title}</h1>
                {project.githubLink && (
                  <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon className='github-icon' icon={faGithub} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

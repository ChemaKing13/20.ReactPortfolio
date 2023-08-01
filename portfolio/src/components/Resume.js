import React from 'react';

//this array contains all the proficiencies inside an array, but they are separated by types
const proficiencies = [
  { type: 'Front-End', list: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Responsive Design', 'React', 'Bootstrap'] },
  { type: 'Back-End', list: ['APIs', 'Node.js', 'Express.js', 'MySQL, Sequelize', 'MongoDB, Mongoose', 'Rest', 'GraphQL'] },
];

  

//we use the map function to iterate over each group in the array of preficiencies and define the proficiencyGroup for reach type
//end.type + Proefencies will render the h3 for each list
//then we render each ul
const Resume = () => {
  return (
    <div className="resume">
      <h2 className='resume-title'>Resume</h2>
      {proficiencies.map((end) => (
        <div key={end.type} className="proficiencies-section">
          <h3 className='proficiency-type'>{end.type} Proficiencies</h3>
          <ul className="proficiency-list">
            {end.list.map((proficiency, index) => (
              <li key={index} className='proficiency-item'>{proficiency}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Resume;


import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const Contact = () => {
  //useState hook set the initial values as an empty string
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  //allow us to modify the information in each field according to its type
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    }
  };

  //this function its called when the user submits the form, it performs some validations
  const handleFormSubmit = (event) => {
    event.preventDefault();

    //verify if the email match the requirements of the validation 
    if (!validateEmail(email)) {
      setErrorMessage('Email not valid');
      return;
    }
    
    //send an error message if the message input its empty 
    if (message.trim() === '') {
      setErrorMessage('Message is required');
      return;
    }

    //if everything works fine, clean all the inputs 
    setEmail('');
    setMessage('');
    setName('');
    setErrorMessage('');
  };

  return (
    <section className="contact">
      <h2 className='contact-title'>Contact</h2>
      <div className="container">
        <div className="contact-form">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                type="name"
                name="name"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                type="email"
                name="email"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                value={message}
                name="message"
                rows="5"
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className='btn'>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

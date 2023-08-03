import React from 'react';
//we import some components from react package
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

//define the Navbar component
export default function Navbar() {


  return (
    <nav className='nav'>
      <Link to="/" className="site-title">
        <img src='./assets/images/logo1.png' alt='logo' className='logo' />   
      </Link>
      <ul>
        <li>
          <CustomLink to="/">About Me</CustomLink>
        </li>
        <li>
          <CustomLink to="/portfolio">Portfolio</CustomLink>
        </li>
        <li>
          <CustomLink to="/contact">Contact</CustomLink>
        </li>
        <li>
          <CustomLink to="/resume">Resume</CustomLink>
        </li>
      </ul>
    </nav>
  );
}

//set the 'active' class according on to the path that we are on
//CustomLink is a special link thaht we use to create navigation links in our website navbar
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    //useMatch hook to determine if the current page path matches the path of the link
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    //if the path is the same we add the class named 'active' that apply style to the nav link
    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
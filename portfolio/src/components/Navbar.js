import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src='./images/logo1.png' alt='logo' className='logo' />   
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
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
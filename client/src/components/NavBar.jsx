import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className={'landing-page'}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">User Profile</Link>
        </li>
        <li >
          <Link to="/resources">Resource Library</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
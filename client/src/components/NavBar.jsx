import React from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import { useUser } from '../context/UserContext';
import SignUpModal from './SignUpModal';

//TODO: basic styling
//TODO: Implement Modal Buttons

const Navbar = () => {
    const { user, logout } = useUser();
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
        <div>

        {user ? (
          <>
            <span>Welcome, {user.email}</span>
          </>
        ) : (
          <>
            <SignUpModal/>
            <LoginModal/>
          </>
        )}
      </div>
      </ul>
      
    </nav>
  );
};

export default Navbar;
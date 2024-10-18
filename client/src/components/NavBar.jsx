import React from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import { useUser } from '../context/UserContext';
import SignUpModal from './SignUpModal';
import { useModal } from '../context/ModalContext'

//TODO: basic styling


const Navbar = () => {
    const { user, logout } = useUser();
    const { openSignUpModal, openLoginModal, isSignUpModalOpen, isLoginModalOpen } = useModal();
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
            <span>Welcome, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={openSignUpModal}>Sign-Up</button>
            <button onClick={openLoginModal}>Login</button>
          </>
        )}
      </div>
      </ul>
      {isSignUpModalOpen && <SignUpModal />}
      {isLoginModalOpen && <LoginModal />}
    </nav>
  );
};

export default Navbar;
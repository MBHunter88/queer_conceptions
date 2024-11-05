import React from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import SignUpModal from './SignUpModal';
import { useModal } from '../context/ModalContext';
import { Menu, Button, Avatar, Space } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  BookOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  ProfileOutlined,
  OpenAIOutlined,
} from '@ant-design/icons';

const Navbar = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const {
    openSignUpModal,
    openLoginModal,
    isSignUpModalOpen,
    isLoginModalOpen,
    closeSignUpModal,
    closeLoginModal,
  } = useModal();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['home']}
        style={{
          lineHeight: '3.5vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
        theme="light"
      >
    
        <Menu.Item key="logo"  style={{ marginRight: 'auto', padding: '0 2rem' }}>
          <Link to="/">
            <img
              src="qclogo.png"
              alt="Queer Conceptions Logo"
              style={{
                height: '3.5vw',
                width: 'auto',
                transition: 'transform 0.3s ease',
              }}
            />
          </Link>
        </Menu.Item>
        <Menu.Item key="home" aria-current={window.location.pathname === '/' ? 'page' : undefined} icon={<HomeOutlined />} style={{ fontSize: '1.25rem', padding: '0 2rem' }}>
          <Link to="/" aria-label="Home Page">Home</Link>
        </Menu.Item>
        <Menu.Item key="resources" icon={<BookOutlined />} style={{ fontSize: '1.25rem', padding: '0 2rem' }}>
          <Link to="/resources" aria-label="Resource Library Page">Resource Library</Link>
        </Menu.Item>
        <Menu.Item key="conception-planner"  icon={<ProfileOutlined />} style={{ fontSize: '1.25rem', padding: '0 2rem' }}>
          <Link to="/planner" aria-label="Cocneption Planner Page">Conception Planner</Link>
        </Menu.Item>
        <Menu.Item key="chatbot" icon={<OpenAIOutlined />} style={{ fontSize: '1.25rem', padding: '0 2rem' }}>
          <Link to="/chatbot" tabindex="-1" aria-label="Virtual Doula Page">Virtual Doula</Link>
        </Menu.Item>
        {user ? (
          <>
            <Menu.Item key="profile" icon={<UserOutlined />} style={{ fontSize: '1.25rem', padding: '0 2rem' }}>
              <Link to="/profile">
                <Space>
                  <Avatar aria-hidden="true">{user.name[0]}</Avatar>
                  Welcome, {user.name}!
                </Space>
              </Link>
            </Menu.Item>
            <Menu.Item key="logout" aria-label="Logout" icon={<LogoutOutlined />} style={{ fontSize: '1.25rem', padding: '0 2rem' }}>
              <Button type="link" onClick={handleLogout}>
                Logout
              </Button>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key="signup" icon={<UserAddOutlined />} style={{ fontSize: '1.25rem', padding: '0 2rem' }}>
              <Button type="link" tabindex="-1" aria-haspopup="dialog" onClick={openSignUpModal}>
                Sign-Up
              </Button>
            </Menu.Item>
            <Menu.Item key="login" icon={<LoginOutlined />} style={{ fontSize: '1.25rem', padding: '0 2rem' }}>
              <Button type="link" tabindex="-1" aria-haspopup="dialog" onClick={openLoginModal}>
                Login
              </Button>
            </Menu.Item>
          </>
        )}
      </Menu>

      {/* Modals */}
      {isSignUpModalOpen && (
        <SignUpModal isSignUpModalOpen={isSignUpModalOpen} closeSignUpModal={closeSignUpModal} />
      )}
      {isLoginModalOpen && (
        <LoginModal isLoginModalOpen={isLoginModalOpen} closeLoginModal={closeLoginModal} />
      )}
    </>
  );
};

export default Navbar;

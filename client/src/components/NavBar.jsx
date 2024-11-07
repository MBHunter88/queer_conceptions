import React from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import SignUpModal from './SignUpModal';
import { useModal } from '../context/ModalContext';
import { Menu, Button, Avatar, Space } from 'antd';
import {
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
          minWidth: '100vw',
          margin: 0,
          padding: '0 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
        theme="light"
      >
    
        <Menu.Item key="logo"  style={{ marginRight: 'auto', paddingLeft: 0, marginTop: '1rem' }}>
          <Link to="/">
            <img
              src="qclogo.png"
              alt="Queer Conceptions Logo"
              style={{
                height: '3vw',
                width: 'auto',
              }}
            />
          </Link>
        </Menu.Item>
        <Menu.Item key="home" aria-current={window.location.pathname === '/' ? 'page' : undefined} icon={<HomeOutlined  style={{ color: '#000' }} />} style={{ fontSize: '1.2rem'}}>
          <Link  style={{ color: '#000' }} to="/" aria-label="Home Page" >Home</Link>
        </Menu.Item>
        <Menu.Item key="resources" icon={<BookOutlined  style={{ color: '#000' }} />} style={{ fontSize: '1.2rem'}}>
          <Link  style={{ color: '#000' }} to="/resources" aria-label="Resource Library Page">Resource Library</Link>
        </Menu.Item>
        <Menu.Item key="conception-planner"  icon={<ProfileOutlined  style={{ color: '#000' }} />} style={{ fontSize: '1.2rem' }}>
          <Link  style={{ color: '#000' }} to="/planner" aria-label="Cocneption Planner Page">Conception Planner</Link>
        </Menu.Item>
        <Menu.Item key="chatbot" icon={<OpenAIOutlined  style={{ color: '#000' }} />} style={{ fontSize: '1.2rem' }}>
          <Link  style={{ color: '#000' }} to="/chatbot" tabindex="-1" aria-label="Virtual Doula Page">Virtual Doula</Link>
        </Menu.Item>
        {user ? (
          <>
            <Menu.Item key="profile" style={{ fontSize: '1.2rem' }}>
              <Link  style={{ color: '#000' }} to="/profile">
                <Space>
                  <Avatar  style={{ color: '#000' }} aria-hidden="true">{user.name[0]}</Avatar>
                  Welcome, {user.name}!
                </Space>
              </Link>
            </Menu.Item>
            <Menu.Item key="logout" aria-label="Logout" icon={<LogoutOutlined />} style={{ fontSize: '1.2rem'}}>
              <Button  style={{ color: '#000' }} type="link" onClick={handleLogout}>
                Logout
              </Button>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key="signup" icon={<UserAddOutlined />} style={{ fontSize: '1.2rem', color: '#007000' }}>
              <Button type="link" tabindex="-1" aria-haspopup="dialog" onClick={openSignUpModal} style={{ color: '#007000 '}}>
                Sign-Up
              </Button>
            </Menu.Item>
            <Menu.Item key="login" icon={<LoginOutlined />} style={{ fontSize: '1.2rem',  color: '#007000'}}>
              <Button type="link" tabindex="-1" aria-haspopup="dialog" onClick={openLoginModal} style={{ color: '#007000 '}}>
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

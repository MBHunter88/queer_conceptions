import React from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import { useUser } from '../context/UserContext';
import SignUpModal from './SignUpModal';
import { useModal } from '../context/ModalContext'
import { Layout, Menu, Button, Avatar, Space } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  BookOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  ProfileOutlined
} from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
  const { user, logout } = useUser();
    const { openSignUpModal, openLoginModal, isSignUpModalOpen, isLoginModalOpen} = useModal();

  return (
    <>
    <Header className="navbar">
      {/* Logo image can go here */}
      <Menu  mode="horizontal" defaultSelectedKeys={['home']} style={{ lineHeight: '64px' }}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">
          Queer Conceptions
        </Link>
        </Menu.Item>
        <Menu.Item key="resources" icon={<BookOutlined />}>
          <Link to="/resources">Resource Library</Link>
        </Menu.Item>
        <Menu.Item key='conception-planner' icon={<ProfileOutlined />}>
          <Link to="/planner">Conception Planner</Link>
        </Menu.Item>
        {user ? (
          <>
            <Menu.Item key="profile" icon={<UserOutlined />}>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
              <Button type="link" onClick={logout} >
                Logout
              </Button>
            </Menu.Item>
            <Menu.Item key="welcome" disabled style={{ cursor: 'default' }}>
              <Space>
                <Avatar>{user.name[0]}</Avatar>
                Welcome, {user.name}!
              </Space>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key="signup" icon={<UserAddOutlined />}>
              <Button type="link" onClick={openSignUpModal}>
                Sign-Up
              </Button>
            </Menu.Item>
            <Menu.Item key="login" icon={<LoginOutlined />}>
              <Button type="link" onClick={openLoginModal} >
                Login
              </Button>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Header>

    {isSignUpModalOpen && <SignUpModal />}
    {isLoginModalOpen && <LoginModal />}
  </>
  );
};

export default Navbar;
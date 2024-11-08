import React, { createContext, useState, useContext, useEffect } from 'react';
import { Modal } from 'antd'

//create userContext for user data to be passed globally

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

 
// Set user data after successful login
  const login = (userData) => {
    localStorage.setItem('token', userData.token)
    localStorage.setItem('user', JSON.stringify(userData.user));
    setUser({
      ...userData.user,
    });
  };

  // Log out the current user
  const logout = () => {
    Modal.confirm({
      title: 'Logout',
      content: (
       'Are you sure you want to log out?'
      ),
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      },
      onCancel: () => {
        console.log('User declined to logout');
      },
    });
  }
  

  // Load user from localStorage on app load if a token exists
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout, setUser}}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => useContext(UserContext);

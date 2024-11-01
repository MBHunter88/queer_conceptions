import React, { createContext, useState, useContext, useEffect } from 'react';
import { Modal } from 'antd'

//create userContext for user data to be passed globally

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

 
// Set user data after successful login
  const login = (userData) => {
    localStorage.setItem('token', userData.token)
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
        setUser(null);;
      },
      onCancel: () => {
        console.log('User declined to logout');
      },
    });
  }
  

   // Update localStorage whenever user data changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, login, logout, setUser}}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => useContext(UserContext);

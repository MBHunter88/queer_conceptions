import React, { createContext, useState, useContext, useEffect } from 'react';

//create userContext for user data to be passed globally

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

 
// Set user data after successful login
  const login = (userData) => {
    setUser(userData);  
    //localStorage.setItem('user', JSON.stringify(userData));
  };

  // Log out the current user
  const logout = () => {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (confirmed) {
      // Clear user data and token from local storage
    // localStorage.removeItem('user');
    // localStorage.removeItem('token');
    setUser(null);
  }
  };

  return (
    <UserContext.Provider value={{ user, login, logout, setUser}}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => useContext(UserContext);

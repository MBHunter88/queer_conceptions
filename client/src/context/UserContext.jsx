import React, { createContext, useState, useContext } from 'react';


//create userContext for user data to be passed globally

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
 
// Set user data after successful login
  const login = (userData) => {
    setUser(userData);  
  };

  // Log out the current user
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout}}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => useContext(UserContext);

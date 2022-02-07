import React, { createContext, useState } from 'react'
import defaultUser from "../data";
const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  function handleLogin() {
    if (user) {
      setUser(null);
    } else {
      setUser(defaultUser);
    }
  }

  const value = { user, handleLogin }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
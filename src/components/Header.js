import React, { useContext } from "react";
import ThemedButton from "./ThemedButton";
import DarkModeToggle from "./DarkModeToggle";
import { UserContext } from "../context/user"

function Header() {
  const { user, handleLogin } = useContext(UserContext)

  return (
    <header>
      <h1>React Context</h1>
      <nav>
        <ThemedButton onClick={handleLogin} >
          {user ? "Logout" : "Login"}
        </ThemedButton>
        <DarkModeToggle />
      </nav>
    </header>
  );
}

export default Header;

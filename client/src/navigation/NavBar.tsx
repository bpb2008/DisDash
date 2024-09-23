import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./navBar-custom.css";

const NavBar: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div id="navcontainer" className="navBar-custom">
      {!isAuthenticated ? (
        <div>
          <button onClick={() => loginWithRedirect()}>Login or Sign Up</button>
        </div>
      ) : (
        <div>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
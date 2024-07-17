import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./navBar-custom.css";

const NavBar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div id="navcontainer" className="navBar-custom">
      {!isAuthenticated ? (
        <div>
          <p>
            <a onClick={() => loginWithRedirect()}>Login or Sign Up</a>
          </p>
        </div>
      ) : (
        <div>
          <p>
            <a onClick={() => logout({ returnTo: wondow.locaiton.origin })}>
              Log Out
            </a>
          </p>
          <p>Welcome, {user.name}</p>
        </div>
      )}
    </div>
  );
};

export default NavBar;

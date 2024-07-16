import React from "react";
import { useNavigate } from "react-router-dom";
import "./navBar-custom.css";

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div id="navcontainer" className="navBar-custom">
      <p>
        <a onClick={handleClick}>Login or Sign Up</a>
      </p>
    </div>
  );
};

export default NavBar;

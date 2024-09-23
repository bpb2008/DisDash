import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleSignup = () => {
    loginWithRedirect({
      screen_hint: "signup",
    });
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Welcome to DisDash!</h2>
      <button onClick={handleClick}>Temporary Shortcut to Dashboard</button>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Login;

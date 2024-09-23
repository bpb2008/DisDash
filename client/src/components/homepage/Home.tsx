import React from "react";
import { useNavigate } from "react-router-dom";
import "./home-custom.css";
import HowItWorks from "./HowItWorks";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div id="homecontainer" className="home-custom">
      <h2>Welcome to DisDash!</h2>
      <p>
        All of your magical plans in one place! Plan your next theme park
        vacation with ease by adding your resort reservations, theme park
        tickets, flight information, rental car reservation, dining, and more.
        Share plans with your travel party to make group trips less stressful.
      </p>
      <button onClick={handleClick}>Get Started</button>
      <HowItWorks />
    </div>
  );
};

export default Home;

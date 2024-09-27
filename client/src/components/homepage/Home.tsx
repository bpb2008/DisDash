import React from "react";
import "./home-custom.css";
import HowItWorks from "./HowItWorks";
import LoginButton from "../LoginButton";

const Home: React.FC = () => {
  return (
    <div id="homecontainer" className="home-custom">
      <h2>Welcome to DisDash!</h2>
      <p>
        All of your magical plans in one place! Plan your next theme park
        vacation with ease by adding your resort reservations, theme park
        tickets, flight information, rental car reservation, dining, and more.
        Share plans with your travel party to make group trips less stressful.
      </p>
      <LoginButton />
      <HowItWorks />
    </div>
  );
};

export default Home;

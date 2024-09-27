import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./dashboard-custom.css";
import HotelBookings from "./HotelBookings";
import Flights from "./Flights";
import ThemeParkPlans from "./ThemeParkPlans";
import DiningReservations from "./DiningReservations";
import RentalCar from "./RentalCar";
import Activities from "./Activities";

const Dashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();
  const [travelPlans, setTravelPlans] = useState([]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     fetch("/api/users", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         auth0_id: user.sub,
  //         email: user.email,
  //         name: user.name,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((userData) => {
  //         return fetch(`/api/travel-plans/${userData.id}`);
  //       })
  //       .then((res) => res.json())
  //       .then((data) => setTravelPlans(data))
  //       .catch((error) => console.error(error));
  //   }
  // }, [isAuthenticated, user]);

  if (!isAuthenticated) {
    return <p>Please log in to view your travel plans.</p>;
  }

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/addPlans");
  };

  return (
    <div className="dashboard-custom">
      <h1>Welcome, {user.name}!</h1>
      <button onClick={handleClick}>Add New Plans</button>
      {travelPlans.length > 0 ? (
        <div id="dashboard-grid">
          <HotelBookings
            plans={travelPlans.filter((plan) => plan.type === "hotel")}
          />
          <Flights
            plans={travelPlans.filter((plan) => plan.type === "flight")}
          />
          <ThemeParkPlans
            plans={travelPlans.filter((plan) => plan.type === "themepark")}
          />
          <DiningReservations
            plans={travelPlans.filter((plan) => plan.type === "dining")}
          />
          <RentalCar
            plans={travelPlans.filter((plan) => plan.type === "rentalcar")}
          />
          <Activities
            plans={travelPlans.filter((plan) => plan.type === "activity")}
          />
        </div>
      ) : (
        <p>You have no travel plans yet. Click "Add New Plans"</p>
      )}
    </div>
  );
};

export default Dashboard;

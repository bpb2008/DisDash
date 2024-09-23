import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlightForm from "./FlightForm";
import HotelForm from "./HotelForm";
import ThemeParkForm from "./ThemeParkForm";
import DiningForm from "./DiningForm";
import RentalCarForm from "./RentalCarForm";
import ActivityForm from "./ActivityForm";

const AddPlans: React.FC = () => {
  const [selectedPlanType, setSelectedPlanType] = useState("flight");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Add A New Plan!</h1>
      <select onChange={(e) => setSelectedPlanType(e.target.value)}>
        <option value="flight">Flight</option>
        <option value="hotel">Hotel</option>
        <option value="themepark">Theme Park</option>
        <option value="dining">Dining</option>
        <option value="rentalcar">Rental Car</option>
        <option value="activity">Activity</option>
      </select>
      {selectedPlanType === "flight" && <FlightForm />}
      {selectedPlanType === "hotel" && <HotelForm />}
      {selectedPlanType === "themepark" && <ThemeParkForm />}
      {selectedPlanType === "dining" && <DiningForm />}
      {selectedPlanType === "rentalcar" && <RentalCarForm />}
      {selectedPlanType === "activity" && <ActivityForm />}
      <button onClick={handleClick}>Return To Dashboard</button>
    </div>
  );
};

export default AddPlans;

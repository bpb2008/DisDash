import React, { useState } from "react";
import "./hotelForm-custom.css";

const DiningForm: React.FC = () => {
  const [restaurantName, setRestaurantName] = useState("");
  const [diningDate, setDiningDate] = useState("");
  const [diningTime, setDiningTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/addDining", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurantName,
          diningDate,
          diningTime,
        }),
      });
    } catch (error) {
      console.error("Error adding dining information: ", error);
    }
  };

  return (
    <div className="hotelForm-custom">
      <form onSubmit={handleSubmit}>
        <div id="info">
          <label>Restaurant: </label>
          <input
            type="text"
            id="restaurantName"
            value={restaurantName}
            label="Restaurant"
            onChange={(e) => setRestaurantName(e.target.value)}
          />
        </div>
        <div id="info">
          <label>Date: </label>
          <input
            type="date"
            id="diningDate"
            value={diningDate}
            label="Dining Date"
            onChange={(e) => setDiningDate(e.target.value)}
          />
        </div>
        <div id="info">
          <label>Time: </label>
          <input
            type="time"
            id="diningTime"
            value={diningTime}
            label="Dining Time"
            onChange={(e) => setDiningTime(e.target.value)}
          />
        </div>
        <button>Add Dining Reservation</button>
      </form>
    </div>
  );
};

export default DiningForm;

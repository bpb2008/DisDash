import React, { useState } from "react";
import "./hotelForm-custom.css";

const FlightForm: React.FC = () => {
  const [airline, setAirline] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [returnDate, setReturnlDate] = useState("");
  const [returnTime, setReturnTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/addFlight", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          airline,
          flightNumber,
          departureDate,
          departureTime,
          returnDate,
          returnTime,
        }),
      });
    } catch (error) {
      console.error("Error adding flight information: ", error);
    }
  };

  return (
    <div className="hotelForm-custom">
      <div id="flightForm">
        <form onSubmit={handleSubmit}>
          <div id="info">
            <label>Airline: </label>
            <input
              type="text"
              id="airline"
              value={airline}
              label="Airline"
              onChange={(e) => setAirline(e.target.value)}
            />
          </div>
          <div id="info">
            <label>Flight Number: </label>
            <input
              type="text"
              id="flightNumber"
              value={flightNumber}
              label="Flight Number"
              onChange={(e) => setFlightNumber(e.target.value)}
            />
          </div>
          <div id="info">
            <label>Departure Date: </label>
            <input
              type="date"
              id="departureDate"
              value={departureDate}
              label="Departure Date"
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>
          <div id="info">
            <label>Departure Time: </label>
            <input
              type="time"
              id="departureTime"
              value={departureTime}
              label="Departure Time"
              onChange={(e) => setDepartureTime(e.target.value)}
            />
          </div>
          <div id="info">
            <label>Return Date: </label>
            <input
              type="date"
              id="returnDate"
              value={returnDate}
              label="Return Date"
              onChange={(e) => setReturnlDate(e.target.value)}
            />
          </div>
          <div id="info">
            <label>Return Time: </label>
            <input
              type="time"
              id="returnTime"
              value={returnTime}
              label="Return Time"
              onChange={(e) => setReturnTime(e.target.value)}
            />
          </div>
          <button type="submit">Add Flight Information</button>
        </form>
      </div>
    </div>
  );
};

export default FlightForm;

import React, { useState } from "react";
import "./hotelForm-custom.css";

const HotelForm: React.FC = () => {
  const [hotelName, setHotelName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/addHotel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hotelName,
          checkInDate,
          checkInTime,
          checkOutDate,
          checkOutTime,
        }),
      });
    } catch (error) {
      console.error("Error adding hotel information: ", error);
    }
  };

  return (
    <div className="hotelForm-custom">
      <form onSubmit={handleSubmit}>
        <div>
          <div id="info">
            <label>Hotel: </label>
            <input
              type="text"
              id="hotelName"
              value={hotelName}
              label="Hotel Name"
              onChange={(e) => setHotelName(e.target.value)}
            />
          </div>
          <div id="info">
            <label>Check In Date: </label>
            <input
              type="date"
              id="checkInDate"
              value={checkInDate}
              label="Check In Date"
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div id="info">
            <label>Check In Time: </label>
            <input
              type="time"
              id="checkInTime"
              value={checkInTime}
              label="Check In Time"
              onChange={(e) => setCheckInTime(e.target.value)}
            />
          </div>
          <div id="info">
            <label>Check Out Date: </label>
            <input
              type="date"
              id="checkOutDate"
              value={checkOutDate}
              label="Check Out Date"
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
          <div id="info">
            <label>Check Out Time: </label>
            <input
              type="time"
              id="checkOutTime"
              value={checkOutTime}
              label="Check Out Time"
              onChange={(e) => setCheckOutTime(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Add Hotel Information</button>
      </form>
    </div>
  );
};

export default HotelForm;

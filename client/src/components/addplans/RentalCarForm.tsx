import React, { useState } from "react";

const RentalCarForm: React.FC = () => {
  const [rentalCompany, setRentalCompany] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/addRentalCar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rentalCompany,
          pickUpDate,
          pickUpTime,
          dropOffDate,
          dropOffTime,
        }),
      });
    } catch (error) {
      console.error("Error adding rental car information: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id="info">
          <label>Rental Company: </label>
          <input
            type="text"
            id="rentalcompany"
            value={rentalCompany}
            label="Rental Company"
            onChange={(e) => setRentalCompany(e.target.value)}
          />
        </div>
        <div id="info">
          <label>Pick Up Date: </label>
          <input
            type="date"
            id="pickUpDate"
            value={pickUpDate}
            label="Pick Up Date"
            onChange={(e) => setPickUpDate(e.target.value)}
          />
        </div>
        <div id="info">
          <label>Pick Up Time: </label>
          <input
            type="time"
            id="pickUpTime"
            value={pickUpTime}
            label="Pick Up Time"
            onChange={(e) => setPickUpTime(e.target.value)}
          />
        </div>
        <div id="info">
          <label>Drop Off Date: </label>
          <input
            type="date"
            id="dropOffDate"
            value={dropOffDate}
            label="Drop Off Date"
            onChange={(e) => setDropOffDate(e.target.value)}
          />
        </div>
        <div id="info">
          <label>Drop Off Time: </label>
          <input
            type="time"
            id="dropOffTime"
            value={dropOffTime}
            label="Drop Off Time"
            onChange={(e) => setDropOffTime(e.target.value)}
          />
        </div>
        <button>Add Rental Car Reservation</button>
      </form>
    </div>
  );
};

export default RentalCarForm;

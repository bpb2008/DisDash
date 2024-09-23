import React, { useState } from "react";

const ThemeParkForm: React.FC = () => {
  const [themeParkName, setThemeParkName] = useState("");
  const [themeParkDate, setThemeParkDate] = useState("");
  const [themeParkTickets, setThemeParkTickets] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/addThemePark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          themeParkName,
          themeParkDate,
          themeParkTickets,
        }),
      });
    } catch (error) {
      console.error("Error adding theme park information: ", error);
    }
  };

  return (
    <div className="themeParkForm-custom">
      <form onSubmit={handleSubmit}>
        <div id="info">
          <label>Theme Park: </label>
          <input
            type="text"
            id="themeParkName"
            value={themeParkName}
            label="Theme Park Name"
            onChange={(e) => setThemeParkName(e.target.value)}
          />
        </div>
        <div id="info">
          <label>Date of Visit: </label>
          <input
            type="date"
            id="themeParkDate"
            value={themeParkDate}
            label="Theme Park Date"
            onChange={(e) => setThemeParkDate(e.target.value)}
          />
        </div>
        <div id="info">
          <label>Tickets Purchased? </label>
          <select
            onChange={(e) => setThemeParkTickets(e.target.value)}
            value={themeParkTickets}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit">Add Theme Park Information</button>
      </form>
    </div>
  );
};

export default ThemeParkForm;

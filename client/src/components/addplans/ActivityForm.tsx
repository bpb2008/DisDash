import React, { useState } from "react";

const ActivityForm: React.FC = () => {
  const [activity, setActivity] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [activityTime, setActivityTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/addActivity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activity,
          activityDate,
          activityTime,
        }),
      });
    } catch (error) {
      console.error("Error adding new activity: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id="info">
          <label>Activity/Excursion: </label>
          <input
            type="text"
            id="activity"
            value={activity}
            label="Activity"
            onChange={(e) => setActivity(e.target.value)}
          />
        </div>
        <div id="info">
          <label>Date: </label>
          <input
            type="date"
            id="activityDate"
            value={activityDate}
            label="Activity Date"
            onChange={(e) => setActivityDate(e.target.value)}
          />
        </div>
        <div id="info">
          <label>Time: </label>
          <input
            type="time"
            id="activityTime"
            value={activityTime}
            label="Activity Time"
            onChange={(e) => setActivityTime(e.target.value)}
          />
        </div>
        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
};

export default ActivityForm;

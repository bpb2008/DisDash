import React from "react";
import PlanCard from "./PlanCard";

const Flights: React.FC = () => {
  const flightPlans = [
    { id: 1, planType: "Departure", details: "Flight to Paris - 2024-06-01" },
    { id: 2, planType: "Arrival", details: "Flight to Rome - 2024-06-10" },
  ];

  return (
    <div>
      <h1>Flight Info</h1>
      {flightPlans.map((plan) => (
        <PlanCard
          key={plan.id}
          planType={plan.planType}
          details={plan.details}
        />
      ))}
    </div>
  );
};

export default Flights;

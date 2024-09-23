import React from "react";
import PlanCard from "./PlanCard";

const HotelBookings: React.FC = ({ plans }) => {
  if (plans.length === 0) {
    return <p>No hotel bookings available.</p>;
  }

  return (
    <div>
      <h1>Where You're Staying</h1>
      {plans.map((plan) => (
        <PlanCard
          key={plan.id}
          planType={plan.planType}
          details={plan.details}
        />
      ))}
    </div>
  );
};

export default HotelBookings;

import React from "react";
import PlanCard from "./PlanCard";

const RentalCar: React.FC = () => {
  const rentalPlans = [
    { id: 1, planType: "Enterprise", details: "Nissan Rogue" },
  ];

  return (
    <div>
      <h1>Rental Car</h1>
      {rentalPlans.map((plan) => (
        <PlanCard
          key={plan.id}
          planType={plan.planType}
          details={plan.details}
        />
      ))}
    </div>
  );
};

export default RentalCar;

import React from "react";
import PlanCard from "./PlanCard";

const Activities: React.FC = () => {
  const activityPlans = [
    {
      id: 1,
      planType: "Wine Tour",
      details: "Depart at 6:00PM on June 5th, 2025",
    },
  ];

  return (
    <div>
      <h1>Activities or Excursions</h1>
      {activityPlans.map((plan) => (
        <PlanCard
          key={plan.id}
          planType={plan.planType}
          details={plan.details}
        />
      ))}
    </div>
  );
};

export default Activities;

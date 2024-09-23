import React from "react";

const PlanCard: React.FC = ({ planType, details }) => {
  return (
    <div>
      <h4>{planType}</h4>
      <p>{details}</p>
    </div>
  );
};

export default PlanCard;

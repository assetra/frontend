import React from "react";
import Exchange from "./exchange";
import CardSlider from "./cardSlider";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-screen px-7 py-4">
      <Exchange />
      <CardSlider />
    </div>
  );
};

export default Dashboard;

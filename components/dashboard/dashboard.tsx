"use client";
import React from "react";
import Exchange from "./exchange";
import CardSlider from "./cardSlider";
import CustomChart from "./customChart";
import Second from "./second";
import First from "./first";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-screen px-7 bg-[#000] h-screen">
      <First />
      <Second />
      <CardSlider />
    </div>
  );
};

export default Dashboard;

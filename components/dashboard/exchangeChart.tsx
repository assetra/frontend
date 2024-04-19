import React from "react";
import Exchange from "./exchange";
import CustomChart from "./customChart";

export default function ExchangeChart() {
  return (
    <div id="second" className="w-screen flex pt-5 w-full h-full">
      <div className="w-1/4 pr-2 rounded-lg h-full">
        <Exchange />
      </div>
      <div className="flex pl-2 rounded-lg w-full h-full">
        <CustomChart />
      </div>
    </div>
  );
}

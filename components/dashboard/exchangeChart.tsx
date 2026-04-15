import React from "react";
import Exchange from "./exchange";
import CustomChart from "./customChart";

export default function ExchangeChart() {
  return (
    <div id="second" className="flex flex-col md:flex-row pt-3 gap-3 w-full">
      <div className="w-full md:w-[30%] rounded-lg">
        <Exchange />
      </div>
      <div className="w-full md:w-[80%] rounded-lg">
        <CustomChart />
      </div>
    </div>
  );
}

import React from "react";
import Exchange from "./exchange";
import CustomChart from "./customChart";

export default function ExchangeChart() {
  return (
    <div
      id="second"
      className="w-[100svh] flex pt-3"
      style={{ width: "100%", height: "340px" }}
    >
      <div className="w-[20%] pr-3 rounded-lg">
        <Exchange />
      </div>
      <div className="w-[80%] pl-6 rounded-lg">
        <CustomChart />
      </div>
    </div>
  );
}

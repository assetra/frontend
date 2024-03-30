import React from "react";
import Exchange from "./exchange";
import CustomChart from "./customChart";

export default function Second() {
  return (
    <div
      id="second"
      className="w-screen flex pt-3 h-107"
      style={{ width: "100%", height: "400px" }}
    >
      <div className="w-1/4 pr-2 rounded-lg h-full">
        <Exchange />
      </div>
      <div className="w-full pl-2 rounded-lg" style={{ height: "100%" }}>
        <CustomChart />
      </div>
    </div>
  );
}

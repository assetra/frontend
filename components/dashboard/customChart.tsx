import React from "react";
import LineChart from "./lineChart";

export default function CustomChart() {
  return (
    <div className="bg-[#1E1F25] flex flex-col rounded-xl w-full h-auto p-3">
      {/* Header */}
      <div className="text-white flex flex-col md:flex-row items-center justify-between font-sans px-4 py-2">
        <div className="text-xl font-bold">Overall Growth</div>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {[
            "1 min",
            "3 min",
            "30 min",
            "1 hour",
            "24 hour",
            "1 day",
            "1 week",
          ].map((label) => (
            <button
              key={label}
              className="text-sm md:text-base font-semibold cursor-pointer px-3 py-1 rounded-full text-gtxText focus:bg-black focus:text-white"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Section */}
      <div className="px-3">
        <LineChart />
      </div>
    </div>
  );
}

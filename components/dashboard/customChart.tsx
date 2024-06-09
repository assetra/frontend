import React from "react";
import LineChart from "./lineChart"

export default function CustomChart() {
  return (
    <div
      className="bg-[#1E1F25] flex flex-col rounded-xl "
      style={{ height: "320px" }}
    >
      <div
        className="text-white flex font-sans px-[20px] py-[5px]"
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div className="text-white text-xl font-bold">Overall Growth</div>
        <h1 className="flex">
          <button className="text-base font-semibold cursor-pointer px-4 py-2 rounded-full text-gtxText focus:bg-black focus:text-white">
            1 min
          </button>
          <button className="text-base font-semibold cursor-pointer px-4 py-2 rounded-full text-gtxText focus:bg-black focus:text-white">
            3 min
          </button>
          <button className="text-base font-semibold cursor-pointer px-4 py-2 rounded-full text-gtxText focus:bg-black focus:text-white">
            30 min
          </button>
          <button className="text-base font-semibold cursor-pointer px-4 py-2 rounded-full text-gtxText focus:bg-black focus:text-white">
            1 hour
          </button>
          <button className="text-base font-semibold cursor-pointer px-4 py-2 rounded-full text-gtxText focus:bg-black focus:text-white">
            24 hour
          </button>
          <button className="text-base font-semibold cursor-pointer px-4 py-2 rounded-full text-gtxText focus:bg-black focus:text-white">
            1 day
          </button>
          <button className="text-base font-semibold cursor-pointer px-4 py-2 rounded-full text-gtxText focus:bg-black focus:text-white">
            1 week
          </button>
        </h1>
      </div>

      <div className="px-3">
        <LineChart />
      </div>
    </div>
  );
}

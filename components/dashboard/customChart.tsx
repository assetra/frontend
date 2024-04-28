import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip, // This is the target
  Legend
);

export const options = {
  // color: "red",
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Overall Growth",
    },
  },
};

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5];

export const data = {
  color: "red",
  labels,
  datasets: [
    {
      label: "BTC Bitcoin",
      data: labels.map(() => faker.number.int({ min: 0, max: 5 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "ETH Ethereum",
      data: labels.map(() => faker.number.int({ min: 0, max: 5 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "USDT Tether",
      data: labels.map(() => faker.number.int({ min: 0, max: 5 })),
      borderColor: "rgb(153, 0, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function CustomChart() {
  return (
    <div className="w-full h-full">
      <div className="bg-[#1E1F25] flex flex-col rounded-xl h-full ">
        <div
          className="text-white flex font-sans"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
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

        <div className="p-3">
          <Line
            options={options}
            data={data}
            height={"60%"}
            // color={options.color}
          />
        </div>
      </div>
    </div>
  );
}

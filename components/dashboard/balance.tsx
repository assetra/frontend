"use client";
import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Balance = () => {
  const state = {
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  };

  return (
    <div className="pr-10.5 bg-[#1E1F25] rounded-xl w-full h-full">
      <div className="gap-45 flex flex-row w-full text-white h-full">
        <div className="w-5/12 flex flex-col p-6 h-full">
          <div className="flex flex-col justify-between border-r-2 border-[#34384C] h-full pr-10">
            <div className="w-full flex justify-between pb-5">
              <h1>Balance</h1>
              <div className="flex justify">
                <img src="/images/arrow-up-green.png" />
                <p>2.36%</p>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-extrabold">USD 12.243,55</h1>
            </div>
            <div className="flex flex-row pt-10 w-full">
              <div className="flex flex-col w-1/2 justify-start">
                <div className="flex flex-row py-3">
                  <img src="/images/arrow-down-blue-24-bg.png" />
                  <p className="pl-5">Income</p>
                </div>
                <div>USD 12.243,55</div>
              </div>
              <div className="flex flex-col w-1/2 justify-start pl-5">
                <div className="flex flex-col border-l-2 px-5 border-[#34384C]">
                  <div className="flex flex-row py-3">
                    <img src="/images/arrow-up-red-24-bg.png" />
                    <p className="pl-5">Expenses</p>
                  </div>
                  <div>USD 12.243,55</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-7/12 flex flex-col">
          <div className="donut">
            <Chart
              options={state.options}
              series={state.series}
              type="donut"
              width="380"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;

"use client";
import React from "react";
import Chart from "react-apexcharts";
import DonutChart from "./donutChart";

const Balance = () => {
  const state = {
    options: {},
    series: [2.36, 1.8, 1.64],
    labels: ["BTC", "ETH", "USDT"],
    formatter: () => "Text you want",
  };

  return (
    <div className="pr-8 bg-[#1E1F25] rounded-xl w-full h-full">
      <div className="gap-45 flex flex-row w-full text-white h-full ">
        <div className="w-5/12 flex flex-col p-6 h-full ">
          <div className="flex flex-col justify-between border-r-2 border-[#34384C] h-full pr-10 ">
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
        <div className="flex flex-col w-7/12 h-full justify-center p-8">
          <div className="flex flex-row w-full justify-between">
            <div>Wallet</div>
            <div>3 Currencies</div>
          </div>
          <div className="flex flex-row w-full h-full justify-between">
            <div className="w-3/5 donut">
              <div className="relative flex items-center justify-center h-full">
                <DonutChart />
              </div>
            </div>
            <div className="flex flex-col w-2/5 h-full p-2 justify-between">
              <div className="flex flex-row w-full h-1/3 m-2">
                <div className="m-2">
                  <img src="/images/bitcoin-icon.png" />
                </div>
                <div className="flex flex-col w-full h-full">
                  <div className="flex flex-row justify-between w-full h-full">
                    <div>BTC</div>
                    <div className="flex flex-row">
                      <img src="/images/Arrow - Up 3_16.png" />
                      <div>2.36%</div>
                    </div>
                  </div>
                  <div>Bitcoin</div>
                </div>
              </div>
              <div className="flex flex-row w-full h-1/3 m-2">
                <div className="m-2">
                  <img src="/images/eth-icon.png" />
                </div>
                <div className="flex flex-col w-full h-full">
                  <div className="flex flex-row justify-between w-full h-full">
                    <div>ETH</div>
                    <div className="flex flex-row">
                      <img src="/images/Arrow - Up 3_16.png" />
                      <div>1.80%</div>
                    </div>
                  </div>
                  <div>Ethereum</div>
                </div>
              </div>
              <div className="flex flex-row w-full h-1/3 m-2">
                <div className="m-2">
                  <img src="/images/usdt-icon.png" />
                </div>
                <div className="flex flex-col w-full h-full">
                  <div className="flex flex-row justify-between w-full h-full">
                    <div>USDT</div>
                    <div className="flex flex-row">
                      <img src="/images/Arrow - Up 3_16.png" />
                      <div>1.64%</div>
                    </div>
                  </div>
                  <div>Tether</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col "></div>
        </div>
      </div>
    </div>
  );
};

export default Balance;

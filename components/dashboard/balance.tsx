import React from "react";
import PieChart from "./pieChart";

const Balance = () => {
  return (
    <div className="pr-10.5 bg-[#1E1F25] rounded-xl w-full h-full">
      <div className="gap-45 flex flex-row w-full text-white h-full">
        <div className="w-5/12 flex flex-col p-4 h-full">
          <div className="flex flex-col justify-between border-r-2 border-[#34384C] h-full pr-10">
            <div className="w-full flex justify-between pb-2">
              <h1>Balance</h1>
              <div className="flex justify">
                <img src="/images/arrow-up-green.png" />
                <p>2.36%</p>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-extrabold">USD 12.243,55</h1>
            </div>
            <div className="flex flex-row pt-4 w-full">
              <div className="flex flex-col w-1/2 justify-start">
                <div className="flex flex-row py-2">
                  <img src="/images/arrow-down-blue-24-bg.png" />
                  <p className="pl-5">Income</p>
                </div>
                <div>USD 12.243,55</div>
              </div>
              <div className="flex flex-col w-1/2 justify-start pl-5">
                <div className="flex flex-col border-l-2 px-5 border-[#34384C]">
                  <div className="flex flex-row py-2">
                    <img src="/images/arrow-up-red-24-bg.png" />
                    <p className="pl-5">Expenses</p>
                  </div>
                  <div>USD 12.243,55</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-7/12 flex flex-col py-3">
          <div className="w-full flex justify-between px-6">
            <p className="text-[1rem]">Wallet</p>
            <div className="flex">
              <p className="text-[#A5ADCF] text-[12px]">3 Currencies</p>
            </div>
          </div>
          <div className="w-full flex justify-between px-6">
            <div className="py-2 px-4">
              <PieChart />
            </div>
            <div className="flex">
              <div>
                <div className="flex justify py-3">
                  <img src="/images/arrow-up-green.png" />
                  <p>2.36%</p>
                </div>
                <div className="flex justify  py-3">
                  <img src="/images/arrow-up-green.png" />
                  <p>1.36%</p>
                </div>
                <div className="flex justify  py-3">
                  <img src="/images/arrow-up-green.png" />
                  <p>2.46%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;

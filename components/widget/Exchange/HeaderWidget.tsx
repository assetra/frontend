import React from "react";

const HeaderWidget: React.FC = () => {
  return (
    <div className="newWidget grid-stack-item">
      <div className="grid grid-cols-4 gap-4 mb-4 min-w-[45rem]">
        <div className="flex flex-row items-center h-full p-3 rounded-xl bg-[#1E1F25]">
          <div className="flex flex-row justify-between items-center w-full h-full p-3">
            <div>
              <img src="/images/bitcoin-icon-large.png" alt="Bitcoin Icon" />
            </div>
            <div className="flex flex-col w-full h-full ml-4">
              <div className="flex flex-row justify-between items-center w-full h-1/2">
                <div className="flex items-center text-base text-[#5D6588]">
                  Bitcoin
                </div>
                <img src="/images/arrow-down.png" alt="Arrow Down" />
              </div>
              <div className="flex text-[#FFFFFF] text-[20px]">BTC/USD</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center  h-full p-3 rounded-xl bg-[#1E1F25]">
          <div className="flex flex-row items-center p-3 w-full h-full">
            <div className="flex flex-col items-center w-3/5 h-full">
              <div className="flex w-full h-1/2 items-center text-[16px] text-[#5D6588]">
                24h Change
              </div>
              <div className="flex flex-row items-center w-full h-1/2">
                <div className="mr-2">
                  <img src="/images/Arrow - Up 3.png" alt="Arrow Up" />
                </div>
                <div className="text-[#11CABE] text-[20px]">0.53%</div>
              </div>
            </div>
            <div className="flex items-center w-2/5 h-full">
              <div>
                <img src="/images/exchange-graph.png" alt="Exchange Graph" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center h-full p-3  rounded-xl bg-[#1E1F25]">
          <div className="flex flex-col items-center p-3 w-full h-full ml-5">
            <div className="flex w-full h-1/2 items-center text-[16px] text-[#5D6588]">
              Last Price
            </div>
            <div className="flex w-full h-1/2 items-center text-[20px] text-white">
              18372.595198 USD
            </div>
          </div>
        </div>
        <div className="flex items-center  h-full p-3 rounded-xl bg-[#1E1F25]">
          <div className="flex flex-col items-center p-3 w-full h-full ml-5">
            <div className="flex w-full h-1/2 items-center text-[16px] text-[#5D6588]">
              24h Low
            </div>
            <div className="flex w-full h-1/2 items-center text-[20px] text-white">
              18372.595198 USD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWidget;

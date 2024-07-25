import React from "react";

const RampWidget: React.FC = () => {
  return (
    <div className="newWidget grid-stack-item">
      <div className="flex w-full mb-4 rounded-xl bg-[#1E1F25]">
        <div className="flex flex-col justify-between px-6 py-4 w-full h-full ">
          <div className="flex flex-row justify-between items-center w-full h-[15%] mb-2">
            <div className="text-white">Bitcoin</div>
            <img src="/images/bitcoin-icon-big.png" alt="Bitcoin Icon" />
          </div>
          <div className="flex flex-col mb-2">
            <div className="text-[#5D6588] text-base h-full">
              Current Balance
            </div>
            <div className="flex flex-row justify-between items-center text-white h-full border-b-2 border-[#34384C]">
              <div className="flex justify-start basis-2/3 text-[1rem] text-white pr-4">
                <input
                  className="bg-[#1E1F25] w-24 pl-4"
                  style={{ border: "none", outline: "none" }}
                ></input>
              </div>
              <div>BTC</div>
            </div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="flex flex-row justify-between h-full text-base py-2">
              <div className="text-[#5D6588]">Volume (24h)</div>
              <div className="text-[#11CABE]">2.36%</div>
            </div>
            <div className="flex flex-row justify-between text-white h-full border-b-2 border-[#34384C]">
              <div className="flex justify-start basis-2/3 text-[1rem] text-white pr-4">
                <input
                  className="bg-[#1E1F25] w-24 pl-4"
                  style={{ border: "none", outline: "none" }}
                ></input>
              </div>
              <div>USD</div>
            </div>
          </div>
          <div className="flex flex-col h-[25%] mb-3">
            <div className="text-[#5D6588] h-full py-2 mb-1">
              Payment Method
            </div>
            <button className="flex flex-row justify-between items-center px-6 py-2 rounded-full bg-[#34384C] text-white h-full">
              <div className="flex flex-row h-full items-center">
                <img
                  className="mr-2"
                  src="/images/money-icon.png"
                  alt="Money Icon"
                />
                <div>Paywallet</div>
              </div>
              <img src="/images/arrow-down-medium.png" alt="Arrow Down" />
            </button>
          </div>
          <div className="flex flex-row justify-between h-full mt-3">
            <button className="text-[#11CABE] px-6 py-1 rounded-full border-2 border-[#11CABE]">
              Buy
            </button>
            <button className="text-[#FA2256] px-6 py-1 rounded-full border-2 border-[#FA2256]">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RampWidget;

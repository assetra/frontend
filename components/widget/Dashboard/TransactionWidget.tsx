"use client";
import React from "react";

const TransactionWidget: React.FC = () => {
  const data = [
    { type: "BTC", action: "Receive", value: "$0.143,21" },
    { type: "ETH", action: "Send", value: "$0.34,223" },
    { type: "BTC", action: "Receive", value: "$0.143,21" },
    { type: "ETH", action: "Send", value: "$0.34,223" },
    { type: "BTC", action: "Receive", value: "$0.143,21" },
    { type: "ETH", action: "Send", value: "$0.34,223" },
    { type: "BTC", action: "Receive", value: "$0.143,21" },
    { type: "ETH", action: "Send", value: "$0.34,223" },
    { type: "BTC", action: "Receive", value: "$0.143,21" },
    { type: "ETH", action: "Send", value: "$0.34,223" },
    { type: "BTC", action: "Receive", value: "$0.143,21" },
    { type: "ETH", action: "Send", value: "$0.34,223" },
    { type: "BTC", action: "Receive", value: "$0.143,21" },
    { type: "ETH", action: "Send", value: "$0.34,223" },
    { type: "BTC", action: "Receive", value: "$0.143,21" },
    { type: "ETH", action: "Send", value: "$0.34,223" },
  ];
  return (
    <div className="newWidget grid-stack-item">
      <div className="bg-[#1E1F25] rounded-xl w-full px-6 pt-4 text-white">
        <div className="flex flex-row justify-between items-start px-4 w-full h-6">
          <div className="text-white text-xl font-bold">Transaction</div>
          <div className="flex justify-between items-center text-white text-base border-white border rounded-full w-16 h-8 px-4 py-2 cursor-pointer">
            All
            <img src="/images/arrow-down-white.png" alt="arrow-down-white" />
          </div>
        </div>
        <div className="overflow-y-auto w-full h-[8rem] mt-4 px-4">
          {data.map((item, index) => (
            <div key={index} className="flex justify-between items-center h-10">
              <div className="flex items-center justify-between w-1/2">
                <div className="flex items-center">
                  <img
                    src={
                      item.type === "BTC"
                        ? "/images/bitcoin-icon-big.png"
                        : "/images/eth-icon-big.png"
                    }
                    className="pr-4"
                  />
                  {item.type}
                </div>
                <div>{item.action}</div>
              </div>
              <div className="flex justify-between items-center w-1/2">
                <img
                  src={
                    item.action === "Receive"
                      ? "/images/arrow-down-green-big.png"
                      : "/images/arrow-up-red-big.png"
                  }
                  className="pr-4"
                />
                {item.value}
              </div>
              {/* <div>{item.value}</div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionWidget;

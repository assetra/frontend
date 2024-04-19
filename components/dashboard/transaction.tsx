import React from "react";

export default function Transaction() {
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
    <div className="flex flex-col rounded-xl w-1/3 p-5 text-white bg-[#1E1F25]">
      <table className="flex flex-col w-full h-full">
        <thead className="flex flex-col w-full">
          <tr className="flex flex-row w-full justify-between">
            <td>
              <div className="text-white text-xl font-bold">Transaction</div>
            </td>
            <td>
              <div className="flex justify-between items-center text-white text-base border-white border rounded-full w-20 h-10 px-4 py-2 cursor-pointer">
                All
                <img
                  src="/images/arrow-down-white.png"
                  alt="arrow-down-white"
                />
              </div>
            </td>
          </tr>
        </thead>
        <tbody className=" overflow-y-auto">
          {data.map((item) => (
            <tr className="flex justify-between items-center h-10">
              <td className="flex items-center justify-between w-1/2">
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
              </td>
              <td className="flex justify-between items-center w-1/2">
                <img
                  src={
                    item.action === "Receive"
                      ? "/images/arrow-down-green-big.png"
                      : "/images/arrow-up-red-big.png"
                  }
                  className="pr-4"
                />
                {item.value}
              </td>
              {/* <td>{item.value}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

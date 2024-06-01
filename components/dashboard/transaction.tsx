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
    <div className="bg-[#1E1F25] rounded-xl w-1/3 flex flex-col p-5 text-white overflow-y-auto">
      <div className="flex justify-between">
        <div className="flex flex-row justify-between items-start px-4 w-full">
          <div className="text-white text-xl font-bold">Transaction</div>
          <div className="flex justify-between items-center text-white text-base border-white border rounded-full w-20 h-10 px-4 py-2 cursor-pointer">
            All
            <img src="/images/arrow-down-white.png" alt="arrow-down-white" />
          </div>
        </div>
      </div>
      <table>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="flex justify-between items-center h-10">
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

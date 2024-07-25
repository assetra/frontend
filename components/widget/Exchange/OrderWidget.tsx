import React from "react";

const OrderWidget: React.FC = () => {
  const data = [
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: 0.25,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: -4.51,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: 0.25,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: -4.51,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: 0.25,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: -4.51,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: 0.25,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: -4.51,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: 0.25,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: -4.51,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: 0.25,
      time: "12:34:44",
    },
    {
      price: 243546.12443536,
      amount: 12425.21435364,
      total: 24324.320214535,
      change: -4.51,
      time: "12:34:44",
    },
  ];

  return (
    <div className="newWidget grid-stack-item">
      <div className="w-[15rem] h-[5rem] md:min-w-[40rem] md:min-h-[25rem] bg-[#1E1F25] rounded-xl">
        <div className="h-[20%] px-4 py-2">
          <div className="flex flex-row w-full justify-between">
            <p className="pt-1 text-sm md:text-base">Market Trades</p>
            <div className="flex flex-row h-full">
              <button className="flex items-center h-full text-white rounded-full mr-2 md:mr-4 px-2 md:px-4 py-1 focus:bg-black focus:text-white">
                <p className="text-xs md:text-sm">Open Orders</p>
              </button>
              <button className="flex items-center text-white rounded-full mr-2 md:mr-4 px-2 md:px-4 py-1 focus:bg-black focus:text-white">
                <p className="text-xs md:text-sm">Order History</p>
              </button>
              <button className="flex items-center text-white rounded-full px-2 md:px-4 py-1 focus:bg-black focus:text-white">
                <p className="text-xs md:text-sm">Order Book</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full h-[80%] px-4 py-2">
          <table className="w-full flex flex-col h-full text-white">
            <thead className="flex flex-col w-full">
              <tr className="grid grid-cols-4 gap-2 md:gap-8 pb-3 border-b-2 pl-2 md:pl-6">
                <td className="text-xs md:text-sm">Time</td>
                <td className="text-xs md:text-sm">Price(ETH)</td>
                <td className="text-xs md:text-sm">Amount(BTC)</td>
                <td className="text-xs md:text-sm">Total(ETH)</td>
              </tr>
            </thead>
            <tbody className="flex flex-col w-full h-full overflow-auto mt-2 pl-2 md:pl-6">
              {data.map((item, index) => (
                <tr
                  key={`${item.change}-${index}`}
                  className="grid grid-cols-4 gap-2 md:gap-8"
                >
                  <td className="text-xs md:text-sm">
                    <p>{item.time}</p>
                  </td>
                  <td
                    className={`text-xs md:text-sm ${item.change > 0 ? "text-[#30E0A1]" : "text-[#FA2256]"}`}
                  >
                    {Math.abs(item.price)}
                  </td>
                  <td className="text-xs md:text-sm">{item.amount}</td>
                  <td className="text-xs md:text-sm">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderWidget;

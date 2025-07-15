"use client";
import React, { useState } from "react";
import { AdvancedChart } from "react-tradingview-embed";
import Exchange from "./exchange";

const ExchangePage = () => {
  const [activeTab, setActiveTab] = useState("Market Trades");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="dark:bg-[#000] bg-gray-900  w-full overflow-hidden mt-12">
      <div className="flex flex-col lg:flex-row w-full p-2 md:p-4 lg:p-6 space-y-4 lg:space-y-0 lg:space-x-4 overflow-hidden">
        {/* Main Content Left Side */}
        <div className="flex flex-col w-full lg:w-[75%] space-y-4">
          {/* Top Information Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {/* Bitcoin Card */}
            <div className="bg-[#1E1F25] bg-opacity-50 backdrop-blur-lg rounded-xl p-3 dark:text-white">
              <div className="flex flex-row justify-between items-center">
                <img
                  src="/images/bitcoin-icon-large.png"
                  alt="Bitcoin Icon"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
                <div className="ml-2 md:ml-4">
                  <div className="text-xs md:text-sm text-[#5D6588]">
                    Bitcoin
                  </div>
                  <div className="text-sm md:text-base">BTC/USD</div>
                </div>
              </div>
            </div>

            {/* 24h Change Card */}
            <div className="bg-[#1E1F25] bg-opacity-50 backdrop-blur-lg rounded-xl p-3 dark:text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-xs md:text-sm text-[#5D6588] mb-1 md:mb-0">
                  24h Change
                </div>
                <div className="flex items-center">
                  <img
                    src="/images/Arrow - Up 3.png"
                    alt="Arrow Up"
                    className="w-4 h-4 mr-1"
                  />
                  <div className="text-[#11CABE] text-sm md:text-base">
                    0.53%
                  </div>
                </div>
              </div>
            </div>

            {/* Last Price Card */}
            <div className="bg-[#1E1F25] bg-opacity-50 backdrop-blur-lg rounded-xl p-3 dark:text-white">
              <div className="text-xs md:text-sm text-[#5D6588] mb-1">
                Last Price
              </div>
              <div className="text-sm md:text-base">18372.595198 USD</div>
            </div>

            {/* 24h Low Card */}
            <div className="bg-[#1E1F25] bg-opacity-50 backdrop-blur-lg rounded-xl p-3 dark:text-white">
              <div className="text-xs md:text-sm text-[#5D6588] mb-1">
                24h Low
              </div>
              <div className="text-sm md:text-base">18372.595198 USD</div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-[#1E1F25] bg-opacity-50 backdrop-blur-lg rounded-xl p-4 h-[50vh] lg:h-[40vh]">
            <div className="flex flex-col h-full">
              {/* Chart Header */}
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <span className="text-white mr-4">BTC/USD</span>
                  <div className="hidden md:flex space-x-4">
                    <div className="text-[#5D6588] text-sm">
                      Open: <span className="text-[#11CABE]">18432.320</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-[#34384C] text-white rounded-full flex items-center">
                    Price <i className="ml-2">▼</i>
                  </button>
                  <button className="px-3 py-1 bg-[#34384C] text-white rounded-full flex items-center">
                    1 min <i className="ml-2">▼</i>
                  </button>
                </div>
              </div>

              {/* TradingView Chart */}
              <div className="flex-grow">
                <AdvancedChart
                  widgetProps={{
                    width: "100%",
                    height: "100%",
                    theme: "dark",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Market Trades Section */}
          {/* Market Trades Section */}
          <div className="bg-[#1E1F25] bg-opacity-50 backdrop-blur-lg rounded-xl p-2 sm:p-4">
            <div className="flex flex-col">
              {/* Trades Header - Fully Responsive */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-4">
                <h3 className="text-white text-base sm:text-lg mb-2 sm:mb-0">
                  Market Trades
                </h3>

                {/* Desktop Tabs */}
                <div className="hidden sm:flex space-x-2">
                  <button
                    className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full ${activeTab === "Open Orders" ? "bg-black text-white" : "text-white"}`}
                    onClick={() => setActiveTab("Open Orders")}
                  >
                    Open Orders
                  </button>
                  <button
                    className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full ${activeTab === "Order History" ? "bg-black text-white" : "text-white"}`}
                    onClick={() => setActiveTab("Order History")}
                  >
                    Order History
                  </button>
                  <button
                    className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full ${activeTab === "Order Book" ? "bg-black text-white" : "text-white"}`}
                    onClick={() => setActiveTab("Order Book")}
                  >
                    Order Book
                  </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="sm:hidden w-full flex justify-end">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white text-2xl"
                  >
                    {isMenuOpen ? "✕" : "☰"}
                  </button>
                </div>
              </div>

              {/* Mobile Tabs */}
              {isMenuOpen && (
                <div className="sm:hidden flex space-x-2 mb-2 overflow-x-auto">
                  <button
                    className={`px-3 py-1 text-sm rounded-full ${activeTab === "Open Orders" ? "bg-black text-white" : "text-white"}`}
                    onClick={() => {
                      setActiveTab("Open Orders");
                      setIsMenuOpen(false);
                    }}
                  >
                    Open Orders
                  </button>
                  <button
                    className={`px-3 py-1 text-sm rounded-full ${activeTab === "Order History" ? "bg-black text-white" : "text-white"}`}
                    onClick={() => {
                      setActiveTab("Order History");
                      setIsMenuOpen(false);
                    }}
                  >
                    Order History
                  </button>
                  <button
                    className={`px-3 py-1 text-sm rounded-full ${activeTab === "Order Book" ? "bg-black text-white" : "text-white"}`}
                    onClick={() => {
                      setActiveTab("Order Book");
                      setIsMenuOpen(false);
                    }}
                  >
                    Order Book
                  </button>
                </div>
              )}

              {/* Trades Table - Fully Responsive */}
              <div className="overflow-x-auto  sm:max-h-[15rem] lg:max-h-[15rem] max-h-[10rem] overflow-y-auto">
                <table className="w-full text-white text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-gray-700 text-[#5D6588]">
                      <th className="py-1 sm:py-2 text-left pl-2 sm:pl-0">
                        Time
                      </th>
                      <th className="py-1 sm:py-2 text-left">Price(ETH)</th>
                      <th className="py-1 sm:py-2 text-left">Amount(BTC)</th>
                      <th className="py-1 sm:py-2 text-left pr-2 sm:pr-0">
                        Total(ETH)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index} className="border-b border-gray-700">
                        <td className="py-1 sm:py-2 pl-2 sm:pl-0">
                          {item.time}
                        </td>
                        <td
                          className={`py-1 sm:py-2 ${
                            item.change > 0
                              ? "text-[#30E0A1]"
                              : "text-[#FA2256]"
                          }`}
                        >
                          {Math.abs(item.price).toFixed(2)}
                        </td>
                        <td className="py-1 sm:py-2">
                          {item.amount.toFixed(2)}
                        </td>
                        <td className="py-1 sm:py-2 pr-2 sm:pr-0">
                          {item.total.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="flex flex-col w-full lg:w-[25%] space-y-4 justify-between">
          {/* Bitcoin Wallet Card */}
          <div className="bg-[#1E1F25] bg-opacity-50 backdrop-blur-lg rounded-xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white">Bitcoin</h3>
              <img
                src="/images/bitcoin-icon-big.png"
                alt="Bitcoin Icon"
                className="w-10 h-10"
              />
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[#5D6588] text-sm">
                  Current Balance
                </label>
                <div className="flex justify-between items-center border-b border-[#34384C] pb-2">
                  <input
                    className="bg-transparent text-white w-full"
                    placeholder="Enter amount"
                  />
                  <span className="text-white">BTC</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#5D6588]">Volume (24h)</span>
                  <span className="text-[#11CABE]">2.36%</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#34384C] pb-2">
                  <input
                    className="bg-transparent text-white w-full"
                    placeholder="Enter USD"
                  />
                  <span className="text-white">USD</span>
                </div>
              </div>

              <div>
                <label className="text-[#5D6588] text-sm mb-2 block">
                  Payment Method
                </label>
                <button className="w-full flex justify-between items-center bg-[#34384C] text-white rounded-full p-3">
                  <div className="flex items-center">
                    <img
                      src="/images/money-icon.png"
                      alt="Money Icon"
                      className="w-6 h-6 mr-2"
                    />
                    <span>Paywallet</span>
                  </div>
                  <i>▼</i>
                </button>
              </div>

              <div className="flex space-x-4 mt-4">
                <button className="flex-1 border-2 border-[#11CABE] text-[#11CABE] rounded-full py-2">
                  Buy
                </button>
                <button className="flex-1 border-2 border-[#FA2256] text-[#FA2256] rounded-full py-2">
                  Sell
                </button>
              </div>
            </div>
          </div>

          {/* Exchange Component */}
          <div className="bg-[#1E1F25] bg-opacity-50 backdrop-blur-lg rounded-xl min-h-[320px]">
            <Exchange />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangePage;

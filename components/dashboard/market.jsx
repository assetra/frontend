"use client";
import React, { useState } from "react";
import Card from "./card";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";

const Market = () => {
  const symbols = [
    "BINANCE:BTCUSD",
    "COINBASE:ETHUSD",
    "COINBASE:USDTUSD",
    "BINANCE:BNBUSD",
  ];

  const data = [
    {
      icon: "/images/market-icon/BTC.png",
      type: "BTC",
      name: "Bitcoin",
      price: "USD 53,260,20",
      change: "0.25%",
      graph: "/images/market-graph/BTC.png",
    },
    {
      icon: "/images/market-icon/ETH.png",
      type: "ETH",
      name: "Ethereum",
      price: "USD 53,260,20",
      change: "0.25%",
      graph: "/images/market-graph/ETH.png",
    },
    {
      icon: "/images/market-icon/BNB.png",
      type: "BNB",
      name: "Binance Coin",
      price: "USD 247.72",
      change: "2.43%",
      graph: "/images/market-graph/BNB.png",
    },
    {
      icon: "/images/market-icon/XRP.png",
      type: "XRP",
      name: "XRP",
      price: "USD 0.5657",
      change: "2.42%",
      graph: "/images/market-graph/XRP.png",
    },
    {
      icon: "/images/market-icon/USDT.png",
      type: "USDT",
      name: "Tether",
      price: "USD 0.9999",
      change: "0.40%",
      graph: "/images/market-graph/USDT.png",
    },
    {
      icon: "/images/market-icon/ACT.png",
      type: "ACT",
      name: "Achain",
      price: "USD 40,355.12",
      change: "0.05%",
      graph: "/images/market-graph/ACT.png",
    },
    {
      icon: "/images/market-icon/OGN.png",
      type: "OGN",
      name: "Origin Protocol",
      price: "USD 3,152.93",
      change: "0.22%",
      graph: "/images/market-graph/OGN.png",
    },
    {
      icon: "/images/market-icon/BTC.png",
      type: "BTC",
      name: "Bitcoin",
      price: "USD 53,260,20",
      change: "0.25%",
      graph: "/images/market-graph/BTC.png",
    },
    {
      icon: "/images/market-icon/ETH.png",
      type: "ETH",
      name: "Ethereum",
      price: "USD 53,260,20",
      change: "0.25%",
      graph: "/images/market-graph/ETH.png",
    },
    {
      icon: "/images/market-icon/BNB.png",
      type: "BNB",
      name: "Binance Coin",
      price: "USD 247.72",
      change: "2.43%",
      graph: "/images/market-graph/BNB.png",
    },
    {
      icon: "/images/market-icon/XRP.png",
      type: "XRP",
      name: "XRP",
      price: "USD 0.5657",
      change: "2.42%",
      graph: "/images/market-graph/XRP.png",
    },
    {
      icon: "/images/market-icon/USDT.png",
      type: "USDT",
      name: "Tether",
      price: "USD 0.9999",
      change: "0.40%",
      graph: "/images/market-graph/USDT.png",
    },
    {
      icon: "/images/market-icon/ACT.png",
      type: "ACT",
      name: "Achain",
      price: "USD 40,355.12",
      change: "0.05%",
      graph: "/images/market-graph/ACT.png",
    },
    {
      icon: "/images/market-icon/OGN.png",
      type: "OGN",
      name: "Origin Protocol",
      price: "USD 3,152.93",
      change: "0.22%",
      graph: "/images/market-graph/OGN.png",
    },
    {
      icon: "/images/market-icon/BTC.png",
      type: "BTC",
      name: "Bitcoin",
      price: "USD 53,260,20",
      change: "0.25%",
      graph: "/images/market-graph/BTC.png",
    },
    {
      icon: "/images/market-icon/ETH.png",
      type: "ETH",
      name: "Ethereum",
      price: "USD 53,260,20",
      change: "0.25%",
      graph: "/images/market-graph/ETH.png",
    },
    {
      icon: "/images/market-icon/BNB.png",
      type: "BNB",
      name: "Binance Coin",
      price: "USD 247.72",
      change: "2.43%",
      graph: "/images/market-graph/BNB.png",
    },
    {
      icon: "/images/market-icon/XRP.png",
      type: "XRP",
      name: "XRP",
      price: "USD 0.5657",
      change: "2.42%",
      graph: "/images/market-graph/XRP.png",
    },
    {
      icon: "/images/market-icon/USDT.png",
      type: "USDT",
      name: "Tether",
      price: "USD 0.9999",
      change: "0.40%",
      graph: "/images/market-graph/USDT.png",
    },
    {
      icon: "/images/market-icon/ACT.png",
      type: "ACT",
      name: "Achain",
      price: "USD 40,355.12",
      change: "0.05%",
      graph: "/images/market-graph/ACT.png",
    },
    {
      icon: "/images/market-icon/OGN.png",
      type: "OGN",
      name: "Origin Protocol",
      price: "USD 3,152.93",
      change: "0.22%",
      graph: "/images/market-graph/OGN.png",
    },
  ];
  const [darkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("All Assets");

  const tabs = ["All Assets", "Gainers", "Losers"];

  return (
    <div
      className={`
      ${darkMode ? "dark bg-black text-white" : "bg-white text-black"}
      min-h-screen w-full transition-colors duration-300
      font-sans p-4 md:p-6 lg:p-8 mt-6
    `}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div
          className={`
          md:col-span-3 
          p-6 rounded-2xl 
          ${
            darkMode
              ? "bg-white/5 backdrop-blur-md border border-white/10"
              : "bg-black/5 backdrop-blur-md border border-black/10"
          }
        `}
        >
          <div className="space-y-4">
            <div className="text-sm text-gray-400">In the past 24 hours</div>
            <h2 className="text-2xl font-bold">
              Market is up <span className="text-emerald-500">6.73%</span>
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            {symbols.map((symbol, index) => (
              <div
                key={index}
                className={`
                flex justify-between items-center p-3 rounded-xl
                ${
                  darkMode
                    ? "bg-white/10 hover:bg-white/20"
                    : "bg-black/10 hover:bg-black/20"
                }
                transition-all duration-300
              `}
              >
                <Card cryptoPair={symbol} />
              </div>
            ))}
          </div>
        </div>

        {/* Market Table Section */}
        <div
          className={`
          md:col-span-9 
          rounded-2xl p-6
          ${
            darkMode
              ? "bg-white/5 backdrop-blur-md border border-white/10"
              : "bg-black/5 backdrop-blur-md border border-black/10"
          }
        `}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Market Table</h3>
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                  px-4 py-2 rounded-full text-sm transition-all duration-300
                  ${
                    activeTab === tab
                      ? "bg-blue-600 text-white"
                      : `
                      ${
                        darkMode
                          ? "hover:bg-white/10 text-white/70"
                          : "hover:bg-black/10 text-black/70"
                      }
                    `
                  }
                `}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto overflow-y-auto max-h-[100svh]">
            <table className="w-full">
              <thead
                className={`
                ${
                  darkMode
                    ? "bg-white/10 text-white/70"
                    : "bg-black/10 text-black/70"
                }
                text-sm
              `}
              >
                <tr>
                  <th className="p-3 text-left">Assets</th>
                  <th className="p-3 text-left">Last Price</th>
                  <th className="p-3 text-left">Change</th>
                  <th className="p-3 text-left">Chart</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((crypto, index) => (
                  <tr
                    key={index}
                    className={`
                    hover:${darkMode ? "bg-white/5" : "bg-black/5"}
                    transition-all duration-300
                  `}
                  >
                    <td className="p-3 flex items-center space-x-3">
                      <Image
                        src={crypto.icon}
                        alt={crypto.type}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-semibold">{crypto.type}</div>
                        <div className="text-sm text-gray-500">
                          {crypto.name}
                        </div>
                      </div>
                    </td>
                    <td className="p-3">${crypto.price}</td>
                    <td className="p-3">
                      <div>{crypto.change}</div>
                    </td>
                    <td className="p-3">
                      <Image
                        src={crypto.graph}
                        alt="Chart"
                        width={80}
                        height={30}
                      />
                    </td>
                    <td className="p-3">
                      <button
                        className={`
                        px-4 py-2 rounded-full
                        ${
                          darkMode
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : "bg-blue-500 hover:bg-blue-600 text-white"
                        }
                        transition-all duration-300
                      `}
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;

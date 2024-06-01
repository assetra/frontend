"use client";
import React, { useContext, useEffect } from "react";
import localFont from "next/font/local";
import CardSlider from "./cardSlider";
import Card from "./card";
import { AuthContext } from "@/context/AddContext";

const graphik = localFont({ src: "../../public/fonts/GraphikRegular.otf" });

const Market = () => {
  const appContext = useContext(AuthContext);
  useEffect(() => {
    appContext.setNavbarState(true);
  }, []);

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

  return (
    <div className="flex w-screen h-full bg-[#000] px-11 pt-14">
      <div className="flex w-full h-full">
        <div className="flex h-full w-1/4 pr-3">
          <div className="flex flex-col w-full h-full text-white">
            <div className="flex flex-col pb-6">
              <div className="text-base pb-2 text-[#A5ADCF]">
                In the past 24 hours
              </div>
              <div>
                <h1 className="text-xl font-semibold">
                  Market is up <span className="text-[#11CABE]">6.73%</span>
                </h1>
              </div>
            </div>
            <div className="flex flex-col w-full">
              {symbols.map((symbol) => (
                <div className="w-full py-[18px] px-0">
                  <Card cryptoPair={symbol} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex h-full w-3/4 pl-3">
          <div className="flex w-full h-full text-white rounded-xl p-6 bg-[#1E1F25]">
            <div className="flex flex-col w-full h-full">
              <div className="flex flex-row justify-between w-full h-[30px]">
                <div>Market Table</div>
                <div className="text-[#5D6588]">
                  <button className="hover:bg-[#000] text-base px-4 py-2 rounded-full focus:bg-black focus:text-white">
                    All Assets
                  </button>
                  <button className="hover:bg-[#000] text-base px-4 py-2 rounded-full focus:bg-black focus:text-white">
                    Gainers
                  </button>
                  <button className="hover:bg-[#000] text-base px-4 py-2 rounded-full focus:bg-black focus:text-white">
                    Lasers
                  </button>
                  <button className="hover:bg-[#000] text-base px-4 py-2 rounded-full focus:bg-black focus:text-white">
                    Tradeble
                  </button>
                </div>
              </div>
              <table className="flex flex-col w-full h-[779px]">
                <thead className="flex flex-col w-full">
                  <tr className="flex flex-row w-full justify-between h-20 border-b-2 py-7 text-[#5D6588]">
                    <td className="w-1/4">Asserts</td>
                    <td className="w-1/6">Last Price</td>
                    <td className="w-1/6">Martket cap</td>
                    <td className="w-1/10">Change</td>
                    <td className="w-1/5">Chart</td>
                    <td className="w-1/10">Trade</td>
                  </tr>
                </thead>
                <tbody className="flex flex-col w-full overflow-auto">
                  {data.map((item, index) => (
                    <tr key={index} className="flex flex-row w-full justify-between items-center h-20 py-7">
                      <td className="flex flex-row py-2 w-1/4">
                        <div className="pr-4">
                          <img src={item.icon} />
                        </div>
                        <div className="pr-9">{item.type}</div>
                        <div className="text-[#A5ADCF]">{item.name}</div>
                      </td>
                      <td className="w-1/6">
                        <div className="w-full">{item.price}</div>
                      </td>
                      <td className="w-1/6">
                        <div className="w-full">{item.price}</div>
                      </td>
                      <td className="w-1/10">
                        <div className="w-full">{item.change}</div>
                      </td>
                      <td className="w-1/5">
                        <img src={item.graph} />
                      </td>
                      <td className="w-1/10">
                        <button className="rounded-full border-2 border-[#246CF9] px-4 py-2">
                          Buy
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
    </div>
  );
};

export default Market;

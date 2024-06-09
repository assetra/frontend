"use client";
import React, { useContext, useEffect } from "react";
import localFont from "next/font/local";
import Card from "./card";
import { AuthContext } from "@/context/AddContext";
import Image from "next/image";

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
    <div className="flex w-[100svw] h-[100svh] bg-[#000] px-11 pt-16">
      <div className="flex w-full h-full">
        <div className="flex h-full w-1/4 pr-3">
          <div className="flex flex-col w-full h-full text-white">
            <div className="flex flex-col pt-12 pb-2">
              <div className="text-base pb-2 text-[#A5ADCF]">
                In the past 24 hours
              </div>
              <div>
                <h1 className="text-xl font-semibold">
                  Market is up <span className="text-[#11CABE]">6.73%</span>
                </h1>
              </div>
            </div>
            <div className="flex flex-col w-full overflow-y-auto">
              {symbols.map((symbol, index) => (
                <div key={index} className="w-full py-4 pr-6">
                  <Card cryptoPair={symbol} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex h-full w-3/4 pl-3 pt-12 pb-4">
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
                    Tradeable
                  </button>
                </div>
              </div>
              <div className="overflow-y-auto h-full mt-6">
                <table className="table table-pin-rows">
                  <thead>
                    <tr className="bg-[#1E1F25] border-[#5D6588] text-[#5D6588] text-[14px]">
                      <th>Asserts</th>
                      <th></th>
                      <th>Last Price</th>
                      <th>Market cap</th>
                      <th>Change</th>
                      <th>Chart</th>
                      <th>Trade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index} className="hover">
                        <td className="flex gap-3 mt-2">
                          <Image
                            width={18}
                            height={18}
                            src={item.icon}
                            alt="img"
                          />
                          <div>{item.type}</div>
                        </td>
                        <td>
                          <div className="text-[#A5ADCF]">{item.name}</div>
                        </td>
                        <td>
                          <div>{item.price}</div>
                        </td>
                        <td>
                          <div>{item.price}</div>
                        </td>
                        <td>
                          <div>{item.change}</div>
                        </td>
                        <td>
                          <img src={item.graph} />
                        </td>
                        <td>
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
    </div>
  );
};

export default Market;

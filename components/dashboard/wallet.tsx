"use client";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import withAuth from "../auth/withAuth";
import PriceWidget from "@/components/forum/priceWidget";

const Wallet = () => {
  const data = [
    {
      icon: "/images/market-icon/BTC.png",
      type: "BTC",
      name: "Bitcoin",
      price: "USD 53,260,20",
      change: 0.25,
      graph: "/images/market-graph/BTC.png",
    },
    {
      icon: "/images/market-icon/ETH.png",
      type: "ETH",
      name: "Ethereum",
      price: "USD 53,260,20",
      change: -4.51,
      graph: "/images/market-graph/ETH.png",
    },
    {
      icon: "/images/market-icon/BTC.png",
      type: "BTC",
      name: "Bitcoin",
      price: "USD 53,260,20",
      change: 0.25,
      graph: "/images/market-graph/BTC.png",
    },
    {
      icon: "/images/market-icon/ETH.png",
      type: "ETH",
      name: "Ethereum",
      price: "USD 53,260,20",
      change: -4.51,
      graph: "/images/market-graph/ETH.png",
    },
    {
      icon: "/images/market-icon/BTC.png",
      type: "BTC",
      name: "Bitcoin",
      price: "USD 53,260,20",
      change: 0.25,
      graph: "/images/market-graph/BTC.png",
    },
    {
      icon: "/images/market-icon/ETH.png",
      type: "ETH",
      name: "Ethereum",
      price: "USD 53,260,20",
      change: -4.51,
      graph: "/images/market-graph/ETH.png",
    },
    {
      icon: "/images/market-icon/BTC.png",
      type: "BTC",
      name: "Bitcoin",
      price: "USD 53,260,20",
      change: 0.25,
      graph: "/images/market-graph/BTC.png",
    },
    {
      icon: "/images/market-icon/ETH.png",
      type: "ETH",
      name: "Ethereum",
      price: "USD 53,260,20",
      change: -4.51,
      graph: "/images/market-graph/ETH.png",
    },
    {
      icon: "/images/market-icon/BTC.png",
      type: "BTC",
      name: "Bitcoin",
      price: "USD 53,260,20",
      change: 0.25,
      graph: "/images/market-graph/BTC.png",
    },
    {
      icon: "/images/market-icon/ETH.png",
      type: "ETH",
      name: "Ethereum",
      price: "USD 53,260,20",
      change: -4.51,
      graph: "/images/market-graph/ETH.png",
    },
    {
      icon: "/images/market-icon/BTC.png",
      type: "BTC",
      name: "Bitcoin",
      price: "USD 53,260,20",
      change: 0.25,
      graph: "/images/market-graph/BTC.png",
    },
    {
      icon: "/images/market-icon/ETH.png",
      type: "ETH",
      name: "Ethereum",
      price: "USD 53,260,20",
      change: -4.51,
      graph: "/images/market-graph/ETH.png",
    },
    {
      icon: "/images/market-icon/BTC.png",
      type: "BTC",
      name: "Bitcoin",
      price: "USD 53,260,20",
      change: 0.25,
      graph: "/images/market-graph/BTC.png",
    },
    {
      icon: "/images/market-icon/ETH.png",
      type: "ETH",
      name: "Ethereum",
      price: "USD 53,260,20",
      change: -4.51,
      graph: "/images/market-graph/ETH.png",
    },
  ];

  const summary = [
    {
      type: "BTC",
      description: "Total Balance",
      price: 0.2133214214,
      usd: 3230.98,
      change: -0.25,
    },
  ];

  const [selectedSummary, setSummary] = useState(summary[0]);

  return (
    <div className="flex flex-row w-[100svw] h-[100svh] bg-[#000] px-11 pt-16 overflow-hidden">
      <div className="flex flex-col w-1/4 h-full pr-7 mt-[-1.5rem]">
        <PriceWidget />
      </div>
      <div className="flex flex-col w-full h-full pb-8 pt-2">
        <div className="flex flex-row w-full h-[40%] sm:h-1/3  bg-[#1E1F25] rounded-xl mb-4 px-8 py-4">
          <div className="flex flex-col justify-between w-2/5 h-full border-r-[1px] border-[#34384C]">
            <div className="flex flex-row items-center mb-4">
              <Image
                width={25}
                height={25}
                src="/images/wallet-icon/Bitcoin.png"
                alt="img"
              />
              <div className="text-white mx-3">{selectedSummary.type}</div>
            </div>
            <div className="text-[#5D6588] text-[14px]">
              {selectedSummary.description}
            </div>
            <div className="text-white text-[25px]">
              {selectedSummary.price}
            </div>
            <div className="text-[#A5ADCF] text-[20px] mb-3">{`${selectedSummary.usd} USD`}</div>
            <div className="flex flex-row text-white text-[14px]">
              <button className="bg-[#246CF9] rounded-full border-2 py-2 px-4 mr-2">
                Withdraw
              </button>
              <button className="rounded-full border-2 py-2 px-4">
                Deposit
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full h-full pl-[68px]">
            <div className="flex flex-col w-full h-1/2 pl-8 mb-2">
              <div className="flex flex-row justify-between w-full h-full">
                <div className="flex flex-col w-1/3 h-full">
                  <div className="text-[#5D6588] text-[12px]">
                    Exchange Balance
                  </div>
                  <div className="text-white text-[20px]">0.213435345</div>
                  <div className="text-[#11CABE] text-[16px]">3,897.98 USD</div>
                </div>
                <div className="flex flex-col justify-end w-1/3 h-full">
                  <img
                    className="flex w-full h-full"
                    src="/images/wallet-icon/graph-top.png"
                  />
                  <div className="flex justify-end">+0.55%</div>
                </div>
              </div>
              <div className="flex w-full h-[8px]">
                <img
                  className="w-full h-full"
                  src="/images/wallet-icon/slide-bar.jpg"
                />
              </div>
            </div>
            <div className="flex flex-col w-full h-1/2 pl-8 mt-2">
              <div className="flex flex-row justify-between w-full h-full">
                <div className="flex flex-col w-1/3 h-full">
                  <div className="text-[#5D6588] text-[12px]">
                    Assets Balance
                  </div>
                  <div className="text-white text-[20px]">0.213435345</div>
                  <div className="text-[#11CABE] text-[16px]">3,897.98 USD</div>
                </div>
                <div className="flex flex-col justify-end w-1/3 h-full">
                  <img
                    className="flex w-full h-full"
                    src="/images/wallet-icon/graph-top.png"
                  />
                  <div className="flex justify-end">+0.55%</div>
                </div>
              </div>
              <div className="flex w-full h-[6px]">
                <img
                  className="w-full h-full"
                  src="/images/wallet-icon/slide-bar.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full h-[60%] sm:h-2/3 rounded-xl bg-[#1E1F25] p-6">
          <table className="w-full flex flex-col h-full text-white">
            <thead className="flex flex-col w-full">
              <tr className="flex flex-row w-full justify-between pb-6 border-b-2 text-[#5D6588] pr-6">
                <td className="w-[20%]">Assets</td>
                <td className="w-[16%]">On Orders</td>
                <td className="w-[16%]">Available Balance</td>
                <td className="w-[16%]">Total Balance</td>
                <td className="w-1/10">24h Market</td>
              </tr>
            </thead>
            <tbody className="flex flex-col w-full overflow-y-auto pr-16 mt-3">
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="flex flex-row w-full justify-between items-center h-12 py-4"
                >
                  <td className="flex flex-row py-2 w-[20%]">
                    <div className="pr-4">
                      <img src={item.icon} />
                    </div>
                    <div className="pr-9">{item.type}</div>
                    <div>{item.name}</div>
                  </td>
                  <td className="w-[16%]">
                    <div className="w-full">{item.price}</div>
                  </td>
                  <td className="w-[16%]">
                    <div className="w-full">{item.price}</div>
                  </td>
                  <td className="w-[16%]">
                    <div className="w-full">{item.price}</div>
                  </td>
                  <td className="w-1/10">
                    <div
                      className={`${
                        item.change > 0 ? "text-[#30E0A1]" : "text-[#FA2256]"
                      } w-full`}
                    >
                      {Math.abs(item.change) + "%"}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Wallet);

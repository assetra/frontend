"use client";

import React, { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import { AdvancedChart } from "react-tradingview-embed";
import { BiChevronDown } from "react-icons/bi";
import { RiArrowUpFill } from "react-icons/ri";

import Exchange1 from "@/components/dashboard/exchange1";
import { AuthContext } from "@/context/AddContext";

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

const ExchangePage = () => {
  const appContext = useContext(AuthContext);
  const width = window.innerWidth;

  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    appContext.setNavbarState(1);
    appContext.setDashboardState(4);
    setTimeout(() => {
      if (overlayRef.current) overlayRef.current.style.display = "none";
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full px-11 pb-5 bg-black">
      <div className="flex flex-col w-full lg:w-3/5 xl:w-3/4 h-full mr-6">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-5 w-full mb-4">
          <div className="flex flex-row items-center mr-4 p-3 rounded-xl bg-[#1E1F25] h-[100px] w-full">
            <div className="flex flex-row justify-between items-center w-full p-6 ">
              <div>
                <Image src="/images/bitcoin-icon-large.png" alt="bitcoin" width={32} height={32} priority />
              </div>
              <div className="flex flex-col w-full h-full ml-4">
                <div className="flex flex-row justify-between items-center w-full ">
                  <div className="flex items-center text-base text-[#5D6588]">Bitcoin</div>
                  <BiChevronDown size={24} color="white" />
                </div>
                <div className="flex text-[#FFFFFF] text-[20px]">BTC/USD</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center w-full  mr-4 p-4 rounded-xl bg-[#1E1F25]  h-[100px]">
            <div className="flex flex-row items-center p-2 w-full h-full">
              <div className="flex flex-col items-center  ">
                <div className="flex w-full  items-center text-[16px] text-[#5D6588]">24h Change</div>
                <div className="flex flex-row items-center w-full ">
                  <div className="mr-2">
                    <RiArrowUpFill size={24} color="#11CABE" />
                  </div>
                  <div className="text-[#11CABE] text-[20px]">0.53%</div>
                </div>
              </div>
              <div className="flex items-center w-2/5 h-full">
                <div>
                  <Image src="/images/exchange-graph.png" alt="Graph" width={84} height={28} priority />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full  mr-4 p-4 rounded-xl bg-[#1E1F25]  h-[100px]">
            <div className="flex flex-col items-center p-3 w-full h-full">
              <div className="flex w-full h-1/2 items-center text-[16px] text-[#5D6588]">Last Price</div>
              <div className="flex w-full h-1/2 items-center text-[20px] text-white">18372.595198 USD</div>
            </div>
          </div>
          <div className="flex items-center w-full p-4 rounded-xl bg-[#1E1F25]  h-[100px]">
            <div className="flex flex-col items-center p-3 w-full h-full">
              <div className="flex w-full h-1/2 items-center text-[16px] text-[#5D6588]">24h Low</div>
              <div className="flex w-full h-1/2 items-center text-[20px] text-white">18372.595198 USD</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-4 p-4 rounded-xl bg-[#1E1F25]">
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-row gap-x-4 flex-wrap">
              <div className="flex items-center text-[25px]/[30px] text-white font-bold">BTC&#47;USD</div>
              <div className="flex gap-x-2 xl:gap-x-4">
                <div className="flex flex-row items-center mr-4">
                  <div className="text-[14px] text-[#5D6588] mr-1">Open:</div>
                  <div className="text-[14px] text-[#11CABE]">18432.320</div>
                </div>
                <div className="flex flex-row items-center mr-4">
                  <div className="text-[14px] text-[#5D6588] mr-1">Open:</div>
                  <div className="text-[14px] text-[#11CABE]">18432.320</div>
                </div>
                <div className="flex flex-row items-center mr-4">
                  <div className="text-[14px] text-[#5D6588] mr-1">Open:</div>
                  <div className="text-[14px] text-[#11CABE]">18432.320</div>
                </div>
                <div className="flex flex-row items-center mr-4">
                  <div className="text-[14px] text-[#5D6588] mr-1">Open:</div>
                  <div className="text-[14px] text-[#11CABE]">18432.320</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end items-center gap-x-4">
              <select
                name=""
                id=""
                className="border border-white py-2 px-4 rounded-[50px] text-base bg-transparent text-whit  text-white"
              >
                <option value="">Price</option>
                <option value="">Price</option>
                <option value="">Price</option>
                <option value="">Price</option>
                <option value="">Price</option>
              </select>
              <select
                name=""
                id=""
                className="border border-white py-2 px-4 rounded-[50px] text-base bg-transparent text-white"
              >
                <option value="">1 min</option>
                <option value="">1 min</option>
                <option value="">Price</option>
                <option value="">Price</option>
                <option value="">Price</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full  pt-[1px]">
            <div className="h-full relative">
              <AdvancedChart
                widgetProps={{
                  width: width > 1280 ? "68vw" : width > 1024 ? "52vw" : "86vw",
                  height: "478px",
                  theme: "dark",
                }}
              />
              <div
                ref={overlayRef}
                className={`text-white  ${
                  width > 1280 ? "w-[68vw]" : width > 1024 ? "w-[52vw]" : "w-[86vw]"
                } bg-[#131722] flex items-center justify-center h-[478px] absolute top-0 left-0`}
              >
                Loading...
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full bg-[#1E1F25] rounded-xl h-[350px] mb-5">
          <div className="flex w-full  p-4">
            <table className="w-full flex flex-col  text-white ">
              <thead className="flex flex-col w-full ">
                <tr className="flex flex-row w-full justify-between">
                  <td>
                    <div className="">Market Trades</div>
                  </td>
                  <td>
                    <div className="flex flex-row">
                      <button className="flex items-center rounded-full mr-4 px-4 py-2 focus:bg-black focus:text-white text-[#5D6588]">
                        <div>Open Orders</div>
                      </button>
                      <button className="flex items-center rounded-full mr-4 px-4 py-2 focus:bg-black focus:text-white text-[#5D6588]">
                        <div>Order History</div>
                      </button>
                      <button className="flex items-center rounded-full mr-4 px-4 py-2 focus:bg-black focus:text-white text-[#5D6588]">
                        <div>Order Book</div>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="flex flex-row w-full justify-between  border-b-2 mt-2">
                  <td className="w-1/4 text-[#5D6588]">Time</td>
                  <td className="w-1/4 text-[#5D6588]">Price(ETH)</td>
                  <td className="w-1/4 text-[#5D6588]">Amount(BTC)</td>
                  <td className="w-1/4 text-[#5D6588]">Total(ETH)</td>
                </tr>
              </thead>
              <tbody className="flex flex-col w-full  overflow-y-auto h-[30%] text-sm xl:text-base">
                {data.map((item) => (
                  <tr key={item.change} className="flex flex-row w-full justify-between items-center h-15 py-2">
                    <td className="flex flex-row py-2 w-1/4">
                      <div className="w-full">{item.time}</div>
                    </td>
                    <td className="w-1/4">
                      <div className="w-full">
                        <div className={`${item.change > 0 ? "text-[#30E0A1]" : "text-[#FA2256]"} w-full`}>
                          {Math.abs(item.price)}
                        </div>
                      </div>
                    </td>
                    <td className="w-1/4">
                      <p className="w-full">{item.amount}</p>
                    </td>
                    <td className="w-1/4">
                      <p className="w-full">{item.total}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-2/5 xl:w-1/4">
        <div className="flex w-full mb-6 rounded-xl bg-[#1E1F25]">
          <div className="flex flex-col jusitfy-between px-6 py-4 w-full h-full">
            <div className="flex flex-row justify-between items-center w-full h-[15%] mb-4">
              <div className="text-white">Bitcoin</div>
              <Image src="/images/bitcoin-icon-big.png" alt="bitcoin" width={32} height={32} />
            </div>
            <div className="flex flex-col mb-4">
              <div className="text-[#5D6588] text-base h-full">Current Balance</div>
              <div className="flex flex-row justify-between items-center text-white h-full border-b-2 border-[#34384C]">
                <div>4,000</div>
                <div>BTC</div>
              </div>
            </div>
            <div className="flex flex-col mb-8">
              <div className="flex flex-row justify-between h-full py-4">
                <div className="text-[#5D6588]">Volume (24h)</div>
                <div className="text-[#11CABE]">2.36%</div>
              </div>
              <div className="flex flex-row justify-between text-white h-full border-b-2  border-[#34384C]">
                <div>4,000</div>
                <div>USD</div>
              </div>
            </div>
            <div className="flex flex-col mb-8">
              <div className="text-[#5D6588] h-full py-4">Payment Method</div>
              <button className="flex flex-row justify-between items-center px-6 py-3 mb-4 rounded-full bg-[#34384C] text-white h-full">
                <div className="flex flex-row h-full items-center">
                  <Image className="mr-2" src="/images/money-icon.png" width={24} height={24} alt="logo" />
                  <div>Paywallet</div>
                </div>
                <BiChevronDown color="white" size={24} />
              </button>
            </div>
            <div className="flex flex-row justify-between">
              <button className="text-[#11CABE] text-center py-4 w-[128px] rounded-full border-2 border-[#11CABE] text-base">
                Buy
              </button>
              <button className="text-[#FA2256] w-[128px] py-4 text-center rounded-full border-2 border-[#FA2256] text-base">
                Sell
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full rounded-xl bg-[#1E1F25]">
          <Exchange1 />
        </div>
      </div>
    </div>
  );
};

export default ExchangePage;

"use client";

import React, { useContext, useEffect } from "react";
import localFont from "next/font/local";
import { AuthContext } from "@/context/AddContext";

const microsoft = localFont({ src: "../../public/fonts/chinese.msyh.ttf" });
const sofia = localFont({ src: "../../public/fonts/Sofia Pro Regular.ttf" });
const graphik = localFont({ src: "../../public/fonts/GraphikRegular.otf" });

const DashboardHome = () => {
  const appContext = useContext(AuthContext);
  useEffect(() => {
    appContext.setNavbarState(true);
  }, []);

  return (
    <div className="flex flex-col bg-black px-12 py-5 gap-7">
      <div className="flex flex-row gap-11 h-67">
        <div className="flex flex-row bg-gtxBack basis-2/3 rounded-xl p-6">
          <div className="flex flex-col items-center justify-between w-full pr-12 basis-5/12 border-r-gtxBackLight border-r">
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-row justify-between items-center w-full">
                <div className="text-white text-xl font-bold">Balance</div>
                <div className="flex flex-row gap-0">
                  <img src="/images/arrow-up-green.png" alt="arrow-up-green" />
                  <div className="text-gtxGreen text-base font-bold">2.36%</div>
                </div>
              </div>
              <div className="flex text-white text-4xl justify-start font-bold w-full mt-6">
                USD 12.243,55
              </div>
            </div>
            <div className="flex flex-row gap-0 w-full mt-12">
              <div className="flex flex-col pr-8 basis-1/2 gap-4 border-r-gtxBackLight border-r">
                <div className="flex flex-row items-center justify-start gap-4 w-full">
                  <div className="flex justify-center items-center rounded-full size-6 bg-gtxBackLight">
                    <img
                      src="/images/arrow-down-green.png"
                      alt="arrow-down-green"
                    />
                  </div>
                  <div className="text-gtxTextLight text-base">Income</div>
                </div>
                <div className="text-white w-full text-xl font-bold">
                  USD 12.243,55
                </div>
              </div>
              <div className="flex flex-col pl-8 basis-1/2 gap-4">
                <div className="flex flex-row items-center justify-start gap-4 w-full">
                  <div className="flex justify-center items-center rounded-full size-6 bg-gtxBackLight">
                    <img src="/images/arrow-up-red.png" alt="arrow-up-red" />
                  </div>
                  <div className="text-gtxTextLight text-base">Expenses</div>
                </div>
                <div className="text-white w-full text-xl font-bold">
                  USD 3.132,23
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full pl-12 basis-7/12">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="text-white text-xl font-bold">Wallet</div>
              <div className="text-gtxTextLight text-base font-normal pr-2">
                3 Currencies
              </div>
            </div>
            <div className="flex flex-flow justify-between w-full">
              <div className="flex justify-center items-center w-1/4 relative">
                <div className="flex flex-row justify-center w-full">
                  <img src="/images/arrow-up-green.png" alt="arrow-up-green" />
                  <div className="text-white text-xl font-bold">2.31%</div>
                </div>
                <img
                  className="absolute object-scale-down"
                  src="/images/pie-chart.png"
                  alt="pie-chart"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-2">
                  <img
                    className="size-5"
                    src="/images/bitcoin-icon.png"
                    alt="bitcoin-icon"
                  />
                  <div className="flex flex-col gap-0 justify-start w-20">
                    <div className="text-white font-bold text-base">BTC</div>
                    <div className="text-gtxText font-normal text-base">
                      Bitcoin
                    </div>
                  </div>
                  <div className="flex flex-row gap-1 items-start">
                    <img
                      src="/images/arrow-up-green.png"
                      alt="arrow-up-green"
                    />
                    <div className="text-gtxGreen text-base font-bold">
                      2.36%
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <img
                    className="size-5"
                    src="/images/eth-icon.png"
                    alt="eth-icon"
                  />
                  <div className="flex flex-col gap-0 justify-start w-20">
                    <div className="text-white font-bold text-base">ETH</div>
                    <div className="text-gtxText font-normal text-base">
                      Ehtereum
                    </div>
                  </div>
                  <div className="flex flex-row gap-1 items-start">
                    <img
                      src="/images/arrow-up-green.png"
                      alt="arrow-up-green"
                    />
                    <div className="text-gtxGreen text-base font-bold">
                      1.80%
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <img
                    className="size-5"
                    src="/images/bitcoin-icon.png"
                    alt="bitcoin-icon"
                  />
                  <div className="flex flex-col gap-0 justify-start w-20">
                    <div className="text-white font-bold text-base">USDT</div>
                    <div className="text-gtxText font-normal text-base">
                      Tether
                    </div>
                  </div>
                  <div className="flex flex-row gap-1 items-start">
                    <img
                      src="/images/arrow-up-green.png"
                      alt="arrow-up-green"
                    />
                    <div className="text-gtxGreen text-base font-bold">
                      1.64%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gtxBack basis-1/3 rounded-xl px-6 pt-6 pb-1 relative">
          <img
            className="absolute bottom-1 left-0 w-svw"
            src="/images/transparency.png"
            alt="transparency"
          />
          <div className="flex flex-row justify-between items-start px-4">
            <div className="text-white text-xl font-bold">Transaction</div>
            <div className="flex justify-between items-center text-white text-base border-white border rounded-full w-20 h-10 px-4 py-2 cursor-pointer">
              All
              <img src="/images/arrow-down-white.png" alt="arrow-down-white" />
            </div>
          </div>
          <div className="flex flex-col gap-6 mt-3 overflow-auto px-4">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <img
                  className="size-8 mr-4"
                  src="/images/bitcoin-icon-big.png"
                  alt="bitcoin-icon-big"
                />
                <div className="text-white text-base font-normal">BTC</div>
              </div>
              <div className="flex flex-row w-32 gap-2 justify-end items-center">
                <div className="text-gtxText text-base font-normal mr-">
                  Receive
                </div>
                <img
                  className="size-6"
                  src="/images/arrow-down-green-big.png"
                  alt="arrow-down-green-big"
                />
              </div>
              <div className="text-white text-base font-bold w-32 flex justify-end items-center">
                $0.143,21
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <img
                  className="size-8 mr-4"
                  src="/images/eth-icon-big.png"
                  alt="bitcoin-icon-big"
                />
                <div className="text-white text-base font-normal">ETH</div>
              </div>
              <div className="flex flex-row w-32 gap-2 justify-end items-center">
                <div className="text-gtxText text-base font-normal mr-">
                  Send
                </div>
                <img
                  className="size-6"
                  src="/images/arrow-up-red-big.png"
                  alt="arrow-down-green-big"
                />
              </div>
              <div className="text-white text-base font-bold w-32 flex justify-end items-center">
                $0.34,223
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <img
                  className="size-8 mr-4"
                  src="/images/bitcoin-icon-big.png"
                  alt="bitcoin-icon-big"
                />
                <div className="text-white text-base font-normal">BTC</div>
              </div>
              <div className="flex flex-row w-32 gap-2 justify-end items-center">
                <div className="text-gtxText text-base font-normal mr-">
                  Receive
                </div>
                <img
                  className="size-6"
                  src="/images/arrow-down-green-big.png"
                  alt="arrow-down-green-big"
                />
              </div>
              <div className="text-white text-base font-bold w-32 flex justify-end items-center">
                $0.143,21
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <img
                  className="size-8 mr-4"
                  src="/images/bitcoin-icon-big.png"
                  alt="bitcoin-icon-big"
                />
                <div className="text-white text-base font-normal">BTC</div>
              </div>
              <div className="flex flex-row w-32 gap-2 justify-end items-center">
                <div className="text-gtxText text-base font-normal mr-">
                  Receive
                </div>
                <img
                  className="size-6"
                  src="/images/arrow-down-green-big.png"
                  alt="arrow-down-green-big"
                />
              </div>
              <div className="text-white text-base font-bold w-32 flex justify-end items-center">
                $0.143,21
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <img
                  className="size-8 mr-4"
                  src="/images/eth-icon-big.png"
                  alt="bitcoin-icon-big"
                />
                <div className="text-white text-base font-normal">ETH</div>
              </div>
              <div className="flex flex-row w-32 gap-2 justify-end items-center">
                <div className="text-gtxText text-base font-normal mr-">
                  Send
                </div>
                <img
                  className="size-6"
                  src="/images/arrow-up-red-big.png"
                  alt="arrow-down-green-big"
                />
              </div>
              <div className="text-white text-base font-bold w-32 flex justify-end items-center">
                $0.34,223
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <img
                  className="size-8 mr-4"
                  src="/images/bitcoin-icon-big.png"
                  alt="bitcoin-icon-big"
                />
                <div className="text-white text-base font-normal">BTC</div>
              </div>
              <div className="flex flex-row w-32 gap-2 justify-end items-center">
                <div className="text-gtxText text-base font-normal mr-">
                  Receive
                </div>
                <img
                  className="size-6"
                  src="/images/arrow-down-green-big.png"
                  alt="arrow-down-green-big"
                />
              </div>
              <div className="text-white text-base font-bold w-32 flex justify-end items-center">
                $0.143,21
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <img
                  className="size-8 mr-4"
                  src="/images/bitcoin-icon-big.png"
                  alt="bitcoin-icon-big"
                />
                <div className="text-white text-base font-normal">BTC</div>
              </div>
              <div className="flex flex-row w-32 gap-2 justify-end items-center">
                <div className="text-gtxText text-base font-normal mr-">
                  Receive
                </div>
                <img
                  className="size-6"
                  src="/images/arrow-down-green-big.png"
                  alt="arrow-down-green-big"
                />
              </div>
              <div className="text-white text-base font-bold w-32 flex justify-end items-center">
                $0.143,21
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <img
                  className="size-8 mr-4"
                  src="/images/eth-icon-big.png"
                  alt="bitcoin-icon-big"
                />
                <div className="text-white text-base font-normal">ETH</div>
              </div>
              <div className="flex flex-row w-32 gap-2 justify-end items-center">
                <div className="text-gtxText text-base font-normal mr-">
                  Send
                </div>
                <img
                  className="size-6"
                  src="/images/arrow-up-red-big.png"
                  alt="arrow-down-green-big"
                />
              </div>
              <div className="text-white text-base font-bold w-32 flex justify-end items-center">
                $0.34,223
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <img
                  className="size-8 mr-4"
                  src="/images/bitcoin-icon-big.png"
                  alt="bitcoin-icon-big"
                />
                <div className="text-white text-base font-normal">BTC</div>
              </div>
              <div className="flex flex-row w-32 gap-2 justify-end items-center">
                <div className="text-gtxText text-base font-normal mr-">
                  Receive
                </div>
                <img
                  className="size-6"
                  src="/images/arrow-down-green-big.png"
                  alt="arrow-down-green-big"
                />
              </div>
              <div className="text-white text-base font-bold w-32 flex justify-end items-center">
                $0.143,21
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <img
                  className="size-8 mr-4"
                  src="/images/bitcoin-icon-big.png"
                  alt="bitcoin-icon-big"
                />
                <div className="text-white text-base font-normal">BTC</div>
              </div>
              <div className="flex flex-row w-32 gap-2 justify-end items-center">
                <div className="text-gtxText text-base font-normal mr-">
                  Receive
                </div>
                <img
                  className="size-6"
                  src="/images/arrow-down-green-big.png"
                  alt="arrow-down-green-big"
                />
              </div>
              <div className="text-white text-base font-bold w-32 flex justify-end items-center">
                $0.143,21
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <img
                  className="size-8 mr-4"
                  src="/images/eth-icon-big.png"
                  alt="bitcoin-icon-big"
                />
                <div className="text-white text-base font-normal">ETH</div>
              </div>
              <div className="flex flex-row w-32 gap-2 justify-end items-center">
                <div className="text-gtxText text-base font-normal mr-">
                  Send
                </div>
                <img
                  className="size-6"
                  src="/images/arrow-up-red-big.png"
                  alt="arrow-down-green-big"
                />
              </div>
              <div className="text-white text-base font-bold w-32 flex justify-end items-center">
                $0.34,223
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <img
                  className="size-8 mr-4"
                  src="/images/bitcoin-icon-big.png"
                  alt="bitcoin-icon-big"
                />
                <div className="text-white text-base font-normal">BTC</div>
              </div>
              <div className="flex flex-row w-32 gap-2 justify-end items-center">
                <div className="text-gtxText text-base font-normal mr-">
                  Receive
                </div>
                <img
                  className="size-6"
                  src="/images/arrow-down-green-big.png"
                  alt="arrow-down-green-big"
                />
              </div>
              <div className="text-white text-base font-bold w-32 flex justify-end items-center">
                $0.143,21
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-7 h-110">
        <div className="flex flex-col justify-between bg-gtxBack basis-1/4 rounded-xl p-6">
          <div className="flex flex-row justify-between">
            <div className={`text-white text-xl font-bold ${sofia.className}`}>
              Exchange
            </div>
            <img
              className="cursor-pointer"
              src="/images/refresh-icon.png"
              alt="refresh-icon"
            />
          </div>
          <div
            className={`flex flex-row justify-between mt-6 ${graphik.className}`}
          >
            <div className="flex flex-row gap-2 items-center">
              <div className="text-white text-xl font-semibold">1</div>
              <div className="text-gtxTextLight text-base">BTC</div>
            </div>
            <img src="/images/arrow-right.png" alt="arrow-right" />
            <div className="flex flex-row gap-4 items-center">
              <div className="text-white text-xl font-semibold">53,260.20</div>
              <div className="text-gtxTextLight text-base">USD</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <div className={`flex flex-col gap-2 ${graphik.className}`}>
              <div className="flex justify-start text-gtxText text-base">
                Get
              </div>
              <div className="flex flex-row justify-center items-center rounded-full w-full border border-gtxBackLight bg-search px-8 py-4">
                <div className="flex justify-start basis-2/3 text-lg text-white pr-4 border-r border-r-gtxBackLight">
                  5000
                </div>
                <div className="flex flex-row justify-between items-center gap-2 pl-4">
                  <img src="/images/money-icon.png" alt="money-icon" />
                  <img
                    className="cursor-pointer"
                    src="/images/arrow-down-medium.png"
                    alt="arrow-down-medium"
                  />
                </div>
              </div>
            </div>
            <div className={`flex flex-col gap-2 ${graphik.className}`}>
              <div className="flex justify-start text-gtxText text-base">
                Pay
              </div>
              <div className="flex flex-row justify-center items-center rounded-full w-full border border-gtxBackLight bg-search px-8 py-4">
                <div className="flex justify-start basis-2/3 text-lg text-white pr-4 border-r border-r-gtxBackLight">
                  0.8511
                </div>
                <div className="flex flex-row justify-between items-center gap-2 pl-4">
                  <img
                    src="/images/bitcoin-icon-medium.png"
                    alt="money-icon-medium"
                  />
                  <img
                    className="cursor-pointer"
                    src="/images/arrow-down-medium.png"
                    alt="arrow-down-medium"
                  />
                </div>
              </div>
            </div>
            <div
              className={`flex justify-center items-center rounded-full cursor-pointer w-full text-white font-semibold bg-black px-8 py-5 ${sofia.className}`}
            >
              Exchange
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gtxBack basis-3/4 rounded-xl p-6">
          <div
            className={`flex flex-row justify-between items-center ${sofia.className}`}
          >
            <div className="text-white text-xl font-bold">Overall Growth</div>
            <div className="flex flex-row gap-4">
              <button className="text-base font-semibold cursor-pointer px-4 py-2 rounded-full text-gtxText focus:bg-black focus:text-white">
                1 min
              </button>
              <button className="text-base font-semibold cursor-pointer px-4 py-2 rounded-full text-gtxText focus:bg-black focus:text-white">
                3 min
              </button>
              <button className="text-base font-semibold cursor-pointer px-4 py-2 rounded-full text-gtxText focus:bg-black focus:text-white">
                30 min
              </button>
              <button className="text-base font-semibold cursor-pointer px-4 py-2 rounded-full text-gtxText focus:bg-black focus:text-white">
                1 hour
              </button>
              <button className="text-base font-semibold cursor-pointer px-4 py-2 rounded-full text-gtxText focus:bg-black focus:text-white">
                24 hour
              </button>
              <button className="text-base font-semibold cursor-pointer px-4 py-2 rounded-full text-gtxText focus:bg-black focus:text-white">
                1 day
              </button>
              <button className="text-base font-semibold cursor-pointer px-4 py-2 rounded-full text-gtxText focus:bg-black focus:text-white">
                1 week
              </button>
            </div>
          </div>
          <img className="w-full h-5/6" src="/images/graph.png" alt="graph" />
        </div>
      </div>
      <div
        className={`flex flex-row justify-between gap-6 h-45 ${graphik.className}`}
      >
        <div className="flex flex-col bg-gtxBack rounded-xl p-6 w-128 justify-between">
          <div className="flex flex-row justify-between items-start">
            <div className="flex flex-col gap-6 justify-start">
              <img
                className="size-11"
                src="/images/bitcoin-icon-large.png"
                alt="bitcoin-icon-large"
              />
              <div className="text-base text-gtxTextLight font-normal">
                Bitcoin
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-start">
              <img src="/images/graph-green.png" alt="graph-green" />
              <div className="flex flex-row justify-end items-center">
                <img src="/images/arrow-up-green.png" alt="arrow-up-green" />
                <div className="flex text-base font-semibold text-gtxGreen">
                  2.11%
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-2xl text-white font-semibold">
              USD 53,260.20
            </div>
            <div className="flex items-end text-base text-gtxText">BTC</div>
          </div>
        </div>
        <div className="flex flex-col bg-gtxBack rounded-xl p-6 w-128 justify-between">
          <div className="flex flex-row justify-between items-start">
            <div className="flex flex-col gap-6 justify-start">
              <img
                className="size-11"
                src="/images/eth-icon-large.png"
                alt="eth-icon-large"
              />
              <div className="text-base text-gtxTextLight font-normal">
                Ethereum
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-start">
              <img src="/images/graph-red.png" alt="graph-green" />
              <div className="flex flex-row justify-end items-center">
                <img src="/images/arrow-down-red.png" alt="arrow-down-red" />
                <div className="flex text-base font-semibold text-gtxRed">
                  1.53%
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-2xl text-white font-semibold">
              USD 53,260.20
            </div>
            <div className="flex items-end text-base text-gtxText">ETH</div>
          </div>
        </div>
        <div className="flex flex-col bg-gtxBack rounded-xl p-6 w-128 justify-between">
          <div className="flex flex-row justify-between items-start">
            <div className="flex flex-col gap-6 justify-start">
              <img
                className="size-11"
                src="/images/usdt-icon-large.png"
                alt="usdt-icon-large"
              />
              <div className="text-base text-gtxTextLight font-normal">
                Tether
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-start">
              <img src="/images/graph-green.png" alt="graph-green" />
              <div className="flex flex-row justify-end items-center">
                <img src="/images/arrow-up-green.png" alt="arrow-up-green" />
                <div className="flex text-base font-semibold text-gtxGreen">
                  1.12%
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-2xl text-white font-semibold">USD 0.9999</div>
            <div className="flex items-end text-base text-gtxText">USDT</div>
          </div>
        </div>
        <div className="flex flex-col bg-gtxBack rounded-xl p-6 w-128 justify-between">
          <div className="flex flex-row justify-between items-start">
            <div className="flex flex-col gap-6 justify-start">
              <img
                className="size-11"
                src="/images/binancecoin-icon.png"
                alt="binancecoin-icon"
              />
              <div className="text-base text-gtxTextLight font-normal">
                Binance Coin
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-start">
              <img src="/images/graph-red.png" alt="graph-red" />
              <div className="flex flex-row justify-end items-center">
                <img src="/images/arrow-down-red.png" alt="arrow-down-red" />
                <div className="flex text-base font-semibold text-gtxRed">
                  1.12%
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-2xl text-white font-semibold">USD 247.43</div>
            <div className="flex items-end text-base text-gtxText">BNB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

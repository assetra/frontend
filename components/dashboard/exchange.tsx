"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import { FiRefreshCw } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

const sofia = localFont({ src: "../../public/fonts/Sofia Pro Regular.ttf" });
const graphik = localFont({ src: "../../public/fonts/GraphikRegular.otf" });

const Exchange = () => {
  const [usd, setUsd] = useState(5000);
  const [btc, setBtc] = useState(0.8511);
  const [rate, setRate] = useState(53260.2);

  const onExchange = () => {
    let _usd = usd;
    let _btc = _usd / rate;
    setBtc(_btc);
  };

  const onClickHandler = () => {
    let _usd = usd;
    let _btc = btc;
    let _temp = _usd;
    _usd = _btc;
    _btc = _temp;
    setUsd(_usd);
    setBtc(_btc);
  };

  return (
    <div className="exchange-wrapper flex flex-col h-full text-white px-20 lg:px-7 py-6 font-medium bg-[#1E1F25] rounded-xl flex-shrink-0 w-full lg:w-[320px]">
      <div className="flex flex-row space-x-5 items-center justify-between">
        <div className={`text-white text-xl font-bold ${sofia.className}`}>Exchange</div>
        <button onClick={onClickHandler}>
          <FiRefreshCw size={24} />
        </button>
      </div>
      <div className="flex items-center text-xs justify-evenly py-1 mt-[35px] w-full">
        <div className="flex  items-center">
          <div className="text-white text-xl font-semibold">1</div>
          <div className="text-gtxTextLight text-base text-[#A5ADCF]">BTC</div>
        </div>
        <div>
          <FaArrowRight color="white" size={24} />
        </div>
        <div>
          <input
            className="bg-[#1E1F25] text-xl font-semibold w-[100px] border-none"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
          />
        </div>{" "}
        <div className="text-gtxTextLight text-base text-[#A5ADCF]">USD</div>
      </div>
      <div className={`flex flex-col gap-2 ${graphik.className} py-1 mt-[24px]`}>
        <div className="flex justify-start text-gtxText text-base text-[#A5ADCF]">Get</div>
        <div className="flex flex-row justify-center items-center rounded-full w-full border  px-4 py-2">
          <div className="flex w-2/3 justify-start basis-2/3 text-lg text-white pr-4 border-r border-r-[#ffffff]">
            <input className="bg-[#1E1F25]" value={usd} onChange={(e) => setUsd(parseFloat(e.target.value))}></input>
          </div>
          <div className="">
            <select
              name="getCurrency"
              id="getCurrency"
              className="bg-[#1E1F25] border--none rounded-2xl px-4 py-0.5 w-full h-[30px]"
            >
              <option className="w-full h-[30px]" value="BTC">
                BTC
              </option>
              <option value="ETH">ETH</option>
              <option value="LTC">LTC</option>
              <option value="BCH">BCH</option>
              <option value="XRP">XRP</option>
              <option value="DOGE">DOGE</option>
              <option value="DASH">DASH</option>
              <option value="ZEC">ZEC</option>
            </select>
          </div>
        </div>
      </div>
      <div className={`flex flex-col gap-2 ${graphik.className} py-1 mb-2`}>
        <div className="flex justify-start text-gtxText text-base text-[#A5ADCF]">Pay</div>
        <div className="flex flex-row justify-center items-center rounded-full w-full border px-4 py-2">
          <div className="flex w-2/3 justify-start basis-2/3 text-lg text-white pr-4 border-r border-r-[#ffffff]">
            <input className="bg-[#1E1F25]" value={usd} onChange={(e) => setUsd(parseFloat(e.target.value))}></input>
          </div>
          <div>
            <select
              name="getCurrency"
              id="getCurrency"
              className="bg-[#1E1F25] border--none rounded-2xl px-4 py-0.5 w-full h-[30px]"
            >
              <option className="w-full h-[30px]" value="BTC">
                BTC
              </option>
              <option value="ETH">ETH</option>
              <option value="LTC">LTC</option>
              <option value="BCH">BCH</option>
              <option value="XRP">XRP</option>
              <option value="DOGE">DOGE</option>
              <option value="DASH">DASH</option>
              <option value="ZEC">ZEC</option>
            </select>
          </div>
        </div>
      </div>

      <div
        className={`flex justify-center items-center rounded-full cursor-pointer w-full text-white font-semibold bg-black px-8 py-4 my-1 ${sofia.className}`}
      >
        <button onClick={onExchange}>Exchange</button>
      </div>
    </div>
  );
};

export default Exchange;

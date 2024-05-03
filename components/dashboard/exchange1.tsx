"use client";
import React, { useState } from "react";

import localFont from "next/font/local";

const sofia = localFont({ src: "../../public/fonts/Sofia Pro Regular.ttf" });
const graphik = localFont({ src: "../../public/fonts/GraphikRegular.otf" });

const Exchange1 = () => {
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
    <div className="exchange-wrapper flex flex-col text-white px-20 lg:px-7 py-6 font-medium bg-[#1E1F25] rounded-xl  w-full">
      <div className="flex flex-row space-x-5 items-center justify-between">
        <div className={`text-white text-xl font-bold ${sofia.className}`}>
          Exchange
        </div>
        <button onClick={onClickHandler}>
          <img
            className="cursor-pointer"
            src="/images/refresh-icon.png"
            alt="refresh-icon"
          />
        </button>
      </div>
      <div className="flex items-center text-xs justify-evenly py-1 mt-[35px] w-full">
        <div className="flex  items-center">
          <div className="text-white text-xl font-semibold">1</div>
          <div className="text-gtxTextLight text-base text-[#A5ADCF]">BTC</div>
        </div>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.70716 11.1771C3.3078 11.2321 3 11.5795 3 11.9999C3 12.4585 3.36631 12.8302 3.81818 12.8302H18.1999L13.0047 18.0813L12.9253 18.1743C12.687 18.4989 12.7124 18.9602 13.0023 19.2556C13.3212 19.5805 13.8392 19.5816 14.1594 19.258L20.7477 12.5996C20.787 12.5614 20.8224 12.5194 20.8536 12.474C21.0766 12.1498 21.0452 11.6999 20.7593 11.4111L14.1593 4.74193L14.0674 4.66174C13.7466 4.42125 13.2921 4.44905 13.0023 4.74446C12.6834 5.06942 12.6845 5.59515 13.0047 5.91871L18.2012 11.1696L3.81818 11.1696L3.70716 11.1771Z"
              fill="white"
            />
          </svg>
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
      <div
        className={`flex flex-col gap-2 ${graphik.className} py-1 mt-[24px]`}
      >
        <div className="flex justify-start text-gtxText text-base text-[#A5ADCF]">
          Get
        </div>
        <div className="flex flex-row justify-center items-center rounded-full w-full border  px-4 py-2">
          <div className="flex w-2/3 justify-start basis-2/3 text-lg text-white pr-4 border-r border-r-[#ffffff]">
            <input
              className="bg-[#1E1F25]"
              value={usd}
              onChange={(e) => setUsd(parseFloat(e.target.value))}
            ></input>
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
        <div className="flex justify-start text-gtxText text-base text-[#A5ADCF]">
          Pay
        </div>
        <div className="flex flex-row justify-center items-center rounded-full w-full border px-4 py-2">
          <div className="flex w-2/3 justify-start basis-2/3 text-lg text-white pr-4 border-r border-r-[#ffffff]">
            <input
              className="bg-[#1E1F25]"
              value={usd}
              onChange={(e) => setUsd(parseFloat(e.target.value))}
            ></input>
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

      <button
        onClick={onExchange}
        className={`flex justify-center items-center rounded-full cursor-pointer w-full text-white font-semibold bg-[#246CF9] px-8 py-4 my-1 ${sofia.className}`}
      >
        Exchange
      </button>
    </div>
  );
};

export default Exchange1;

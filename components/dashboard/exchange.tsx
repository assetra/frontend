"use client";
import React, { useState } from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import styles from "./styles";
import { IoIosArrowRoundForward } from "react-icons/io";
import CustomChart from "./customChart";
import localFont from "next/font/local";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/swap/ui/popover";
import dynamic from "next/dynamic";
import { Toaster } from "../swap/ui/toaster";
const sofia = localFont({ src: "../../public/fonts/Sofia Pro Regular.ttf" });
const graphik = localFont({ src: "../../public/fonts/GraphikRegular.otf" });
const SwapSDK = dynamic(() => import("../swap/Swap"), {
  ssr: false,
});
const Exchange = () => {
  const [usd, setUsd] = useState(5000);
  const [btc, setBtc] = useState(0.8511);
  const [rate, setRate] = useState(53260.2);
  const [open, setOpen] = useState(false);

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
    <div
      className="flex flex-col text-white px-3 sm:px-6 py-4 font-medium bg-[#1E1F25] rounded-xl overflow-hidden"
      style={{ minHeight: "320px", height: "auto" }}
    >
      <div
        className="flex flex-row space-x-4 sm:space-x-10 mb-2 items-center"
        style={{ justifyContent: "space-between" }}
      >
        <div
          className={`text-white text-lg sm:text-xl font-bold ${sofia.className}`}
        >
          Exchange
        </div>
        <button onClick={onClickHandler}>
          <img
            className="cursor-pointer w-6 h-6"
            src="/images/refresh-icon.png"
            alt="refresh-icon"
          />
        </button>
      </div>
      <div className="flex flex-row items-center text-xs justify-between mb-1">
        <div className="flex flex-row gap-1 sm:gap-2 items-center">
          <div className="text-white text-sm sm:text-base font-semibold">1</div>
          <div className="text-gtxTextLight text-sm sm:text-base">BTC</div>
        </div>
        <img
          src="/images/arrow-right.png"
          alt="arrow-right"
          className="w-4 h-4 sm:w-auto sm:h-auto"
        />
        <div className="flex flex-row gap-2 sm:gap-4 items-center py-1">
          <input
            className="bg-[#1E1F25] text-sm sm:text-base font-semibold w-16 sm:w-24 pl-1 sm:pl-4"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
          />
          <div className="text-gtxTextLight text-sm sm:text-base">USD</div>
        </div>
      </div>
      <div className={`flex flex-col gap-2 ${graphik.className} pb-1 mb-1`}>
        <div className="flex justify-start text-gtxText text-sm sm:text-base text-[#5D6588]">
          Get
        </div>
        <div className="flex flex-row justify-center items-center rounded-full w-full border border-gtxBackLight bg-search px-2 sm:px-4 py-2">
          <div className="flex justify-start basis-1/2 sm:basis-2/3 text-sm sm:text-base text-white pr-2 sm:pr-4 border-r border-r-gtxBackLight">
            <input
              className="bg-[#1E1F25] w-full pl-1 sm:pl-4"
              style={{ border: "none", outline: "none" }}
              value={usd}
              onChange={(e) => setUsd(parseFloat(e.target.value))}
            ></input>
          </div>
          <div className="flex flex-row justify-center text-center items-center gap-1 sm:gap-2 pl-2 sm:pl-4 w-full">
            <select
              name="getCurrency"
              id="getCurrency"
              className="bg-[#1E1F25] rounded-2xl px-2 sm:px-4 py-0.5 text-xs sm:text-base"
              style={{ border: "none", outline: "none" }}
            >
              <option className="w-full h-[16px]" value="BTC">
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
      <div className={`flex flex-col gap-2 ${graphik.className} pb-1 mb-1`}>
        <div className="flex justify-start text-gtxText text-[#5D6588] text-sm sm:text-base">
          Pay
        </div>
        <div className="flex flex-row justify-center items-center rounded-full w-full border border-gtxBackLight bg-search px-2 sm:px-4 py-2">
          <div className="flex justify-start basis-1/2 sm:basis-2/3 text-sm sm:text-base text-white pr-2 sm:pr-4 border-r border-r-gtxBackLight">
            <input
              className="bg-[#1E1F25] w-full pl-1 sm:pl-4"
              style={{ border: "none", outline: "none" }}
              value={btc}
              onChange={(e) => setBtc(parseFloat(e.target.value))}
            ></input>
          </div>
          <div className="flex flex-row justify-between items-center gap-1 sm:gap-2 pl-2 sm:pl-4">
            <select
              name="getCurrency"
              id="getCurrency"
              className="bg-[#1E1F25] rounded-2xl px-2 sm:px-4 py-0.5 text-xs sm:text-base"
              style={{ border: "none", outline: "none" }}
            >
              <option value="BTC">BTC</option>
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

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className={`flex justify-center items-center rounded-full cursor-pointer w-full text-white font-semibold bg-black px-4 sm:px-8 py-2 my-2 text-sm sm:text-base ${sofia.className}`}
          >
            Exchange
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[90vw] sm:w-[30rem] max-w-[90vw]">
          <SwapSDK />
        </PopoverContent>
      </Popover>
      <Toaster />
    </div>
  );
};

export default Exchange;

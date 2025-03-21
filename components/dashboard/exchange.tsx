"use client";
import React, { useState, useRef } from "react";
import styles from "./styles";
import localFont from "next/font/local";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
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
  const [selectedGetCurrency, setSelectedGetCurrency] = useState("BTC");
  const [selectedPayCurrency, setSelectedPayCurrency] = useState("USD");

  // Use refs to track which value was last changed
  const lastChangedRef = useRef<string | null>(null);

  // Calculate BTC from USD
  const calculateBtc = (usdValue: number) => {
    return parseFloat((usdValue / rate).toFixed(6));
  };

  // Calculate USD from BTC
  const calculateUsd = (btcValue: number) => {
    return parseFloat((btcValue * rate).toFixed(2));
  };

  const handleUsdChange = (e: { target: { value: string } }) => {
    const value = e.target.value === "" ? 0 : parseFloat(e.target.value);
    setUsd(value);
    // Only update BTC if USD was changed directly by user
    lastChangedRef.current = "usd";
    setBtc(calculateBtc(value));
  };

  const handleBtcChange = (e: { target: { value: string } }) => {
    const value = e.target.value === "" ? 0 : parseFloat(e.target.value);
    setBtc(value);
    // Only update USD if BTC was changed directly by user
    lastChangedRef.current = "btc";
    setUsd(calculateUsd(value));
  };

  const handleRateChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    const newRate =
      value === "" || parseFloat(value) <= 0 ? 0.01 : parseFloat(value);
    setRate(newRate);

    // Update the value that wasn't last changed directly
    if (lastChangedRef.current === "btc" || lastChangedRef.current === null) {
      setUsd(calculateUsd(btc));
    } else {
      setBtc(calculateBtc(usd));
    }
  };

  const onSwapCurrencies = () => {
    // Swap the selected currencies
    const tempCurrency = selectedGetCurrency;
    setSelectedGetCurrency(selectedPayCurrency);
    setSelectedPayCurrency(tempCurrency);

    // Swap the values
    const tempValue = usd;
    setUsd(btc);
    setBtc(tempValue);

    // Reset the last changed ref
    lastChangedRef.current = null;
  };

  const cryptocurrencies = [
    "BTC",
    "ETH",
    "LTC",
    "BCH",
    "XRP",
    "DOGE",
    "DASH",
    "ZEC",
    "USD",
  ];

  return (
    <div
      className="flex flex-col text-white px-3 py-4 font-medium bg-[#1E1F25] rounded-xl overflow-hidden w-full shadow-lg"
      style={{ minHeight: "320px", height: "100%" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-white text-xl font-bold ${sofia.className}`}>
          Exchange
        </h2>
        <button
          onClick={onSwapCurrencies}
          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          aria-label="Swap currencies"
        >
          <img
            className="w-6 h-6"
            src="/images/refresh-icon.png"
            alt="swap currencies"
          />
        </button>
      </div>

      {/* Exchange Rate */}
      <div className="flex items-center justify-between mb-4 bg-[#262830] p-3 rounded-lg">
        <div className="flex items-center space-x-2">
          <span className="text-base font-semibold">1</span>
          <span className="text-[#5D6588]">BTC</span>
        </div>
        <img
          src="/images/arrow-right.png"
          alt="arrow-right"
          className="w-4 h-4"
        />
        <div className="flex items-center space-x-2">
          <input
            className="bg-transparent text-base font-semibold w-24 text-right focus:outline-none"
            value={rate}
            onChange={handleRateChange}
            type="number"
            min="0.01"
            step="0.01"
          />
          <span className="text-[#5D6588]">USD</span>
        </div>
      </div>

      {/* Get Amount */}
      <div className={`mb-4 ${graphik.className}`}>
        <label className="block text-[#5D6588] text-sm mb-2">Get</label>
        <div className="flex items-center rounded-full border border-[#2A2D3A] bg-[#1E1F25] p-1">
          <input
            className="flex-grow bg-transparent px-4 py-2 focus:outline-none"
            value={usd}
            onChange={handleUsdChange}
            type="number"
            min="0"
            step="0.01"
          />
          <div className="h-full border-l border-[#2A2D3A] mx-2"></div>
          <select
            value={selectedGetCurrency}
            onChange={(e) => setSelectedGetCurrency(e.target.value)}
            className="bg-[#262830] rounded-full px-3 py-2 text-sm focus:outline-none appearance-none cursor-pointer min-w-[80px] text-center"
          >
            {cryptocurrencies.map((crypto) => (
              <option key={`get-${crypto}`} value={crypto}>
                {crypto}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Pay Amount */}
      <div className={`mb-6 ${graphik.className}`}>
        <label className="block text-[#5D6588] text-sm mb-2">Pay</label>
        <div className="flex items-center rounded-full border border-[#2A2D3A] bg-[#1E1F25] p-1">
          <input
            className="flex-grow bg-transparent px-4 py-2 focus:outline-none"
            value={btc}
            onChange={handleBtcChange}
            type="number"
            min="0"
            step="0.0001"
          />
          <div className="h-full border-l border-[#2A2D3A] mx-2"></div>
          <select
            value={selectedPayCurrency}
            onChange={(e) => setSelectedPayCurrency(e.target.value)}
            className="bg-[#262830] rounded-full px-3 py-2 text-sm focus:outline-none appearance-none cursor-pointer min-w-[80px] text-center"
          >
            {cryptocurrencies.map((crypto) => (
              <option key={`pay-${crypto}`} value={crypto}>
                {crypto}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Exchange Button */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className={`flex justify-center items-center rounded-full cursor-pointer w-full text-white font-semibold bg-black hover:bg-gray-900 transition-colors px-4 py-3 mt-auto ${sofia.className}`}
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

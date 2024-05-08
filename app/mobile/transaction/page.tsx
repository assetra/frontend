"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";

const data = [
  {
    id: 1,
    type: "Bitcoin",
    abbr: "BTC",
    amount: 112.1,
    price: 6456.45,
    delta: 74.36,
    percent: 1.15,
  },
  {
    id: 2,
    type: "Ethereum",
    abbr: "ETH",
    amount: 20.9,
    price: 203.11,
    delta: -3.86,
    percent: -1.9,
  },
  {
    id: 3,
    type: "Ripple",
    abbr: "XRP",
    amount: 18.1,
    price: 8682.45,
    delta: 0.01,
    percent: 3.07,
  },
  {
    id: 4,
    type: "Bitcoin Cash",
    abbr: "BCH",
    amount: 7.6,
    price: 6456.45,
    delta: 74.36,
    percent: 1.15,
  },
  {
    id: 6,
    type: "Tron",
    abbr: "TRX",
    amount: 4.4,
    price: 8682.45,
    delta: -0.01,
    percent: -3.05,
  },
  {
    id: 5,
    type: "Litecoin",
    abbr: "LTC",
    amount: 4.8,
    price: 788.54,
    delta: 0.07,
    percent: 1.28,
  },
  {
    id: 7,
    type: "EOS",
    abbr: "EOS",
    amount: 3.1,
    price: 6456.45,
    delta: -0.67,
    percent: -1.28,
  },
  {
    id: 8,
    type: "Tether",
    abbr: "USDT",
    amount: 2.1,
    price: 0.983,
    delta: 0.01,
    percent: 1.04,
  },
  {
    id: 9,
    type: "Cardano",
    abbr: "ADA",
    amount: 3.1,
    price: 0.075,
    delta: -0.01,
    percent: -2.89,
  },
];
const AddTransaction = () => {
  const [searchWord, setSearchWord] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  useEffect(() => {
    searchRef.current?.focus();
  }, []);
  return (
    <div className=" font-SFPro pt-[94px] min-h-screen h-screen overflow-auto px-4">
      <div className="header px-1 flex w-full justify-end">
        <RxCross2 className="w-4 h-4 text-white" />
      </div>
      <div className="mt-8">
        <h2 className="title text-white text-[32px]/[38px] font-bold tracking-tighter">
          Add Transaction
        </h2>
        <p className="text-sm text-white font-normal mt-2">
          Search or select from the list the coin you want
        </p>
      </div>
      <div className="mt-5">
        <input
          type="text"
          ref={searchRef}
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          className="px-2 text-[26px]/[32px] text-white placeholder-[#ffffff]/[.2] w-full bg-transparent  border-transparent focus:ring-transparent focus:border-transparent focus:ring-offset-0 focus:outline-none"
          placeholder="Search"
        />
      </div>
      <div className="mt-5">
        {data
          .filter((item) => {
            return (
              item.type
                .toLocaleLowerCase()
                .includes(searchWord.toLocaleLowerCase()) ||
              item.amount
                .toString()
                .toLocaleLowerCase()
                .includes(searchWord.toLocaleLowerCase()) ||
              item.price
                .toString()
                .toLocaleLowerCase()
                .includes(searchWord.toLocaleLowerCase()) ||
              item.abbr
                .toLocaleLowerCase()
                .includes(searchWord.toLocaleLowerCase())
            );
          })
          .map((item) => {
            const Icon = dynamic(
              () => import(`@/components/icons/${item.abbr}Icon`)
            );
            return (
              <div
                className={` p-4`}
                onClick={(e) => {
                  router.push(`/mobile/transaction/${item.type}`);
                }}
              >
                <div className="description flex items-center gap-x-2">
                  <div className="icon-wrapper bg-[#1b1c24] w-9 h-9 rounded-[50%] flex items-center justify-center">
                    <Icon />
                  </div>
                  <div className="flex flex-col justify-between h-9">
                    <p className="text-white text-[15px]/[17.9px] font-bold">
                      {item.type}{" "}
                      <span className="text-[#666666] text-[12px]/[14.32px] font-bold">
                        ({item.abbr})
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AddTransaction;

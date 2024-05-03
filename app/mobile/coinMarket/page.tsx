"use client";

import { BiDotsHorizontal } from "react-icons/bi";
import { FiBarChart2 } from "react-icons/fi";
import { Poppins } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Icon1 from "@/components/icons/portfolio/Icon1";
import Icon2 from "@/components/icons/portfolio/Icon2";
import Icon3 from "@/components/icons/portfolio/Icon3";
import Icon4 from "@/components/icons/portfolio/Icon4";
import Icon5 from "@/components/icons/portfolio/Icon5";
import MyPortfolioModal from "@/components/modal/MyPortfolioModal";
import PortfolioSettingModal from "@/components/modal/PortfolioSettingModal";
import Icon3_2 from "@/components/icons/portfolio/Icon3_2";
import { BsSearch } from "react-icons/bs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
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
    id: 5,
    type: "Litecoin",
    abbr: "LTC",
    amount: 4.8,
    price: 788.54,
    delta: 0.07,
    percent: 1.28,
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
    id: 5,
    type: "Litecoin",
    abbr: "LTC",
    amount: 4.8,
    price: 788.54,
    delta: 0.07,
    percent: 1.28,
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
    id: 5,
    type: "Litecoin",
    abbr: "LTC",
    amount: 4.8,
    price: 788.54,
    delta: 0.07,
    percent: 1.28,
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
    id: 5,
    type: "Litecoin",
    abbr: "LTC",
    amount: 4.8,
    price: 788.54,
    delta: 0.07,
    percent: 1.28,
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
    id: 5,
    type: "Litecoin",
    abbr: "LTC",
    amount: 4.8,
    price: 788.54,
    delta: 0.07,
    percent: 1.28,
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
const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [isSearch, setSearch] = useState(false);
  const searchRef = useRef(null);
  const handleClick = (id: number) => {
    if (id === 1) setOpen(true);
    else if (id === 2) setSettingOpen(true);
    else setSettingOpen(false);
  };

  useEffect(() => {
    searchRef.current?.focus();
  }, [isSearch]);
  return (
    <div className="portfolio pt-[94px] max-h-screen">
      <div className="header px-5 flex w-full justify-between items-center">
        <BsSearch
          className="text-white w-4 h-4"
          onClick={(e) => {
            setSearch(!isSearch);
            // searchRef.current?.focus();
          }}
        ></BsSearch>
        <h2 className="title text-white text-sm font-bold"> Coin Market</h2>
        <FiBarChart2 className="w-[13px] h-4 text-white"></FiBarChart2>
      </div>
      <div className={`${poppins.className} mt-10 px-5`}>
        {!isSearch ? (
          <div className="flex justify-between mt-[25px]">
            <div className="flex gap-x-5">
              <p className="p-2 text-white text-xs bg-white/[.05]">Rank</p>
              <p className="p-2 text-white text-xs bg-white/[.05]">Volume</p>
            </div>
            <p className="p-2 text-white text-xs bg-white/[.05]">24 Hours</p>
          </div>
        ) : (
          <input
            type="text"
            ref={searchRef}
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            className="px-2 text-[26px]/[32px] text-white placeholder-[#ffffff]/[.2] w-full bg-transparent  border-transparent focus:ring-transparent focus:border-transparent focus:ring-offset-0 focus:outline-none"
            placeholder="Search"
          />
        )}
      </div>
      <div className="info-wrapper mt-5 h-[calc(100vh-300px)] overflow-auto">
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
              <div className="flex justify-between items-center p-4">
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
                    <p className="text-[#ffffff]/[.5] text-[12px]/[14.32px] font-normal">
                      $ {item.amount} Billions
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end h-9 justify-between">
                  <h4 className="text-white text-[15px]/[17.9px] font-bold">
                    ${item.price}
                  </h4>
                  <p
                    className={` ${
                      item.delta > 0 ? "text-[#32CC86]" : "text-[#FC3044]"
                    } text-[12px]/[14.32px] font-normal`}
                  >
                    {item.delta > 0 ? `+$${item.delta}` : `$${item.delta}`} (
                    {item.percent > 0
                      ? `+${item.percent}%`
                      : `${item.percent}%`}
                    )
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="control-wrapper bg-[#0e0f18] pt-2 flex items-center justify-evenly h-[110px] fixed left-0 bottom-0 w-full">
        <Icon1 onClick={() => handleClick(1)} isActive={false} />
        <Icon2 isActive={false} />
        {settingOpen ? <Icon3_2 onClick={() => handleClick(3)} /> : <Icon3 />}
        <Icon4 />
        <Icon5 onClick={() => handleClick(2)} />
      </div>
      <MyPortfolioModal isOpen={open} openChange={() => setOpen(false)} />
      <PortfolioSettingModal
        isOpen={settingOpen}
        openChange={() => setSettingOpen(false)}
      />
    </div>
  );
};

export default Portfolio;

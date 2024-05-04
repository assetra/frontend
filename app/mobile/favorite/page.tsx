"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import { BsSearch, BsTrash } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";

import Icon1 from "@/components/icons/portfolio/Icon1";
import Icon2 from "@/components/icons/portfolio/Icon2";
import Icon3 from "@/components/icons/portfolio/Icon3";
import Icon4 from "@/components/icons/portfolio/Icon4";
import Icon5 from "@/components/icons/portfolio/Icon5";
import MyPortfolioModal from "@/components/modal/MyPortfolioModal";
import PortfolioSettingModal from "@/components/modal/PortfolioSettingModal";

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
];
const Favourite = () => {
  const [open, setOpen] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [isSearch, setSearch] = useState(false);
  const [active, setActive] = useState(-1);
  const searchRef = useRef<HTMLInputElement>(null);
  const handleActive = (id: number) => {
    if (id == active) {
      setActive(-1);
    } else setActive(id);
  };
  const handleClick = (id: number) => {
    alert("dd ");
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
        <BsTrash className="w-4 h-4 text-white"></BsTrash>
        <h2 className="title text-white text-sm font-bold">Favorite Coins</h2>
        <BsSearch
          className="text-white w-4 h-4"
          onClick={(e) => {
            setSearch(!isSearch);
          }}
        ></BsSearch>
      </div>
      <div className={`${poppins.className} mt-10 px-5`}>
        {!isSearch ? (
          <div className="flex justify-between mt-[25px]">
            <div className="flex gap-x-5">
              <p className="p-2 text-white text-xs bg-white/[.05]">
                Alphabetical
              </p>
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
      <div className="info-wrapper mt-5 h-[calc(100vh-260px)] overflow-auto">
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
                className={`flex relative justify-between items-center p-4 transition-all ease-in ${
                  active === item.id ? "translate-x-[-50px]" : ""
                }`}
                onClick={(e) => handleActive(item.id)}
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
                {active === item.id && (
                  <div className="trash w-[60px] h-[60px] flex justify-center items-center bg-[#FC3044] absolute right-[-50px]">
                    <BiTrash className="text-white w-[18px] h-[18px]" />
                  </div>
                )}
              </div>
            );
          })}
      </div>
      <div className="control-wrapper bg-[#0e0f18] pt-2 flex items-center justify-evenly h-[110px] fixed left-0 bottom-0 w-full z-[100]">
        <Icon1 onClick={() => handleClick(1)} isActive={false} />
        <Icon2 isActive={false} onClick={() => handleClick(4)} />
        <Icon3 isActive={settingOpen} onClick={() => handleClick(3)} />
        <Icon4 isActive={true} onClick={() => handleClick(4)} />
        <Icon5 onClick={() => handleClick(5)} />
      </div>
      <MyPortfolioModal isOpen={open} openChange={() => setOpen(false)} />
      <PortfolioSettingModal
        isOpen={settingOpen}
        openChange={() => setSettingOpen(false)}
      />
    </div>
  );
};

export default Favourite;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { BiLeftArrowAlt, BiSearch } from "react-icons/bi";

import { useTransactionContext } from "@/context/TransactionContext";

const colors = ["#13141D", "#0E0F18"];

const titles = [
  "Select exchange",
  "Select trading pair",
  "Amount bought",
  "Select portfolio",
  "Select transaction date",
  "Select transaction time",
  "Select transaction fee",
];
const items1 = [
  "Binance",
  "Kraken",
  "Coinbase",
  "Qryptos",
  "OKEx",
  "Huobi",
  "Bitfinex",
  "HitBTC",
  "Bibox",
  "IDAX",
];
const items2 = ["ETH/BTC", "ETH/USDT", "ETH/LTC"];
const items3 = ["Default Portfolio", "Binance Portfolio", "Kraken Portfolio"];
const items4 = ["%ETH", "%ETH"];

const Select = () => {
  const [searchWord, setSearchWord] = useState("");
  const searchRef = useRef<any>(null);
  const amountRef = useRef<any>(null);
  const dateRef = useRef<any>(null);
  const timeRef = useRef<any>(null);
  const router = useRouter();
  const {
    setExchange,
    setTradePair,
    setAmount,
    setDate,
    setTime,
    setDeduct,
    setPortfolio,
    setFee,
  } = useTransactionContext();
  const params = useParams<any>();

  const [isSearch, setSearch] = useState(false);
  const handleClick = (item: string) => {
    if (params.type == "1") {
      setExchange(item);
      router.back();
    }
    if (params.type == "2") {
      setTradePair(item);
      router.back();
    }
    if (params.type == "3") {
      setAmount(amountRef.current.value);
      router.back();
    }
    if (params.type == "4") {
      setPortfolio(item);
      router.back();
    }
    if (params.type == "5") {
      setDate(dateRef?.current?.value);
      router.back();
    }
    if (params.type == "6") {
      setTime(timeRef?.current?.value);
      router.back();
    }
    if (params.type == "7") {
      setFee(item);
      router.back();
    }
  };
  useEffect(() => {
    searchRef.current?.focus();
  }, [isSearch]);

  const content = () => {
    if (params.type == "1") {
      return items1
        .filter((item) => {
          return item
            .toLocaleLowerCase()
            .includes(searchWord.toLocaleLowerCase());
        })
        .map((item, index) => {
          return (
            <div
              key={index}
              className={` p-5 bg-[${colors[index % 2]}]`}
              onClick={(e) => {
                handleClick(item);
              }}
            >
              <div className="description text-white text-sm font-bold">
                {item}
              </div>
            </div>
          );
        });
    }
    if (params.type == "2") {
      return items2
        .filter((item) => {
          return item
            .toLocaleLowerCase()
            .includes(searchWord.toLocaleLowerCase());
        })
        .map((item, index) => {
          return (
            <div
              key={index}
              className={` p-5 bg-[${colors[index % 2]}]`}
              onClick={(e) => {
                handleClick(item);
              }}
            >
              <div className="description text-white text-sm font-bold">
                {item}
              </div>
            </div>
          );
        });
    }
    if (params.type == "3") {
      return (
        <div className="mt-[20px] px-5">
          <input
            type="number"
            ref={amountRef}
            className="px-2 text-[26px]/[32px] text-white placeholder-[#ffffff]/[.2] w-full bg-transparent  border-transparent focus:ring-transparent focus:border-transparent focus:ring-offset-0 focus:outline-none"
            placeholder="Enter amount"
          />
          <button
            className="mt-[80px] text-white bg-[#0057FF] py-5 text-center w-full text-[16px]/[19px] rounded-[20px]"
            onClick={(e) => {
              handleClick("3");
            }}
          >
            Continue
          </button>
        </div>
      );
    }
    if (params.type == "4") {
      return items3
        .filter((item) => {
          return item
            .toLocaleLowerCase()
            .includes(searchWord.toLocaleLowerCase());
        })
        .map((item, index) => {
          return (
            <div
              key={index}
              className={` p-5 bg-[${colors[index % 2]}]`}
              onClick={(e) => {
                handleClick(item);
              }}
            >
              <div className="description text-white text-sm font-bold">
                {item}
              </div>
            </div>
          );
        });
    }
    if (params.type == "5") {
      return (
        <div className="mt-[20px] px-5">
          <input
            type="date"
            ref={dateRef}
            // defaultValue={Date.now()}
            className="px-2 text-[26px]/[32px] text-white placeholder-[#ffffff]/[.2] w-full bg-transparent  border-transparent focus:ring-transparent focus:border-transparent focus:ring-offset-0 focus:outline-none"
            // placeholder="Enter amount"
          />
          <button
            className="mt-[80px] text-white bg-[#0057FF] py-5 text-center w-full text-[16px]/[19px] rounded-[20px]"
            onClick={(e) => {
              handleClick("5");
            }}
          >
            Continue
          </button>
        </div>
      );
    }
    if (params.type == "6") {
      return (
        <div className="mt-[20px] px-5">
          <input
            type="time"
            ref={timeRef}
            className="px-2 text-[26px]/[32px] text-white placeholder-[#ffffff]/[.2] w-full bg-transparent  border-transparent focus:ring-transparent focus:border-transparent focus:ring-offset-0 focus:outline-none"
          />
          <button
            className="mt-[80px] text-white bg-[#0057FF] py-5 text-center w-full text-[16px]/[19px] rounded-[20px]"
            onClick={(e) => {
              handleClick("5");
            }}
          >
            Continue
          </button>
        </div>
      );
    }
    if (params.type == "7") {
      return items4
        .filter((item) => {
          return item
            .toLocaleLowerCase()
            .includes(searchWord.toLocaleLowerCase());
        })
        .map((item, index) => {
          return (
            <div
              className={` p-5 bg-[${colors[index % 2]}]`}
              onClick={(e) => {
                handleClick(item);
              }}
              key={index}
            >
              <div className="description text-white text-sm font-bold">
                {item}
              </div>
            </div>
          );
        });
    }
  };
  return (
    <div className=" font-SFPro pt-[94px] min-h-screen h-screen overflow-auto">
      <div className="header px-4 flex w-full items-center justify-between">
        <BiLeftArrowAlt
          onClick={(e) => {
            router.back();
          }}
          className="text-white w-4 h-4  left-[33px]"
        />
        <h2 className="text-[#fefefe] font-bold text-sm text-center">
          {titles[params.type - 1]}
        </h2>
        <BiSearch
          className="w-4 h-4 text-white"
          onClick={(e) => {
            setSearch(!isSearch);
          }}
        />
      </div>
      {isSearch && (
        <div className="mt-4">
          <input
            type="text"
            ref={searchRef}
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            className="px-2 text-[26px]/[32px] text-white placeholder-white/[.2] w-full bg-transparent  border-transparent focus:ring-transparent focus:border-transparent focus:ring-offset-0 focus:outline-none"
            placeholder="Search"
          />
        </div>
      )}
      <div className="search-items mt-5">{content()}</div>
    </div>
  );
};

export default Select;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useParams, useRouter } from "next/navigation";

import Accordion from "@/components/Accordian";
import { useTransactionContext } from "@/context/TransactionContext";
import { FaChevronRight } from "react-icons/fa";
import TransactionInfo from "@/components/mobile/TransactionInfo";
import Icon1 from "@/components/icons/portfolio/Icon6";
import Icon2 from "@/components/icons/portfolio/Icon2";
import Icon3 from "@/components/icons/portfolio/Icon3";
import Icon4 from "@/components/icons/portfolio/Icon4";
import Icon5 from "@/components/icons/portfolio/Icon5";

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
const TransactionsList = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);
  const handleClick = (id: number) => {
    if (id === 1) setOpen(true);
    else if (id === 2) setSettingOpen(true);
    else setSettingOpen(false);
  };

  return (
    <div className="portfolio pt-[94px] min-h-screen h-screen overflow-auto">
      <div className="header flex w-full items-center justify-center relative">
        <BiLeftArrowAlt
          onClick={(e) => {
            router.back();
          }}
          className="text-white w-4 h-4 absolute left-[16px]"
        />
        <h2 className="text-[#fefefe] font-bold text-sm text-center">
          Transactions
        </h2>
      </div>
      <div className="mt-8 px-4 flex flex-col gap-y-[20px] h-[calc(100vh-250px)] overflow-auto">
        <TransactionInfo
          title="3471357 via Binance"
          method={false}
          amount={0.2341024}
          date="28 May 2018"
          price={204.71}
          pair="BTC / USDT"
          fee={388949}
          worth={426167}
        />
        <TransactionInfo
          title="3471332 via Binance"
          method={true}
          amount={0.2341024}
          date="28 May 2018"
          price={204.71}
          pair="BTC / USDT"
        />
        <TransactionInfo
          title="3471332 via Binance"
          method={true}
          amount={0.2341024}
          date="28 May 2018"
          price={204.71}
          pair="BTC / USDT"
        />
        <TransactionInfo
          title="3471332 via Binance"
          method={true}
          amount={0.2341024}
          date="28 May 2018"
          price={204.71}
          pair="BTC / USDT"
        />
      </div>
      <div className="control-wrapper bg-[#0e0f18] pt-2 flex items-center justify-evenly h-[110px] fixed left-0 bottom-0 w-full">
        <Icon1 isActive={false} onClick={() => handleClick(1)} />
        <Icon2 isActive={true} onClick={() => handleClick(2)} />
        <Icon3
          isActive={settingOpen}
          onClick={() => setSettingOpen(!settingOpen)}
        />

        <Icon4 isActive={false} onClick={() => handleClick(4)} />
        <Icon5 onClick={() => handleClick(2)} />
      </div>
    </div>
  );
};

export default TransactionsList;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useParams, useRouter } from "next/navigation";

import Accordion from "@/components/Accordian";
import { useTransactionContext } from "@/context/TransactionContext";

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
  const searchRef = useRef<any>(null);
  const router = useRouter();
  const params = useParams();
  const [activeTab, setActiveTab] = useState(1);
  const {
    exchange,
    tradePair,
    amount,
    portfolio,
    date,
    time,
    deduct,
    fee,
    setDeduct,
  } = useTransactionContext();

  console.log(params);
  useEffect(() => {
    searchRef.current?.focus();
  }, []);
  return (
    <div className="portfolio pt-[94px] min-h-screen h-screen overflow-auto">
      <div className="header px-1 flex w-full items-center justify-between">
        <BiLeftArrowAlt
          onClick={(e) => {
            router.back();
          }}
          className="text-white w-4 h-4  left-[33px]"
        />
        <h2 className="text-[#fefefe] font-bold text-sm text-center">
          {params.type}
          <span className="text-white/[.5] text-[12px]/[14.32px]">
            (
            {data.map((item) => {
              if (item.type === params.type) {
                return item.abbr;
              }
            })}
            )
          </span>
        </h2>
        <RxCross2 className="w-4 h-4 text-white" />
      </div>
      <div className="mt-8">
        <div className="tabs px-4 w-full flex">
          <div
            className={`tab-pane w-1/2 py-2 flex justify-center items-center border-b-[2px] ${
              activeTab == 1 ? "border-[#32CC86]" : "border-[#1B1C24]"
            } cursor-pointer`}
            onClick={(e) => setActiveTab(1)}
          >
            <p className="text-white text-[12px]/[14.32px] font-bold ">Buy</p>
          </div>
          <div
            className={`tab-pane w-1/2 py-2 flex justify-center items-center border-b-[2px] ${
              activeTab == 2 ? "border-[#FC3044]" : "border-[#1B1C24]"
            } cursor-pointer`}
            onClick={(e) => setActiveTab(2)}
          >
            <p className="text-white text-[12px]/[14.32px] font-bold">Sell</p>
          </div>
        </div>
        <div className=" w-full mt-5">
          <Accordion
            type="1"
            color={1}
            title="Exchange"
            placeholder={exchange ? exchange : "Select the exchange"}
          />
          <Accordion
            type="2"
            color={0}
            title="Trading pair"
            placeholder={tradePair ? tradePair : "Add the trading pair"}
          />
          <Accordion
            type="3"
            color={1}
            title="Amount Bought"
            placeholder={
              amount ? amount + " ETH" : "Enter the amount you bought"
            }
          />
          <Accordion
            type="4"
            color={0}
            title="Add to which portfolio"
            placeholder={portfolio ? portfolio : "Select from your portfolios"}
          />
          <Accordion
            type="5"
            color={1}
            title="Transaction Date"
            placeholder={date ? date : "Select the transaction date"}
          />
          <Accordion
            type="6"
            color={0}
            title="Transaction time"
            placeholder={time ? time : "Select the transaction time"}
          />
          <div className="flex px-5 py-5 justify-between items-center">
            <h3 className="text-white text-sm font-bold">
              Deduct from ETH holdings?
            </h3>
            <div className="form-control">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="toggle toggle-success"
                  checked={deduct}
                  onChange={(e) => setDeduct(e.target.checked)}
                />
              </label>
            </div>
          </div>
          <Accordion
            type="7"
            color={0}
            title="Exchange transaction fee"
            placeholder={fee ? fee : "Select what fee you payed"}
          />
          <div className="note px-4 mt-4">
            <input
              type="text"
              placeholder="Add your note"
              className="border border-white px-5 py-4 text-sm font-bold text-white placeholder-white/[.2] rounded-[30px] w-full"
            />
          </div>
          <div className="mt-8 px-4 mb-[64px]">
            <button
              className={`text-white rounded-[30px] w-full ${
                activeTab == 1 ? "bg-[#32CC86]" : "bg-[#FC3044]"
              } py-4 text-center text-[16px]/[19px]`}
            >
              {activeTab == 1 ? "Update transaction" : "Add transaction"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useParams, useRouter } from "next/navigation";

import Accordion from "@/components/Accordian";
import { useTransactionContext } from "@/context/TransactionContext";
import { BsTrash } from "react-icons/bs";
import TransactionDeleteModal from "@/components/modal/TransactionDeleteModal";

const TransactionDetail = () => {
  const router = useRouter();
  const params = useParams<any>();
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
  const [open, setOpen] = useState(false);
  return (
    <div className="portfolio pt-[94px] min-h-screen h-screen overflow-auto">
      <div className="header px-4 flex w-full items-center justify-between">
        <BiLeftArrowAlt
          onClick={(e) => {
            router.back();
          }}
          className="text-white w-4 h-4  left-[33px]"
        />
        <h2 className="text-[#fefefe] font-bold text-sm text-center">
          {params.name.replaceAll("%20", " ")}
        </h2>
        <BsTrash
          className="w-4 h-4 text-white"
          onClick={(e) => setOpen(true)}
        />
      </div>
      <div className="mt-8">
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
              className={`text-white rounded-[30px] w-full bg-[#32CC86] py-4 text-center text-[16px]/[19px]`}
            >
              Update transaction
            </button>
          </div>
        </div>
      </div>
      <TransactionDeleteModal
        isOpen={open}
        openChange={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};

export default TransactionDetail;

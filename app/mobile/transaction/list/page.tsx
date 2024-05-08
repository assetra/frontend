"use client";

import React, { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useRouter } from "next/navigation";

import TransactionInfo from "@/components/mobile/TransactionInfo";
import PortfolioSettingModal from "@/components/modal/PortfolioSettingModal";
import MenuBar2 from "@/components/mobile/MenuBar2";

const TransactionsList = () => {
  const router = useRouter();
  const [settingOpen, setSettingOpen] = useState(false);

  return (
    <div className=" font-SFPro pt-[94px] min-h-screen h-screen overflow-auto">
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
      <MenuBar2
        active={2}
        settingOpen={settingOpen}
        setSettingOpen={setSettingOpen}
      />
      <PortfolioSettingModal
        isOpen={settingOpen}
        openChange={() => setSettingOpen(false)}
      />
    </div>
  );
};

export default TransactionsList;

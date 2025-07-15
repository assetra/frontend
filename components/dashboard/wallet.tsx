"use client";
import React, { useState } from "react";
import withAuth from "../auth/withAuth";
import WalletTransaction from "@/components/dashboard/walletTransaction";
import PriceWidget from "@/components/forum/priceWidget";
import WalletBalance from "./walletBalance";
import WalletAsset from "./walletAsset";
import { Button } from "@/components/swap/ui/Button";
const Wallet = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  return (
    <div className="flex md:flex-row flex-col-reverse w-full bg-[#000] px-11 pt-16 overflow-hidden">
      <div className="bg-[#1E1F25]  md:w-1/4 w-full md:max-h-[90svh] md:min-h-[85svh] md:overflow-y-auto scrollbar-hide mr-6 p-8 rounded-2xl">
        <PriceWidget />
      </div>
      <div className="flex flex-col w-full h-full pb-4 pt-2">
        <WalletBalance />
        <div className=" md:flex md:flex-row-reverse text-lg ">
          <div className="md:w-[25%] flex rounded-xl py-2 bg-[#111]  gap-4 justify-center items-center">
            <Button
              onClick={() => {
                setToggle(true);
              }}
              className="rounded p-2 px-4"
              style={{ backgroundColor: toggle ? "#FFA800" : "" }}
            >
              Assets
            </Button>
            <Button
              style={{ backgroundColor: toggle ? "" : "#FFA800" }}
              className="rounded p-2 px-4"
              onClick={() => {
                setToggle(false);
              }}
            >
              Transaction
            </Button>
          </div>
        </div>
        {toggle ? <WalletAsset /> : <WalletTransaction />}
      </div>
    </div>
  );
};

export default withAuth(Wallet);

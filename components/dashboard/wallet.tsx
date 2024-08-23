"use client";
import React from "react";
import withAuth from "../auth/withAuth";
import WalletTransaction from "@/components/dashboard/walletTransaction";
import PriceWidget from "@/components/forum/priceWidget";
import WalletBalance from "./walletBalance";
const Wallet = () => {

  return (
    <div className="flex flex-row w-[100svw] h-[100svh] bg-[#000] px-11 pt-16 overflow-hidden">
      <div className= "bg-[#1E1F25]  w-1/4 h-full mr-6 p-8 rounded-2xl">
        <PriceWidget />
      </div>
      <div className="flex flex-col w-full h-full pb-8 pt-2">
        <WalletBalance />
        <WalletTransaction />
      </div>
    </div>
  );
};

export default withAuth(Wallet);

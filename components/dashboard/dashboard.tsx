"use client";
import React, { useContext, useEffect } from "react";
import CardSlider from "./cardSlider";
import ExchangeChart from "./exchangeChart";
import BalanceTransaction from "./balanceTransaction";
import withAuth from "../auth/withAuth";

const Dashboard = () => {

  return (
    <div className="flex flex-col w-[100svw] px-6 pt-16 bg-black">
      <BalanceTransaction />
      <ExchangeChart />
      <CardSlider />
    </div>
  );
};

export default withAuth(Dashboard);

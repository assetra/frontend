"use client";
import React, { useContext, useEffect } from "react";
import CardSlider from "./cardSlider";
import ExchangeChart from "./exchangeChart";
import BalanceTransaction from "./balanceTransaction";
import { AuthContext } from "@/context/AddContext";

const Dashboard = () => {
  const appContext = useContext(AuthContext);
  useEffect(() => {
    appContext.setNavbarState(true);
  }, []);

  return (
    <div className="flex flex-col w-[100svw] px-6 pt-16 bg-black">
      <BalanceTransaction />
      <ExchangeChart />
      <CardSlider />
    </div>
  );
};

export default Dashboard;

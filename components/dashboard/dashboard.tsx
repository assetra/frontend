"use client";
import React, { useContext, useEffect } from "react";
import Exchange from "./exchange";
import CardSlider from "./cardSlider";
import CustomChart from "./customChart";
import ExchangeChart from "./exchangeChart";
import BalanceTransaction from "./balanceTransaction";
import { AuthContext } from "@/context/AddContext";

const Dashboard = () => {
  const appContext = useContext(AuthContext);
  useEffect(() => {
    appContext.setNavbarState(true);
  }, []);

  return (
    <div className="flex flex-col w-full px-7  h-full">
      <div className="h-2/5">
        <BalanceTransaction />
      </div>
      <div className="h-2/5 w-full bg-white">
        <ExchangeChart />
      </div>
      <div className="h-1/5">
        <CardSlider />
      </div>
    </div>
  );
};

export default Dashboard;

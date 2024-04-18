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
    <div className="flex flex-col w-screen px-7 bg-[#000] h-[100vh]">
      <BalanceTransaction />
      <ExchangeChart />
      <CardSlider />
    </div>
  );
};

export default Dashboard;

"use client";
import ExchangePage from "@/components/dashboard/exchange_page";
import { AuthContext } from "@/context/AddContext";
import React, { useContext, useEffect } from "react";

const Page = () => {
  const appContext = useContext(AuthContext);
  useEffect(() => {
    appContext.setNavbarState(1);
  }, []);

  return <ExchangePage />;
};

export default Page;

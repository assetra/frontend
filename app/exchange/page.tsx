import ExchangePage from "@/components/dashboard/exchange_page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'ExchangePage',
};
const Page = () => {
  return <ExchangePage />;
};

export default Page;

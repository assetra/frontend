import React from "react";
import Market from "../../components/dashboard/market";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Market',
};
const Page = () => {
  return <Market />;
};

export default Page;

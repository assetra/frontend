import Wallet from "@/components/dashboard/wallet";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Wallet',
};

const page = () => {
  return <Wallet />;
};

export default page;

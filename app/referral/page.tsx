import Referral from "@/components/profile/referral";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Referral",
};

const Page = () => {
  return <Referral />;
};

export default Page;
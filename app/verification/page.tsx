import { Verification } from "@/components/auth/verification";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "verification",
};
const Page = () => {
  return <Verification />;
};

export default Page;

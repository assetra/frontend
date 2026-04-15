import Residence from "@/components/auth/residence";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Residence',
};
const Page = () => {
  return <Residence />;
};

export default Page;

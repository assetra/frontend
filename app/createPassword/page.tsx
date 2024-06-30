import CreatePassword from "@/components/auth/createPassword";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'CreatePassword',
};
const Page = () => {
  return <CreatePassword />;
};

export default Page;

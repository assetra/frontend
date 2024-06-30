import SignUp from "@/components/auth/signup";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'SignUp',
};
const Page = () => {
  return <SignUp />;
};

export default Page;

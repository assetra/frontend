import OTPField from "@/components/auth/otp";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'OTPField',
};

const Page = () => {
  return <OTPField />;
};

export default Page;

import VerifyPassword from "@/components/auth/verifyPassword";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reset Password",
};
const Page = () => {
  return <VerifyPassword />;
};

export default Page;

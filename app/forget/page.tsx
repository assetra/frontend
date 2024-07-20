import ForgetPassword from "@/components/auth/forgetPassword";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Forget Password',
};
const Page = () => {
  return < ForgetPassword />;
};

export default Page;
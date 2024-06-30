import Login from "@/components/auth/login";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Login',
};

const Page = () => {
  return <Login />;
};

export default Page;

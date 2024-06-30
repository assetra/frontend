import Dashboard from "@/components/dashboard/dashboard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Dashboard',
};

const Page = () => {
  return <Dashboard />;
};

export default Page;

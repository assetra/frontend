import Profile from "@/components/auth/profile";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Profile',
};

const Page = () => {
  return <Profile />;
};

export default Page;
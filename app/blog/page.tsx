import Main from "@/components/blog/main";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog",
};

const Page = () => {
  return <Main />;
};

export default Page;

import Main from "@/components/news/main";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "News",
};

const page = () => {
  return <Main />;
};

export default page;

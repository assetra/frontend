import Login from "@/components/auth/login";
import { Metadata } from "next";
import React from "react";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Login",
};

const Page = () => {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
};

export default Page;

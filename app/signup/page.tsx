import SignUp from "@/components/auth/signup";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: 'SignUp',
};
const Page = () => {
  return (
    <Suspense>
      <SignUp />
    </Suspense>
  );
};

export default Page;

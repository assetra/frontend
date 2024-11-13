import LoginProcess from "@/components/auth/LoginProcess";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Login",
};

const Page = () => {
  return (
    <Suspense>
      <LoginProcess />
    </Suspense>
  );
};

export default Page;

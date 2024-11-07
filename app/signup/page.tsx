import Email from "@/components/auth/Email";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "SignUp",
};
const Page = () => {
  return (
    <Suspense>
      <Email />
    </Suspense>
  );
};

export default Page;

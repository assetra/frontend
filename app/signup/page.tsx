import SignupProcess from "@/components/auth/SignupProcess";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "SignUp",
};
const Page = () => {
  return (
    <Suspense>
      <SignupProcess />
    </Suspense>
  );
};

export default Page;

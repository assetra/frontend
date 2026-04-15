import Referral from "@/components/profile/referral";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referral",
};

const Page = () => {
  return <Referral />;
};

export default Page;
import Application from "@/components/ambassador/Application";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AAP Application",
  };

const page = () => {
  return <Application />;
};

export default page;

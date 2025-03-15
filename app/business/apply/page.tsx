import Application from "@/components/business/Application";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A4B Application",
};
const page = () => {
  return <Application />;
};

export default page;

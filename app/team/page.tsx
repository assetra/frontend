import Main from "@/components/team/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
};
const page = () => {
  return <Main />;
};

export default page;

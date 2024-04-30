"use client";
import Dash from "@/components/dash/dash";
import MobileHome from "@/components/mobile/homePage";
import { AuthContext } from "@/context/AddContext";
import { useContext, useEffect } from "react";

export default function Page() {
  const appContext = useContext(AuthContext);
  useEffect(() => {
    appContext.setNavbarState(1);
  }, []);

  return (
    <div className="flex flex-col pt-7 pb-[45px] pl-[42px] pr-7 w-screen min-w-[1440px] h-[810px]">
      <Dash />
    </div>
  );
}

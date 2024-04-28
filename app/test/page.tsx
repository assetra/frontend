"use client";
import Dash from "@/components/dash/dash";
import { AuthContext } from "@/context/AddContext";
import { useContext, useEffect } from "react";

export default function Page() {
  const appContext = useContext(AuthContext);
  useEffect(() => {
    appContext.setNavbarState(true);
  }, []);

  return (
    <div className="flex flex-col pt-7 pb-[65px] pl-[42px] pr-7 w-screen h-[810px]">
      <Dash />
    </div>
  );
}

"use client";
import LogoIcon from "@/components/icons/LogoIcon";
import { AuthContext } from "@/context/AddContext";
import React, { useContext, useEffect } from "react";

const Splash = () => {
  const appContext = useContext(AuthContext);
  useEffect(() => {
    appContext.setNavbarState(3);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LogoIcon />
    </div>
  );
};

export default Splash;

"use client";
import { AuthContext } from "@/context/AddContext";
import React, { useContext, useEffect } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const SFPro = localFont({ src: "../../../public/fonts/SFPro.otf" });

const Welcome = () => {
  const appContext = useContext(AuthContext);
  useEffect(() => {
    appContext.setNavbarState(3);
  }, []);
  return (
    <div
      className={`${poppins.className} flex flex-col items-center justify-center h-screen px-10`}
    >
      <div className="title text-center">
        <h1 className=" text-[32px]/[48px] text-white font-bold">
          Welcome to GTX
        </h1>
        <p className={`text-sm text-white/[.7] ${SFPro.className} font-normal`}>
          All your crypto transactions in one place! Track coins, aadd
          portfolios, buy & sell.
        </p>
        <div className="mt-[33px]">
          <Link
            href={"/mobile/auth/login"}
            className=" bg-white px-[64px] py-[13px] rounded-[24px] text-base text-black font-bold"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

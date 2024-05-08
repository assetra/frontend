"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { BiLeftArrowAlt } from "react-icons/bi";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Forgot = () => {
  const router = useRouter();
  return (
    <div className={` ${poppins.className} px-[33px] pt-[73px] min-h-screen`}>
      <div className=" w-full flex justify-between items-center">
        <BiLeftArrowAlt
          onClick={(e) => {
            router.back();
          }}
          className="text-white w-4 h-4"
        ></BiLeftArrowAlt>
      </div>
      <h1 className="title text-white text-[32px]/[41.12px] mt-[26px]">
        Forgot password
      </h1>
      <p className="text-[14px]/[20px] text-white/[.7] mt-2">
        Enter your email and we'll send you instructions on how to reset your
        password
      </p>
      <form action="" className="mt-[26px]">
        <input
          type="text"
          className="border border-white rounded-[24px] p-[14px] text-[13px]/[24px] font-normal text-[#9CA4AB] placeholder-[#3F3F3F] w-full bg-transparent"
          placeholder="Enter your email address"
        />

        <button className="w-full bg-white rounded-[24px] py-4 text-center text-black text-base font-semibold mt-[26px]">
          Reset
        </button>
      </form>
    </div>
  );
};

export default Forgot;

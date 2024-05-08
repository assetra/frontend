"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import { BiLeftArrowAlt } from "react-icons/bi";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Scan = () => {
  const router = useRouter();
  return (
    <div className={` ${jakarta.className} px-[33px] pt-[73px] min-h-screen`}>
      <div className=" w-full flex justify-center items-center">
        <h2 className="text-[#fefefe] font-bold text-[18px]/[26px] text-center">
          Scan QR Code
        </h2>
        <BiLeftArrowAlt
          onClick={(e) => {
            router.back();
          }}
          className="text-white w-4 h-4 absolute left-[33px]"
        ></BiLeftArrowAlt>
      </div>
    </div>
  );
};

export default Scan;

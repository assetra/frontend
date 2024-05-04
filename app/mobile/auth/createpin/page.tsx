"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { BiLeftArrowAlt } from "react-icons/bi";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const CreatePin = () => {
  return (
    <div className={`signin ${poppins.className} px-[33px] pt-[73px]`}>
      <div className="signin-header w-full flex justify-between items-center">
        <BiLeftArrowAlt className="text-white w-4 h-4"></BiLeftArrowAlt>
        <p className="text-white text-[15px]/[22.5px]">Skip</p>
      </div>
      <h1 className="title text-white text-[32px]/[41.12px] mt-[26px]">
        Add a Pin
      </h1>
      <p className="text-[14px]/[20px] text-white/[.7] mt-2">
        Enter your email and we'll send you instructions on how to reset your
        password
      </p>
      <form action="" className="mt-[26px]">
        <div className="pin-wrapper flex justify-between">
          <input
            type="text"
            className="border border-white bg-transparent w-[60px] h-[60px] rounded-[8px] text-white text-[32px]/[48px] text-center"
            maxLength={1}
          />
          <input
            type="text"
            className="border border-white bg-transparent w-[60px] h-[60px] rounded-[8px] text-white text-[32px]/[48px] text-center"
            maxLength={1}
          />
          <input
            type="text"
            className="border border-white bg-transparent w-[60px] h-[60px] rounded-[8px] text-white text-[32px]/[48px] text-center"
            maxLength={1}
          />
          <input
            type="text"
            className="border border-white bg-transparent w-[60px] h-[60px] rounded-[8px] text-white text-[32px]/[48px] text-center"
            maxLength={1}
          />
        </div>
        <button className="w-full bg-white rounded-[24px] py-4 text-center text-black text-base font-semibold mt-[26px]">
          Save Pin
        </button>
      </form>
    </div>
  );
};

export default CreatePin;

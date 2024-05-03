import { Plus_Jakarta_Sans } from "next/font/google";
import React, { useState } from "react";
import { BiLeftArrowAlt, BiSolidLeftArrow } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
const Scan = () => {
  return (
    <div className={`signin ${jakarta.className} px-[33px] pt-[73px]`}>
      <div className="signin-header w-full flex justify-center items-center">
        <h2 className="text-[#fefefe] font-bold text-[18px]/[26px] text-center">
          Scan QR Code
        </h2>
        <BiLeftArrowAlt className="text-white w-4 h-4 absolute left-[33px]"></BiLeftArrowAlt>
      </div>
    </div>
  );
};

export default Scan;

"use client";

import ScanIcon from "@/components/icons/ScanIcon";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={`signin ${poppins.className} px-[33px] pt-[73px]`}>
      <div className="signin-header w-full flex justify-between items-center">
        <p className="text-white text-[15px]/[22.5px]">Sign In</p>
        <ScanIcon />
      </div>
      <h1 className="title text-white text-[32px]/[41.12px] mt-[26px]">
        Log into <br />
        your account
      </h1>
      <form action="" className="mt-[26px]">
        <input
          type="text"
          className="border border-white rounded-[24px] p-[14px] text-[13px]/[24px] font-normal text-[#9CA4AB] placeholder-[#3F3F3F] w-full bg-transparent"
          placeholder="Enter your email address"
        />
        <div className="password relative mt-[26px]">
          <input
            type={show ? "text" : "password"}
            className="border border-white rounded-[24px] p-[14px] text-[13px]/[24px] font-normal text-[#9CA4AB] placeholder-[#3F3F3F] w-full bg-transparent"
            placeholder="Enter your password"
          />
          <div
            className="absolute right-3 z-[1000] top-[35%]"
            onClick={(e) => setShow(!show)}
          >
            {!show ? (
              <BsEyeSlash className="w-5 h-5 text-[#b0b7c3]"></BsEyeSlash>
            ) : (
              <BsEye className=" w-5 h-5 text-[#b0b7c3]"></BsEye>
            )}
          </div>
        </div>
        <div className="remember w-full flex justify-between mt-[26px] text-[12px]/[22px]">
          <div className="flex items-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
            />
            <label className="ms-1 font-semibold text-[#78828a] ">
              Remember Me
            </label>
          </div>
          <Link
            className="text-[#E53935] font-semibold"
            href={"/mobile/auth/forgot"}
          >
            Forgot Password
          </Link>
        </div>
        <button className="w-full bg-white rounded-[24px] py-4 text-center text-black text-base font-semibold mt-[26px]">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;

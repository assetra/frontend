"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import localFont from "next/font/local";
import Link from "next/link";
import { TiEye } from "react-icons/ti";

const microsoft = localFont({ src: "../../public/fonts/chinese.msyh.ttf" });

const Login = () => {
  const [clicked, setClicked] = useState(false);
  const [password, setPassword] = useState<string | number>("");
  const [value, setValue] = useState<any>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setClicked(true);
  };
  return (
    <div className="lg:grid lg:grid-cols-2 h-[calc(100vh-70px)] flex flex-col">
      <div
        className={` ${microsoft.className} bg-white text-black lg:bg-black lg:text-white pt-10 lg:pt-20 px-6 flex-grow`}
      >
        <h1 className="text-[24px]/[30px] xl:text-3xl/[42.24px] font-bold text-center">
          Trade securely and with peace of mind.
        </h1>
        <p className="text-[12px]/[14px] xl:text-[15px]/[20px] text-center mt-3 xl:mt-0">
          "We maintain a constant 1:1 backing of your funds on GTX, and we
          routinely release Proof of Reserve audits to ensure transparency and
          accountability."
        </p>
      </div>
      <div className="bg-white text-black text-center px-6 pt-[30px] lg:pt-[90px] flex flex-col">
        <h1 className=" text-[40px]/[60px] text-[#081131]">Log In</h1>
        <div className=" text-[20px]/[30px] text-[#6978A0]">
          Welcome back, you’ve been missed!
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mx-auto mt-[30px] w-2/3"
        >
          <div className="flex flex-col items-start">
            <label
              htmlFor="phone"
              className="text-[14px]/[21px] font-medium text-[#191919]"
            >
              Phone Number &nbsp;{" "}
              <span className="text-[#909090]">Email Address</span>
            </label>
            <PhoneInput
              international
              className="PhoneInput rounded-[4px]  border border-black h-[50px] px-5 py-4 mt-[10px]  w-full tracking-[0.5px] leading-[50px] focus-visible:outline-none text-[14px]/[21px]"
              defaultCountry="GH"
              //   country=""
              name="phone"
              value={value}
              onChange={setValue}
            />
          </div>
          <div className="flex flex-col items-start mt-[10px]">
            <label
              htmlFor="phone"
              className="text-[14px]/[21px] font-medium text-[#191919]"
            >
              Password
            </label>{" "}
            <div className=" relative w-full">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="border border-black rounded-[4px] mt-[10px] h-[50px] px-5 py-4 w-full"
              ></input>
              <TiEye className="absolute right-3 z-[1000] top-[40%] w-5 h-5 text-[#b0b7c3]"></TiEye>
            </div>
          </div>
          {clicked ? (
            <button className="px-3 py-1.5 bg-blue-700 text-white flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>{" "}
            </button>
          ) : (
            <button
              type="submit"
              className="px-2 bg-[#121212] rounded-[12px] py-4 text-base/[24px] text-white mt-[35px] font-bold"
            >
              Sign In
            </button>
          )}
        </form>
        <div className="mt-[68px] text-xs font-light">
          Don’t have an account? &nbsp;
          <span className=" font-bold">
            <Link href="/signup"> Sign Up</Link>
          </span>
        </div>

        <div className="flex items-center justify-center gap-4 text-[#6E6E6E] text-center">
          <hr className=" w-40" />{" "}
          <span className=" text-[#6E6E6E] text-xs">or continue with</span>
          <hr className=" w-40" />
        </div>

        <div className="py-5 flex flex-row gap-8 items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-3 text-xs border px-5 py-3 rounded-md">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z"
                fill="#4285F4"
              />
              <path
                d="M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z"
                fill="#22C55E"
              />
              <path
                d="M5.10014 11.7306C4.91165 11.1862 4.80257 10.6028 4.80257 10C4.80257 9.39722 4.91165 8.81391 5.09022 8.26948L5.08523 8.15352L2.29464 6.02966L2.20333 6.07222C1.5982 7.25835 1.25098 8.59032 1.25098 10C1.25098 11.4098 1.5982 12.7417 2.20333 13.9278L5.10014 11.7306Z"
                fill="#FACC15"
              />
              <path
                d="M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93613L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26944C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331Z"
                fill="#F15B5B"
              />
            </svg>

            <p>Google</p>
          </div>
          <div className="flex flex-row gap-3 items-center justify-center text-xs border px-5 py-3 rounded-md">
            <svg
              width="16"
              height="19"
              viewBox="0 0 16 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6651 14.811C15.3882 15.4565 15.0461 16.072 14.6441 16.648C14.1071 17.415 13.6661 17.945 13.3281 18.24C12.8031 18.722 12.2391 18.97 11.6361 18.984C11.2041 18.984 10.6821 18.861 10.0741 18.611C9.46414 18.362 8.90414 18.24 8.39114 18.24C7.85414 18.24 7.27814 18.362 6.66114 18.611C6.04514 18.861 5.54714 18.992 5.16614 19.004C4.58914 19.029 4.01214 18.775 3.43714 18.24C3.07014 17.92 2.61114 17.37 2.06014 16.592C1.47014 15.763 0.985141 14.798 0.605141 13.701C0.198141 12.514 -0.00585938 11.366 -0.00585938 10.254C-0.00585938 8.98102 0.269141 7.88202 0.820141 6.96202C1.23689 6.23949 1.83269 5.63646 2.55014 5.21102C3.25761 4.78669 4.06523 4.55821 4.89014 4.54902C5.35014 4.54902 5.95314 4.69102 6.70014 4.97102C7.44714 5.25102 7.92714 5.39302 8.13614 5.39302C8.29414 5.39302 8.82514 5.22602 9.72914 4.89502C10.5821 4.58802 11.3021 4.46102 11.8921 4.51102C13.4921 4.64002 14.6931 5.27002 15.4921 6.40602C14.0621 7.27302 13.3551 8.48602 13.3691 10.043C13.3811 11.256 13.8221 12.265 14.6861 13.066C15.0681 13.4316 15.5138 13.7241 16.0011 13.929C15.8951 14.236 15.7831 14.529 15.6651 14.811ZM11.9981 0.380024C11.9981 1.33002 11.6501 2.21802 10.9591 3.03902C10.1231 4.01502 9.11314 4.58002 8.01814 4.49102C8.00382 4.37156 7.99681 4.25134 7.99714 4.13102C7.99714 3.21802 8.39314 2.24202 9.10014 1.44302C9.45214 1.03902 9.90014 0.702024 10.4431 0.434023C10.9851 0.170024 11.4971 0.0240234 11.9791 -0.000976562C11.9921 0.127023 11.9981 0.254024 11.9981 0.380024Z"
                fill="#081131"
              />
            </svg>

            <p>Apple</p>
          </div>
        </div>

        <div className="relative text-xs text-[#6E6E6E] mt-[80px] lg:mt-[100px] mb-[20px]">
          <div className=" bottom-8">
            By creating an account, I agree to GTX{" "}
            <span className=" text-black font-bold">
              <a href="/terms"> terms of service</a>
            </span>{" "}
            and{" "}
            <span className="text-black font-bold">
              <a href="/privacy">privacy policy</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

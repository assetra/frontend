"use client";

import React, { useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import PasswordStrengthBar from "react-password-strength-bar";

const microsoft = localFont({ src: "../../public/fonts/chinese.msyh.ttf" });

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  return (
    <div className="grid grid-cols-2 min-h-[100svh]">
      <div
        className={` ${microsoft.className} bg-black text-white pb-8 px-6 pt-32`}
      >
        <h1 className="text-3xl font-bold text-center">
          Trade securely and with peace of mind.
        </h1>
        <p className="text-[0.8rem] py-4 text-center">
          "We maintain a constant 1:1 backing of your funds on GTX, and we
          routinely release Proof of Reserve audits to ensure transparency and
          accountability."
        </p>
      </div>
      <div className="bg-white text-black text-center px-12 md:px-20 pb-8 pt-32">
        <h4 className="text-2xl text-[2rem] font-extrabold text-left">
          Create a password
        </h4>
        <div className="my-4"></div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="border border-black rounded-[7px] h-[50px] px-5 mt-2 w-full"
        />
        <div className="mt-2 text-xs py-3 text-[#6978A0] text-left">
          Min 8 Characters with a combination of letters, numbers and special
          characters.
        </div>
        <PasswordStrengthBar password={password} />

        <div className="my-3"></div>
        <button
          type="submit"
          className="px-3 py-2 w-full rounded-xl bg-black text-white "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CreatePassword;

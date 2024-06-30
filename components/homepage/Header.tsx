// 'use client'
import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
  // const [mobNav, setMobNav] = useState(false);

  return (
    <>
      <div className="bg-[#121212] flex justify-evenly">
        <div>
          <Image width={80} height={60} src="/assets/logo.png" alt="gtx-logo" />
        </div>

        <div className="md:flex justify-center items-center gap-10 text-[#E5E6ED] hidden">
          <a href="#">
            <p className="text-sm">Trade</p>
          </a>

          <a href="#">
            <p className="text-sm">Market</p>
          </a>

          <a href="#">
            <p className="text-sm">Transfer</p>
          </a>

          <a href="#">
            <p className="text-sm">Wallet</p>
          </a>

          <a href="#">
            <p className="text-sm">Invest</p>
          </a>

          <a href="#">
            <p className="text-sm">Support</p>
          </a>
        </div>

        <div className="flex justify-center items-center gap-6">
          <button className="text-[#E5E6ED] text-sm">Login</button>
          <button className="bg-[#E5E6ED] text-[#1a202c] font-[600] text-sm rounded-full px-4 py-2">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

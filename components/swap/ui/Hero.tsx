"use client";

import React from "react";
import dynamic from "next/dynamic";
import withAuth from "../../auth/withAuth";

const SwapSDK = dynamic(() => import("../Swap"), {
  ssr: false,
});

function Hero() {
  return (
    <div className="min-h-screen py-16 px-4 flex justify-center items-center lg:pb-32 xl:pb-36">
      <div className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] flex justify-center items-center">
        <SwapSDK />
      </div>
    </div>
  );
}

export default withAuth(Hero);

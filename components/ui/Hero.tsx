"use client";

import React from "react";
import dynamic from "next/dynamic";


const SwapSDK = dynamic(() => import("../Swap"), {
  ssr: true,
});

export function Hero() {
  return (
    <div className="h-[100dvh] py-20 overflow-hidden lg:pb-32 xl:pb-36">
      <div className="w-full flex justify-center items-center">
        <SwapSDK />
      </div>
    </div>
  );
}

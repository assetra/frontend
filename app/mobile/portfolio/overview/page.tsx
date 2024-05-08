"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BiLeftArrowAlt } from "react-icons/bi";
import { AdvancedChart } from "react-tradingview-embed";

const ranges = ["1H", "1D", "1W", "1M", "6M", "1Y", "ALL"];

const OverView = () => {
  const router = useRouter();
  const [range, setRange] = useState("1D");

  return (
    <div className={`signin  px-[10px] pt-[73px] h-screen font-SFPro`}>
      <div className="signin-header w-full flex justify-center items-center px-[23px]">
        <h2 className="text-[#fefefe] font-bold text-sm text-center">
          Portfolio Overview
        </h2>
        <BiLeftArrowAlt
          onClick={(e) => {
            router.back();
          }}
          className="text-white w-4 h-4 absolute left-[23px]"
        ></BiLeftArrowAlt>
      </div>
      <div className="mt-5 px-[23px]">
        <h1 className={`  price text-[32px]/[48px] font-bold text-white`}>
          $14,634.06
        </h1>
        <p className="text-[#32CC86] font-normal text-sm">+ $248.23(+0.35)</p>
      </div>
      <div className="mt-[60px]">
        <AdvancedChart
          widgetProps={{
            width: "100%",
            height: "466px",
            theme: "dark",
            hide_top_toolbar: true,
            withdateranges: false,
            range: range,
            hide_side_toolbar: true,
            style: "2",
          }}
          widgetPropsAny={{ backgroundColor: "black" }}
        />
      </div>
      <div className="flex justify-evenly mt-5">
        {ranges.map((rangeItem, index) => {
          return (
            <p
              key={index}
              onClick={(e) => setRange(rangeItem)}
              className={`py-2 px-3 cursor-pointer rounded-lg  text-white text-[12px]/[14.32px] font-bold ${
                range == rangeItem ? "bg-[#0057FF]" : ""
              } `}
            >
              {rangeItem}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default OverView;

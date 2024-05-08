"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AdvancedChart } from "react-tradingview-embed";
import { BiLeftArrowAlt } from "react-icons/bi";

const ranges = ["1H", "1D", "1W", "1M", "6M", "1Y", "ALL"];

const OverView = () => {
  const router = useRouter();
  const [range, setRange] = useState("1D");

  return (
    <div className={` px-[10px] pt-[73px] h-screen font-SFPro`}>
      <div className=" w-full flex justify-center items-center px-[23px]">
        <h2 className="text-[#fefefe] font-bold text-sm text-center">
          Market Overview
        </h2>
        <BiLeftArrowAlt
          onClick={(e) => {
            router.back();
          }}
          className="text-white w-4 h-4 absolute left-[33px]"
        ></BiLeftArrowAlt>
      </div>
      <div className="mt-5 px-[23px]">
        <h1 className={`  price text-[32px]/[48px] font-bold text-white`}>
          $209.182.356.841
        </h1>
        <p className="text-[#fff]/[.5] font-normal text-sm">
          20 October 2018 • 18:30:29
        </p>
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
      <div className="flex justify-center gap-x-10 mt-[20px]">
        <div>
          <p className="text-white/[.5] text-[12px]/[14.32px] mb-2">
            Volume (24 hours)
          </p>
          <p className="text-white text-[16px]/[19.09px] font-bold">
            $10.412.422.409
          </p>
        </div>
        <div>
          <p className="text-white/[.5] text-[12px]/[14.32px] mb-2">
            BTC Dominance
          </p>
          <p className="text-white text-[16px]/[19.09px] font-bold">53.612%</p>
        </div>
      </div>
    </div>
  );
};

export default OverView;

"use client";
import { Plus_Jakarta_Sans } from "next/font/google";
import React from "react";
import { BiLeftArrowAlt, BiSolidLeftArrow } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Chart from "react-apexcharts";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
const options = {
  chart: {
    id: "basic-bar",
  },
  grid: {
    show: false,
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
};
const series = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
];

const OverView = () => {
  const router = useRouter();
  return (
    <div className={`signin ${jakarta.className} px-[10px] pt-[73px] h-screen`}>
      <div className="signin-header w-full flex justify-center items-center px-[23px]">
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
        <Chart options={options} series={series} type="line" height={466} />
      </div>
      <div className="flex justify-evenly">
        <p className="py-2 px-3 bg-transparent text-white text-[12px]/[14.32px] font-bold">
          1H
        </p>
        <p className="py-2 px-3 text-white text-[12px]/[14.32px] font-bold bg-[#0057FF] rounded-[12px]">
          1D
        </p>
        <p className="py-2 px-3 bg-transparent text-white text-[12px]/[14.32px] font-bold">
          1W
        </p>
        <p className="py-2 px-3 bg-transparent text-white text-[12px]/[14.32px] font-bold">
          6M
        </p>
        <p className="py-2 px-3 bg-transparent text-white text-[12px]/[14.32px] font-bold">
          1Y
        </p>
        <p className="py-2 px-3 bg-transparent text-white text-[12px]/[14.32px] font-bold">
          ALL
        </p>
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

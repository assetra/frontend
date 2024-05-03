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
          Portfolio Overview
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
          $14,634.06
        </h1>
        <p className="text-[#32CC86] font-normal text-sm">+ $248.23(+0.35)</p>
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
    </div>
  );
};

export default OverView;

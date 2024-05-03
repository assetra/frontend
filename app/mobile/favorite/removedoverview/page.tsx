"use client";
import { Plus_Jakarta_Sans } from "next/font/google";
import React, { useState } from "react";
import { BiLeftArrowAlt, BiSolidLeftArrow } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Chart from "react-apexcharts";
import Icon1 from "@/components/icons/portfolio/Icon1";
import Icon2 from "@/components/icons/portfolio/Icon2";
import Icon4 from "@/components/icons/portfolio/Icon4";
import Icon5 from "@/components/icons/portfolio/Icon5";
import Icon3_2 from "@/components/icons/portfolio/Icon3_2";
import Icon3 from "@/components/icons/portfolio/Icon3";

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

const AddedOverview = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [isSearch, setSearch] = useState(false);
  const [active, setActive] = useState(-1);
  // const searchRef = useRef(null);
  const handleActive = (id: number) => {
    if (id == active) {
      setActive(-1);
    } else setActive(id);
  };
  const handleClick = (id: number) => {
    alert("dd ");
    if (id === 1) setOpen(true);
    else if (id === 2) setSettingOpen(true);
    else setSettingOpen(false);
  };
  return (
    <div
      className={`signin ${jakarta.className} px-[10px] pt-[73px] min-h-screen`}
    >
      <div className="signin-header w-full flex justify-center items-center px-[23px]">
        <h2 className="text-[#fefefe] font-bold text-sm text-center">
          Bitcoin{" "}
          <span className="text-white/[.5] text-[12px]/[14.32px]">(BTC)</span>
        </h2>
        <BiLeftArrowAlt
          onClick={(e) => {
            router.back();
          }}
          className="text-white w-4 h-4 absolute left-[33px]"
        ></BiLeftArrowAlt>
      </div>
      <div className="mt-5 px-[23px] flex justify-between">
        <div>
          <h1 className={`  price text-[32px]/[38px] font-bold text-white`}>
            $14,634.06
          </h1>
          <p className="text-[#32CC86] font-normal text-sm">+ $248.23(+0.35)</p>
        </div>
        <div>
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.23"
              width="72"
              height="72"
              rx="36"
              fill="#1B1C24"
            />
            <rect x="11" y="11" width="50" height="50" rx="25" fill="#1B1C24" />
            <rect x="21" y="21" width="30" height="30" rx="15" fill="#F7931A" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.053 43.884L34.678 43.541L35.24 41.289C34.87 41.2 34.5 41.1 34.143 41L33.579 43.262L32.2 42.924L32.769 40.637L32.406 40.542H32.394L32.2625 40.5077C32.1061 40.4669 31.9489 40.4258 31.788 40.386L30 39.937L30.683 38.361C30.6859 38.361 30.7672 38.3823 30.8823 38.4126L30.8823 38.4126C31.1619 38.4861 31.6412 38.612 31.683 38.612C31.7374 38.6247 31.7931 38.6314 31.849 38.632C32.0626 38.6265 32.2496 38.4871 32.316 38.284L33.858 32.091C33.899 31.6943 33.6141 31.3381 33.218 31.291C33.208 31.273 32.585 31.127 32.218 31.043L32.584 29.573L34.484 30.047V30.054C34.748 30.12 35.016 30.182 35.362 30.26L35.924 28L37.3 28.342L36.747 30.558L36.811 30.573C37.153 30.651 37.506 30.732 37.848 30.818L38.4 28.616L39.773 28.962L39.209 31.222C41.309 31.945 42.183 32.951 41.969 34.387C41.9079 35.3809 41.1868 36.2098 40.211 36.408C40.8437 36.6567 41.3419 37.1611 41.5826 37.7969C41.8234 38.4327 41.7843 39.1406 41.475 39.746C41.0878 41.0788 39.8024 41.9436 38.422 41.8C37.8171 41.789 37.2145 41.7221 36.622 41.6L36.052 43.881L36.053 43.884ZM35.344 36.319L34.588 39.349L34.853 39.418C35.5938 39.6394 36.3587 39.7697 37.131 39.806C38.087 39.806 38.657 39.466 38.824 38.796C38.9171 38.4653 38.8678 38.1107 38.688 37.818C38.1554 36.9546 36.5502 36.5925 35.6898 36.3984L35.688 36.398C35.553 36.368 35.44 36.342 35.347 36.319H35.344ZM35.689 34.933L36.374 32.185C36.453 32.205 36.55 32.227 36.66 32.251C37.362 32.407 38.669 32.7 39.124 33.434C39.2927 33.7123 39.3373 34.0484 39.247 34.361C39.093 34.987 38.587 35.305 37.747 35.305C37.1243 35.2778 36.5074 35.1723 35.911 34.991L35.881 34.983L35.689 34.933Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="mt-5 px-[23px] flex justify-between">
        <button className="text-white bg-white/[.05] text-[12px]/[14.32px] font-extrabold py-2 px-2">
          Global Average
        </button>
        <div className="flex gap-x-5">
          <button className="w-[30px] h-[30px] flex justify-center items-center bg-white/[.05] rounded-[8px]">
            <svg
              width="6"
              height="14"
              viewBox="0 0 6 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 1V13" stroke="white" stroke-linecap="round" />
              <rect y="4" width="6" height="6" rx="2" fill="white" />
            </svg>
          </button>
          <button className="w-[30px] h-[30px] flex justify-center items-center bg-white/[.05] rounded-[8px]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.66699 1H11V4.333"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.333 11H1V7.66699"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 1L7.11099 4.889"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 11.0003L4.889 7.11133"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="h-[calc(100vh-400px)] overflow-auto">
        <div className="mt-[20px]">
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
            <p className="text-white text-[16px]/[19.09px] font-bold">
              53.612%
            </p>
          </div>
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
            <p className="text-white text-[16px]/[19.09px] font-bold">
              53.612%
            </p>
          </div>
        </div>
      </div>
      <div className="control-wrapper bg-[#0e0f18] pt-2 flex items-center justify-evenly h-[110px] fixed left-0 bottom-0 w-full z-[100]">
        <Icon1 onClick={() => handleClick(1)} isActive={false} />
        <Icon2 isActive={false} onClick={() => handleClick(4)} />
        {settingOpen ? <Icon3_2 onClick={() => handleClick(3)} /> : <Icon3 />}
        <Icon4 isActive={true} onClick={() => handleClick(4)} />
        <Icon5 onClick={() => handleClick(5)} />
      </div>
    </div>
  );
};

export default AddedOverview;

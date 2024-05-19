"use client";

import { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { AdvancedChart } from "react-tradingview-embed";
import { HiArrowUp } from "react-icons/hi";
import { RiArrowDownFill, RiArrowUpFill } from "react-icons/ri";

import CardSlider from "@/components/dashboard/cardSlider";
import Exchange from "@/components/dashboard/exchange";
import Transaction from "@/components/dashboard/transaction";
import DonutChart from "@/components/dashboard/donutChart";
import { AuthContext } from "@/context/AddContext";

const graphik = localFont({ src: "../../public/fonts/GraphikRegular.otf" });

export default function Dashboard() {
  const context = useContext(AuthContext);
  const ref = useRef<HTMLDivElement>(null);
  const width = window.innerWidth;

  useEffect(() => {
    context.setNavbarState(1);
    setTimeout(() => {
      if (ref.current) ref.current.style.display = "none";
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col px-10">
      <div className="flex pb-5 xl:flex-row flex-col gap-y-5">
        <div className="flex  w-full xl:w-2/3 h-[267px] xl:pr-[21px]">
          <div className="flex w-full h-full p-6 rounded-xl bg-[#1E1F25]">
            <div className="flex w-2/5 h-full pr-[20px] xl:pr-[45px] border-r-2 border-[#34384C]" id="balance">
              <div className="flex flex-col w-full h-full text-white">
                <div className="flex flex-row justify-between w-full">
                  <h1>Balance</h1>
                  <div className="flex">
                    <RiArrowUpFill size={20} color="#11CABE" />
                    <div>2.36%</div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="flex pt-4">
                    <h1 className="text-2xl lg:text-4xl font-extrabold">USD 12.243,55</h1>
                  </div>
                </div>
                <div className="flex flex-col gap-y-5 lg:flex-row pt-6 w-full ">
                  <div className="flex flex-row items-center justify-between gap-x-5 lg:flex-col lg:w-1/2 lg:justify-start">
                    <div className="flex flex-row">
                      <div className="w-6 h-6 rounded-full bg-[#34384C] flex items-center justify-center">
                        <RiArrowDownFill size={16} color="#11CABE" />
                      </div>
                      <p className="pl-5 text-[#A5ADCF]">Income</p>
                    </div>
                    <div className="text-[16px]/[18px] lg:text-[20px]/[27px] lg:mt-5">USD 12.243,55</div>
                  </div>
                  <div className="flex flwx-row lg:flex-col lg:w-1/2  lg:justify-start border-[#34384C]">
                    <div className="flex flex-row lg:flex-col lg:border-l-2 lg:px-5 justify-between items-center w-full">
                      <div className="flex flex-row items-center">
                        <div className="w-6 h-6 rounded-full bg-[#34384C] flex items-center justify-center">
                          <RiArrowUpFill size={16} color="#FA2256" />
                        </div>
                        <p className="pl-5 text-[#A5ADCF]">Expenses</p>
                      </div>
                      <div className="text-[16px]/[18px] lg:text-[20px]/[27px] lg:mt-5">USD 12.243,55</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-3/5 h-full pl-5 xl:pl-[45px]" id="wallet">
              <div className="flex flex-col w-full h-full text-white">
                <div className="flex flex-row justify-between w-full">
                  <div className="text-lg xl:text-xl font-bold">Wallet</div>
                  <div className={`${graphik.className} text-base text-[#A5ADCF]`}>3 Currencies</div>
                </div>
                <div className="flex flew-row w-full h-full">
                  <div className="flex h-full justify-center items-center">
                    <DonutChart />
                  </div>
                  <div className="flex flex-col w-1/2 h-full justify-center items-center py-3">
                    <div className="flex flex-col w-full h-full justify-center items-center">
                      <div className="flex flex-row w-full h-1/3">
                        <div className="mr-2">
                          <Image src="/images/bitcoin-icon.png" width={20} height={20} alt="BTC" />
                        </div>
                        <div className="flex flex-col w-full h-full">
                          <div className="flex flex-row justify-between w-full h-full">
                            <div className=" text-sm lg:text-base">
                              BTC
                              <div className="text-[#5D6588]">Bitcoin</div>
                            </div>
                            <div className="flex flex-row items-center">
                              <HiArrowUp className="text-[#11CABE]"></HiArrowUp>
                              <div className="text-[#11CABE]">2.36%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row w-full h-1/3">
                        <div className="mr-2">
                          <Image src="/images/eth-icon.png" width={20} height={20} alt="ETH" />
                        </div>
                        <div className="flex flex-col w-full h-full">
                          <div className="flex flex-row justify-between w-full h-full">
                            <div className=" text-sm lg:text-base">
                              ETH
                              <div className="text-[#5D6588]">Ethereum</div>
                            </div>
                            <div className="flex flex-row items-center">
                              <HiArrowUp className="text-[#11CABE]"></HiArrowUp>
                              <div className="text-[#11CABE]">1.80%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row w-full h-1/3">
                        <div className="mr-2">
                          <Image src="/images/usdt-icon.png" width={20} height={20} alt="USDT" />
                        </div>
                        <div className="flex flex-col w-full h-full">
                          <div className="flex flex-row justify-between w-full h-full">
                            <div className=" text-sm lg:text-base">
                              USDT
                              <div className="text-[#5D6588]">Bitcoin</div>
                            </div>
                            <div className="flex flex-row items-center">
                              <HiArrowUp className="text-[#11CABE]"></HiArrowUp>
                              <div className="text-[#11CABE]">1.64%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Transaction />
      </div>
      <div className="flex flex-col gap-y-5 lg:flex-row gap-x-5">
        <Exchange />
        <div className={`relative`}>
          <AdvancedChart
            widgetProps={{
              width: width > 1024 ? width - 430 : width - 80,
              height: "419px",
              theme: "dark",
            }}
          />
          <div
            ref={ref}
            className={`text-white  ${
              width > 1024 ? "w-[calc(100vw-430px)]" : "w-[calc(100vw-80px)]"
            } bg-[#131722] flex items-center justify-center h-[419px] absolute top-0 left-0`}
          >
            Loading...
          </div>{" "}
        </div>
      </div>
      <div className="flex w-full  mt-4">
        <div className="flex flex-col w-full h-full">
          <CardSlider />
        </div>
      </div>
    </div>
  );
}

"use client";
import CardSlider from "../dashboard/cardSlider";
import Exchange from "../dashboard/exchange";
import Transaction from "../dashboard/transaction";
import localFont from "next/font/local";
import DonutChart from "../dashboard/donutChart";
import CustomChart from "../dashboard/customChart";

import { HiArrowUp } from "react-icons/hi";

const graphik = localFont({ src: "../../public/fonts/GraphikRegular.otf" });

export default function Dash() {
  return (
    <div className="flex flex-col ">
      <div className="flex pb-5 xl:flex-row flex-col gap-y-5">
        <div className="flex  w-full xl:w-2/3 h-[267px] xl:pr-[21px]">
          <div className="flex w-full h-full p-6 rounded-xl bg-[#1E1F25]">
            <div
              className="flex w-2/5 h-full pr-[20px] xl:pr-[45px] border-r-2 border-[#34384C]"
              id="balance"
            >
              <div className="flex flex-col w-full h-full text-white">
                <div className="flex flex-row justify-between w-full">
                  <h1>Balance</h1>
                  <div className="flex">
                    <img src="/images/arrow-up-green.png" />
                    <div>2.36%</div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="flex pt-4">
                    <h1 className="text-2xl lg:text-4xl font-extrabold">
                      USD 12.243,55
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col gap-y-5 lg:flex-row pt-6 w-full ">
                  <div className="flex flex-row items-center justify-between gap-x-5 lg:flex-col lg:w-1/2 lg:justify-start">
                    <div className="flex flex-row">
                      <img src="/images/arrow-down-blue-24-bg.png" />
                      <p className="pl-5 text-[#A5ADCF]">Income</p>
                    </div>
                    <div className="text-[16px]/[18px] lg:text-[20px]/[27px] lg:mt-5">
                      USD 12.243,55
                    </div>
                  </div>
                  <div className="flex flwx-row lg:flex-col lg:w-1/2  lg:justify-start border-[#34384C]">
                    <div className="flex flex-row lg:flex-col lg:border-l-2 lg:px-5 justify-between items-center w-full">
                      <div className="flex flex-row items-center">
                        <img src="/images/arrow-up-red-24-bg.png" />
                        <p className="pl-5 text-[#A5ADCF]">Expenses</p>
                      </div>
                      <div className="text-[16px]/[18px] lg:text-[20px]/[27px] lg:mt-5">
                        USD 12.243,55
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-3/5 h-full pl-5 xl:pl-[45px]" id="wallet">
              <div className="flex flex-col w-full h-full text-white">
                <div className="flex flex-row justify-between w-full">
                  <div className="text-lg xl:text-xl font-bold">Wallet</div>
                  <div
                    className={`${graphik.className} text-base text-[#A5ADCF]`}
                  >
                    3 Currencies
                  </div>
                </div>
                <div className="flex flew-row w-full h-full">
                  <div className="flex h-full justify-center items-center">
                    <DonutChart />
                  </div>
                  <div className="flex flex-col w-1/2 h-full justify-center items-center py-3">
                    <div className="flex flex-col w-full h-full justify-center items-center">
                      <div className="flex flex-row w-full h-1/3">
                        <div className="mr-2">
                          <img src="/images/bitcoin-icon.png" />
                        </div>
                        <div className="flex flex-col w-full h-full">
                          <div className="flex flex-row justify-between w-full h-full">
                            <div className=" text-sm lg:text-base">
                              BTC
                              <div className="text-[#5D6588]">Bitcoin</div>
                            </div>
                            <div className="flex flex-row">
                              <HiArrowUp className="text-[#11CABE]"></HiArrowUp>
                              <div className="text-[#11CABE]">2.36%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row w-full h-1/3">
                        <div className="mr-2">
                          <img src="/images/eth-icon.png" />
                        </div>
                        <div className="flex flex-col w-full h-full">
                          <div className="flex flex-row justify-between w-full h-full">
                            <div className=" text-sm lg:text-base">
                              ETH
                              <div className="text-[#5D6588]">Ethereum</div>
                            </div>
                            <div className="flex flex-row">
                              <HiArrowUp className="text-[#11CABE]"></HiArrowUp>

                              <div className="text-[#11CABE]">1.80%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row w-full h-1/3">
                        <div className="mr-2">
                          <img src="/images/usdt-icon.png" />
                        </div>
                        <div className="flex flex-col w-full h-full">
                          <div className="flex flex-row justify-between w-full h-full">
                            <div className=" text-sm lg:text-base">
                              USDT
                              <div className="text-[#5D6588]">Bitcoin</div>
                            </div>
                            <div className="flex flex-row">
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

        <CustomChart />
      </div>

      <div className="flex w-full  mt-4">
        <div className="flex flex-col w-full h-full">
          <CardSlider />
        </div>
      </div>
    </div>
  );
}

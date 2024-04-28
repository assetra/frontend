"use client";
import CardSlider from "../dashboard/cardSlider";
import Exchange from "../dashboard/exchange";
import Transaction from "../dashboard/transaction";
import localFont from "next/font/local";
import DonutChart from "../dashboard/donutChart";
import CustomChart from "../dashboard/customChart";

const graphik = localFont({ src: "../../public/fonts/GraphikRegular.otf" });

export default function Dash() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex  w-full h-[31.75%] pb-5">
        <div className="flex w-full h-full">
          <div className="flex w-2/3 h-full pr-[21px]">
            <div className="flex w-full h-full p-6 rounded-xl bg-[#1E1F25]">
              <div
                className="flex w-2/5 h-full pr-[45px] border-r-2 border-[#34384C]"
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
                      <h1 className="text-4xl font-extrabold">USD 12.243,55</h1>
                    </div>
                  </div>
                  <div className="flex flex-row pt-6 w-full">
                    <div className="flex flex-col w-1/2 justify-start">
                      <div className="flex flex-row py-3">
                        <img src="/images/arrow-down-blue-24-bg.png" />
                        <p className="pl-5 text-[#A5ADCF]">Income</p>
                      </div>
                      <div>USD 12.243,55</div>
                    </div>
                    <div className="flex flex-col w-1/2 justify-start pl-5">
                      <div className="flex flex-col border-l-2 px-5 border-[#34384C]">
                        <div className="flex flex-row py-3">
                          <img src="/images/arrow-up-red-24-bg.png" />
                          <p className="pl-5 text-[#A5ADCF]">Expenses</p>
                        </div>
                        <div>USD 12.243,55</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-3/5 h-full pl-[45px]" id="wallet">
                <div className="flex flex-col w-full h-full text-white">
                  <div className="flex flex-row justify-between w-full">
                    <div className="text-xl font-bold">Wallet</div>
                    <div
                      className={`${graphik.className} text-base text-[#A5ADCF]`}
                    >
                      3 Currencies
                    </div>
                  </div>
                  <div className="flex flew-row w-full h-full">
                    <div className="flex w-1/2 h-full justify-center items-center">
                      <DonutChart />
                    </div>
                    <div className="flex flex-col w-1/2 h-full justify-center items-center py-3">
                      <div className="flex flex-col w-full h-full justify-center items-center">
                        <div className="flex flex-row w-full h-1/3">
                          <div className="mx-2">
                            <img src="/images/bitcoin-icon.png" />
                          </div>
                          <div className="flex flex-col w-full h-full">
                            <div className="flex flex-row justify-between w-full h-full">
                              <div>BTC</div>
                              <div className="flex flex-row">
                                <img src="/images/Arrow - Up 3_16.png" />
                                <div className="text-[#11CABE]">2.36%</div>
                              </div>
                            </div>
                            <div className="text-[#5D6588]">Bitcoin</div>
                          </div>
                        </div>
                        <div className="flex flex-row w-full h-1/3">
                          <div className="mx-2">
                            <img src="/images/eth-icon.png" />
                          </div>
                          <div className="flex flex-col w-full h-full">
                            <div className="flex flex-row justify-between w-full h-full">
                              <div>ETH</div>
                              <div className="flex flex-row">
                                <img src="/images/Arrow - Up 3_16.png" />
                                <div className="text-[#11CABE]">1.80%</div>
                              </div>
                            </div>
                            <div className="text-[#5D6588]">Ethereum</div>
                          </div>
                        </div>
                        <div className="flex flex-row w-full h-1/3">
                          <div className="mx-2">
                            <img src="/images/usdt-icon.png" />
                          </div>
                          <div className="flex flex-col w-full h-full">
                            <div className="flex flex-row justify-between w-full h-full">
                              <div>USDT</div>
                              <div className="flex flex-row">
                                <img src="/images/Arrow - Up 3_16.png" />
                                <div className="text-[#11CABE]">1.64%</div>
                              </div>
                            </div>
                            <div className="text-[#5D6588]">Bitcoin</div>
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
      </div>
      <div className="flex flex-row w-full h-1/2">
        <div className="flex flex-col w-1/4 pr-7">
          <Exchange />
        </div>
        <div className="flex flex-col w-3/4">
          <CustomChart />
        </div>
      </div>
      <div className="flex w-full h-[18.75%] mt-4">
        <div className="flex flex-col w-full h-full">
          <CardSlider />
        </div>
      </div>
    </div>
  );
}

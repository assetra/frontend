import { useEffect, useState } from "react";

export default function MobileHome({ data }: any) {
  return (
    <div className="flex flex-col w-full h-full pt-[73px] text-white bg-black">
      <div className="flex flex-col w-full h-full">
        <div className="flex w-full h-12 pr-[31.5px] pl-[33px] pb-[31px]">
          <div className="flex justify-between w-full">
            <img src="/images/mobile/search.png" />
            <div>Coin Market</div>
            <img src="/images/mobile/market_graph.png" />
          </div>
        </div>
        <div className="flex justify-between w-full h-[54px] pr-8 pl-[33px] pb-6">
          <div className="flex justify-between w-full h-full">
            <div className="flex flex-row justify-between items-center w-[152px] h-full">
              <div className="px-4 py-2 bg-[#FFFFFF] bg-opacity-5 mr-4">
                <button>Rank</button>
              </div>
              <div className="px-4 py-2 bg-[#FFFFFF] bg-opacity-5">
                <button>Volume</button>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <div className="px-4 py-2 bg-[#FFFFFF] bg-opacity-5">
                <button>24 Hours</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full px-[9px] overflow-auto">
          {data.map((item: any) => (
            <div className="flex flex-row justify-between items-center w-full h-[63px] pl-4 pr-6">
              <div className="flex justify-center items-center w-9 h-8 rounded-[18px] bg-[#1B1C24] mr-2">
                <div className="flex justify-center items-center w-full h-full">
                  <img src={`/images/mobile/${item.abbr}.png`} />
                </div>
              </div>
              <div className="flex flex-row w-full h-full py-3">
                <div className="flex flex-col w-3/5 h-full">
                  <div className="flex justify-start">
                    {`${item.id}.${item.type}`}
                    <span className="text-[#666666]">{`(${item.abbr})`}</span>
                  </div>
                  <div className="flex justify-start text-[#666666]">
                    {`$${item.amount} Billions`}
                  </div>
                </div>
                <div className="flex flex-col w-2/5 h-full">
                  <div className="flex justify-end">{`$${item.price}`}</div>
                  <div
                    className={`flex justify-end ${
                      item.delta > 0 ? "text-[#32CC86]" : "text-[#FC3044]"
                    }`}
                  >
                    {`${item.delta > 0 ? "+" : "-"}$${Math.abs(item.delta)}(${
                      item.delta > 0 ? "+" : "-"
                    }${Math.abs(item.percent)}%)`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full h-full pb-[16px] px-8 bg-[#0E0F18]">
          <div className="flex justify-between items-center w-full h-full">
            <div>
              <img src="/images/mobile/gallery-vertical 1.png" />
            </div>
            <div>
              <img src="/images/mobile/receipt (1) 1.png" />
            </div>
            <div>
              <img src="/images/mobile/Vector.png" />
            </div>
            <div>
              <img src="/images/mobile/star.png" />
            </div>
            <div>
              <img src="/images/mobile/settings.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

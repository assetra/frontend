"use client";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AddContext";
import MobileHome from "@/components/mobile/homePage";

export default function HomePage() {
  const appContext = useContext(AuthContext);
  useEffect(() => {
    appContext.setNavbarState(2);
  }, []);

  interface IData {
    id: number;
    type: string;
    abbr: string;
    amount: number;
    price: number;
    delta: number;
    percent: number;
  }

  const data: IData[] = [
    {
      id: 1,
      type: "Bitcoin",
      abbr: "BTC",
      amount: 112.1,
      price: 6456.45,
      delta: 74.36,
      percent: 1.15,
    },
    {
      id: 2,
      type: "Ethereum",
      abbr: "ETH",
      amount: 20.9,
      price: 203.11,
      delta: -3.86,
      percent: -1.9,
    },
    {
      id: 3,
      type: "Ripple",
      abbr: "XRP",
      amount: 18.1,
      price: 8682.45,
      delta: 0.01,
      percent: 3.07,
    },
    {
      id: 4,
      type: "Bitcoin Cash",
      abbr: "BCH",
      amount: 7.6,
      price: 6456.45,
      delta: 74.36,
      percent: 1.15,
    },
    {
      id: 5,
      type: "Litecoin",
      abbr: "LTC",
      amount: 4.8,
      price: 788.54,
      delta: 0.07,
      percent: 1.28,
    },
    {
      id: 6,
      type: "Tron",
      abbr: "TRX",
      amount: 4.4,
      price: 8682.45,
      delta: -0.01,
      percent: -3.05,
    },
    {
      id: 7,
      type: "EOS",
      abbr: "EOS",
      amount: 3.1,
      price: 6456.45,
      delta: -0.67,
      percent: -1.28,
    },
    {
      id: 8,
      type: "Tether",
      abbr: "USDT",
      amount: 2.1,
      price: 0.983,
      delta: 0.01,
      percent: 1.04,
    },
    {
      id: 9,
      type: "Cardano",
      abbr: "ADA",
      amount: 3.1,
      price: 0.075,
      delta: -0.01,
      percent: -2.89,
    },
    {
      id: 1,
      type: "Bitcoin",
      abbr: "BTC",
      amount: 112.1,
      price: 6456.45,
      delta: 74.36,
      percent: 1.15,
    },
    {
      id: 2,
      type: "Ethereum",
      abbr: "ETH",
      amount: 20.9,
      price: 203.11,
      delta: -3.86,
      percent: -1.9,
    },
    {
      id: 3,
      type: "Ripple",
      abbr: "XRP",
      amount: 18.1,
      price: 8682.45,
      delta: 0.01,
      percent: 3.07,
    },
    {
      id: 4,
      type: "Bitcoin Cash",
      abbr: "BCH",
      amount: 7.6,
      price: 6456.45,
      delta: 74.36,
      percent: 1.15,
    },
    {
      id: 5,
      type: "Litecoin",
      abbr: "LTC",
      amount: 4.8,
      price: 788.54,
      delta: 0.07,
      percent: 1.28,
    },
    {
      id: 6,
      type: "Tron",
      abbr: "TRX",
      amount: 4.4,
      price: 8682.45,
      delta: -0.01,
      percent: -3.05,
    },
    {
      id: 7,
      type: "EOS",
      abbr: "EOS",
      amount: 3.1,
      price: 6456.45,
      delta: -0.67,
      percent: -1.28,
    },
    {
      id: 8,
      type: "Tether",
      abbr: "USDT",
      amount: 2.1,
      price: 0.983,
      delta: 0.01,
      percent: 1.04,
    },
    {
      id: 9,
      type: "Cardano",
      abbr: "ADA",
      amount: 3.1,
      price: 0.075,
      delta: -0.01,
      percent: -2.89,
    },
    {
      id: 1,
      type: "Bitcoin",
      abbr: "BTC",
      amount: 112.1,
      price: 6456.45,
      delta: 74.36,
      percent: 1.15,
    },
    {
      id: 2,
      type: "Ethereum",
      abbr: "ETH",
      amount: 20.9,
      price: 203.11,
      delta: -3.86,
      percent: -1.9,
    },
    {
      id: 3,
      type: "Ripple",
      abbr: "XRP",
      amount: 18.1,
      price: 8682.45,
      delta: 0.01,
      percent: 3.07,
    },
    {
      id: 4,
      type: "Bitcoin Cash",
      abbr: "BCH",
      amount: 7.6,
      price: 6456.45,
      delta: 74.36,
      percent: 1.15,
    },
    {
      id: 5,
      type: "Litecoin",
      abbr: "LTC",
      amount: 4.8,
      price: 788.54,
      delta: 0.07,
      percent: 1.28,
    },
    {
      id: 6,
      type: "Tron",
      abbr: "TRX",
      amount: 4.4,
      price: 8682.45,
      delta: -0.01,
      percent: -3.05,
    },
    {
      id: 7,
      type: "EOS",
      abbr: "EOS",
      amount: 3.1,
      price: 6456.45,
      delta: -0.67,
      percent: -1.28,
    },
    {
      id: 8,
      type: "Tether",
      abbr: "USDT",
      amount: 2.1,
      price: 0.983,
      delta: 0.01,
      percent: 1.04,
    },
    {
      id: 9,
      type: "Cardano",
      abbr: "ADA",
      amount: 3.1,
      price: 0.075,
      delta: -0.01,
      percent: -2.89,
    },
    {
      id: 1,
      type: "Bitcoin",
      abbr: "BTC",
      amount: 112.1,
      price: 6456.45,
      delta: 74.36,
      percent: 1.15,
    },
    {
      id: 2,
      type: "Ethereum",
      abbr: "ETH",
      amount: 20.9,
      price: 203.11,
      delta: -3.86,
      percent: -1.9,
    },
    {
      id: 3,
      type: "Ripple",
      abbr: "XRP",
      amount: 18.1,
      price: 8682.45,
      delta: 0.01,
      percent: 3.07,
    },
    {
      id: 4,
      type: "Bitcoin Cash",
      abbr: "BCH",
      amount: 7.6,
      price: 6456.45,
      delta: 74.36,
      percent: 1.15,
    },
    {
      id: 5,
      type: "Litecoin",
      abbr: "LTC",
      amount: 4.8,
      price: 788.54,
      delta: 0.07,
      percent: 1.28,
    },
    {
      id: 6,
      type: "Tron",
      abbr: "TRX",
      amount: 4.4,
      price: 8682.45,
      delta: -0.01,
      percent: -3.05,
    },
    {
      id: 7,
      type: "EOS",
      abbr: "EOS",
      amount: 3.1,
      price: 6456.45,
      delta: -0.67,
      percent: -1.28,
    },
    {
      id: 8,
      type: "Tether",
      abbr: "USDT",
      amount: 2.1,
      price: 0.983,
      delta: 0.01,
      percent: 1.04,
    },
    {
      id: 9,
      type: "Cardano",
      abbr: "ADA",
      amount: 3.1,
      price: 0.075,
      delta: -0.01,
      percent: -2.89,
    },
    {
      id: 1,
      type: "Bitcoin",
      abbr: "BTC",
      amount: 112.1,
      price: 6456.45,
      delta: 74.36,
      percent: 1.15,
    },
    {
      id: 2,
      type: "Ethereum",
      abbr: "ETH",
      amount: 20.9,
      price: 203.11,
      delta: -3.86,
      percent: -1.9,
    },
    {
      id: 3,
      type: "Ripple",
      abbr: "XRP",
      amount: 18.1,
      price: 8682.45,
      delta: 0.01,
      percent: 3.07,
    },
    {
      id: 4,
      type: "Bitcoin Cash",
      abbr: "BCH",
      amount: 7.6,
      price: 6456.45,
      delta: 74.36,
      percent: 1.15,
    },
    {
      id: 5,
      type: "Litecoin",
      abbr: "LTC",
      amount: 4.8,
      price: 788.54,
      delta: 0.07,
      percent: 1.28,
    },
    {
      id: 6,
      type: "Tron",
      abbr: "TRX",
      amount: 4.4,
      price: 8682.45,
      delta: -0.01,
      percent: -3.05,
    },
    {
      id: 7,
      type: "EOS",
      abbr: "EOS",
      amount: 3.1,
      price: 6456.45,
      delta: -0.67,
      percent: -1.28,
    },
    {
      id: 8,
      type: "Tether",
      abbr: "USDT",
      amount: 2.1,
      price: 0.983,
      delta: 0.01,
      percent: 1.04,
    },
    {
      id: 9,
      type: "Cardano",
      abbr: "ADA",
      amount: 3.1,
      price: 0.075,
      delta: -0.01,
      percent: -2.89,
    },
  ];

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

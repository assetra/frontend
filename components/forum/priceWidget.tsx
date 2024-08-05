import React from "react";
import Card from "../dashboard/card";

const symbols = [
  "BINANCE:BTCUSD",
  "COINBASE:ETHUSD",
  "COINBASE:USDTUSD",
  "BINANCE:BNBUSD",
];

const priceWidget: React.FC = () => {
  return (
    <>
      <div className="flex h-full">
        <div className="flex flex-col w-full h-full text-white">
          <div className="flex flex-col pt-8 pb-2">
            <div className="text-base pb-2 text-[#A5ADCF]">
              In the past 24 hours
            </div>
            <div>
              <h1 className="text-xl font-semibold">
                Market is up <span className="text-[#11CABE]">6.73%</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-full overflow-y-auto">
            {symbols.map((symbol, index) => (
              <div key={index} className="w-full py-4 pr-6">
                <Card cryptoPair={symbol} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default priceWidget;

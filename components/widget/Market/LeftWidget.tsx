"use client";
import React from "react";
import Card from "@/components/dashboard/card";

const LeftWidget: React.FC = () => {
  const symbols = [
    "BINANCE:BTCUSD",
    "COINBASE:ETHUSD",
    "COINBASE:USDTUSD",
    "BINANCE:BNBUSD",
  ];
  return (
    <div className="newWidget grid-stack-item">
      <div className="flex h-[30rem] w-full pr-3">
        <div className="flex flex-col w-full h-full text-white">
          <div className="flex flex-col w-full overflow-y-auto">
            {symbols.map((symbol, index) => (
              <div key={index} className="w-full py-4 pr-6">
                <Card cryptoPair={symbol} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftWidget;

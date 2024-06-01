"use client";
import React from "react";
import { MiniChart } from "react-tradingview-embed";

const Card = ({ cryptoPair }: any) => {
  return (
    <div className="w-full rounded-xl">
      <MiniChart
        widgetProps={{
          colorTheme: "dark",
          symbol: cryptoPair,
          width: "100%",
          height: "100%",
          locale: "en",
          dateRange: "1D",
          underLineColor: "rgba(101, 101, 101, 0.36)",
          isTransparent: false,
          autosize: false,
          //noTimeScale: true,
        }}
      />
    </div>
  );
};

export default Card;

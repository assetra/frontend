"use client";
import { AdvancedChart, MiniChart } from "react-tradingview-embed";

function ExchangeSlide({ cryptoPair }: any) {
  return (
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
  );
}

export default ExchangeSlide;

"use client";
import { MiniChart } from "react-tradingview-embed";

function ExchangeSlide({ cryptoPair }: any) {
  return (
    <div className="w-[24svw] rounded-[2rem] py-3 px-6">
      <MiniChart
        widgetProps={{
          colorTheme: "dark",
          symbol: cryptoPair,
          width: "100%",
          height: "100%",
          locale: "en",
          dateRange: "3M",
          underLineColor: "rgba(101, 101, 101, 0.36)",
          isTransparent: false,
          autosize: false,
          //noTimeScale: true,
        }}
      />
    </div>
  );
}

export default ExchangeSlide;

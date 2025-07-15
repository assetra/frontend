"use client";
import { MiniChart } from "react-tradingview-embed";

function ExchangeSlide({ cryptoPair }: any) {
  const symbolName = cryptoPair.split(":")[1].replace("USD", "");

  return (
    <div className="bg-gray-900 rounded-lg py-3 px-3 border border-gray-800">
      <div className="w-full h-auto">
        <MiniChart
          widgetProps={{
            colorTheme: "dark",
            symbol: cryptoPair,
            width: "100%",
            height: "100%",
            locale: "en",
            dateRange: "3M",
            underLineColor: "rgba(101, 101, 101, 0.36)",
            isTransparent: true,
            autosize: true,
          }}
        />
      </div>
    </div>
  );
}

export default ExchangeSlide;

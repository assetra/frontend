"use client";

import React, { useEffect, useRef } from "react";

const MiniChart = React.lazy(() => import("react-tradingview-embed").then((module) => ({ default: module.MiniChart })));

const Card = ({ cryptoPair }: any) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (overlayRef.current) overlayRef.current.style.display = "none";
    }, 2000);
  }, []);

  return (
    <div className="relative">
      <div className={`w-full rounded-xl `}>
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
          }}
          widgetPropsAny={{
            noTImeScale: true,
          }}
        />
      </div>
      <div
        ref={overlayRef}
        className="bg-[#1e222d] h-[150px] w-full rounded-xl text-center justify-center flex items-center absolute top-0 text-white"
      >
        Loading...
      </div>
    </div>
  );
};

export default Card;

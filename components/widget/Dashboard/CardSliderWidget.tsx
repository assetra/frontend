"use client";

import React from "react";
import Slider from "react-slick";
import { MiniChart } from "react-tradingview-embed";
const CardSliderWidget: React.FC = () => {
  const symbols = [
    "BINANCE:BTCUSD",
    "COINBASE:ETHUSD",
    "COINBASE:USDTUSD",
    "BINANCE:BNBUSD",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="newWidget grid-stack-item">
      <div className="slider-container px-6">
        <Slider className="flex space-x-2" {...settings}>
          {symbols.map((slide, i) => (  
            <div key={i}>
              <ExchangeSlide cryptoPair={slide} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSliderWidget;


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
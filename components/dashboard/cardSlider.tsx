"use client";

import React from "react";
import dynamic from "next/dynamic";
import Slider from "react-slick";

const Card = dynamic(() => import("@/components/dashboard/card"));

function CardSlider() {
  const width = window.innerWidth;
  const symbols = ["BINANCE:BTCUSD", "COINBASE:ETHUSD", "COINBASE:USDTUSD", "BINANCE:BNBUSD"];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: width > 1024 ? 4 : 2,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container m-0">
      <Slider className="flex space-x-2" {...settings}>
        {symbols.map((slide: String, i: number) => {
          return (
            <div className="px-2 py-2 rounded-3xl">
              <Card cryptoPair={slide} key={i} className=" rounded-3xl" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default CardSlider;

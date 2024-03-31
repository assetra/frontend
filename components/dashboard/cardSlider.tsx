"use client";

import ExchangeSlide from "./exchange-slide";
import React, { useState } from "react";
import Slider from "react-slick";

function CardSlider() {
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
    <div className="slider-container">
      <Slider className="flex space-x-2" {...settings}>
        {symbols.map((slide: String, i: number) => {
          return (
            <div className="px-2 py-2 rounded-3xl">
              <ExchangeSlide
                cryptoPair={slide}
                key={i}
                className=" rounded-3xl"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default CardSlider;

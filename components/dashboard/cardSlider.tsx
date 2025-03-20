"use client";
import ExchangeSlide from "./exchange-slide";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CardSlider() {
  const symbols = [
    "BINANCE:BTCUSD",
    "COINBASE:ETHUSD",
    "COINBASE:USDTUSD",
    "BINANCE:BNBUSD",
  ];

  useEffect(() => {
    const handleResize = () => {
      window.dispatchEvent(new Event("resize"));
    };

    setTimeout(handleResize, 100);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipeToSlide: true,
    touchThreshold: 10,
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="w-full mt-4 pb-8">
      <div className="mx-2 sm:mx-4">
        <div className="slider-container w-full overflow-visible">
          <Slider {...settings}>
            {symbols.map((slide, i) => (
              <div key={i} className="px-2">
                <ExchangeSlide cryptoPair={slide} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Add custom navigation for mobile */}
      <div className="flex justify-center mt-4 md:hidden">
        <div className="flex space-x-1">
          {symbols.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-gray-500"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardSlider;

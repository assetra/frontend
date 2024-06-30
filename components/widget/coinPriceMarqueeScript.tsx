import Script from "next/script";
import React from "react";

const coinPriceMarqueeScript: React.FC = () => (
  <Script
    src="https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js"
    strategy="afterInteractive"
  />
);

export default coinPriceMarqueeScript;

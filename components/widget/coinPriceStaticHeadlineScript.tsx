import Script from "next/script";
import React from "react";

const coinPriceStaticHeadlineScript: React.FC = () => (
  <Script
    src="https://widgets.coingecko.com/gecko-coin-price-static-headline-widget.js"
    strategy="afterInteractive"
  />
);

export default coinPriceStaticHeadlineScript;

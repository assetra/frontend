import Script from "next/script";
import React from "react";

const CoinPriceChartScript: React.FC = () => (
  <Script
    src="https://widgets.coingecko.com/gecko-coin-price-chart-widget.js"
    strategy="afterInteractive"
  />
);

export default CoinPriceChartScript;

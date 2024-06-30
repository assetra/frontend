import Script from "next/script";
import React from "react";

const coinCompareChartScript: React.FC = () => (
  <Script
    src="https://widgets.coingecko.com/gecko-coin-compare-chart-widget.js"
    strategy="afterInteractive"
  />
);

export default coinCompareChartScript;

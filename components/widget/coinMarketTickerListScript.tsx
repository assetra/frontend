import Script from "next/script";
import React from "react";

const CoinMarketTickerListScript: React.FC = () => (
  <Script
    src="https://widgets.coingecko.com/gecko-coin-market-ticker-list-widget.js"
    strategy="afterInteractive"
  />
);

export default CoinMarketTickerListScript;

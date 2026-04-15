import Script from "next/script";
import React from "react";

const CoinListScript: React.FC = () => (
  <Script
    src="https://widgets.coingecko.com/gecko-coin-list-widget.js"
    strategy="afterInteractive"
  />
);

export default CoinListScript;

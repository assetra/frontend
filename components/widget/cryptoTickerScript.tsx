import Script from "next/script";
import React from "react";

const cryptoTickerScript: React.FC = () => (
  <Script
    src="https://widgets.coingecko.com/gecko-coin-ticker-widget.js"
    strategy="afterInteractive"
  />
);

export default cryptoTickerScript;

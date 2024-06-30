import Script from "next/script";
import React from "react";

const randomCoinScript: React.FC = () => (
  <Script
    src="https://widgets.coingecko.com/gecko-random-coin-widget.js"
    strategy="afterInteractive"
  />
);

export default randomCoinScript;


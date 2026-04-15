import Script from "next/script";
import React from "react";

const coinConverterScript: React.FC = () => (
  <Script
    src="https://widgets.coingecko.com/gecko-coin-converter-widget.js"
    strategy="afterInteractive"
  />
);

export default coinConverterScript;

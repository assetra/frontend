import Script from "next/script";
import React from "react";

const coinHeatmapScript: React.FC = () => (
  <Script
    src="https://widgets.coingecko.com/gecko-coin-heatmap-widget.js"
    strategy="afterInteractive"
  />
);

export default coinHeatmapScript;

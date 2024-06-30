import React, { useEffect } from "react";

// Extend JSX.IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "gecko-coin-heatmap-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        locale?: string;
        outlined?: boolean;
        top?: string; // up to 100. Coins are sorted by highest market cap first
      };
    }
  }
}

const coinHeatmapWidget: React.FC = () => {
  useEffect(() => {
    const script = document.querySelector(
      'script[src="https://widgets.coingecko.com/gecko-coin-heatmap-widget.js"]'
    ) as HTMLScriptElement | null;
    if (script) {
      script.onload = () => {
        // Ensure the widget is loaded
      };
    }
  }, []);

  return (
    <div className="newWidget grid-stack-item">
      <div className="card bg-base-100 p-2 overflow-hidden">
        <gecko-coin-heatmap-widget
          locale="en"
          outlined={true}
          dark-mode="true"
          transparent-background="true"
          top="100" // up to 100. Coins are sorted by highest market cap first
        ></gecko-coin-heatmap-widget>
      </div>
    </div>
  );
};

export default coinHeatmapWidget;

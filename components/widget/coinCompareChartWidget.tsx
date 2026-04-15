import React, { useEffect } from "react";

// Extend JSX.IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "gecko-coin-compare-chart-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        locale?: string;
        outlined?: boolean;
        "initial-currency"?: string;
      };
    }
  }
}

const coinCompareChartWidget: React.FC = () => {
  useEffect(() => {
    const script = document.querySelector(
      'script[src="https://widgets.coingecko.com/gecko-coin-compare-chart-widget.js"]'
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
        <gecko-coin-compare-chart-widget
          locale="en"
          outlined={true}
          initial-currency="usd"
          dark-mode="true"
          transparent-background="true"
          coin-ids=""
        ></gecko-coin-compare-chart-widget>
      </div>
    </div>
  );
};

export default coinCompareChartWidget;

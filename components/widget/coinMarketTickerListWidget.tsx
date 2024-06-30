import React, { useEffect } from "react";

// Extend JSX.IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "gecko-coin-market-ticker-list-widget": React.DetailedHTMLProps<
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

const coinMarketTickerListWidget: React.FC = () => {
  useEffect(() => {
    const script = document.querySelector(
      'script[src="https://widgets.coingecko.com/gecko-coin-market-ticker-list-widget.js"]'
    ) as HTMLScriptElement | null;
    if (script) {
      script.onload = () => {
        // Ensure the widget is loaded
      };
    }
  }, []);

  return (
    <div className="newWidget grid-stack-item" style={{ transform: `scale(0.7)`}}>
      <div className="card bg-base-100 overflow-hidden">
        <gecko-coin-market-ticker-list-widget
          locale="en"
          outlined={true}
          initial-currency="usd"
          dark-mode="true"
          transparent-background="true"
          coin-ids=""
        ></gecko-coin-market-ticker-list-widget>
      </div>
    </div>
  );
};

export default coinMarketTickerListWidget;

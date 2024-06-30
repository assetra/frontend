import React, { useEffect } from "react";

// Extend JSX.IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "gecko-coin-ticker-widget": React.DetailedHTMLProps<
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

const cryptoTickerWidget: React.FC = () => {
  useEffect(() => {
    const script = document.querySelector(
      'script[src="https://widgets.coingecko.com/gecko-coin-ticker-widget.js"]'
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
        <gecko-coin-ticker-widget
          locale="en"
          outlined={true}
          initial-currency="usd"
          dark-mode="true"
          transparent-background="true"
          coin-ids=""
        ></gecko-coin-ticker-widget>
      </div>
    </div>
  );
};

export default cryptoTickerWidget;

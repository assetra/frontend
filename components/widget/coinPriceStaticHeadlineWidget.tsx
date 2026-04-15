import React, { useEffect } from "react";

// Extend JSX.IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "gecko-coin-price-static-headline-widget": React.DetailedHTMLProps<
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

const coinPriceStaticHeadlineWidget: React.FC = () => {
  useEffect(() => {
    const script = document.querySelector(
      'script[src="https://widgets.coingecko.com/gecko-coin-price-static-headline-widget.js"]'
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
        <gecko-coin-price-static-headline-widget
          locale="en"
          outlined={true}
          initial-currency="usd"
          dark-mode="true"
          transparent-background="true"
          coin-ids=""
        ></gecko-coin-price-static-headline-widget>
      </div>
    </div>
  );
};

export default coinPriceStaticHeadlineWidget;

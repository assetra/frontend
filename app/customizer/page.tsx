"use client";
import React, { useEffect, useCallback, useRef, useContext } from "react";
import {
  GridStack,
  GridStackOptions,
  GridStackNode,
  GridItemHTMLElement,
} from "gridstack";
import "gridstack/dist/gridstack.min.css";
import { AuthContext } from "@/context/AddContext";
import CoinCompareChartWidget from "@/components/widget/coinCompareChartWidget";
import CoinCompareChartScript from "@/components/widget/coinCompareChartScript";
import CoinConverterWidget from "@/components/widget/coinConverterWidget";
import CoinConverterScript from "@/components/widget/coinConverterScript";
import CoinHeatmapWidget from "@/components/widget/coinHeatmapWidget";
import CoinHeatmapScript from "@/components/widget/coinHeatmapScript";
import CoinMarketTickerListWidget from "@/components/widget/coinMarketTickerListWidget";
import CoinMarketTickerListScript from "@/components/widget/coinMarketTickerListScript";
import CoinPriceChartWidget from "@/components/widget/coinPriceChartWidget";
import CoinPriceChartScript from "@/components/widget/coinPriceChartScript";
import CoinPriceMarqueeWidget from "@/components/widget/coinPriceMarqueeWidget";
import CoinPriceMarqueeScript from "@/components/widget/coinPriceMarqueeScript";
import CoinPriceStaticHeadlineWidget from "@/components/widget/coinPriceStaticHeadlineWidget";
import CoinPriceStaticHeadlineScript from "@/components/widget/coinPriceStaticHeadlineScript";
import CryptoTickerWidget from "@/components/widget/cryptoTickerWidget";
import CryptoTickerScript from "@/components/widget/cryptoTickerScript";
import RandomCoinWidget from "@/components/widget/randomCoinWidget";
import RandomCoinScript from "@/components/widget/randomCoinScript";
import CoinListWidget from "@/components/widget/coinPriceMarqueeWidget";
import CoinListScript from "@/components/widget/coinPriceMarqueeScript";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Customizer',
};

interface WidgetPack {
  widget: React.FC;
  script: React.FC;
  image: string;
}

const DraggableContainer: React.FC = () => {
  const gridRef = useRef<GridStack | null>(null);

  const initializeGrid = useCallback(() => {
    const options: GridStackOptions = {
      cellHeight: 70,
      acceptWidgets: true,
      removable: "#trash",
      margin: 10,
    };

    // Wait for DOM to be ready
    setTimeout(() => {
      const gridElement = document.querySelector(
        ".grid-stack"
      ) as GridItemHTMLElement;
      if (gridElement) {
        const grid = GridStack.init(options, gridElement);
        gridRef.current = grid;

        if (grid) {
          GridStack.setupDragIn(".newWidget", {
            appendTo: "body",
            helper: "clone",
          });

          grid.load([]);

          grid.on(
            "added removed change",
            (event: Event, items: GridStackNode[]) => {
              const itemsInfo = items
                .map((item) => `(x,y)=${item.x},${item.y}`)
                .join(" ");
              console.log(
                `${(event as CustomEvent).type} ${
                  items.length
                } items: ${itemsInfo}`
              );
            }
          );
        } else {
          console.error("Failed to initialize GridStack");
        }
      } else {
        console.error("Grid element not found");
      }
    }, 0);

    return () => {
      if (gridRef.current) {
        gridRef.current.destroy();
        gridRef.current = null;
      }
    };
  }, []);
  const appContext = useContext(AuthContext);
  useEffect(() => {
    appContext.setNavbarState(true);
    const cleanup = initializeGrid();
    return cleanup;
  }, [initializeGrid]);

  return (
    <>
      <main className="flex h-[calc(100vh-3rem)] items-center justify-between p-4 mt-12">
        <GridContainer />
        <Sidebar />
      </main>
    </>
  );
};

const GridContainer: React.FC = () => (
  <div className="w-[85%] h-full rounded overflow-hidden">
    <div className="grid-stack bg-base-300 shadow w-full min-h-full p-2"></div>
  </div>
);

const widgetPacks: WidgetPack[] = [
  {
    widget: CoinCompareChartWidget,
    script: CoinCompareChartScript,
    image: "/assets/widget/compare.jpg",
  },
  {
    widget: CoinConverterWidget,
    script: CoinConverterScript,
    image: "/assets/widget/converter.jpg",
  },
  {
    widget: CoinHeatmapWidget,
    script: CoinHeatmapScript,
    image: "/assets/widget/heatmap.jpg",
  },
  {
    widget: CoinListWidget,
    script: CoinListScript,
    image: "/assets/widget/coinlist.jpg",
  },
  {
    widget: CoinPriceChartWidget,
    script: CoinPriceChartScript,
    image: "/assets/widget/pricechart.jpg",
  },
  {
    widget: CoinPriceMarqueeWidget,
    script: CoinPriceMarqueeScript,
    image: "/assets/widget/marquee.jpg",
  },
  {
    widget: CoinPriceStaticHeadlineWidget,
    script: CoinPriceStaticHeadlineScript,
    image: "/assets/widget/headline.jpg",
  },
  {
    widget: CryptoTickerWidget,
    script: CryptoTickerScript,
    image: "/assets/widget/ticker.jpg",
  },
  {
    widget: RandomCoinWidget,
    script: RandomCoinScript,
    image: "/assets/widget/random.jpg",
  },
  {
    widget: CoinMarketTickerListWidget,
    script: CoinMarketTickerListScript,
    image: "/assets/widget/tickerlist.jpg",
  },
];

const Sidebar: React.FC = () => (
  <aside className="bg-base-300 w-[14%] h-full rounded p-2 overflow-hidden">
    <TrashBin />
    <div className="bg-base-300 w-full h-full overflow-y-auto scroll-m-0">
      {widgetPacks.map((widgetPack, index) => (
        <Pack
          key={index}
          widget={widgetPack.widget}
          script={widgetPack.script}
          image={widgetPack.image}
        />
      ))}
      <TrashBin />
    </div>
  </aside>
);

interface PackProps {
  widget: React.FC;
  script: React.FC;
  image: string;
}

const Pack: React.FC<PackProps> = ({
  widget: WidgetComponent,
  script: ScriptComponent,
  image,
}) => (
  <div
    className="flex align-middle items-center rounded w-full aspect-square p-2 mb-2 overflow-hidden"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <ScriptComponent />
    <div className="opacity-0">
      <WidgetComponent />
    </div>
  </div>
);

const TrashBin: React.FC = () => (
  <div
    id="trash"
    className="flex flex-col bg-red-200 items-center rounded w-full aspect-square p-2 mb-2 trash"
  >
    <div className="my-auto items-center flex flex-col">
      <TrashIcon />
      <p className="text-center text-red-700 mt-3">
        Drop here to remove widget!
      </p>
    </div>
  </div>
);

const TrashIcon: React.FC = () => (
  <svg
    className="text-red-700 size-8"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6h18"></path>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
    <line x1="10" x2="10" y1="11" y2="17"></line>
    <line x1="14" x2="14" y1="11" y2="17"></line>
  </svg>
);

export default DraggableContainer;

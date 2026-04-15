"use client";
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
} from "react";
import {
  GridStack,
  GridStackOptions,
  GridStackNode,
  GridItemHTMLElement,
} from "gridstack";
import "gridstack/dist/gridstack.min.css";
import { AuthContext } from "@/contexts/AddContext";
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
import ExchangeWidget from "@/components/widget/Dashboard/ExchangeWidget";
import CustomChartWidget from "@/components/widget/Dashboard/CustomChartWidget";
import TransactionWidget from "@/components/widget/Dashboard/TransactionWidget";
import BalanceWidget from "@/components/widget/Dashboard/BalanceWidget";
import LeftWidget from "@/components/widget/Market/LeftWidget";
import RightWidget from "@/components/widget/Market/RightWidget";
import RampWidget from "@/components/widget/Exchange/RampWidget";
import AdvanceChartWidget from "@/components/widget/Exchange/AdvanceChartWidget";
import OrderWidget from "@/components/widget/Exchange/OrderWidget";
import HeaderWidget from "@/components/widget/Exchange/HeaderWidget";
import ReactDOM from "react-dom/client";
import { Button } from "@/components/swap/ui/Button";

interface WidgetPack {
  widget: React.FC;
  script: React.FC | null;
  image: string;
  name: string; // Add a name property to identify widgets
}

interface WidgetConfig extends GridStackNode {
  name: string;
}
const LAYOUT_STORAGE_KEY = "customizerLayout";

const DraggableContainer: React.FC = () => {
  const gridRef = useRef<GridStack | null>(null);

  const saveLayout = useCallback(() => {
    if (gridRef.current) {
      const currentLayout: WidgetConfig[] = gridRef.current.engine.nodes
        .map((node) => ({
          name: node.el?.getAttribute("data-widget-name") || "",
          x: node.x,
          y: node.y,
          w: node.w,
          h: node.h,
        }))
        .filter((item) => item.name);

      try {
        const existingLayoutJSON = localStorage.getItem(LAYOUT_STORAGE_KEY);
        const existingLayout: WidgetConfig[] = existingLayoutJSON
          ? JSON.parse(existingLayoutJSON)
          : [];

        // Create a map of existing widgets for faster lookup
        const existingWidgetMap = new Map(
          existingLayout.map((widget) => [widget.name, widget])
        );

        // Update existing widgets or add new ones
        currentLayout.forEach((widget) => {
          existingWidgetMap.set(widget.name, widget);
        });

        // Convert the map back to an array
        const updatedLayout = Array.from(existingWidgetMap.values());

        if (updatedLayout.length > 0) {
          localStorage.setItem(
            LAYOUT_STORAGE_KEY,
            JSON.stringify(updatedLayout)
          );
          console.log("Saved layout:", updatedLayout);
        } else {
          console.warn(
            "No widgets to save. Layout in localStorage remains unchanged."
          );
        }
      } catch (error) {
        console.error("Failed to save layout to localStorage:", error);
      }
    }
  }, []);

  const loadLayout = useCallback((): WidgetConfig[] => {
    try {
      const savedLayout = localStorage.getItem(LAYOUT_STORAGE_KEY);
      if (savedLayout) {
        const layout = JSON.parse(savedLayout) as WidgetConfig[];
        const validLayout = layout.filter(
          (item) =>
            item.name &&
            typeof item.x === "number" &&
            typeof item.y === "number" &&
            typeof item.w === "number" &&
            typeof item.h === "number"
        );

        if (validLayout.length > 0) {
          console.log("Loaded layout:", validLayout);
          return validLayout;
        } else {
          console.warn(
            "No valid widgets found in saved layout. Starting with empty layout."
          );
          localStorage.removeItem(LAYOUT_STORAGE_KEY);
        }
      }
    } catch (error) {
      console.error("Failed to load layout from localStorage:", error);
      localStorage.removeItem(LAYOUT_STORAGE_KEY);
    }
    return [];
  }, []);

  const removeWidgetFromStorage = useCallback((widgetName: string) => {
    try {
      const savedLayout = localStorage.getItem(LAYOUT_STORAGE_KEY);
      if (savedLayout) {
        const layout = JSON.parse(savedLayout) as WidgetConfig[];
        const updatedLayout = layout.filter((item) => item.name !== widgetName);

        if (updatedLayout.length > 0) {
          localStorage.setItem(
            LAYOUT_STORAGE_KEY,
            JSON.stringify(updatedLayout)
          );
          console.log(
            `Removed widget "${widgetName}" from storage. Updated layout:`,
            updatedLayout
          );
        } else {
          localStorage.removeItem(LAYOUT_STORAGE_KEY);
          console.log(
            `Removed last widget "${widgetName}" from storage. Layout cleared.`
          );
        }
      }
    } catch (error) {
      console.error("Failed to remove widget from localStorage:", error);
    }
  }, []);

  const renderWidget = useCallback(
    (widgetName: string, element: HTMLElement) => {
      const widgetPack = widgetPacks.find((wp) => wp.name === widgetName);
      if (widgetPack) {
        const { widget: WidgetComponent, script: ScriptComponent } = widgetPack;
        const content = document.createElement("div");
        content.className = "widget-content";

        try {
          const root = (ReactDOM as any).createRoot(content);
          root.render(
            <>
              {ScriptComponent && <ScriptComponent />}
              <WidgetComponent />
            </>
          );
          element.appendChild(content);
        } catch (error) {
          console.error("Error rendering widget:", error);
        }
      } else {
        console.error(`Widget pack not found for name: ${widgetName}`);
      }
    },
    []
  );

  const clearAllWidgets = useCallback(() => {
    if (gridRef.current) {
      gridRef.current.removeAll();
      localStorage.removeItem(LAYOUT_STORAGE_KEY);
      console.log("All widgets cleared from grid and local storage");
    }
  }, []);

  const initializeGrid = useCallback(() => {
    const options: GridStackOptions = {
      cellHeight: 70,
      acceptWidgets: true,
      removable: "#trash",
      margin: 10,
    };

    setTimeout(() => {
      const gridElement = document.querySelector(".grid-stack") as HTMLElement;
      if (gridElement) {
        const grid = GridStack.init(options, gridElement);
        gridRef.current = grid;

        if (grid) {
          GridStack.setupDragIn(".newWidget", {
            appendTo: "body",
            helper: "clone",
          });

          grid.removeAll();

          const savedLayout = loadLayout();
          console.log("Initializing grid with layout:", savedLayout);
          grid.load(savedLayout);

          savedLayout.forEach((widget) => {
            const element = grid.addWidget({ ...widget, content: "" });
            if (element) {
              renderWidget(widget.name, element);
            }
          });
          grid.on("change", (event: Event, items: GridStackNode[]) => {
            console.log("Grid event: change", items);
            saveLayout();
          });

          grid.on(
            "added removed change",
            (event: Event, items: GridStackNode[]) => {
              console.log(`Grid event: ${(event as CustomEvent).type}`, items);
              if ((event as CustomEvent).type === "removed") {
                items.forEach((item) => {
                  const widgetName = item.el?.getAttribute("data-widget-name");
                  if (widgetName) {
                    removeWidgetFromStorage(widgetName);
                  }
                });
              }
              saveLayout();
            }
          );

          grid.on(
            "dropped",
            (
              event: Event,
              previousWidget: GridStackNode,
              newWidget: GridStackNode
            ) => {
              console.log("Widget dropped:", newWidget);
              if (newWidget.el) {
                const widgetElement = newWidget.el as HTMLElement;
                const contentElement = widgetElement.querySelector(
                  ".grid-stack-item-content"
                );
                const nameElement = contentElement?.querySelector("span");
                const widgetName = nameElement?.textContent;
                console.log("Widget name:", widgetName);

                if (widgetName) {
                  widgetElement.setAttribute("data-widget-name", widgetName);
                  renderWidget(widgetName, widgetElement);
                  saveLayout();
                } else {
                  console.error("Widget name not found on dropped element");
                }
              } else {
                console.error("Dropped widget element is undefined");
              }
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
  }, [loadLayout, saveLayout, renderWidget, removeWidgetFromStorage]);

  const appContext = useContext(AuthContext);
  useEffect(() => {
    appContext.setNavbarState(true);
    const cleanup = initializeGrid();
    return cleanup;
  }, [initializeGrid, appContext]);

  return (
    <>
      <main className="flex h-[calc(100vh-4.5rem)] items-center justify-between p-4 mt-12">
        <GridContainer clearAllWidgets={clearAllWidgets} />
        <Sidebar />
      </main>
    </>
  );
};

const GridContainer: React.FC<SidebarProps> = ({ clearAllWidgets }) => (
  <div className="w-[85%] h-full rounded overflow-hidden relative">
    <div className="grid-stack bg-base-300 shadow w-full min-h-full p-2"></div>
    <Button
      onClick={clearAllWidgets}
      size="sm"
      className="btn btn-error  absolute top-[0.1rem] right-[0.1rem] transform z-10"
    >
      <h6 className="text-sm">Clear All Widgets</h6>
    </Button>
    {/* <Button
      onClick={() => {
        window.location.reload();
      }}
      size="sm"
      className="btn btn-error  absolute top-[0.1rem] right-[0.1rem] transform z-10"
    >
      Save
    </Button> */}
  </div>
);

const widgetPacks: WidgetPack[] = [
  {
    widget: CoinCompareChartWidget,
    script: CoinCompareChartScript,
    image: "/assets/widget/compare.jpg",
    name: "CoinCompareChart",
  },
  {
    widget: CoinConverterWidget,
    script: CoinConverterScript,
    image: "/assets/widget/converter.jpg",
    name: "CoinConverter",
  },
  {
    widget: CoinHeatmapWidget,
    script: CoinHeatmapScript,
    image: "/assets/widget/heatmap.jpg",
    name: "CoinHeatmap",
  },
  {
    widget: CoinListWidget,
    script: CoinListScript,
    image: "/assets/widget/coinlist.jpg",
    name: "CoinList",
  },
  {
    widget: CoinPriceChartWidget,
    script: CoinPriceChartScript,
    image: "/assets/widget/pricechart.jpg",
    name: "CoinPriceChart",
  },
  {
    widget: CoinPriceMarqueeWidget,
    script: CoinPriceMarqueeScript,
    image: "/assets/widget/marquee.jpg",
    name: "CoinPriceMarquee",
  },
  {
    widget: CoinPriceStaticHeadlineWidget,
    script: CoinPriceStaticHeadlineScript,
    image: "/assets/widget/headline.jpg",
    name: "CoinPriceStaticHeadline",
  },
  {
    widget: CryptoTickerWidget,
    script: CryptoTickerScript,
    image: "/assets/widget/ticker.jpg",
    name: "CryptoTicker",
  },
  {
    widget: RandomCoinWidget,
    script: RandomCoinScript,
    image: "/assets/widget/random.jpg",
    name: "RandomCoin",
  },
  {
    widget: CoinMarketTickerListWidget,
    script: CoinMarketTickerListScript,
    image: "/assets/widget/tickerlist.jpg",
    name: "CoinMarketTickerList",
  },
  {
    widget: ExchangeWidget,
    script: null,
    image: "/assets/widget/exchange.jpg",
    name: "Exchange",
  },
  {
    widget: CustomChartWidget,
    script: null,
    image: "/assets/widget/customcard.jpg",
    name: "CustomChart",
  },
  {
    widget: BalanceWidget,
    script: null,
    image: "/assets/widget/balance.png",
    name: "Balance",
  },
  {
    widget: LeftWidget,
    script: null,
    image: "/assets/widget/left.png",
    name: "Left",
  },
  {
    widget: RightWidget,
    script: null,
    image: "/assets/widget/right.png",
    name: "Right",
  },
  {
    widget: RampWidget,
    script: null,
    image: "/assets/widget/ramp.png",
    name: "Ramp",
  },
  {
    widget: AdvanceChartWidget,
    script: null,
    image: "/assets/widget/AdvanceChartWidget.png",
    name: "AdvanceChart",
  },
  {
    widget: OrderWidget,
    script: null,
    image: "/assets/widget/order.png",
    name: "Order",
  },
  {
    widget: HeaderWidget,
    script: null,
    image: "/assets/widget/header.png",
    name: "Header",
  },
  {
    widget: TransactionWidget,
    script: null,
    image: "/assets/widget/transaction.png",
    name: "Transaction",
  },
];

interface SidebarProps {
  clearAllWidgets: () => void;
}

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
          name={widgetPack.name}
        />
      ))}
      <TrashBin />
    </div>
  </aside>
);

interface PackProps {
  widget: React.FC;
  script: React.FC | null;
  image: string;
  name: string;
}

const Pack: React.FC<PackProps> = ({
  widget: WidgetComponent,
  script: ScriptComponent,
  image,
  name,
}) => (
  <div className="newWidget grid-stack-item">
    <div
      className="grid-stack-item-content flex align-middle items-center rounded w-full aspect-square p-2 mb-2 overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {ScriptComponent && <ScriptComponent />}
      <div className="hidden">
        <WidgetComponent />
      </div>
      <span className="text-white bg-black bg-opacity-50 p-1 rounded">
        {name}
      </span>
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

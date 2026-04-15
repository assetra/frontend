import React from "react";
import { AdvancedChart } from "react-tradingview-embed";

const AdvanceChartWidget: React.FC = () => {
  return (
    <div className="newWidget grid-stack-item w-full">
      <div className="flex flex-row justify-between min-w-[40rem] min-h-[15rem] pt-5">
        <div className="h-full w-full">
          <AdvancedChart
            widgetProps={{ width: "100%", height: "100%", theme: "dark" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AdvanceChartWidget;

import React from "react";
import CustomChart from "@/components/dashboard/customChart";
const CustomChartWidget: React.FC = () => {
  return (
    <div className="newWidget grid-stack-item">
      <CustomChart />
    </div>
  );
};
export default CustomChartWidget;

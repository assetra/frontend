"use client";
import Balance from "@/components/dashboard/balance";
import React from "react";

const BalanceWidget: React.FC = () => {
  return (
    <div className="newWidget grid-stack-item">
      <Balance />
    </div>
  );
};

export default BalanceWidget;

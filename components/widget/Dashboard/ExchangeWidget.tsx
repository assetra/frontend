"use client";
import React from "react";
import Exchange from "@/components/dashboard/exchange";

const ExchangeWidget: React.FC = () => {
  return (
    <div className="newWidget grid-stack-item">
      <Exchange />
    </div>
  );
};

export default ExchangeWidget;

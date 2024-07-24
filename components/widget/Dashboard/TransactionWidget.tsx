"use client";
import React from "react";
import Transaction from "@/components/dashboard/transaction";

const TransactionWidget: React.FC = () => {
  return (
    <div className="newWidget grid-stack-item">
      <Transaction />
    </div>
  );
};

export default TransactionWidget;

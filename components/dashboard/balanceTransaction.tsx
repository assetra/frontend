import React from "react";
import Balance_Wallet from "./balance_wallet";
import Transaction from "./transaction";

export default function BalanceTransaction() {
  return (
    <div className="w-full flex flex-col lg:flex-row h-full gap-4">
      <Balance_Wallet />
      <Transaction />
    </div>
  );
}

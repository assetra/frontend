import React from "react";
import Balance from "./balance";
import Transaction from "./transaction";
import Balance_Wallet from "./balance_wallet";

export default function BalanceTransaction() {
  return (
    <div className="w-full flex h-full">
      <Balance_Wallet />
      <Transaction />
    </div>
  );
}

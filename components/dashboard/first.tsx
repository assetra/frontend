import React from "react";
import Balance from "./balance";
import Transaction from "./transaction";
import Balance_Wallet from "./balance_wallet";

export default function First() {
  return (
    <div className="w-full flex h-72">
      <Balance_Wallet />
      <Transaction />
    </div>
  );
}

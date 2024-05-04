"use client";

import React, { useState, createContext, useContext } from "react";

const TransactionContext = createContext({
  exchange: "",
  setExchange: (_: string) => {},
  tradePair: "",
  setTradePair: (_: string) => {},
  amount: "",
  setAmount: (_: string) => {},
  portfolio: "",
  setPortfolio: (_: string) => {},
  date: "",
  setDate: (_: string) => {},
  time: "",
  setTime: (_: string) => {},
  deduct: false,
  setDeduct: (_: boolean) => {},
  fee: "",
  setFee: (_: string) => {},
});
interface ITransactionContextProps {
  children: React.ReactNode;
}
const TransactionProvider = ({ children }: ITransactionContextProps) => {
  const [exchange, setExchange] = useState("");
  const [tradePair, setTradePair] = useState("");
  const [amount, setAmount] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fee, setFee] = useState("");
  const [deduct, setDeduct] = useState(false);

  return (
    <TransactionContext.Provider
      value={{
        exchange,
        setExchange,
        tradePair,
        setTradePair,
        amount,
        setAmount,
        portfolio,
        setPortfolio,
        date,
        setDate,
        time,
        setTime,
        deduct,
        setDeduct,
        fee,
        setFee,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
export const useTransactionContext = () => useContext(TransactionContext);
export default TransactionProvider;

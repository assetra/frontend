"use client";

import React from "react";
import TransactionProvider from "./TransactionContext";
interface IProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: IProvidersProps) {
  return <TransactionProvider>{children}</TransactionProvider>;
}

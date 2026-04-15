"use client";

import { ReactNode } from "react";
import { Toaster } from "../../components/swap/ui/toaster";

export default function SwapsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-black text-white">
      {children}
      <Toaster />
    </div>
  );
}

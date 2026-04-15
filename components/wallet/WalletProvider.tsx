'use client';

import React, { createContext, useContext } from 'react';
import { useWallet } from '@/hooks/useWallet';
import { BiconomySmartAccountV2 } from '@biconomy/account';
import { WalletType } from '@/types/wallet';

interface WalletContextType {
  address: string | null;
  smartAccount: BiconomySmartAccountV2 | null;
  isConnecting: boolean;
  isConnected: boolean;
  chainId: number;
  chainName: string;
  walletType: WalletType | null;
  connect: (walletType: WalletType, chainIndex?: number) => Promise<void>;
  disconnect: () => Promise<void>;
  switchChain: (chainIndex: number) => Promise<void>;
  error: Error | null;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const wallet = useWallet();

  return (
    <WalletContext.Provider value={wallet}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWalletContext() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWalletContext must be used within a WalletProvider');
  }
  return context;
}

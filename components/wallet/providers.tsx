'use client';

import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import {
  Web3ReactHooks,
  Web3ReactProvider,
  initializeConnector,
} from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";

import { config } from './wagmi';

const queryClient = new QueryClient();

export const [metaMask, hooks] = initializeConnector<MetaMask>(
  (actions) => new MetaMask({ actions }),
);

const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, hooks]];

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Web3ReactProvider connectors={connectors}>
          <RainbowKitProvider theme={darkTheme()}>{children}</RainbowKitProvider>
        </Web3ReactProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
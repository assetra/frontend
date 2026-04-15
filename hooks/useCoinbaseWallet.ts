'use client';

import { useCallback, useState } from 'react';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import { ethers } from 'ethers';
import { WalletAdapter } from '@/types/wallet';

export function useCoinbaseWallet(): WalletAdapter | null {
  const [sdk, setSdk] = useState<CoinbaseWalletSDK | null>(null);

  const isAvailable = useCallback(() => {
    return typeof window !== 'undefined';
  }, []);

  return {
    name: 'Coinbase Wallet',
    type: 'coinbase',
    isAvailable,
    connect: async (chainId: number) => {
      try {
        const appName = 'Kept Protocol';
        const appLogoUrl = typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : '';
        
        const coinbaseWallet = new CoinbaseWalletSDK({
          appName,
          appLogoUrl,
          darkMode: false,
        });

        setSdk(coinbaseWallet);

        const ethereum = coinbaseWallet.makeWeb3Provider();
        const provider = new ethers.providers.Web3Provider(ethereum);

        // Request account access
        await provider.send('eth_requestAccounts', []);

        // Check if we need to switch chain
        const network = await provider.getNetwork();
        if (network.chainId !== chainId) {
          try {
            await provider.send('wallet_switchEthereumChain', [
              { chainId: `0x${chainId.toString(16)}` },
            ]);
          } catch (switchError: any) {
            if (switchError.code === 4902) {
              throw new Error(`Chain ${chainId} not added to Coinbase Wallet`);
            }
            throw switchError;
          }
        }

        return provider;
      } catch (error) {
        console.error('Coinbase Wallet connection error:', error);
        throw error;
      }
    },
    disconnect: async () => {
      // Coinbase Wallet doesn't have a disconnect method
      // The connection persists until user disconnects in Coinbase Wallet
      setSdk(null);
    },
    getAddress: async () => {
      if (!sdk) {
        throw new Error('Coinbase Wallet not connected');
      }
      const ethereum = sdk.makeWeb3Provider();
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      return await signer.getAddress();
    },
    getChainId: async () => {
      if (!sdk) {
        throw new Error('Coinbase Wallet not connected');
      }
      const ethereum = sdk.makeWeb3Provider();
      const provider = new ethers.providers.Web3Provider(ethereum);
      const network = await provider.getNetwork();
      return network.chainId;
    },
    switchChain: async (chainId: number) => {
      if (!sdk) {
        throw new Error('Coinbase Wallet not connected');
      }
      const ethereum = sdk.makeWeb3Provider();
      const provider = new ethers.providers.Web3Provider(ethereum);
      try {
        await provider.send('wallet_switchEthereumChain', [
          { chainId: `0x${chainId.toString(16)}` },
        ]);
      } catch (switchError: any) {
        if (switchError.code === 4902) {
          throw new Error(`Chain ${chainId} not added to Coinbase Wallet`);
        }
        throw switchError;
      }
    },
  };
}

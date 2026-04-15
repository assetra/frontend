'use client';

import { useCallback } from 'react';
import { ethers } from 'ethers';
import { WalletAdapter } from '@/types/wallet';

declare global {
  interface Window {
    ethereum?: {
      isRainbow?: boolean;
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, handler: (...args: any[]) => void) => void;
      removeListener: (event: string, handler: (...args: any[]) => void) => void;
      selectedAddress?: string;
      chainId?: string;
    };
  }
}

export function useRainbowWallet(): WalletAdapter | null {
  const isAvailable = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return !!(window.ethereum && (window.ethereum as any).isRainbow);
  }, []);

  // Return null during SSR - check window availability first
  if (typeof window === 'undefined') return null;
  
  // Check if wallet is available
  const isWalletAvailable = !!(window.ethereum && (window.ethereum as any).isRainbow);
  if (!isWalletAvailable) return null;

  return {
    name: 'Rainbow Wallet',
    type: 'rainbow',
    isAvailable,
    connect: async (chainId: number) => {
      if (typeof window === 'undefined' || !window.ethereum) {
        throw new Error('Rainbow Wallet is not installed');
      }

      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });

        if (!accounts || accounts.length === 0) {
          throw new Error('No accounts found');
        }

        // Check if we need to switch chain
        const currentChainId = parseInt(window.ethereum.chainId || '0', 16);
        if (currentChainId !== chainId) {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: `0x${chainId.toString(16)}` }],
            });
          } catch (switchError: any) {
            if (switchError.code === 4902) {
              throw new Error(`Chain ${chainId} not added to Rainbow Wallet`);
            }
            throw switchError;
          }
        }

        return new ethers.providers.Web3Provider(window.ethereum);
      } catch (error) {
        console.error('Rainbow Wallet connection error:', error);
        throw error;
      }
    },
    disconnect: async () => {
      // Rainbow Wallet doesn't have a disconnect method
    },
    getAddress: async () => {
      if (typeof window === 'undefined' || !window.ethereum) {
        throw new Error('Rainbow Wallet is not installed');
      }
      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });
      if (!accounts || accounts.length === 0) {
        throw new Error('No accounts connected');
      }
      return accounts[0];
    },
    getChainId: async () => {
      if (typeof window === 'undefined' || !window.ethereum) {
        throw new Error('Rainbow Wallet is not installed');
      }
      const chainId = await window.ethereum.request({
        method: 'eth_chainId',
      });
      return parseInt(chainId, 16);
    },
    switchChain: async (chainId: number) => {
      if (typeof window === 'undefined' || !window.ethereum) {
        throw new Error('Rainbow Wallet is not installed');
      }
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${chainId.toString(16)}` }],
        });
      } catch (switchError: any) {
        if (switchError.code === 4902) {
          throw new Error(`Chain ${chainId} not added to Rainbow Wallet`);
        }
        throw switchError;
      }
    },
    onAccountsChanged: (callback: (accounts: string[]) => void) => {
      if (typeof window !== 'undefined' && window.ethereum) {
        window.ethereum.on('accountsChanged', callback);
      }
    },
    onChainChanged: (callback: (chainId: number) => void) => {
      if (typeof window !== 'undefined' && window.ethereum) {
        window.ethereum.on('chainChanged', (chainId: string) => {
          callback(parseInt(chainId, 16));
        });
      }
    },
  };
}

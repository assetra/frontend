'use client';

import { useCallback, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { WalletAdapter } from '@/types/wallet';

declare global {
  interface Window {
    ethereum?: {
      isMetaMask?: boolean;
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, handler: (...args: any[]) => void) => void;
      removeListener: (event: string, handler: (...args: any[]) => void) => void;
      selectedAddress?: string;
      chainId?: string;
    };
  }
}

export function useMetaMask(): WalletAdapter | null {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkAvailability = () => {
      setIsAvailable(!!(window.ethereum && window.ethereum.isMetaMask));
    };
    
    checkAvailability();
    window.addEventListener('load', checkAvailability);
    return () => window.removeEventListener('load', checkAvailability);
  }, []);

  if (!isAvailable) return null;

  return {
    name: 'MetaMask',
    type: 'metamask',
    isAvailable: () => {
      if (typeof window === 'undefined') return false;
      return !!(window.ethereum && window.ethereum.isMetaMask);
    },
    connect: async (chainId: number) => {
      if (typeof window === 'undefined' || !window.ethereum) {
        throw new Error('MetaMask is not installed');
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
            // If chain doesn't exist, try to add it
            if (switchError.code === 4902) {
              throw new Error(`Chain ${chainId} not added to MetaMask. Please add it manually.`);
            }
            throw switchError;
          }
        }

        return new ethers.providers.Web3Provider(window.ethereum);
      } catch (error) {
        console.error('MetaMask connection error:', error);
        throw error;
      }
    },
    disconnect: async () => {
      // MetaMask doesn't have a disconnect method
      // The connection persists until user disconnects in MetaMask
    },
    getAddress: async () => {
      if (typeof window === 'undefined' || !window.ethereum) {
        throw new Error('MetaMask is not installed');
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
        throw new Error('MetaMask is not installed');
      }
      const chainId = await window.ethereum.request({
        method: 'eth_chainId',
      });
      return parseInt(chainId, 16);
    },
    switchChain: async (chainId: number) => {
      if (typeof window === 'undefined' || !window.ethereum) {
        throw new Error('MetaMask is not installed');
      }
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${chainId.toString(16)}` }],
        });
      } catch (switchError: any) {
        if (switchError.code === 4902) {
          throw new Error(`Chain ${chainId} not added to MetaMask`);
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

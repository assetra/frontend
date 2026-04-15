'use client';

import { useCallback, useState } from 'react';
import { EthereumProvider } from '@walletconnect/ethereum-provider';
import { ethers } from 'ethers';
import { WalletAdapter } from '@/types/wallet';
import { SUPPORTED_CHAINS } from '@/config/chains';

export function useWalletConnect(): WalletAdapter | null {
  const [provider, setProvider] = useState<EthereumProvider | null>(null);

  const isAvailable = useCallback(() => {
    return typeof window !== 'undefined';
  }, []);

  return {
    name: 'WalletConnect',
    type: 'walletconnect',
    isAvailable,
    connect: async (chainId: number) => {
      try {
        const chain = SUPPORTED_CHAINS.find(c => c.chainId === chainId);
        if (!chain) {
          throw new Error(`Chain ${chainId} not supported`);
        }

        const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;
        if (!projectId) {
          throw new Error('WalletConnect Project ID not configured. Please set NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID in your .env file.');
        }

        // Check if already connected
        if (provider && provider.session) {
          try {
            // Try to use existing session
            const accounts = provider.accounts;
            if (accounts && accounts.length > 0) {
              return new ethers.providers.Web3Provider(provider);
            }
          } catch (e) {
            // Session expired, continue to create new connection
            console.log('Previous session expired, creating new connection');
          }
        }

        const ethereumProvider = await EthereumProvider.init({
          projectId,
          chains: [chainId],
          optionalChains: SUPPORTED_CHAINS.map(c => c.chainId),
          showQrModal: true,
          metadata: {
            name: 'Kept Protocol',
            description: 'Secure DeFi Protocol for Individual Users',
            url: typeof window !== 'undefined' ? window.location.origin : '',
            icons: [`${typeof window !== 'undefined' ? window.location.origin : ''}/logo.png`],
          },
        });

        // Set up error handlers before connecting
        ethereumProvider.on('display_uri', (uri: string) => {
          console.log('WalletConnect URI:', uri);
        });

        ethereumProvider.on('session_event', (event: any) => {
          console.log('WalletConnect session event:', event);
        });

        ethereumProvider.on('session_delete', () => {
          console.log('WalletConnect session deleted');
          setProvider(null);
        });

        // Connect with timeout
        const connectPromise = ethereumProvider.connect();
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Connection timeout. Please try again.')), 30000);
        });

        await Promise.race([connectPromise, timeoutPromise]);
        setProvider(ethereumProvider);

        return new ethers.providers.Web3Provider(ethereumProvider);
      } catch (error: any) {
        console.error('WalletConnect connection error:', error);
        
        // Clean up on error
        if (provider) {
          try {
            await provider.disconnect();
          } catch (e) {
            // Ignore disconnect errors
          }
          setProvider(null);
        }

        // Provide user-friendly error messages
        if (error.message?.includes('timeout')) {
          throw new Error('Connection timeout. Please try again.');
        } else if (error.message?.includes('User rejected')) {
          throw new Error('Connection cancelled by user');
        } else if (error.message?.includes('reset')) {
          throw new Error('Connection was reset. Please try again.');
        } else {
          throw error;
        }
      }
    },
    disconnect: async () => {
      if (provider) {
        try {
          await provider.disconnect();
        } catch (error) {
          console.error('Error disconnecting WalletConnect:', error);
        }
        setProvider(null);
      }
    },
    getAddress: async () => {
      if (!provider) {
        throw new Error('WalletConnect not connected');
      }
      const accounts = provider.accounts;
      if (!accounts || accounts.length === 0) {
        throw new Error('No accounts found');
      }
      return accounts[0];
    },
    getChainId: async () => {
      if (!provider) {
        throw new Error('WalletConnect not connected');
      }
      return provider.chainId;
    },
    switchChain: async (chainId: number) => {
      if (!provider) {
        throw new Error('WalletConnect not connected');
      }
      try {
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${chainId.toString(16)}` }],
        });
      } catch (error: any) {
        if (error.code === 4902) {
          throw new Error(`Chain ${chainId} not added to wallet`);
        }
        throw error;
      }
    },
    onAccountsChanged: (callback: (accounts: string[]) => void) => {
      if (provider) {
        provider.on('accountsChanged', callback);
      }
    },
    onChainChanged: (callback: (chainId: number) => void) => {
      if (provider) {
        provider.on('chainChanged', (chainId: number) => {
          callback(chainId);
        });
      }
    },
  };
}

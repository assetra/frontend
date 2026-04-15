'use client';

import { useState, useEffect, useCallback } from 'react';
import { ethers } from 'ethers';
import { useWalletContext } from '@/components/wallet/WalletProvider';
import { SUPPORTED_CHAINS } from '@/config/chains';

export function useBalance() {
  const { address, chainId, isConnected } = useWalletContext();
  const [balance, setBalance] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchBalance = useCallback(async () => {
    if (!address || !isConnected) {
      setBalance(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const chain = SUPPORTED_CHAINS.find(c => c.chainId === chainId);
      if (!chain) {
        throw new Error(`Chain ${chainId} not supported`);
      }

      const provider = new ethers.providers.JsonRpcProvider(chain.providerUrl);
      const balanceBN = await provider.getBalance(address);
      setBalance(balanceBN.toString());
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch balance';
      setError(new Error(errorMessage));
      console.error('Balance fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [address, chainId, isConnected]);

  useEffect(() => {
    fetchBalance();
    
    // Refresh balance every 10 seconds
    const interval = setInterval(fetchBalance, 10000);
    return () => clearInterval(interval);
  }, [fetchBalance]);

  return {
    balance,
    isLoading,
    error,
    refetch: fetchBalance,
  };
}

'use client';

import { useBalance } from '@/hooks/useBalance';
import { formatBalanceWithSymbol } from '@/lib/formatBalance';
import { SUPPORTED_CHAINS } from '@/config/chains';
import { useWalletContext } from './WalletProvider';

export function BalanceDisplay() {
  const { chainId } = useWalletContext();
  const { balance, isLoading, error } = useBalance();

  const chain = SUPPORTED_CHAINS.find(c => c.chainId === chainId);
  const symbol = chain?.ticker || 'ETH';

  if (error) {
    return (
      <div className="text-sm text-error-500">
        Failed to load balance
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        <span className="text-sm text-[var(--text-secondary)]">Loading balance...</span>
      </div>
    );
  }

  if (!balance) {
    return (
      <div className="text-sm text-[var(--text-secondary)]">
        No balance data
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <span className="text-xs text-[var(--text-secondary)] mb-1">Balance</span>
      <span className="text-lg font-semibold text-[var(--text)]">
        {formatBalanceWithSymbol(balance, symbol)}
      </span>
    </div>
  );
}

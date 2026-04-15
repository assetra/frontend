'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/common/Button';
import { WalletType } from '@/types/wallet';
import { SUPPORTED_CHAINS, DEFAULT_CHAIN_INDEX } from '@/config/chains';

interface WalletOption {
  type: WalletType;
  name: string;
  icon: string;
  description: string;
  isAvailable: boolean;
}

interface WalletSelectorProps {
  onSelect: (walletType: WalletType, chainIndex: number) => void;
  isConnecting?: boolean;
}

export function WalletSelector({ onSelect, isConnecting }: WalletSelectorProps) {
  const [selectedChain, setSelectedChain] = useState(DEFAULT_CHAIN_INDEX);
  const [walletOptions, setWalletOptions] = useState<WalletOption[]>([]);

  useEffect(() => {
    // Check wallet availability
    const checkAvailability = async () => {
      const options: WalletOption[] = [
        {
          type: 'metamask',
          name: 'MetaMask',
          icon: '🦊',
          description: 'Connect using MetaMask extension',
          isAvailable: !!(typeof window !== 'undefined' && window.ethereum && (window.ethereum as any).isMetaMask),
        },
        {
          type: 'walletconnect',
          name: 'WalletConnect',
          icon: '🔗',
          description: 'Scan QR code to connect',
          isAvailable: true, // WalletConnect is always available
        },
        {
          type: 'coinbase',
          name: 'Coinbase Wallet',
          icon: '🔵',
          description: 'Connect using Coinbase Wallet',
          isAvailable: typeof window !== 'undefined',
        },
        {
          type: 'rainbow',
          name: 'Rainbow Wallet',
          icon: '🌈',
          description: 'Connect using Rainbow Wallet',
          isAvailable: !!(typeof window !== 'undefined' && window.ethereum && (window.ethereum as any).isRainbow),
        },
        {
          type: 'web3auth',
          name: 'Social Login',
          icon: '🔐',
          description: 'Connect with Google, Apple, Twitter',
          isAvailable: true,
        },
      ];

      setWalletOptions(options);
    };

    checkAvailability();
  }, []);

  const handleWalletSelect = (walletType: WalletType) => {
    onSelect(walletType, selectedChain);
  };

  return (
    <div className="w-full space-y-6">
      {/* Chain Selector */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[var(--text)]">
          Select Network
        </label>
        <div className="flex gap-3">
          {SUPPORTED_CHAINS.map((chain, index) => (
            <button
              key={chain.chainId}
              onClick={() => setSelectedChain(index)}
              disabled={isConnecting}
              className={`
                flex-1 px-4 py-3 rounded-lg border-2 transition-all
                ${
                  selectedChain === index
                    ? 'border-accent-purple bg-accent-purple/10 text-[var(--text)]'
                    : 'border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-accent-purple/50'
                }
                ${isConnecting ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              <span className="font-medium text-sm">{chain.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Wallet Options */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-[var(--text)]">
          Choose Wallet
        </label>
        <div className="grid grid-cols-1 gap-3">
          {walletOptions.map((option) => (
            <button
              key={option.type}
              onClick={() => handleWalletSelect(option.type)}
              disabled={isConnecting || !option.isAvailable}
              className={`
                w-full p-4 rounded-lg border-2 transition-all text-left
                ${
                  option.isAvailable
                    ? 'border-[var(--border)] bg-[var(--card)] hover:border-accent-purple/50 hover:bg-accent-purple/5 cursor-pointer'
                    : 'border-[var(--border)] bg-[var(--bg-secondary)] opacity-50 cursor-not-allowed'
                }
                ${isConnecting ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{option.icon}</span>
                <div className="flex-1">
                  <div className="font-medium text-[var(--text)]">{option.name}</div>
                  <div className="text-xs text-[var(--text-secondary)]">{option.description}</div>
                </div>
                {!option.isAvailable && (
                  <span className="text-xs text-[var(--text-secondary)]">Not Available</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

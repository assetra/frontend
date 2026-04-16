'use client';

import { useState } from 'react';
import { WalletSelector } from './WalletSelector';
import { useWalletContext } from './WalletProvider';
import { WalletType } from '@/types/wallet';

export function WalletConnectButton() {
  const { connect, disconnect, isConnecting, isConnected, address } = useWalletContext();
  const [showModal, setShowModal] = useState(false);

  const handleSelect = async (walletType: WalletType, chainIndex: number) => {
    await connect(walletType, chainIndex);
    setShowModal(false);
  };

  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : null;

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-300 hidden md:block">{shortAddress}</span>
        <button
          onClick={disconnect}
          className="flex flex-row items-center px-4 py-1.5 bg-white/10 text-white border border-white/20 rounded-2xl font-semibold text-xs hover:bg-white/20 transition-colors"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex flex-row items-center px-4 py-1.5 bg-white text-black rounded-2xl font-semibold text-xs hover:bg-gray-100 transition-colors"
      >
        Connect Wallet
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm pt-64"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-6 w-full max-w-md mx-4 shadow-2xl mt-24">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-black font-semibold text-lg">Connect Wallet</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-black transition-colors text-xl leading-none"
              >
                ✕
              </button>
            </div>
            <WalletSelector
              onSelect={handleSelect}
              isConnecting={isConnecting}
            />
          </div>
        </div>
      )}
    </>
  );
}

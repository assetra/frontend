import { BiconomySmartAccountV2 } from "@biconomy/account";
import { ethers } from "ethers";

export type WalletType = 'metamask' | 'walletconnect' | 'coinbase' | 'rainbow' | 'web3auth';

export interface WalletState {
  smartAccount: BiconomySmartAccountV2 | null;
  smartAccountAddress: string | null;
  chainId: number;
  isConnecting: boolean;
  isConnected: boolean;
  walletType: WalletType | null;
  error: Error | null;
}

export interface WalletActions {
  connect: (walletType: WalletType, chainIndex?: number) => Promise<void>;
  disconnect: () => Promise<void>;
  switchChain: (chainIndex: number) => Promise<void>;
}

export interface WalletContextType extends WalletState, WalletActions {}

export interface WalletAdapter {
  name: string;
  type: WalletType;
  isAvailable: () => boolean | Promise<boolean>;
  connect: (chainId: number) => Promise<ethers.providers.Web3Provider>;
  disconnect: () => Promise<void>;
  getAddress: () => Promise<string>;
  getChainId: () => Promise<number>;
  switchChain?: (chainId: number) => Promise<void>;
  onAccountsChanged?: (callback: (accounts: string[]) => void) => void;
  onChainChanged?: (callback: (chainId: number) => void) => void;
}

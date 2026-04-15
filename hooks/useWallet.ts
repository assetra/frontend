'use client';

import { useState, useCallback, useEffect } from 'react';
import { createSmartAccountClient, BiconomySmartAccountV2 } from '@biconomy/account';
import { ethers } from 'ethers';
import { Web3Auth } from '@web3auth/modal';
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from '@web3auth/base';
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
import { SUPPORTED_CHAINS, WEB3AUTH_CONFIG, DEFAULT_CHAIN_INDEX } from '@/config/chains';
import { toast } from 'react-toastify';
import { WalletType } from '@/types/wallet';
import { useMetaMask } from './useMetaMask';
import { useWalletConnect } from './useWalletConnect';
import { useCoinbaseWallet } from './useCoinbaseWallet';
import { useRainbowWallet } from './useRainbowWallet';
import {
  saveWalletState,
  loadWalletState,
  clearWalletState,
  getStoredWalletType,
  getStoredChainIndex,
} from '@/lib/walletPersistence';

interface WalletHookResult {
  address: string | null;
  smartAccount: BiconomySmartAccountV2 | null;
  isConnecting: boolean;
  isConnected: boolean;
  chainId: number;
  chainName: string;
  walletType: WalletType | null;
  connect: (walletType: WalletType, chainIndex?: number) => Promise<void>;
  disconnect: () => Promise<void>;
  switchChain: (chainIndex: number) => Promise<void>;
  error: Error | null;
}

export function useWallet(): WalletHookResult {
  const [smartAccount, setSmartAccount] = useState<BiconomySmartAccountV2 | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [chainIndex, setChainIndex] = useState(DEFAULT_CHAIN_INDEX);
  const [walletType, setWalletType] = useState<WalletType | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [web3AuthInstance, setWeb3AuthInstance] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);

  // Wallet adapters
  const metaMaskAdapter = useMetaMask();
  const walletConnectAdapter = useWalletConnect();
  const coinbaseAdapter = useCoinbaseWallet();
  const rainbowAdapter = useRainbowWallet();

  const selectedChain = SUPPORTED_CHAINS[chainIndex];
  const isConnected = !!smartAccount && !!address;

  // Load persisted wallet state on mount
  useEffect(() => {
    const stored = loadWalletState();
    if (stored) {
      setChainIndex(stored.chainIndex);
      setWalletType(stored.walletType as WalletType);
    } else {
      const storedType = getStoredWalletType();
      const storedChainIndex = getStoredChainIndex();
      if (storedType) setWalletType(storedType as WalletType);
      if (storedChainIndex !== null) setChainIndex(storedChainIndex);
    }
  }, []);

  const connectWeb3Auth = useCallback(async (selectedChainIndex: number) => {
    const chain = SUPPORTED_CHAINS[selectedChainIndex];
    
    const chainConfig = {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      chainId: chain.web3AuthChainId,
      rpcTarget: chain.providerUrl,
      displayName: chain.displayName,
      blockExplorerUrl: chain.blockExplorer,
      ticker: chain.ticker,
      tickerName: chain.tickerName,
      logo: chain.logo,
    };

    const privateKeyProvider = new EthereumPrivateKeyProvider({
      config: { chainConfig }
    });

    const web3auth = new Web3Auth({
      clientId: WEB3AUTH_CONFIG.clientId,
      web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
      privateKeyProvider: privateKeyProvider as any,
      uiConfig: WEB3AUTH_CONFIG.uiConfig,
    });

    await web3auth.init();
    const web3authProvider = await web3auth.connect();
    
    if (!web3authProvider) {
      throw new Error('Failed to connect to Web3Auth');
    }

    const ethersProvider = new ethers.providers.Web3Provider(web3authProvider as any);
    setWeb3AuthInstance(web3auth);
    return ethersProvider;
  }, []);

  const connect = useCallback(async (
    selectedWalletType: WalletType,
    selectedChainIndex: number = DEFAULT_CHAIN_INDEX
  ) => {
    setIsConnecting(true);
    setError(null);

    try {
      const chain = SUPPORTED_CHAINS[selectedChainIndex];
      let ethersProvider: ethers.providers.Web3Provider;

      // Connect based on wallet type
      if (selectedWalletType === 'web3auth') {
        ethersProvider = await connectWeb3Auth(selectedChainIndex);
      } else {
        let adapter;
        switch (selectedWalletType) {
          case 'metamask':
            adapter = metaMaskAdapter;
            break;
          case 'walletconnect':
            adapter = walletConnectAdapter;
            break;
          case 'coinbase':
            adapter = coinbaseAdapter;
            break;
          case 'rainbow':
            adapter = rainbowAdapter;
            break;
          default:
            throw new Error(`Unsupported wallet type: ${selectedWalletType}`);
        }

        if (!adapter) {
          throw new Error(`${selectedWalletType} is not available`);
        }

        const isAvail = await adapter.isAvailable();
        if (!isAvail) {
          throw new Error(`${selectedWalletType} is not available`);
        }

        ethersProvider = await adapter.connect(chain.chainId);
      }

      const signer = ethersProvider.getSigner();
      const signerAddress = await signer.getAddress();

      // Create Biconomy Smart Account
      const smartWallet = await createSmartAccountClient({
        signer: signer,
        biconomyPaymasterApiKey: chain.biconomyPaymasterApiKey,
        bundlerUrl: chain.bundlerUrl,
        rpcUrl: chain.providerUrl,
        chainId: chain.chainId,
      });

      const saAddress = await smartWallet.getAccountAddress();

      setSmartAccount(smartWallet);
      setAddress(saAddress);
      setChainIndex(selectedChainIndex);
      setWalletType(selectedWalletType);
      setProvider(ethersProvider);

      // Save to localStorage
      saveWalletState({
        walletType: selectedWalletType,
        chainIndex: selectedChainIndex,
        address: saAddress,
        chainId: chain.chainId,
      });

      toast.success(`Connected to ${chain.name} via ${selectedWalletType}`, {
        autoClose: 3000,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to connect wallet';
      console.error('❌ Connection error:', err);
      
      setError(err instanceof Error ? err : new Error(errorMessage));
      setAddress(null);
      setSmartAccount(null);
      setWalletType(null);
      setProvider(null);

      let displayMessage = errorMessage;
      if (errorMessage.includes('User closed the modal') || errorMessage.includes('User rejected')) {
        displayMessage = 'Connection cancelled by user';
      } else if (errorMessage.includes('popup')) {
        displayMessage = 'Please allow popups for this site';
      }
      
      toast.error(displayMessage, {
        autoClose: 5000,
      });
    } finally {
      setIsConnecting(false);
    }
  }, [connectWeb3Auth, metaMaskAdapter, walletConnectAdapter, coinbaseAdapter, rainbowAdapter]);

  const disconnect = useCallback(async () => {
    try {
      // Disconnect based on wallet type
      if (walletType === 'web3auth' && web3AuthInstance) {
        await web3AuthInstance.logout();
      } else if (walletType && provider) {
        let adapter;
        switch (walletType) {
          case 'metamask':
            adapter = metaMaskAdapter;
            break;
          case 'walletconnect':
            adapter = walletConnectAdapter;
            break;
          case 'coinbase':
            adapter = coinbaseAdapter;
            break;
          case 'rainbow':
            adapter = rainbowAdapter;
            break;
        }
        if (adapter) {
          await adapter.disconnect();
        }
      }
      
      setAddress(null);
      setSmartAccount(null);
      setWalletType(null);
      setProvider(null);
      setWeb3AuthInstance(null);
      setError(null);
      clearWalletState();
      
      toast.info('Wallet disconnected', {
        autoClose: 2000,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to disconnect wallet';
      console.error('Disconnection error:', err);
      setError(err instanceof Error ? err : new Error(errorMessage));
      
      toast.error(errorMessage, {
        autoClose: 5000,
      });
    }
  }, [walletType, web3AuthInstance, provider, metaMaskAdapter, walletConnectAdapter, coinbaseAdapter, rainbowAdapter]);

  const switchChain = useCallback(async (newChainIndex: number) => {
    if (newChainIndex === chainIndex) return;
    
    try {
      const newChain = SUPPORTED_CHAINS[newChainIndex];
      
      // If using a wallet adapter, try to switch chain
      if (walletType && walletType !== 'web3auth' && provider) {
        let adapter;
        switch (walletType) {
          case 'metamask':
            adapter = metaMaskAdapter;
            break;
          case 'walletconnect':
            adapter = walletConnectAdapter;
            break;
          case 'coinbase':
            adapter = coinbaseAdapter;
            break;
          case 'rainbow':
            adapter = rainbowAdapter;
            break;
        }
        
        if (adapter && adapter.switchChain) {
          await adapter.switchChain(newChain.chainId);
        }
      }

      // Reconnect with new chain
      if (walletType) {
        await disconnect();
        await connect(walletType, newChainIndex);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to switch chain';
      console.error('Chain switch error:', err);
      setError(err instanceof Error ? err : new Error(errorMessage));
      
      toast.error(errorMessage, {
        autoClose: 5000,
      });
    }
  }, [chainIndex, walletType, provider, connect, disconnect, metaMaskAdapter, walletConnectAdapter, coinbaseAdapter, rainbowAdapter]);

  return {
    address,
    smartAccount,
    isConnecting,
    isConnected,
    chainId: selectedChain.chainId,
    chainName: selectedChain.name,
    walletType,
    connect,
    disconnect,
    switchChain,
    error,
  };
}

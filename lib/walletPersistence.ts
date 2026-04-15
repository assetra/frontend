const WALLET_STORAGE_KEY = 'kept_wallet_state';
const WALLET_TYPE_KEY = 'kept_wallet_type';
const CHAIN_INDEX_KEY = 'kept_chain_index';

export interface StoredWalletState {
  walletType: string;
  chainIndex: number;
  address: string;
  chainId: number;
}

export function saveWalletState(state: StoredWalletState): void {
  try {
    localStorage.setItem(WALLET_STORAGE_KEY, JSON.stringify(state));
    localStorage.setItem(WALLET_TYPE_KEY, state.walletType);
    localStorage.setItem(CHAIN_INDEX_KEY, state.chainIndex.toString());
  } catch (error) {
    console.error('Failed to save wallet state:', error);
  }
}

export function loadWalletState(): StoredWalletState | null {
  try {
    const stored = localStorage.getItem(WALLET_STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch (error) {
    console.error('Failed to load wallet state:', error);
    return null;
  }
}

export function clearWalletState(): void {
  try {
    localStorage.removeItem(WALLET_STORAGE_KEY);
    localStorage.removeItem(WALLET_TYPE_KEY);
    localStorage.removeItem(CHAIN_INDEX_KEY);
  } catch (error) {
    console.error('Failed to clear wallet state:', error);
  }
}

export function getStoredWalletType(): string | null {
  try {
    return localStorage.getItem(WALLET_TYPE_KEY);
  } catch (error) {
    console.error('Failed to get stored wallet type:', error);
    return null;
  }
}

export function getStoredChainIndex(): number | null {
  try {
    const stored = localStorage.getItem(CHAIN_INDEX_KEY);
    return stored ? parseInt(stored, 10) : null;
  } catch (error) {
    console.error('Failed to get stored chain index:', error);
    return null;
  }
}

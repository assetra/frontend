import { ethers } from 'ethers';

/**
 * Format a balance value to a human-readable string
 */
export function formatBalance(
  balance: string | ethers.BigNumber,
  decimals: number = 18,
  displayDecimals: number = 4
): string {
  try {
    const balanceBN = typeof balance === 'string' ? ethers.BigNumber.from(balance) : balance;
    const divisor = ethers.BigNumber.from(10).pow(decimals);
    const quotient = balanceBN.div(divisor);
    const remainder = balanceBN.mod(divisor);
    
    const wholePart = quotient.toString();
    const fractionalPart = remainder.toString().padStart(decimals, '0');
    const fractionalDisplay = fractionalPart.substring(0, displayDecimals).replace(/\.?0+$/, '');
    
    if (fractionalDisplay === '') {
      return wholePart;
    }
    
    return `${wholePart}.${fractionalDisplay}`;
  } catch (error) {
    console.error('Error formatting balance:', error);
    return '0';
  }
}

/**
 * Format a balance with token symbol
 */
export function formatBalanceWithSymbol(
  balance: string | ethers.BigNumber,
  symbol: string = 'ETH',
  decimals: number = 18,
  displayDecimals: number = 4
): string {
  const formatted = formatBalance(balance, decimals, displayDecimals);
  return `${formatted} ${symbol}`;
}

/**
 * Format address to shortened version (0x1234...5678)
 */
export function formatAddress(address: string, chars: number = 4): string {
  if (!address) return '';
  if (address.length <= chars * 2 + 2) return address;
  return `${address.substring(0, chars + 2)}...${address.substring(address.length - chars)}`;
}

/**
 * Format transaction hash
 */
export function formatTxHash(hash: string, chars: number = 8): string {
  if (!hash) return '';
  if (hash.length <= chars * 2 + 2) return hash;
  return `${hash.substring(0, chars + 2)}...${hash.substring(hash.length - chars)}`;
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { ethers } from "ethers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertWeiToEther = (wei: string) => {
  return parseFloat(ethers.utils.formatEther(wei));
};

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return format(date, "MMM dd, yyyy");
};

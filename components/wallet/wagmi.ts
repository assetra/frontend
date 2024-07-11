import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "GTX",
  projectId:
    (process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string) ||
    "4840555280a77046d25240b84fc788af",
  // Using an OR condition to provide a default value for the WalletConnect project ID
  // This ensures that if NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID is not defined,
  // the application will still have a valid project ID to avoid build errors.
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
});

"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useAccount, useBalance, useChainId } from "wagmi";
import axios from "axios";

import {
  AarcFundKitModal,
  FKConfig,
  TransactionErrorData,
  TransactionSuccessData,
} from "@aarc-xyz/fundkit-web-sdk";
const walletBalance: React.FC = () => {
  const { isConnected, address } = useAccount();
  const chainId = useChainId();
  const { data: balanceData, isLoading: isBalanceLoading } = useBalance({
    address: address as `0x${string}` | undefined,
  });

  const [usdBalance, setUsdBalance] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const fetchUsdBalance = async (balance: string, chainId: number) => {
    let coinId = "";
    switch (chainId) {
      case 1:
        coinId = "ethereum";
        break;
      case 137:
        coinId = "matic-network";
        break;
      case 56:
        coinId = "binancecoin";
        break;
      default:
        coinId = "";
    }

    if (!coinId) {
      setError("Unsupported network");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`
      );
      const usdRate = response.data[coinId].usd;
      const usdValue = (parseFloat(balance) * usdRate).toFixed(2);
      setUsdBalance(usdValue);
    } catch (err: any) {
      console.error("Error fetching USD balance:", err);
      setError("Failed to fetch USD balance");
    }
  };

  const exchangeScreenTitle = "Exchange Screen Title"; // Replace with a valid value

  const config: FKConfig = {
    appName: "Dapp Name",
    module: {
      exchange: {
        enabled: true,
      },
      onRamp: {
        enabled: true,
        onRampConfig: {
          customerId: "323232323",
          exchangeScreenTitle: "Deposit funds in your wallet",
        },
      },
      bridgeAndSwap: {
        enabled: true,
        fetchOnlyDestinationBalance: false,
        routeType: "Value",
      },
    },
    destination: {
      walletAddress: address ? `0x${address}` : "",
    },
    apiKeys: {
      aarcSDK: "196a301b-705f-459a-a527-6978af53e3e2",
    },
    events: {
      onTransactionSuccess: (data: TransactionSuccessData) => {
        console.log("client onTransactionSuccess", data);
      },
      onTransactionError: (data: TransactionErrorData) => {
        console.log("client onTransactionError", data);
      },
      onWidgetClose: () => {
        console.log("client onWidgetClose");
      },
      onWidgetOpen: () => {
        console.log("client onWidgetOpen");
      },
    },
    origin: window.location.origin,
  };

  const aarcModal = new AarcFundKitModal(config);
  aarcModal.init();

  function openArc() {
    aarcModal.openModal();
  }

  useEffect(() => {
    const updateBalance = async () => {
      setIsLoading(true);
      setError(null);

      if (isConnected && balanceData && chainId) {
        try {
          await fetchUsdBalance(balanceData.formatted, chainId);
        } catch (err: any) {
          console.error("Error updating balance:", err);
          setError(err.message || "An error occurred while fetching balance");
        }
      } else if (!isConnected) {
        setUsdBalance(null);
      }

      setIsLoading(false);
    };

    updateBalance();
  }, [isConnected, balanceData, chainId]);

  return (
    <div className="flex flex-col sm:flex-row w-full h-auto sm:h-[45%] bg-[#1E1F25] bg-opacity-80 backdrop-blur-lg rounded-xl mb-2 px-6 sm:px-8 py-4 shadow-lg border border-white/10">
      {isLoading || isBalanceLoading ? (
        <p className="text-white text-center">Loading balance...</p>
      ) : isConnected ? (
        <>
          <div className="flex flex-col justify-between w-full sm:w-2/5 h-full border-b sm:border-b-0 sm:border-r border-[#34384C] pb-4 sm:pb-0">
            <div className="flex items-center mb-4">
              <Image
                width={25}
                height={25}
                src="/images/market-icon/ETH.png"
                alt="eth"
              />
              <div className="text-white mx-3 text-lg">
                {balanceData?.symbol || "ETH"}
              </div>
            </div>
            <div className="text-[#5D6588] text-sm sm:text-md">
              Total Balance
            </div>
            <div className="text-white text-2xl sm:text-3xl font-semibold">
              {parseFloat(balanceData?.formatted || "0").toFixed(6)}{" "}
              {balanceData?.symbol || "ETH"}
            </div>
            <div className="text-[#A5ADCF] text-xl sm:text-2xl mb-3">
              ${usdBalance || "0.00"}
            </div>
            <div className="flex gap-2 text-white">
              <button className="bg-[#246CF9] hover:bg-blue-600 transition-all duration-300 rounded-full border-2 py-2 px-4">
                Withdraw
              </button>
              <button
                className="rounded-full border-2 py-2 px-4 hover:bg-white hover:text-black transition-all duration-300"
                onClick={openArc}
              >
                Deposit
              </button>
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-3/5 h-full px-4 sm:pl-8">
            <div className="flex flex-col w-full h-1/2 mb-2">
              <div className="flex justify-between items-center w-full">
                <div>
                  <div className="text-[#5D6588] text-xs sm:text-sm">
                    Exchange Balance
                  </div>
                  <div className="text-white text-xl sm:text-2xl font-semibold">
                    {parseFloat(balanceData?.formatted || "0").toFixed(6)}{" "}
                    {balanceData?.symbol || "ETH"}
                  </div>
                  <div className="text-[#11CABE] text-md">
                    ${usdBalance || "0.00"}
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <img
                    className="w-20 sm:w-24"
                    src="/images/wallet-icon/graph-top.png"
                  />
                  <div className="text-gray-500 text-xs sm:text-sm">+0.55%</div>
                </div>
              </div>
              <img
                className="w-full h-[4px] sm:h-[8px] opacity-70"
                src="/images/wallet-icon/slide-bar.jpg"
              />
            </div>

            <div className="flex flex-col w-full h-1/2 mt-2">
              <div className="flex justify-between items-center w-full">
                <div>
                  <div className="text-[#5D6588] text-xs sm:text-sm">
                    Assets Balance
                  </div>
                  <div className="text-white text-xl sm:text-2xl font-semibold">
                    {parseFloat(balanceData?.formatted || "0").toFixed(6)}{" "}
                    {balanceData?.symbol || "ETH"}
                  </div>
                  <div className="text-[#11CABE] text-md">
                    ${usdBalance || "0.00"}
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <img
                    className="w-20 sm:w-24"
                    src="/images/wallet-icon/graph-top.png"
                  />
                  <div className="text-gray-500 text-xs sm:text-sm">+0.55%</div>
                </div>
              </div>
              <img
                className="w-full h-[4px] sm:h-[8px] opacity-70"
                src="/images/wallet-icon/slide-bar.jpg"
              />
            </div>
          </div>
        </>
      ) : (
        <div className="text-center w-full">
          <h1 className="text-3xl font-extrabold text-white">$0.00</h1>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
            <p className="text-white text-lg">0 ETH</p>
            <p className="text-yellow-500 text-md">
              Connect wallet to see real balance
            </p>
          </div>
        </div>
      )}

      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
    </div>
  );
};

export default walletBalance;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAccount, useBalance, useChainId } from "wagmi";
import WalletInfo from "./WalletInfo";

const Balance = () => {
  const { address, isConnected } = useAccount();
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
    <div className="pr-10.5  bg-[#1E1F25] rounded-xl w-full h-full">
      <div className="gap-45 flex flex-row w-full text-white h-full">
        <div className="w-5/12 flex flex-col p-4 h-full">
          <div className="flex flex-col justify-between border-r-2 border-[#34384C] h-full pr-10">
            <div className="w-full flex justify-between pb-2">
              <h1>Balance</h1>
              <div className="flex justify">
                <img src="/images/arrow-up-green.png" alt="Arrow up" />
                <p>2.36%</p>
              </div>
            </div>
            <div>
              {isLoading || isBalanceLoading ? (
                <p>Loading balance...</p>
              ) : isConnected ? (
                <>
                  <h1 className="text-3xl font-extrabold">
                    ${usdBalance || "0.00"}
                  </h1>
                  <p className="mb-2">
                    {balanceData?.formatted || "0"}{" "}
                    {balanceData?.symbol || "ETH"}
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-3xl font-extrabold">$0.00</h1>
                  <div className="flex gap-4">
                    <p className="mb-2">0 ETH</p>
                    <p className="text-yellow-500">
                      Connect wallet to see real balance
                    </p>
                  </div>
                </>
              )}
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <div className="flex flex-row pt-4 w-full">
              <div className="flex flex-col w-1/2 justify-start">
                <div className="flex flex-row py-2">
                  <img
                    src="/images/arrow-down-blue-24-bg.png"
                    alt="Income arrow"
                  />
                  <p className="pl-5">Received</p>
                </div>
                <div>USD ${isConnected ? usdBalance : "0.00"}</div>
              </div>
              <div className="flex flex-col w-1/2 justify-start pl-5">
                <div className="flex flex-col border-l-2 px-5 border-[#34384C]">
                  <div className="flex flex-row py-2">
                    <img
                      src="/images/arrow-up-red-24-bg.png"
                      alt="Expenses arrow"
                    />
                    <p className="pl-5">Sent</p>
                  </div>
                  <div>USD ${isConnected ? usdBalance : "0.00"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WalletInfo />
      </div>
    </div>
  );
};

export default Balance;

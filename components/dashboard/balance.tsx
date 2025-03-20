import React, { useState, useEffect } from "react";
import axios, { Method } from "axios";
import { useAccount, useBalance, useChainId } from "wagmi";
import WalletInfo from "./WalletInfo";

interface Transaction {
  value: string;
  from_address: string;
  to_address: string;
  block_timestamp: string;
}

const Balance: React.FC = () => {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { data: balanceData, isLoading: isBalanceLoading } = useBalance({
    address: address as `0x${string}` | undefined,
  });

  const [usdBalance, setUsdBalance] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [transactionData, setTransactionData] = useState<{
    receivedAmount: number;
    sentAmount: number;
  }>({ receivedAmount: 0, sentAmount: 0 });

  const fetchTransactions = async () => {
    const apikey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImE4NjE5MDFhLWE4NzAtNGU4My04OWJmLTU3YjQ3MGI4NmE4ZSIsIm9yZ0lkIjoiNDA0MzAxIiwidXNlcklkIjoiNDE1NDM1IiwidHlwZUlkIjoiZTc1Mzk0N2EtYzYyMS00YTczLThmMmItZjQyZTU1YzA2ZmE1IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjMzNzgzNDIsImV4cCI6NDg3OTEzODM0Mn0.68iPXXiLc7Mnet7NCLe7YOP1HGizPt12PZHLWFnVm2w";
    const config = {
      method: "get" as Method,
      maxBodyLength: Infinity,
      url: `https://deep-index.moralis.io/api/v2.2/${address}/verbose?chain=eth&order=DESC`,
      headers: {
        accept: "application/json",
        "X-API-Key": apikey,
      },
    };

    let receivedAmount = 0;
    let sentAmount = 0;

    try {
      const response = await axios.request(config);
      const transactions: Transaction[] = response.data.result;

      const currentTime = new Date();
      const timeLimit = new Date(currentTime.getTime() - 24 * 60 * 60 * 1000);

      transactions.forEach((tx) => {
        const txTime = new Date(tx.block_timestamp);
        if (txTime > timeLimit) {
          const valueInEther = parseFloat(tx.value) / 1e18;
          if (
            tx.from_address.toLowerCase() === (address as string).toLowerCase()
          ) {
            sentAmount += valueInEther;
          } else if (
            tx.to_address.toLowerCase() === (address as string).toLowerCase()
          ) {
            receivedAmount += valueInEther;
          }
        }
      });

      setTransactionData({ receivedAmount, sentAmount });
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

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
          await fetchTransactions();
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
    <div className="bg-[#1E1F25] rounded-xl w-full h-full">
      <div className="flex flex-col md:flex-row w-full text-white h-full">
        <div className="w-full md:w-5/12 flex flex-col p-4 h-full">
          <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r-2 border-[#34384C] h-full md:pr-4">
            <div className="w-full flex justify-between pb-2">
              <h1>Balance</h1>
            </div>
            <div>
              {isLoading || isBalanceLoading ? (
                <p>Loading balance...</p>
              ) : isConnected ? (
                <>
                  <h1 className="text-2xl md:text-3xl font-extrabold">
                    ${usdBalance || "0.00"}
                  </h1>
                  <p className="mb-2">
                    {balanceData?.formatted || "0"}{" "}
                    {balanceData?.symbol || "ETH"}
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-2xl md:text-3xl font-extrabold">$0.00</h1>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <p className="mb-2">0 ETH</p>
                    <p className="text-yellow-500 text-sm md:text-base">
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
                  <p className="pl-2 md:pl-5 text-sm md:text-base">Received</p>
                </div>
                <div className="text-sm md:text-base">
                  USD $
                  {isConnected
                    ? transactionData.receivedAmount.toFixed(4)
                    : "0.00"}
                </div>
              </div>
              <div className="flex flex-col w-1/2 justify-start">
                <div className="flex flex-col border-l-2 px-2 md:px-5 border-[#34384C]">
                  <div className="flex flex-row py-2">
                    <img
                      src="/images/arrow-up-red-24-bg.png"
                      alt="Expenses arrow"
                    />
                    <p className="pl-2 md:pl-5 text-sm md:text-base">Sent</p>
                  </div>
                  <div className="text-sm md:text-base">
                    USD $
                    {isConnected
                      ? transactionData.sentAmount.toFixed(4)
                      : "0.00"}
                  </div>
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

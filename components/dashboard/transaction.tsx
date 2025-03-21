import React, { useState, useEffect } from "react";
import axios, { Method } from "axios";
import { useAccount } from "wagmi";
import { ethers } from "ethers";

interface Transaction {
  hash: string;
  action: "Send" | "Receive";
  value: string;
  timestamp: string;
}

interface ApiTransaction {
  hash: string;
  from_address: string;
  to_address: string;
  value: string;
  block_timestamp: string;
}

interface ApiResponse {
  result: ApiTransaction[];
}

export default function Transaction() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { address } = useAccount();
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImE4NjE5MDFhLWE4NzAtNGU4My04OWJmLTU3YjQ3MGI4NmE4ZSIsIm9yZ0lkIjoiNDA0MzAxIiwidXNlcklkIjoiNDE1NDM1IiwidHlwZUlkIjoiZTc1Mzk0N2EtYzYyMS00YTczLThmMmItZjQyZTU1YzA2ZmE1IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjMzNzgzNDIsImV4cCI6NDg3OTEzODM0Mn0.68iPXXiLc7Mnet7NCLe7YOP1HGizPt12PZHLWFnVm2w";

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!address) return;

      try {
        const config = {
          method: "get" as Method, // Explicitly typed method
          url: `https://deep-index.moralis.io/api/v2.2/${address}/verbose?chain=eth&order=DESC`,
          headers: {
            accept: "application/json",
            "X-API-Key": apiKey,
          },
        };

        const response = await axios.get<ApiResponse>(config.url, {
          headers: config.headers,
        });
        const formattedTransactions: Transaction[] = response.data.result.map(
          (tx) => ({
            hash: tx.hash,
            action:
              tx.from_address.toLowerCase() === address.toLowerCase()
                ? "Send"
                : "Receive",
            value: ethers.utils.formatEther(tx.value),
            timestamp: new Date(tx.block_timestamp).toLocaleString(),
          })
        );

        setTransactions(formattedTransactions);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, [address]);

  return (
    <div className="bg-[#1E1F25] rounded-xl w-full  px-6 pt-4 text-white">
      <div className="flex flex-row justify-between items-start px-4 w-full h-6 mb-4">
        <div className="text-white text-xl font-bold">Transactions</div>
        {/* <div className="flex justify-between items-center text-white text-base border-white border rounded-full w-16 h-8 px-4 py-2 cursor-pointer">
          All
          <img
            src="/images/arrow-down-white.png"
            alt="arrow-down-white"
            className="ml-2 w-4 h-4"
          />
        </div> */}
      </div>
      <div className="overflow-y-auto w-full h-[12rem] mt-4 px-4">
        {isLoading ? (
          <div className="text-center">Loading transactions...</div>
        ) : transactions.length === 0 ? (
          <div className="text-center">No transactions found</div>
        ) : (
          transactions.map((tx) => (
            <div
              key={tx.hash}
              className="flex justify-between items-center h-16 border-b border-gray-700 py-2"
            >
              <div className="flex items-center space-x-4">
                <img
                  src="/images/eth-icon-big.png"
                  alt="ETH"
                  className="w-8 h-8"
                />
                <div>
                  <div className="font-semibold">ETH</div>
                  <div className="text-sm text-gray-400">{tx.timestamp}</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div
                  className={`font-semibold ${tx.action === "Receive" ? "text-green-500" : "text-red-500"}`}
                >
                  {tx.action === "Receive" ? "+" : "-"}
                  {parseFloat(tx.value).toFixed(6)} ETH
                </div>
                <div className="flex items-center mt-1">
                  <img
                    src={
                      tx.action === "Receive"
                        ? "/images/arrow-down-green-big.png"
                        : "/images/arrow-up-red-big.png"
                    }
                    alt={tx.action}
                    className="w-4 h-4 mr-2"
                  />
                  <span className="text-sm">{tx.action}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

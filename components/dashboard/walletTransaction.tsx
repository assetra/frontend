"use client";
import React, { useState, useEffect } from "react";
import axios, { Method } from "axios";
import { useAccount } from "wagmi";
import { ethers } from "ethers";

interface Transaction {
  hash: string;
  action: "Send" | "Receive";
  value: string;
  timestamp: string;
  valueUsd?: number;
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

const WalletTransaction: React.FC = () => {
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
          method: "get" as Method,
          url: `https://deep-index.moralis.io/api/v2.2/${address}/?chain=eth&order=DESC`,
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
    <div>
      <div className="flex flex-row w-full h-[55%] sm:h-2/3 rounded-xl bg-[#1E1F25] p-6">
        <table className="w-full flex flex-col h-full text-white">
          <thead className="flex flex-col w-full">
            <tr className="flex flex-row w-full justify-between pb-6 border-b-2 text-[#5D6588] pr-6">
              <th className="w-[15%]">Assets</th>
              <th className="w-[24%]">Date & Time</th>
              <th className="w-[20%]">Total Balance</th>
              <th className="w-1/10">24h Market</th>
            </tr>
          </thead>
          <tbody className="w-full overflow-y-auto min-h-96 mt-3">
            {isLoading ? (
              <tr>
                <td className="text-center w-full text-white" colSpan={4}>
                  Loading transactions...
                </td>
              </tr>
            ) : transactions.length === 0 ? (
              <tr>
                <td className="text-center w-full text-white" colSpan={4}>
                  No transactions found
                </td>
              </tr>
            ) : (
              transactions.map((tx) => (
                <tr
                  key={tx.hash}
                  className="flex flex-row w-full justify-between items-center h-12 py-4"
                >
                  <td className="flex flex-row py-2 w-[15%]">
                    <div className="pr-4">
                      <img src="/images/eth-icon-big.png" alt="ETH Icon" />
                    </div>
                    <div>ETH</div>
                  </td>
                  <td className="w-[24%]">
                    <div className="w-full">{tx.timestamp}</div>
                  </td>
                  <td className="w-[20%]">
                    <div className="w-full">
                      <div
                        className={`font-semibold ${
                          tx.action === "Receive"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {tx.action === "Receive" ? "+" : "-"}
                        {parseFloat(tx.value).toFixed(6)} ETH
                      </div>
                    </div>
                  </td>
                  <td className="w-1/10">
                    <div className="flex gap-1">
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
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WalletTransaction;

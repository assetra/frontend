"use client";
import React, { useState, useEffect } from "react";
import axios, { Method } from "axios";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import {
  ChevronsUpDown,
  ArrowDownCircle,
  ArrowUpCircle,
  RefreshCcw,
} from "lucide-react";

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
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const { address } = useAccount();
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImE4NjE5MDFhLWE4NzAtNGU4My04OWJmLTU3YjQ3MGI4NmE4ZSIsIm9yZ0lkIjoiNDA0MzAxIiwidXNlcklkIjoiNDE1NDM1IiwidHlwZUlkIjoiZTc1Mzk0N2EtYzYyMS00YTczLThmMmItZjQyZTU1YzA2ZmE1IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjMzNzgzNDIsImV4cCI6NDg3OTEzODM0Mn0.68iPXXiLc7Mnet7NCLe7YOP1HGizPt12PZHLWFnVm2w";

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

      const formattedTransactions: Transaction[] = response.data.result
        .map((tx) => ({
          hash: tx.hash,
          action:
            tx.from_address.toLowerCase() === address.toLowerCase()
              ? ("Send" as const)
              : ("Receive" as const),
          value: ethers.utils.formatEther(tx.value),
          timestamp: new Date(tx.block_timestamp).toLocaleString(),
        }))
        .sort((a, b) => {
          const dateA = new Date(a.timestamp);
          const dateB = new Date(b.timestamp);
          return sortOrder === "desc"
            ? dateB.getTime() - dateA.getTime()
            : dateA.getTime() - dateB.getTime();
        });

      setTransactions(formattedTransactions);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [address, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/20">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Transaction History
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={fetchTransactions}
              className="text-white hover:bg-white/10 p-2 rounded-full transition"
            >
              <RefreshCcw className="w-5 h-5" />
            </button>
            <button
              onClick={toggleSortOrder}
              className="text-white hover:bg-white/10 p-2 rounded-full transition"
            >
              <ChevronsUpDown className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto max-h-[30rem] overflow-y-auto">
          <table className="w-full">
            {/* Mobile View */}
            <tbody className="block md:hidden">
              {isLoading ? (
                <tr>
                  <td className="text-center text-white p-4">
                    Loading transactions...
                  </td>
                </tr>
              ) : transactions.length === 0 ? (
                <tr>
                  <td className="text-center text-white p-4">
                    No transactions found
                  </td>
                </tr>
              ) : (
                transactions.map((tx) => (
                  <tr
                    key={tx.hash}
                    className="block p-4 border-b border-white/10 bg-white/5"
                  >
                    <td className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <img
                          src="/images/eth-icon-big.png"
                          alt="ETH Icon"
                          className="w-8 h-8"
                        />
                        <div>
                          <div className="font-semibold text-white">
                            {tx.action === "Receive" ? "Received" : "Sent"} ETH
                          </div>
                          <div className="text-sm text-gray-400">
                            {tx.timestamp}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          className={`font-semibold ${
                            tx.action === "Receive"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {tx.action === "Receive" ? "+" : "-"}
                          {parseFloat(tx.value).toFixed(4)} ETH
                        </div>
                        {tx.action === "Receive" ? (
                          <ArrowDownCircle className="text-green-400 w-5 h-5 mx-auto" />
                        ) : (
                          <ArrowUpCircle className="text-red-400 w-5 h-5 mx-auto" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

            {/* Desktop View */}
            <thead className="hidden md:table-header-group bg-white/10">
              <tr className="text-gray-300">
                <th className="p-4 text-left">Assets</th>
                <th className="p-4 text-left">Date & Time</th>
                <th className="p-4 text-left">Transaction</th>
                <th className="p-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="max-h-[30rem] hidden md:table-row-group overflow-y-auto">
              {isLoading ? (
                <tr>
                  <td colSpan={4} className="text-center text-white p-4">
                    Loading transactions...
                  </td>
                </tr>
              ) : transactions.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center text-white p-4">
                    No transactions found
                  </td>
                </tr>
              ) : (
                transactions.map((tx) => (
                  <tr
                    key={tx.hash}
                    className="border-b border-white/10 bg-white/5 hover:bg-white/10 transition"
                  >
                    <td className="p-4 flex items-center space-x-3">
                      <img
                        src="/images/eth-icon-big.png"
                        alt="ETH Icon"
                        className="w-8 h-8"
                      />
                      <span className="text-white">ETH</span>
                    </td>
                    <td className="p-4 text-gray-300">{tx.timestamp}</td>
                    <td className="p-4">
                      <div
                        className={`font-semibold ${
                          tx.action === "Receive"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {tx.action === "Receive" ? "+" : "-"}
                        {parseFloat(tx.value).toFixed(4)} ETH
                      </div>
                    </td>
                    <td className="p-4">
                      {tx.action === "Receive" ? (
                        <div className="flex items-center text-green-400">
                          <ArrowDownCircle className="mr-2 w-5 h-5" />
                          Received
                        </div>
                      ) : (
                        <div className="flex items-center text-red-400">
                          <ArrowUpCircle className="mr-2 w-5 h-5" />
                          Sent
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WalletTransaction;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useAccount } from "wagmi";
import { ArrowUpRight, ArrowDownRight, RefreshCcw, Info } from "lucide-react";

interface TokenData {
  name: string;
  value: number;
  color: string;
  full: string;
  icon: string;
  percentageChange: string;
  balance: string;
  usdValue: string;
}

interface ApiTokenData {
  symbol: string;
  name: string;
  thumbnail?: string;
  usd_value: string;
  usd_value_24hr_usd_change: string;
  balance_formatted: string;
}

const WalletAsset = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tokenData, setTokenData] = useState<TokenData[]>([]);
  const [sortBy, setSortBy] = useState<"value" | "change">("value");
  const { address } = useAccount();

  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImE4NjE5MDFhLWE4NzAtNGU4My04OWJmLTU3YjQ3MGI4NmE4ZSIsIm9yZ0lkIjoiNDA0MzAxIiwidXNlcklkIjoiNDE1NDM1IiwidHlwZUlkIjoiZTc1Mzk0N2EtYzYyMS00YTczLThmMmItZjQyZTU1YzA2ZmE1IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjMzNzgzNDIsImV4cCI6NDg3OTEzODM0Mn0.68iPXXiLc7Mnet7NCLe7YOP1HGizPt12PZHLWFnVm2w";

  const fetchTokenData = async () => {
    if (!address || !apiKey) return;

    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://deep-index.moralis.io/api/v2.2/wallets/${address}/tokens?chain=eth`,
        {
          headers: {
            accept: "application/json",
            "X-API-Key": apiKey,
          },
        }
      );

      const sortedTokens: TokenData[] =
        response.data.result
          ?.sort((a: ApiTokenData, b: ApiTokenData) => {
            const aValue = parseFloat(a.usd_value);
            const bValue = parseFloat(b.usd_value);
            return sortBy === "value"
              ? bValue - aValue
              : parseFloat(b.usd_value_24hr_usd_change) -
                  parseFloat(a.usd_value_24hr_usd_change);
          })
          .map((token: ApiTokenData) => {
            const usdValue = parseFloat(token.usd_value);
            const usdValueChange = parseFloat(token.usd_value_24hr_usd_change);
            const percentageChange =
              usdValue !== 0
                ? (
                    (usdValueChange / (usdValue - usdValueChange)) *
                    100
                  ).toFixed(2)
                : "0.00";

            return {
              name: token.symbol,
              value: usdValue,
              color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
              full: token.name,
              icon: token.thumbnail || "",
              percentageChange,
              balance: parseFloat(token.balance_formatted).toFixed(6),
              usdValue: usdValue.toFixed(3),
            };
          }) || [];

      setTokenData(sortedTokens);
    } catch (error) {
      console.error("Error fetching token data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTokenData();
  }, [address, apiKey, sortBy]);

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/20">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Wallet Assets
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSortBy(sortBy === "value" ? "change" : "value")}
              className="text-white hover:bg-white/10 p-2 rounded-full transition"
              title={`Sort by ${sortBy === "value" ? "Change" : "Value"}`}
            >
              <Info className="w-5 h-5" />
            </button>
            <button
              onClick={fetchTokenData}
              className="text-white hover:bg-white/10 p-2 rounded-full transition"
              title="Refresh Assets"
            >
              <RefreshCcw className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          {isLoading ? (
            <div className="text-center text-white p-4">Loading Assets...</div>
          ) : tokenData.length === 0 ? (
            <div className="text-center text-white p-4">No Assets found</div>
          ) : (
            tokenData.map((entry, index) => (
              <div
                key={index}
                className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center"
              >
                <div className="flex items-center space-x-3">
                  {entry.icon ? (
                    <Image
                      width={40}
                      height={40}
                      src={entry.icon}
                      alt={`${entry.name} icon`}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white">
                      {entry.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-white">{entry.name}</div>
                    <div className="text-sm text-gray-400">{entry.full}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-white">
                    ${entry.usdValue}
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      parseFloat(entry.percentageChange) >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {parseFloat(entry.percentageChange) >= 0 ? (
                      <ArrowUpRight className="inline mr-1 w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="inline mr-1 w-4 h-4" />
                    )}
                    {entry.percentageChange}%
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/10">
              <tr className="text-gray-300">
                <th className="p-4 text-left">Asset</th>
                <th className="p-4 text-left">Full Name</th>
                <th className="p-4 text-right">Value (USD)</th>
                <th className="p-4 text-right">24h Change</th>
                <th className="p-4 text-right">Balance</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="text-center text-white p-4">
                    Loading Assets...
                  </td>
                </tr>
              ) : tokenData.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center text-white p-4">
                    No Assets found
                  </td>
                </tr>
              ) : (
                tokenData.map((entry, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 bg-white/5 hover:bg-white/10 transition"
                  >
                    <td className="p-4 flex items-center space-x-3">
                      {entry.icon ? (
                        <Image
                          width={40}
                          height={40}
                          src={entry.icon}
                          alt={`${entry.name} icon`}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white">
                          {entry.name.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                      <span className="text-white">{entry.name}</span>
                    </td>
                    <td className="p-4 text-gray-300">{entry.full}</td>
                    <td className="p-4 text-right text-white">
                      ${entry.usdValue}
                    </td>
                    <td
                      className={`p-4 text-right font-semibold ${
                        parseFloat(entry.percentageChange) >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {parseFloat(entry.percentageChange) >= 0 ? (
                        <ArrowUpRight className="inline mr-1 w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="inline mr-1 w-4 h-4" />
                      )}
                      {entry.percentageChange}%
                    </td>
                    <td className="p-4 text-right text-white">
                      {entry.balance}
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

export default WalletAsset;

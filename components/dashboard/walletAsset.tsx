"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios, { Method } from "axios";
import { useAccount } from "wagmi";
import { Avatar } from "../ui/avatar";

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
  thumbnail: string;
  usd_value: string;
  usd_value_24hr_usd_change: string;
  balance_formatted: string;
}

const walletAsset = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tokenData, setTokenData] = useState<TokenData[]>([]);
  const { address } = useAccount();

  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImE4NjE5MDFhLWE4NzAtNGU4My04OWJmLTU3YjQ3MGI4NmE4ZSIsIm9yZ0lkIjoiNDA0MzAxIiwidXNlcklkIjoiNDE1NDM1IiwidHlwZUlkIjoiZTc1Mzk0N2EtYzYyMS00YTczLThmMmItZjQyZTU1YzA2ZmE1IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjMzNzgzNDIsImV4cCI6NDg3OTEzODM0Mn0.68iPXXiLc7Mnet7NCLe7YOP1HGizPt12PZHLWFnVm2w";

  useEffect(() => {
    const fetchTokenData = async () => {
      if (!address) return;

      let config = {
        method: "get" as Method, // Explicitly typed method
        maxBodyLength: Infinity,
        url: `https://deep-index.moralis.io/api/v2.2/wallets/${address}/tokens?chain=eth`,
        headers: {
          accept: "application/json",
          "X-API-Key": apiKey,
        },
      };

      try {
        const response = await axios.request(config);
        const sortedTokens: TokenData[] = response.data.result
          .sort(
            (a: ApiTokenData, b: ApiTokenData) =>
              parseFloat(b.usd_value) - parseFloat(a.usd_value)
          )

          .map((token: ApiTokenData) => {
            const usdValue = parseFloat(token.usd_value);
            const usdValueChange = parseFloat(token.usd_value_24hr_usd_change);
            const percentageChange =
              (usdValueChange / (usdValue - usdValueChange)) * 100;
            const balance = parseFloat(token.balance_formatted);
            return {
              name: token.symbol,
              value: usdValue,
              color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
              full: token.name,
              icon: token.thumbnail || "default",
              percentageChange: percentageChange.toFixed(2),
              balance: balance.toFixed(6),
              usdValue: usdValue.toFixed(3),
            };
          });
        setTokenData(sortedTokens);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching token data:", error);
        setIsLoading(false);
      }
    };

    fetchTokenData();
  }, [address]);
  const title = ["Name", "Value(USD)", "Change(24h)", "Amount"];
  return (
    <div>
      <div className="flex flex-row w-full h-[55%] sm:h-2/3 rounded-xl bg-[#1E1F25] p-6">
        <table className="w-full flex flex-col h-full text-white">
          <thead className="flex flex-col w-full">
            <tr className="flex flex-row w-full justify-between pb-6 border-b-2 text-[#5D6588] pr-6">
              <td className="w-[15%]">Assets </td>
              {title.map((item, index) => (
                <td key={index} className="w-[15%] flex place-content-center">
                  {item}
                </td>
              ))}
            </tr>
          </thead>
          <tbody className="flex flex-col w-full overflow-y-auto min-h-96  mt-3">
            {isLoading ? (
              <div className="text-center  w-full text-whit ">
                Loading Assets...
              </div>
            ) : tokenData.length === 0 ? (
              <div className="text-center  w-full text-white ">
                No Assets found
              </div>
            ) : (
              tokenData.map((entry, index) => (
                <tr
                  key={index}
                  className="flex  w-full justify-between items-center h-12 py-4"
                >
                  <td className="flex  py-2 w-[15%]">
                    <div className="pr-4">
                      {entry.icon === "default" ? (
                        <Avatar
                          style={{
                            width: 26,
                            height: 26,
                            backgroundColor: entry.color,
                          }}
                        >
                          {entry.name}
                        </Avatar>
                      ) : (
                        <Image
                          width={26}
                          height={26}
                          src={entry.icon}
                          alt={`${entry.name} icon`}
                          className="rounded-full"
                        />
                      )}
                    </div>
                    <div>{entry.name && entry.name.slice(0, 6)}</div>
                  </td>
                  <td className="w-[24%]">
                    <div className="w-full flex place-content-center">
                      {entry.full}
                    </div>
                  </td>
                  <td className="w-[16%]">
                    <div className="w-full flex place-content-center">
                      {entry.usdValue}$
                    </div>
                  </td>
                  <td className="w-[20%]">
                    <div className="w-full">
                      <p
                        className={`flex place-content-center font-semibold ${parseFloat(entry.percentageChange) >= 0 ? "text-green-500" : "text-red-500"}`}
                      >
                        {entry.percentageChange}%
                      </p>
                    </div>
                  </td>
                  <td className="w-[20%]">
                    <div className="flex gap-1 justify-center">
                      <span className="text-sm">{entry.balance}</span>
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

export default walletAsset;

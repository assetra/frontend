import React, { useEffect, useState } from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import Image from "next/image";
import axios from "axios";
import { useAccount } from "wagmi";

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

const WalletInfo: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [tokenData, setTokenData] = useState<TokenData[]>([]);
  const { address } = useAccount();

  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImE4NjE5MDFhLWE4NzAtNGU4My04OWJmLTU3YjQ3MGI4NmE4ZSIsIm9yZ0lkIjoiNDA0MzAxIiwidXNlcklkIjoiNDE1NDM1IiwidHlwZUlkIjoiZTc1Mzk0N2EtYzYyMS00YTczLThmMmItZjQyZTU1YzA2ZmE1IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjMzNzgzNDIsImV4cCI6NDg3OTEzODM0Mn0.68iPXXiLc7Mnet7NCLe7YOP1HGizPt12PZHLWFnVm2w";

  useEffect(() => {
    const fetchTokenData = async () => {
      if (!address) return;

      let config = {
        method: "get",
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
          .slice(0, 3)
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
              icon: token.thumbnail || "/images/default-token-icon.png",
              percentageChange: percentageChange.toFixed(2),
              balance: balance.toFixed(6),
              usdValue: usdValue.toFixed(3),
            };
          });
        setTokenData(sortedTokens);
      } catch (error) {
        console.error("Error fetching token data:", error);
      }
    };

    fetchTokenData();
  }, [address]);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-transparent p-4 rounded shadow-lg text-xs">
          <p className="font-bold">{data.full}</p>
          <p>Balance: {data.balance}</p>
          <p>Value: ${data.usdValue}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="w-7/12 flex flex-col py-3">
      <div className="w-full flex justify-between px-6">
        <p className="text-[1rem]">Wallet</p>
        <div className="flex">
          <p className="text-[#A5ADCF] text-[12px]">
            {tokenData.length} Currencies
          </p>
        </div>
      </div>
      <div className="w-full px-6">
        <div className=" px-4 pr-0">
          <div className="flex gap-10">
            {isClient && (
              <PieChart width={260} height={140}>
                <Pie
                  data={tokenData}
                  innerRadius={60}
                  outerRadius={70}
                  fill="#8884d8"
                  paddingAngle={4}
                  dataKey="value"
                >
                  {tokenData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            )}
            <div className="w-full md:w-1/2 ">
              {tokenData.map((entry, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between  rounded-lg mb-2 pl-6"
                >
                  <div className="flex items-center">
                    <Image
                      width={26}
                      height={26}
                      src={entry.icon}
                      alt={`${entry.name} icon`}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold text-sm">{entry.name}</p>
                      <p className="text-xs text-gray-600">{entry.full}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm">${entry.usdValue}</p>
                    <p
                      className={`text-xs ${parseFloat(entry.percentageChange) >= 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {entry.percentageChange}%
                    </p>
                    <p className="text-xs text-gray-500">{entry.balance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletInfo;

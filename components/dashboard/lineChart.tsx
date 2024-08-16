import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { convertWeiToEther, formatDate } from "@/components/lib/utils";
import { useAccount } from "wagmi";
interface TransactionData {
  name: string;
  ETH: number;
  date: string;
}

export default function App() {
  const [data, setData] = useState<TransactionData[]>([]);
  const [loading, setLoading] = useState(true);
  const address = useAccount();
  useEffect(() => {
    const fetchData = async () => {
      const apikey =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImE4NjE5MDFhLWE4NzAtNGU4My04OWJmLTU3YjQ3MGI4NmE4ZSIsIm9yZ0lkIjoiNDA0MzAxIiwidXNlcklkIjoiNDE1NDM1IiwidHlwZUlkIjoiZTc1Mzk0N2EtYzYyMS00YTczLThmMmItZjQyZTU1YzA2ZmE1IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjMzNzgzNDIsImV4cCI6NDg3OTEzODM0Mn0.68iPXXiLc7Mnet7NCLe7YOP1HGizPt12PZHLWFnVm2w";
      const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://deep-index.moralis.io/api/v2.2/${address}/verbose?chain=eth&order=DESC`,
        headers: {
          accept: "application/json",
          "X-API-Key": apikey,
        },
      };

      try {
        const response = await axios.request(config);
        const apiData = response.data.result;

        const formattedData: TransactionData[] = apiData.map(
          (item: any, index: number) => ({
            name: String.fromCharCode(65 + index),
            ETH: convertWeiToEther(item.value),
            date: formatDate(item.block_timestamp),
          })
        );

        setData(formattedData);
        if (formattedData.length === 0) {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (!loading) {
    return <div className="text-white">No data Available...</div>;
  }
  return (
    <ResponsiveContainer height={270}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="4 4" stroke="#5D6588" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="ETH" stroke="#BD47FB" />
      </LineChart>
    </ResponsiveContainer>
  );
}

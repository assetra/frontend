import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";

const dateFormatter = (dateStr: string) => {
  const date = new Date(dateStr);
  return format(date, "MMM dd, yyyy");
};

const data = [
  {
    name: "A",
    BTC: 4,
    ETH: 2,
    USDT: 2,
    date: "2023-06-01",
  },
  {
    name: "B",
    BTC: 3,
    ETH: 1,
    USDT: 3.2,
    date: "2023-06-01",
  },
  {
    name: "C",
    BTC: 2,
    ETH: 9,
    USDT: 2.7,
    date: "2023-06-01",
  },
  {
    name: "D",
    BTC: 2,
    ETH: 3,
    USDT: 4,
    date: "2023-06-01",
  },
  {
    name: "E",
    BTC: 1,
    ETH: 4,
    USDT: 1,
    date: "2023-06-01",
  },
  {
    name: "F",
    BTC: 2,
    ETH: 3,
    USDT: 1.5,
    date: "2023-06-01",
  },
  {
    name: "G",
    BTC: 3,
    ETH: 4,
    USDT: 5,
    date: "2023-06-01",
  },
  {
    name: "A",
    BTC: 4,
    ETH: 2,
    USDT: 2,
    date: "2023-06-02",
  },
  {
    name: "B",
    BTC: 3,
    ETH: 1,
    USDT: 3.2,
    date: "2023-06-02",
  },
  {
    name: "C",
    BTC: 2,
    ETH: 9,
    USDT: 2.7,
    date: "2023-06-02",
  },
  {
    name: "D",
    BTC: 2,
    ETH: 3,
    USDT: 4,
    date: "2023-06-02",
  },
  {
    name: "E",
    BTC: 1,
    ETH: 4,
    USDT: 1,
    date: "2023-06-02",
  },
  {
    name: "F",
    BTC: 2,
    ETH: 3,
    USDT: 1.5,
    date: "2023-06-02",
  },
  {
    name: "G",
    BTC: 3,
    ETH: 4,
    USDT: 5,
    date: "2023-06-02",
  },
  {
    name: "A",
    BTC: 4,
    ETH: 2,
    USDT: 2,
    date: "2023-06-03",
  },
  {
    name: "B",
    BTC: 3,
    ETH: 1,
    USDT: 3.2,
    date: "2023-06-03",
  },
  {
    name: "C",
    BTC: 2,
    ETH: 9,
    USDT: 2.7,
    date: "2023-06-03",
  },
  {
    name: "D",
    BTC: 2,
    ETH: 3,
    USDT: 4,
    date: "2023-06-03",
  },
  {
    name: "E",
    BTC: 1,
    ETH: 4,
    USDT: 1,
    date: "2023-06-03",
  },
  {
    name: "F",
    BTC: 2,
    ETH: 3,
    USDT: 1.5,
    date: "2023-06-03",
  },
  {
    name: "G",
    BTC: 3,
    ETH: 4,
    USDT: 5,
    date: "2023-06-03",
  },
];

export default function App() {
  return (
    <ResponsiveContainer height={270}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="4 4" stroke="#5D6588" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        {/* <XAxis dataKey="date" tickFormatter={dateFormatter} padding={{ left: 30, right: 30 }} /> */}
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="ETH" stroke="#BD47FB" />
        <Line type="monotone" dataKey="BTC" stroke="#F7931A" />
        <Line type="monotone" dataKey="USDT" stroke="#1BA27A" />
      </LineChart>
    </ResponsiveContainer>
  );
}

import React, { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";
import Image from "next/image";

const data = [
  { name: "BTC", value: 400, color: "#F7931A", full: "Bitcoin", icon: "/images/market-icon/BTC.png" },
  { name: "ETH", value: 300, color: "#BD47FB", full: "Ethereum", icon: "/images/market-icon/ETH.png" },
  { name: "USDT", value: 200, color: "#1BA27A", full: "Tether", icon: "/images/market-icon/USDT.png" },
];

const App = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex gap-10">
      {isClient && (
        <PieChart width={240} height={125}>
          <Pie
            data={data}
            innerRadius={50}
            outerRadius={60}
            fill="#8884d8"
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      )}
      <div className="grid gap-3">
        {data.map((entry, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="flex items-center gap-1">
              <Image
                width={18}
                height={18}
                src={entry.icon}
                alt={`${entry.name} icon`}
              />
              <p className="text-[12px]">{entry.name}</p>
            </div>
            <p className="text-[10px]">{entry.full}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

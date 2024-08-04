import React, { useState, useEffect } from "react";
import axios from "axios";
import PieChart from "./pieChart";

const Balance = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(true);
  const [chainId, setChainId] = useState<string | null>(null);
  const [currency, setCurrency] = useState<string>("ETH");
  const [usdBalance, setUsdBalance] = useState<string | null>(null);

  const fetchAccountAndBalance = async () => {
    const accounts: string[] = await window.ethereum.request({
      method: "eth_accounts",
    });
    if (accounts.length > 0) {
      const account = accounts[0];
      setAccount(account);

      const balance: string = await window.ethereum.request({
        method: "eth_getBalance",
        params: [account, "latest"],
      });

      const balanceInEther = (parseInt(balance) / Math.pow(10, 18)).toFixed(4);
      setBalance(balanceInEther);

      const chainId: string = await window.ethereum.request({
        method: "eth_chainId",
      });
      setChainId(chainId);
      updateCurrency(chainId);
      fetchUsdBalance(balanceInEther, chainId);
    } else {
      setIsConnected(false);
      setAccount(null);
      setBalance(null);
      setChainId(null);
      setCurrency("ETH");
      setUsdBalance(null);
    }
  };

  const updateCurrency = (chainId: string) => {
    switch (chainId) {
      case "0x1":
        setCurrency("ETH");
        break;
      case "0x89":
        setCurrency("MATIC");
        break;
      case "0x38":
        setCurrency("BNB");
        break;
      default:
        setCurrency("Unknown");
    }
  };

  const fetchUsdBalance = async (balanceInEther: string, chainId: string) => {
    let coinId = "";
    switch (chainId) {
      case "0x1":
        coinId = "ethereum";
        break;
      case "0x89":
        coinId = "matic-network";
        break;
      case "0x38":
        coinId = "binancecoin";
        break;
      default:
        coinId = "";
    }

    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`
      );
      const usdRate = response.data[coinId].usd;
      const usdValue = (parseFloat(balanceInEther) * usdRate).toFixed(2);
      setUsdBalance(usdValue);
    } catch (error) {
      console.error("Error fetching USD balance:", error);
    }
  };

  useEffect(() => {
    if (isConnected) {
      fetchAccountAndBalance();
    }

    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", fetchAccountAndBalance);
      window.ethereum.on("chainChanged", (chainId: string) => {
        setChainId(chainId);
        updateCurrency(chainId);
        fetchAccountAndBalance();
      });
    }

    return () => {
      if (typeof window.ethereum !== "undefined") {
        window.ethereum.removeListener(
          "accountsChanged",
          fetchAccountAndBalance
        );
        window.ethereum.removeListener("chainChanged", fetchAccountAndBalance);
      }
    };
  }, [isConnected]);

  return (
    <div className="pr-10.5 bg-[#1E1F25] rounded-xl w-full h-full">
      <div className="gap-45 flex flex-row w-full text-white h-full">
        <div className="w-5/12 flex flex-col p-4 h-full">
          <div className="flex flex-col justify-between border-r-2 border-[#34384C] h-full pr-10">
            <div className="w-full flex justify-between pb-2">
              <h1>Balance</h1>
              <div className="flex justify">
                <img src="/images/arrow-up-green.png" />
                <p>2.36%</p>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-extrabold">${usdBalance}</h1>
              <p className="mb-2">
                {balance} {currency}
              </p>
            </div>
            <div className="flex flex-row pt-4 w-full">
              <div className="flex flex-col w-1/2 justify-start">
                <div className="flex flex-row py-2">
                  <img src="/images/arrow-down-blue-24-bg.png" />
                  <p className="pl-5">Income</p>
                </div>
                <div>USD ${usdBalance}</div>
              </div>
              <div className="flex flex-col w-1/2 justify-start pl-5">
                <div className="flex flex-col border-l-2 px-5 border-[#34384C]">
                  <div className="flex flex-row py-2">
                    <img src="/images/arrow-up-red-24-bg.png" />
                    <p className="pl-5">Expenses</p>
                  </div>
                  <div>USD ${usdBalance}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-7/12 flex flex-col py-3">
          <div className="w-full flex justify-between px-6">
            <p className="text-[1rem]">Wallet</p>
            <div className="flex">
              <p className="text-[#A5ADCF] text-[12px]">3 Currencies</p>
            </div>
          </div>
          <div className="w-full flex justify-between px-6">
            <div className="py-2 px-4">
              <PieChart />
            </div>
            <div className="flex">
              <div>
                <div className="flex justify py-3">
                  <img src="/images/arrow-up-green.png" />
                  <p>2.36%</p>
                </div>
                <div className="flex justify  py-3">
                  <img src="/images/arrow-up-green.png" />
                  <p>1.36%</p>
                </div>
                <div className="flex justify  py-3">
                  <img src="/images/arrow-up-green.png" />
                  <p>2.46%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;

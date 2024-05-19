import React from "react";
import Image from "next/image";
import { RiArrowDownFill, RiArrowUpFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";

export default function Transaction() {
  const data = [
    { type: "BTC", action: "Receive", value: "$0.143,21" },
    { type: "ETH", action: "Send", value: "$0.34,223" },
    { type: "BTC", action: "Receive", value: "$0.143,21" },
    { type: "ETH", action: "Send", value: "$0.34,223" },
    { type: "BTC", action: "Receive", value: "$0.143,21" },
    { type: "ETH", action: "Send", value: "$0.34,223" },
    { type: "BTC", action: "Receive", value: "$0.143,21" },
    { type: "ETH", action: "Send", value: "$0.34,223" },
    { type: "BTC", action: "Receive", value: "$0.143,21" },
    { type: "ETH", action: "Send", value: "$0.34,223" },
    { type: "BTC", action: "Receive", value: "$0.143,21" },
    { type: "ETH", action: "Send", value: "$0.34,223" },
    { type: "BTC", action: "Receive", value: "$0.143,21" },
    { type: "ETH", action: "Send", value: "$0.34,223" },
    { type: "BTC", action: "Receive", value: "$0.143,21" },
    { type: "ETH", action: "Send", value: "$0.34,223" },
  ];

  return (
    <div className="rounded-xl w-full xl:w-1/3 p-5 text-white bg-[#1E1F25] h-[267px] px-20 lg:px-4">
      <table className="flex flex-col w-full  ">
        <thead className="flex flex-col w-full">
          <tr className="flex flex-row w-full justify-between">
            <td>
              <div className="text-white text-xl font-bold">Transaction</div>
            </td>
            <td>
              <div className="flex justify-between items-center text-white text-base border-white border rounded-full w-20 h-10 px-4 py-2 cursor-pointer">
                All
                <BiChevronDown size={14} color="white" />
              </div>
            </td>
          </tr>
        </thead>
        <tbody className=" overflow-y-auto h-[200px]">
          {data.map((item) => (
            <tr className="flex justify-between items-center h-10">
              <td className="flex items-center justify-between w-1/2">
                <div className="flex items-center">
                  <Image
                    src={item.type === "BTC" ? "/images/bitcoin-icon-big.png" : "/images/eth-icon-big.png"}
                    className="pr-4"
                    width={32}
                    height={32}
                    alt="LOGO"
                  />
                  {item.type}
                </div>
                <div>{item.action}</div>
              </td>
              <td className="flex justify-between items-center w-1/2">
                {item.action === "Receive" ? (
                  <RiArrowDownFill size={24} color="#11CABE" />
                ) : (
                  <RiArrowUpFill size={24} color="#FA2256" />
                )}
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

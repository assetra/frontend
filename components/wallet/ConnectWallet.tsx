"use client";

import React, { useRef } from "react";
import InlineDivs from "./InlineDivs";
import i from "/public/assets/bnb.jpg";

interface Networks {
  name: string;
  initial: string;
  image: string;
}

interface Wallets {
  name: string;
  image: string;
}

export const ConnectWallet: React.FC = () => {
  // First set of div contents
  const network: Networks[] = [
    {
      name: "Ethereum Network",
      initial: "ETH",
      image: "/assets/eth.png",
    },
    {
      name: "Polygon network",
      initial: "PLY",
      image: "/assets/ply.png",
    },
    {
      name: "Binance network",
      initial: "BNB",
      image: "/assets/bnb.jpg",
    },
    {
      name: "Avalanche network",
      initial: "AVA",
      image: "/assets/ava.jpg",
    },
    {
      name: "Solana network",
      initial: "SOL",
      image: "/assets/sol.png",
    },
  ];

  // Second set of div contents
  const wallet: Networks[] = [
    {
      initial: "Metamask",
      name: "SOL",
      image: "/assets/metamask.png",
    },
    {
      initial: "Coinbase",
      name: "SOL",
      image: "/assets/coinbase.png",
    },
    {
      initial: "Phantom",
      name: "SOL",
      image: "/assets/phantom.png",
    },
    {
      initial: "Wallet Connect",
      name: "SOL",
      image: "/assets/wallet-connect.png",
    },
  ];

  const connectLabelRef = useRef<HTMLLabelElement>(null);
  const walletLabelRef = useRef<HTMLLabelElement>(null);

  const handleProgrammaticClick = () => {
    connectLabelRef.current?.click();
    walletLabelRef.current?.click();
  };

  return (
    <>
      <input type="checkbox" id="wallet_card" className="modal-toggle" />
      <div className="modal text-base-content" role="dialog">
        <div className="modal-box">
          <div className="border-b-2 border-base-content flex justify-between p-4">
            <h3 className="text-[20px] font-semibold">Connect Wallet & Network</h3>
            <label
              htmlFor="wallet_card"
              ref={walletLabelRef}
              className="border-0 bg-base-100 cursor-pointer hover:bg-base-100 text-[20px] font-semibold"
            >
              X
            </label>
          </div>
          <div className="">
            <div className="collapse collapse-arrow">
              <input type="checkbox" className="peer" />
              <div className="collapse-title">Choose Network</div>
              <div className="collapse-content">
                <InlineDivs divContents={network} grid="5" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="collapse collapse-arrow">
              <input type="checkbox" className="peer" />
              <div className="collapse-title">Select Wallet</div>
              <div className="collapse-content">
                <InlineDivs divContents={wallet} grid="2" />
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label
              htmlFor="connect_card"
              ref={connectLabelRef}
              className="hidden"
            >
              Connect
            </label>
            <button
              className="btn"
              onClick={handleProgrammaticClick}
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

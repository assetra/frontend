"use client";

import React, { useRef } from "react";

export const WalletDetails: React.FC = () => {
  //const retryLabelRef = useRef<HTMLLabelElement>(null);
  const walletDetailsLabelRef = useRef<HTMLLabelElement>(null);

  const handleProgrammaticClick = () => {
    //retryLabelRef.current?.click();
    walletDetailsLabelRef.current?.click();
  };
  return (
    <>
      <input type="checkbox" id="wallet_details" className="modal-toggle" />
      <div className="modal text-base-content" role="dialog">
        <div className="modal-box">
          <div className="border-b-2 border-base-content flex justify-between p-4">
            <h3 className="text-[20px] font-semibold">Wallet Details</h3>
            <label
              htmlFor="wallet_details"
              ref={walletDetailsLabelRef}
              className="border-0 bg-base-100 cursor-pointer hover:bg-base-100 text-[20px] font-semibold"
            >
              X
            </label>
          </div>
          <div className="flex-none items-center text-center mt-6 border-dotted border-2 p-4">
            <div className="flex gap-4">
              <svg
                width="27"
                height="28"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.5"
                  width="27"
                  height="27"
                  rx="13.5"
                  fill="url(#paint0_linear_2231_12982)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2231_12982"
                    x1="-3.4659e-07"
                    y1="-1.5"
                    x2="28"
                    y2="29"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E2FFBD" />
                    <stop offset="1" stopColor="#D70000" />
                  </linearGradient>
                </defs>
              </svg>

              <p>0x05c41sa5cfas....5c12a11178a1c5wa125c12</p>
            </div>
            <div className="flex gap-4 mt-4 items-center text-center">
              <div className="flex gap-2 mx-auto">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="5"
                    y="3.5"
                    width="10"
                    height="14"
                    rx="3"
                    stroke="#717171"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M17.5 7.90137C18.3967 8.42008 19 9.3896 19 10.5V18.5C19 20.1569 17.6569 21.5 16 21.5H12C10.8896 21.5 9.92008 20.8967 9.40137 20"
                    stroke="#717171"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>

                <p>Copy address</p>
              </div>
              <div className="flex gap-2 mx-auto">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="2.5"
                    width="16"
                    height="20"
                    rx="4"
                    stroke="#717171"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 7.5H16"
                    stroke="#717171"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 12.5H16"
                    stroke="#717171"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 17.5H12"
                    stroke="#717171"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>

                <p>View on explorer</p>
              </div>
            </div>
          </div>
          <div className="modal-action justify-between">

          <button
              className="btn disabled"
            >
              Connected
            </button>
            
            <button
              className="btn btn-error bg-opacity-50"
              onClick={handleProgrammaticClick}
            >
              Disconnect
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

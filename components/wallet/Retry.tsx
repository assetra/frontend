"use client";

import React, { useRef } from "react";

export const Retry: React.FC = () => {
  const retryLabelRef = useRef<HTMLLabelElement>(null);
  const walletDetailsLabelRef = useRef<HTMLLabelElement>(null);

  const handleProgrammaticClick = () => {
    retryLabelRef.current?.click();
    walletDetailsLabelRef.current?.click();
  };
  return (
    <>
      <input type="checkbox" id="retry" className="modal-toggle" />
      <div className="modal text-base-content" role="dialog">
        <div className="modal-box">
          <div className="border-b-2 border-base-content flex justify-between p-4">
            <h3 className="text-[20px] font-semibold">Retrying</h3>
            <label
              htmlFor="retry"
              ref={retryLabelRef}
              className="border-0 bg-base-100 cursor-pointer hover:bg-base-100 text-[20px] font-semibold"
            >
              X
            </label>
          </div>
          <div className="flex-none items-center text-center mt-6">
            <img
              width="80"
              height="80"
              className="mx-auto"
              src="https://img.icons8.com/office/80/high-risk.png"
              alt="high-risk"
            />

            <h4 className="mt-6 text-[18px]">Trying to reconnect</h4>
            <p className="mt-4">Please connect wallet & approve transaction</p>
            <p className="mt-2 text-[12px]">
              Sometimes block size is more, It may take little time to connect
            </p>
          </div>
          <div className="modal-action justify-center">
            <label htmlFor="wallet_details" ref={walletDetailsLabelRef} className="hidden">
              Re-Connect
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

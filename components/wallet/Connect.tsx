"use client";

import React, { useRef } from "react";

export const Connect: React.FC = () => {
  const connectLabelRef = useRef<HTMLLabelElement>(null);
  const connectErrorLabelRef = useRef<HTMLLabelElement>(null);

  const handleProgrammaticClick = () => {
    connectLabelRef.current?.click();
    connectErrorLabelRef.current?.click();
  };
  return (
    <>
      <input type="checkbox" id="connect_card" className="modal-toggle" />
      <div className="modal text-base-content" role="dialog">
        <div className="modal-box">
          <div className="border-b-2 border-base-content flex justify-between p-4">
            <h3 className="text-[20px] font-semibold">Connecting</h3>
            <label
              htmlFor="connect_card"
              ref={connectLabelRef}
              className="border-0 bg-base-100 cursor-pointer hover:bg-base-100 text-[20px] font-semibold"
            >
              X
            </label>
          </div>
          <div className="flex-none items-center text-center mt-6">
            <span className="loading loading-dots loading-lg"></span>
            <h4 className="mt-6 text-[18px]">Connecting Wallet</h4>
            <p className="mt-4">
              Please connect metamask & approve transaction{" "}
            </p>
          </div>
          <div className="modal-action">
            <label
              htmlFor="connect_error"
              ref={connectErrorLabelRef}
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

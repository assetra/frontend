"use client";

import React, { useRef } from "react";

export const ConnectError: React.FC = () => {
  const retryLabelRef = useRef<HTMLLabelElement>(null);
  const connectErrorLabelRef = useRef<HTMLLabelElement>(null);

  const handleProgrammaticClick = () => {
    connectErrorLabelRef.current?.click();
    retryLabelRef.current?.click();
  };
  return (
    <>
      <input type="checkbox" id="connect_error" className="modal-toggle" />
      <div className="modal text-base-content" role="dialog">
        <div className="modal-box">
          <div className="border-b-2 border-base-content flex justify-between p-4">
            <h3 className="text-[20px] font-semibold">Connection Error</h3>
            <label
              htmlFor="connect_error"
              ref={connectErrorLabelRef}
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

            <h4 className="mt-6 text-[18px]">An Unwanted Error Occurred</h4>
            <p className="mt-4">
            Wallet not connected. Please try again.
            </p>
          </div>
          <div className="modal-action justify-center">
            <label htmlFor="retry" ref={retryLabelRef} className="hidden">
            Re-Connect
            </label>
            <button
              className="btn"
              onClick={handleProgrammaticClick}
            >
              Re-Connect
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

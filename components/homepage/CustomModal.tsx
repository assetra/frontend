import React from "react";
import Image from "next/image";

const CustomModal: React.FC<{ message: string; onClose: () => void }> = ({
  message,
  onClose,
}) => {
  return (
    <div className="modal modal-open" role="dialog">
      <div className="modal-box">
        <Image width={80} height={60} src="/assets/logo.png" alt="gtx-logo" />
        <p className="py-4">{message}</p>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;

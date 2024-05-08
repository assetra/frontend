import React from "react";
import { FiCopy } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import DeleteIcon from "../icons/DeleteIcon";

interface ModalProps {
  isOpen: boolean;
  openChange: () => void;
}

const TransactionDeleteModal = ({ isOpen, openChange }: ModalProps) => {
  if (isOpen)
    return (
      <div
        className={` fixed top-0 left-0 h-screen w-screen bg-[#000] transition-all ease-out font-SFPro`}
      >
        <div className="modal-content h-full flex flex-col justify-center items-center px-5 gap-y-8">
          <DeleteIcon />
          <div className="notice text-center">
            <h4 className="text-white font-bold text-[32px]/[38px]">
              Delete transaction?
            </h4>
            <p className="description text-white/[.7] font-normal text-[14px]/[20px]">
              if you delete the transaction it will not appear in your
              transaction list anymore.
            </p>
          </div>
          <div className="controls flex flex-col gap-y-[20px]">
            <button className="text-white bg-[#FC3044] py-4 px-5 rounded-[20px] text-[16px]/[19px] font-bold tracking-tight">
              Yes,delete
            </button>
            <button
              className="text-white bg-transparent  text-[16px]/[19px] font-bold tracking-tight"
              onClick={() => openChange()}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="fixed top-[94px] right-4">
          <RxCross1 onClick={(e) => openChange()} />
        </div>
      </div>
    );
};

export default TransactionDeleteModal;

import React from "react";
import { FiCopy, FiPlus } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

interface IPortfolioModalProps {
  isOpen: boolean;
  openChange: (value: number) => void;
}

const CoinSettingModal = ({ isOpen, openChange }: IPortfolioModalProps) => {
  if (isOpen)
    return (
      <div
        className={` fixed top-0 left-0 h-[calc(100vh-110px)] w-screen bg-[#000]/[.8] transition-all ease-out `}
      >
        <div className="modal-content px-[25px] py-[60px] pb-[24px] bg-[#0e0f18] rounded-t-[12px] fixed bottom-[110px] w-full">
          <div className="title relative">
            <h2 className="text-white text-sm text-center">Coin Settings</h2>
          </div>
          <div className="create mt-[40px]">
            <button className="flex justify-center items-center gap-x-5">
              <FiPlus className="text-white"></FiPlus>
              <span className="text-white text-sm">Add new transaction</span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default CoinSettingModal;

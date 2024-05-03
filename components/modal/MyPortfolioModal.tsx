import React from "react";
import { FiCopy } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

interface IPortfolioModalProps {
  isOpen: boolean;
  openChange: (value: number) => void;
}

const MyPortfolioModal = ({ isOpen, openChange }: IPortfolioModalProps) => {
  if (isOpen)
    return (
      <div
        className={` fixed top-0 left-0 h-screen w-screen bg-[#000]/[.8] transition-all ease-out `}
      >
        <div className="modal-content px-[25px] py-[60px] pb-[24px] bg-[#0e0f18] rounded-b-[12px]">
          <div className="title relative">
            <h2 className="text-white text-sm text-center">My portfolios</h2>
            <button>
              {" "}
              <RxCross1
                className="absolute right-0 top-0 text-white"
                onClick={(e) => {
                  // alert("d");
                  openChange(1);
                }}
              ></RxCross1>
            </button>
          </div>
          <div className="mt-[24px]">
            <p className="text-[#fff]/[.7] text-sm font-normal">
              Total Balance
            </p>
            <h1 className={`  price text-[32px]/[48px] font-bold text-white`}>
              $44,634.06
            </h1>
          </div>
          <div className="radio-group mt-[50px] flex flex-col gap-y-[50px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-6 h-6 text-blue-600 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 bg-gray-600 border border-white bg-transparent"
                />
                <label className="ml-[20px]">
                  <h3 className="text-white text-[15px]/[17.9px] font-bold">
                    Default Portfolio
                  </h3>
                  <p className="text-white/[.5] text-[12px]/[14.32px] font-normal mt-2">
                    Coins added manually
                  </p>
                </label>
              </div>
              <div className="">
                <h1
                  className={`  price text-[15px]/[17.9px] font-bold text-white text-right`}
                >
                  $14,634.06
                </h1>
                <p className="text-[#32CC86] font-normal text-sm mt-2">
                  + $248.23(+0.35%)
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-6 h-6 text-blue-600 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 bg-gray-600 border border-white bg-transparent"
                />
                <label className="ml-[20px]">
                  <h3 className="text-white text-[15px]/[17.9px] font-bold">
                    Binance Portfolio
                  </h3>
                  <p className="text-white/[.5] text-[12px]/[14.32px] font-normal mt-2">
                    API Address
                  </p>
                </label>
              </div>
              <div className="">
                <h1
                  className={`  price text-[15px]/[17.9px] font-bold text-white text-right`}
                >
                  $14,634.06
                </h1>
                <p className="text-[#32CC86] font-normal text-sm mt-2">
                  + $248.23(+0.35%)
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-6 h-6 text-blue-600 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 bg-gray-600 border border-white bg-transparent"
                />
                <label className="ml-[20px]">
                  <h3 className="text-white text-[15px]/[17.9px] font-bold">
                    Kraken Portfolio
                  </h3>
                  <p className="text-white/[.5] text-[12px]/[14.32px] font-normal mt-2">
                    API Address
                  </p>
                </label>
              </div>
              <div className="">
                <h1
                  className={`  price text-[15px]/[17.9px] font-bold text-white text-right`}
                >
                  $14,634.06
                </h1>
                <p className="text-[#32CC86] font-normal text-sm mt-2">
                  + $248.23(+0.35%)
                </p>
              </div>
            </div>
          </div>
          <div className="create mt-[60px] flex justify-center items-center gap-x-5">
            <button className="flex justify-center items-center gap-x-5">
              <FiCopy className="text-white"></FiCopy>
              <span className="text-white text-sm">Create new portfolio</span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default MyPortfolioModal;

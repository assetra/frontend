"use client";

import React from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

import Back from "@/public/assets/news.png";
import Logo from "@/public/assets/logo.png";

interface INewsLetterProps {
  open: boolean;
  setOpen: (state: boolean) => void;
}

const NewsLetter = ({ open, setOpen }: INewsLetterProps) => {
  return (
    <div
      className={`fixed left-0 top-0 ${
        open ? "block" : "hidden"
      } z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-black/90`}
    >
      <div data-twe-modal-dialog-ref className={`w-full h-full flex items-center justify-center`}>
        <div
          className={` ${
            open ? " opacity-100" : "opacity-0 "
          } flex sm:w-[80%]  md:w-3/5 tablet:w-10/12 max-w-[1000px] justify-center transition-all duration-2000 ease-in-out animate-[bounce_1s_2]`}
        >
          <div className="image flex-1 hidden tablet:block">
            <Image src={Back} alt="background" />
          </div>
          <div className="bg-white p-2.5 flex-1">
            <div className="flex justify-end">
              <RxCross2 size={20} onClick={() => setOpen(false)} />
            </div>
            <div className="flex flex-col  gap-y-[30px] lg:gap-y-[50px] xl:gap-y-[100px]">
              <div className="title flex flex-col sm:gap-y-5 items-center justify-center">
                <Image src={Logo} alt="Logo" className="invert" />
                <div className=" text-[32px]/[24px] font-bold">JOIN TEAM GTX</div>
              </div>
              <div className="flex flex-col gap-y-5 md:gap-y-3 lg:gap-y-5  px-8 tablet:px-3 lg:px-8">
                <div className="text-base font-normal text-center">Stay Connected with GTX: Subscribe for Updates</div>
                <div className="flex  rounded-full px-4 py-2 bg-[#2F3241]/50">
                  <input
                    className="w-full outline-none bg-transparent text-black text-xs md:text-sm placeholder-black"
                    type="text"
                    placeholder="Enter your email address"
                  />
                  <a href="#">
                    <button className="text-black bg-[#1e68f6] px-4 py-3 rounded-full text-xs md:text-sm font-semibold w-[120px]">
                      Get Started
                    </button>
                  </a>
                </div>
                <div className="text-base font-normal text-center">
                  By subscribing, you consent to receiving emails from GTX. You can revoke your consent at any time.
                </div>
              </div>
              <div className="flex gap-x-6 sm:gap-x-4 justify-center">
                <Image width={16} height={16} className="invert" src="/assets/x.png" alt="img" />
                <Image width={16} height={16} className="invert" src="/assets/insta.png" alt="img" />
                <Image width={16} height={16} className="invert" src="/assets/facebook.png" alt="img" />
                <Image width={16} height={16} className="invert" src="/assets/image-11.png" alt="img" />
                <Image width={16} height={16} className="invert" src="/assets/whatsapp.png" alt="img" />
                <Image width={16} height={16} className="invert" src="/assets/linkedin.png" alt="img" />
                <Image width={16} height={16} className="invert" src="/assets/telegram.png" alt="img" />
                <Image width={16} height={16} className="invert" src="/assets/reddit.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

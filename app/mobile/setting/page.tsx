"use client";

import React, { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useParams, useRouter } from "next/navigation";
import { BsChevronRight, BsTrash } from "react-icons/bs";

import MenuBar from "@/components/mobile/MenuBar";
import PortfolioSettingModal from "@/components/modal/PortfolioSettingModal";

const Setting = () => {
  const router = useRouter();
  const params = useParams<any>();
  const [open, setOpen] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);
  const handleClick = (id: number) => {
    if (id === 1) setOpen(true);
    else if (id === 2) setSettingOpen(true);
    else setSettingOpen(false);
  };
  return (
    <div className=" font-SFPro pt-[94px] min-h-screen h-screen overflow-auto">
      <div className="header px-4 flex w-full items-center justify-between">
        <BiLeftArrowAlt
          onClick={(e) => {
            router.back();
          }}
          className="text-white w-4 h-4  left-[33px]"
        />
        <h2 className="text-[#fefefe] font-bold text-sm text-center">
          Settings
        </h2>
        <BsTrash className="w-4 h-4 text-white" />
      </div>
      <div className="mt-8">
        <div className="setting-wrapper pb-8">
          <h2 className="setting-title text-white font-bold text-[32px]/[28px] px-4 mb-3">
            General
          </h2>
          <div className="setting-item w-full flex justify-between px-4 items-center py-4">
            <p className="font-bold text-white text-sm">Notifications</p>
            <BsChevronRight className="text-[#666666] w-4 h-4" />
          </div>
          <div className="setting-item w-full flex justify-between px-4 items-center py-4 bg-[#13141D]">
            <p className="font-bold text-white text-sm">Currency Preference</p>
            <BsChevronRight className="text-[#666666] w-4 h-4" />
          </div>
        </div>
        <div className="setting-wrapper pb-8">
          <h2 className="setting-title text-white font-bold text-[32px]/[28px] px-4 mb-3">
            Accounts
          </h2>
          <div
            className="setting-item w-full flex justify-between px-4 items-center py-4"
            onClick={() => router.push("/mobile/profile")}
          >
            <p className="font-bold text-white text-sm">User profile</p>
            <BsChevronRight className="text-[#666666] w-4 h-4" />
          </div>
          <div className="setting-item w-full flex justify-between px-4 items-center py-4 bg-[#13141D]">
            <p className="font-bold text-white text-sm">Change PIN</p>
            <BsChevronRight className="text-[#666666] w-4 h-4" />
          </div>
          <div className="setting-item w-full flex justify-between px-4 items-center py-4">
            <p className="font-bold text-white text-sm">Log Out</p>
            <BsChevronRight className="text-[#666666] w-4 h-4" />
          </div>
        </div>
        <div className="setting-wrapper pb-8">
          <h2 className="setting-title text-white font-bold text-[32px]/[28px] px-4 mb-3">
            Social
          </h2>
          <div className="setting-item w-full flex justify-between px-4 items-center py-4">
            <p className="font-bold text-white text-sm">Telegram</p>
            <BsChevronRight className="text-[#666666] w-4 h-4" />
          </div>
          <div className="setting-item w-full flex justify-between px-4 items-center py-4 bg-[#13141D]">
            <p className="font-bold text-white text-sm">Twitter</p>
            <BsChevronRight className="text-[#666666] w-4 h-4" />
          </div>
        </div>
      </div>
      <MenuBar
        active={5}
        settingOpen={settingOpen}
        setSettingOpen={setSettingOpen}
      />
      <PortfolioSettingModal
        isOpen={settingOpen}
        openChange={() => setSettingOpen(false)}
      />
    </div>
  );
};

export default Setting;

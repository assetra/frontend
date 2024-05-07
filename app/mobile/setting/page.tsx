"use client";

import React, { useEffect, useRef, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useParams, useRouter } from "next/navigation";

import Accordion from "@/components/Accordian";
import { BsChevronRight, BsTrash } from "react-icons/bs";
import TransactionDeleteModal from "@/components/modal/TransactionDeleteModal";
import Icon1 from "@/components/icons/portfolio/Icon6";
import Icon2 from "@/components/icons/portfolio/Icon2";
import Icon3 from "@/components/icons/portfolio/Icon3";
import Icon4 from "@/components/icons/portfolio/Icon4";
import Icon5 from "@/components/icons/portfolio/Icon5";

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
    <div className="portfolio pt-[94px] min-h-screen h-screen overflow-auto">
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
          <div className="setting-item w-full flex justify-between px-4 items-center py-4">
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
      <div className="control-wrapper bg-[#0e0f18] pt-2 flex items-center justify-evenly h-[110px] fixed left-0 bottom-0 w-full">
        <Icon1 isActive={false} onClick={() => handleClick(1)} />
        <Icon2 isActive={false} onClick={() => handleClick(2)} />
        <Icon3
          isActive={settingOpen}
          onClick={() => setSettingOpen(!settingOpen)}
        />

        <Icon4 isActive={false} onClick={() => handleClick(4)} />
        <Icon5 isActive={true} onClick={() => handleClick(2)} />
      </div>
    </div>
  );
};

export default Setting;

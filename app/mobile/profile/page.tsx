"use client";

import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { BsChevronRight } from "react-icons/bs";

const Profile = () => {
  const router = useRouter();
  return (
    <div className=" font-SFPro pt-[94px] min-h-screen h-screen overflow-auto">
      <div className="header px-4 flex w-full items-center justify-center relative">
        <BiLeftArrowAlt
          onClick={(e) => {
            router.back();
          }}
          className="text-white w-4 h-4 absolute left-[16px]"
        />
        <h2 className="text-[#fefefe] font-bold text-sm text-center">
          Settings
        </h2>
      </div>
      <div className="mt-2">
        <div className="profile-wrapper">
          <div className="profile-item w-full flex justify-between px-4 items-center py-4">
            <div>
              <p className="font-normal text-[12px]/[14.32px] text-white/[.5]">
                First name
              </p>
              <p className="font-bold text-white text-sm">Victor</p>
            </div>
          </div>
          <div className="profile-item w-full flex justify-between px-4 items-center py-4 bg-[#13141D]">
            <div>
              <p className="font-normal text-[12px]/[14.32px] text-white/[.5]">
                Last name
              </p>
              <p className="font-bold text-white text-sm">Niculici</p>
            </div>
          </div>
          <div className="profile-item w-full flex justify-between px-4 items-center py-4">
            <div>
              <p className="font-normal text-[12px]/[14.32px] text-white/[.5]">
                Email address
              </p>
              <p className="font-bold text-white text-sm">
                niculici.victor@gmail.com
              </p>
            </div>
          </div>
          <div className="profile-item w-full flex justify-between px-4 items-center py-4 bg-[#13141D]">
            <p className="font-bold text-white text-sm">Change password</p>
            <BsChevronRight className="text-[#666666] w-4 h-4" />
          </div>
          <div className="profile-item w-full flex justify-between px-4 items-center py-4">
            <p className="font-bold text-white text-sm">Delete account</p>
            <BsChevronRight className="text-[#666666] w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

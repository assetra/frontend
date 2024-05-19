import React, { useState } from "react";
import Image from "next/image";
import { useContext } from "react";
import { BiChevronDown } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaRegBell } from "react-icons/fa";

import { AuthContext } from "@/context/AddContext";
import Link from "next/link";

const NavbarDashboard = () => {
  const appContext = useContext(AuthContext);
  const [isDrop, setIsDrop] = useState(false);
  const onChangeDashboardState = (value: number) => {
    appContext.setDashboardState(value);
  };

  const handleDropDown = () => {
    setIsDrop(!isDrop);
  };

  return (
    <div className="flex flex-row bg-black text-white justify-between items-center px-12 py-[15px] h-[70px] text-base">
      <div className="flex flex-row justify-between items-center gap-[70px] xl:gap-28">
        <Image src={"/images/logo.png"} alt="GTX logo" width={70} height={70} />
        <div className="flex flex-row items-center gap-8 xl:gap-12 font-normal hiddend lg:flex">
          <div
            className={"flex flex-row items-center " + (appContext.dashboardState === 1 ? "font-bold" : "font-normal")}
          >
            <Link href="/dashboard" onClick={() => onChangeDashboardState(1)}>
              Dashboard
            </Link>
          </div>
          <div
            className={"flex flex-row items-center " + (appContext.dashboardState === 2 ? "font-bold" : "font-normal")}
          >
            <Link href="/market" onClick={() => onChangeDashboardState(2)}>
              Market
            </Link>
          </div>
          <div
            className={"flex flex-row items-center " + (appContext.dashboardState === 3 ? "font-bold" : "font-normal")}
          >
            <Link href="/wallet" onClick={() => onChangeDashboardState(3)}>
              Wallet
            </Link>
          </div>
          <div
            className={"flex flex-row items-center " + (appContext.dashboardState === 4 ? "font-bold" : "font-normal")}
          >
            <Link href="/exchange" onClick={() => onChangeDashboardState(4)}>
              Exchange
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-center font-normal">
        <div className="lg:hiddend relative">
          <button
            id="multiLevelDropdownButton"
            data-dropdown-toggle="multi-dropdown"
            className="text-white "
            type="button"
            onClick={handleDropDown}
          >
            <FaBars className="w-5 h-5"></FaBars>
          </button>

          {isDrop && (
            <div
              id="multi-dropdown"
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute"
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                <li className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <a href="/buy">Buy crypto</a>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <a href="/buy">Discover</a>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <a href="/buy">Trade</a>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <a href="/buy">Grow</a>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <a href="/buy">Build</a>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <a href="/buy">Institutional</a>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <a href="/buy">Learn</a>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <a href="/buy">More</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex relative group justify-center items-center z-1001 ">
          <input
            type="text"
            className="w-40 xl:w-52 px-6 py-2 block flex-1 rounded-full bg-search/50 text-white placeholder:text-gtxText focus:ring-transparent border-transparent sm:text-sm sm:leading-6"
            placeholder="Search"
          />
          <CiSearch className="flex absolute right-6" size={20} />
        </div>
        <div className="flex flex-row space-x-4 items-center justify-center">
          <FaRegBell size={24} color="white" />
          <span className="text-white">Your Name</span>
          <Image src="/images/user-avatar.png" alt="user-avatar" width={38} height={38} priority />
          <BiChevronDown size={24} color="white" />
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;

import React from "react";
import { useContext } from "react";
import Image from "next/image";
import { AuthContext } from "@/context/AddContext";

const NavbarDashboard = () => {
  const appContext = useContext(AuthContext);
  const onChangeDashboardState = (value: number) => {
    appContext.setDashboardState(value);
  };

  return (
    <div className="flex flex-row bg-black text-white justify-between items-center px-12 py-2 h-top text-base">
      <div className="flex flex-row justify-between items-center gap-28">
        <Image src={"/images/logo.png"} alt="GTX logo" width={70} height={70} />
        <div className="flex flex-row items-center gap-12 font-normal">
          <div
            className={
              "flex flex-row items-center " +
              (appContext.dashboardState === 1 ? "font-bold" : "font-normal")
            }
          >
            <a href="/dashboard" onClick={() => onChangeDashboardState(1)}>
              Dashboard
            </a>
          </div>
          <div
            className={
              "flex flex-row items-center " +
              (appContext.dashboardState === 2 ? "font-bold" : "font-normal")
            }
          >
            <a href="/market" onClick={() => onChangeDashboardState(2)}>
              Market
            </a>
          </div>
          <div
            className={
              "flex flex-row items-center " +
              (appContext.dashboardState === 3 ? "font-bold" : "font-normal")
            }
          >
            <a href="/wallet" onClick={() => onChangeDashboardState(3)}>
              Wallet
            </a>
          </div>
          <div
            className={
              "flex flex-row items-center " +
              (appContext.dashboardState === 4 ? "font-bold" : "font-normal")
            }
          >
            <a href="/exchange" onClick={() => onChangeDashboardState(4)}>
              Exchange
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-center font-normal">
        <div className="flex relative group justify-center items-center z-1001">
          <input
            type="text"
            className="w-52 px-6 py-2 block flex-1 border-transparent rounded-full bg-search/50 text-white placeholder:text-gtxText focus:ring-transparent border-transparent sm:text-sm sm:leading-6"
            placeholder="Search"
          />
          <img
            className="flex absolute right-6"
            src="/images/search-icon.png"
            alt="search-icon"
          />
        </div>
        <div className="flex flex-row space-x-4 items-center justify-center">
          <img
            className="cursor-pointer"
            src="/images/notification-icon.png"
            alt="notification-icon"
          />
          <span className="text-white">Your Name</span>
          <img src="/images/user-avatar.png" alt="user-avatar" />
          <img
            className="cursor-pointer"
            src="/images/arrow-down.png"
            alt="arrow-down"
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;

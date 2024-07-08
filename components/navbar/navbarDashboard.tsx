import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "@/contexts/AddContext";
import MultiLevelDropdown from "./MultiLevelDropdown";

const NavbarDashboard: React.FC = () => {
  const appContext = useContext(AuthContext);

  const onChangeDashboardState = (value: number) => {
    appContext.setDashboardState(value);
  };

  return (
    <nav className="flex flex-row bg-black text-white text-xs justify-between items-center px-4 py-5 top-0 fixed w-[100svw] max-h-12 z-50">
      <a href="/">
        <Image src={"/images/logo.png"} alt="GTX logo" width={70} height={70} />
      </a>
      <div className="flex flex-row items-center gap-4 md:gap-12">
        {["Dashboard", "Market", "Wallet", "Exchange", "Customizer"].map(
          (item, index) => {
            const isActive = appContext.dashboardState === index + 1;
            return (
              <div
                key={item}
                className={`flex flex-row items-center hover:border-white hover:border-b-2 hover:pb-1 ${
                  isActive ? "font-bold" : "font-normal"
                }`}
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  onClick={() => onChangeDashboardState(index + 1)}
                >
                  {item}
                </Link>
              </div>
            );
          }
        )}
      </div>
      <div className="md:flex flex-row space-x-4 items-center font-semibold hidden md:display">
        <div className="flex relative group justify-center items-center z-1001">
          <input
            type="text"
            className="w-52 px-6 py-1 block flex-1 border-transparent rounded-full bg-[#2F324180] text-white placeholder:text-gtxText focus:ring-transparent focus:border-transparent sm:text-sm sm:leading-6"
            placeholder="Search"
            aria-label="Search"
          />
          <Image
            className="flex absolute right-6"
            src="/images/search-icon.png"
            alt="Search icon"
            width={16}
            height={16}
          />
        </div>
        <div className="flex relative group justify-center items-center z-1001">
          <div className="px-6 py-1 block flex-1 border-transparent rounded-full bg-gradient-to-r from-red-600 to-blue-700 text-white sm:text-sm sm:leading-6 cursor-pointer">
            <label htmlFor="wallet_card" className="cursor-pointer">
              Connect Wallet
            </label>
          </div>
        </div>
        <div className="flex flex-row space-x-2 items-center justify-center">
          <div className="dropdown dropdown-end">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-black shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
              </div>
            </div>
          </div>
          <span className="text-white">Your Name</span>

          <a href="/profile" className="avatar">
            <div className="w-8 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </a>
          <div className="dropdown dropdown-end bg-black">
            <MultiLevelDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MultiLevelDropdown from "./MultiLevelDropdown";
import { useAuth } from "@/contexts/AuthContext";
import ConnectWallet from "@/components/wallet/ConnectWallet";

const NavbarAuth = () => {
  const { user, isAuthenticated } = useAuth();
  const [hydrated, setHydrated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // or a loading spinner
  }

  return (
    <nav className="flex flex-row bg-black text-white text-xs justify-between items-center px-4 py-5 top-0 fixed w-[100svw] max-h-12 z-50">
      <a href="/">
        <Image src={"/images/logo.png"} alt="GTX logo" width={70} height={70} />
      </a>
      <div className="md:flex flex-row items-center gap-6 hidden md:display">
        <div
          className={`flex flex-row items-center hover:border-white hover:border-b-2 hover:pb-1 ${
            pathname === "/dashboard" ? "font-bold" : "font-normal"
          }`}
        >
          <a href="/dashboard">Dashboard</a>
        </div>
        <div
          className={`flex flex-row items-center hover:border-white hover:border-b-2 hover:pb-1 ${
            pathname === "/swaps" ? "font-bold" : "font-normal"
          }`}
        >
          <a href="/swaps">Swaps</a>
        </div>
        <div
          className={`flex flex-row items-center hover:border-white hover:border-b-2 hover:pb-1 ${
            pathname === "/market" ? "font-bold" : "font-normal"
          }`}
        >
          <a href="/market">Market</a>
        </div>
        <div
          className={`flex flex-row items-center hover:border-white hover:border-b-2 hover:pb-1 ${
            pathname === "/wallet" ? "font-bold" : "font-normal"
          }`}
        >
          <a href="/wallet">Wallet</a>
        </div>
        <div
          className={`flex flex-row items-center hover:border-white hover:border-b-2 hover:pb-1 ${
            pathname === "/exchange" ? "font-bold" : "font-normal"
          }`}
        >
          <a href="/exchange">Exchange</a>
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-center font-semibold">
        {isAuthenticated ? (
          <>
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
              <ConnectWallet />
            </div>
            <div className="flex flex-row space-x-2 items-center justify-center">
              <div className="dropdown dropdown-end">
                <a className="avatar w-8 p-2 rounded-full" href="/customizer">
                  <Image
                    src={"/assets/customizer.png"}
                    alt="customizer"
                    width={70}
                    height={70}
                  />
                </a>
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
              <span className="text-white">{user?.username || "username"}</span>
              <a href="/profile" className="avatar">
                <div className="w-8 rounded-full hover:border-[3px] border-blue-300">
                  <img
                    alt="Profile Picture"
                    src={
                      user?.profilePicture ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </a>
              <div className="dropdown dropdown-end bg-black">
                <MultiLevelDropdown />
              </div>
            </div>
          </>
        ) : (
          <>
            <a className="avatar w-8 p-2 rounded-full" href="/customizer">
              <Image
                src={"/assets/customizer.png"}
                alt="customizer"
                width={70}
                height={70}
              />
            </a>
            <label
              htmlFor="login"
              className="cursor-pointer flex flex-row items-center hover:border-white hover:border-b-2 hover:pb-1"
            >
              Log In
            </label>
            <label
              htmlFor="sign_up"
              className="cursor-pointer flex flex-row items-center px-4 py-1.5 bg-white text-black rounded-2xl font-semibold"
            >
              Sign Up
            </label>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavbarAuth;

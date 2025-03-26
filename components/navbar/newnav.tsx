"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import React from "react";
import { usePathname } from "next/navigation";
import MultiLevelDropdown from "./MultiLevelDropdown";
import { useAuth } from "@/contexts/AuthContext";
import ConnectWallet from "@/components/wallet/ConnectWallet";
const newnav = () => {
  const { user, isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      <nav className="max-w-10xl w-full flex flex-row bg-white/20 text-white text-xs justify-between items-center px-4 py-5 top-0 fixed max-h-12 z-50 shadow-lg mx-auto  rounded-lg backdrop-blur-lg backdrop-saturate-150 backdrop-filter border border-white/20 ">
        <div className="w-full justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href={"/"}>
                <Image
                  className="block lg:hidden "
                  src={"/images/logo.png"}
                  alt="Assetra logo"
                  width={70}
                  height={70}
                />
                <Image
                  className="hidden lg:block "
                  src={"/images/logo.png"}
                  alt="Assetra logo"
                  width={70}
                  height={70}
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 text-gray-400">
              <Link
                href="/dashboard"
                className={` ${pathname === "/dashboard" ? "font-bold text-gray-300" : "font-normal"} hover:border-white hover:border-b-2  inline-flex items-center px-1 pt-1 border-b-2 border-transparent  text-sm 
             `}
              >
                Dashboard
              </Link>
              <Link
                href="/swaps"
                className={` ${pathname === "/swaps" ? "font-bold text-gray-300" : "font-normal"} hover:border-white hover:border-b-2  inline-flex items-center px-1 pt-1 border-b-2 border-transparent  text-sm`}
              >
                Swaps
              </Link>
              <Link
                href="/market"
                className={` ${pathname === "/market" ? "font-bold text-gray-300" : "font-normal"} hover:border-white hover:border-b-2  inline-flex items-center px-1 pt-1 border-b-2 border-transparent  text-sm`}
              >
                Market
              </Link>
              <Link
                href="/wallet"
                className={` ${pathname === "/wallet" ? "font-bold text-gray-300" : "font-normal"} hover:border-white hover:border-b-2  inline-flex items-center px-1 pt-1 border-b-2 border-transparent  text-sm`}
              >
                Wallet
              </Link>
              <Link
                href="/exchange"
                className={` ${pathname === "/exchange" ? "font-bold text-gray-300" : "font-normal"} hover:border-white hover:border-b-2  inline-flex items-center px-1 pt-1 border-b-2 border-transparent  text-sm`}
              >
                Exchange
              </Link>
              <Link
                href="/forum"
                className={` ${pathname === "/forum" ? "font-bold text-gray-300" : "font-normal"} hover:border-white hover:border-b-2  inline-flex items-center px-1 pt-1 border-b-2 border-transparent  text-sm`}
              >
                Forum
              </Link>
              <Link
                href="/blog"
                className={` ${pathname === "/blog" ? "font-bold text-gray-300" : "font-normal"} hover:border-white hover:border-b-2  inline-flex items-center px-1 pt-1 border-b-2 border-transparent  text-sm`}
              >
                Blog
              </Link>
              <Link
                href="/news"
                className={` ${pathname === "/news" ? "font-bold text-gray-300" : "font-normal"} hover:border-white hover:border-b-2  inline-flex items-center px-1 pt-1 border-b-2 border-transparent  text-sm`}
              >
                News
              </Link>
            </div>
            <div className="hidden  sm:flex sm:gap-4 sm:items-center">
              {isAuthenticated ? (
                <>
                  <div className="flex relative group justify-center items-center z-1001">
                    <input
                      id="searchInput"
                      type="text"
                      className="px-6 py-1 outline-none  bg-white/10 backdrop-blur-md border border-white/20 rounded-lg w-[40px] h-[35px] p-[15px] transition-all duration-500 focus:w-[200px] focus:pl-[30px] focus:ml-4 placeholder:text-white text-white"
                      placeholder="search here..."
                    />
                    <label
                      htmlFor="searchInput"
                      className="flex absolute right-6 cursor-pointer"
                    >
                      <Image
                        src="/images/search-icon.png"
                        alt="Search icon"
                        width={16}
                        height={16}
                      />
                    </label>
                  </div>

                  <div className="flex relative justify-center items-center z-[1001] w-full sm:w-auto group">
                    <ConnectWallet />
                  </div>

                  <div className="flex flex-row space-x-2 items-center justify-center">
                    <div className="flex items-center dropdown dropdown-end">
                      <a
                        className="avatar w-8 p-2 rounded-full"
                        href="/customizer"
                      >
                        <Image
                          src={"/assets/customizer.png"}
                          alt="customizer"
                          width={70}
                          height={70}
                        />
                      </a>
                      {/* <button className="btn btn-ghost btn-circle">
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
                      </button> */}
                      {/* <div
                        tabIndex={0}
                        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-black shadow"
                      >
                        <div className="card-body">
                          <span className="font-bold text-lg">8 Items</span>
                          <span className="text-info">Subtotal: $999</span>
                        </div>
                      </div> */}
                    </div>
                    <span className="text-white">
                      {user?.username || "username"}
                    </span>
                    <a href="/profile" className="avatar">
                      <div className="w-8 rounded-full hover:border-[3px] border-white">
                        <img
                          alt="Profile Picture"
                          src={user?.profilePicture || "/assets/profile.png"}
                        />
                      </div>
                    </a>
                    <div className="dropdown dropdown-end bg-black">
                      <MultiLevelDropdown />
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center gap-4 ">
                  <label
                    htmlFor="login"
                    className="cursor-pointer flex flex-row items-center px-4 py-1.5 text-gray-400  font-semibold"
                  >
                    Log In
                  </label>
                  <label
                    htmlFor="sign_up"
                    className="cursor-pointer flex flex-row items-center px-4 py-1.5 bg-white text-black rounded-2xl font-semibold"
                  >
                    Sign Up
                  </label>
                </div>
              )}
            </div>
            <div className="md:hidden flex justify-center items-center ">
              {isAuthenticated ? (
                <div className=" flex items-center justify-center gap-2">
                  <span className="text-white">
                    {user?.username || "username"}
                  </span>
                  <a href="/profile" className="avatar">
                    <div className="w-8 rounded-full hover:border-[3px] border-white">
                      <img
                        alt="Profile Picture"
                        src={user?.profilePicture || "/assets/profile.png"}
                      />
                    </div>
                  </a>
                  <div className="dropdown dropdown-end bg-black">
                    <MultiLevelDropdown />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-2">
                  <Link
                    href="/login"
                    className="flex flex-row items-center px-4 py-1.5 bg-white text-gray-400 rounded-2xl font-semibold"
                  >
                    Log In
                  </Link>
                  <Link
                    href="/signup"
                    className="flex flex-row items-center px-4 py-1.5 bg-white text-black rounded-2xl font-semibold"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <>
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}

        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-[24rem] pb-3 space-y-1">
              <div className="bg-gray-800/40 backdrop-blur-md rounded-lg shadow-xl p-4 border border-gray-500/30">
                {" "}
                <Link
                  href="/"
                  className="text-gray-200 block pl-3 pr-4 py-2 text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/dashboard"
                  className="text-gray-200 block pl-3 pr-4 py-2 text-base font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  href="/swaps"
                  className="text-gray-200 block pl-3 pr-4 py-2 text-base font-medium"
                >
                  Swaps
                </Link>
                <Link
                  href="/market"
                  className="text-gray-200 block pl-3 pr-4 py-2 text-base font-medium"
                >
                  Market
                </Link>
                <Link
                  href="/wallet"
                  className="text-gray-200 block pl-3 pr-4 py-2 text-base font-medium"
                >
                  Wallet
                </Link>
                <Link
                  href="/exchange"
                  className="text-gray-200 block pl-3 pr-4 py-2 text-base font-medium"
                >
                  Exchange
                </Link>
                <Link
                  href="/forum"
                  className="text-gray-200 block pl-3 pr-4 py-2 text-base font-medium"
                >
                  Forum
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-200 block pl-3 pr-4 py-2 text-base font-medium"
                >
                  Blog
                </Link>
                <Link
                  href="/news"
                  className="text-gray-200 block pl-3 pr-4 py-2 text-base font-medium"
                >
                  News
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default newnav;

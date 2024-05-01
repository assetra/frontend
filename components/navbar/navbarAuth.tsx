import React from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { FaBars } from "react-icons/fa";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const NavbarAuth = () => {
  return (
    <div className="flex flex-row bg-background text-white text-xs justify-between items-center pl-[42px] pr-5  h-[70px]">
      <Image src={"/images/logo.png"} alt="GTX logo" width={70} height={70} />
      <div className="flex flex-row items-center gap-4 text-[13px]/[14px]">
        <div className="flex flex-row items-center">
          <a href="/buy">Buy crypto</a>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex flex-row  items-center">
          <a href="/buy">Discover</a>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex flex-row  items-center">
          <a href="/buy">Trade</a>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex flex-row  items-center">
          <a href="/buy">Grow</a>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex flex-row  items-center">
          <a href="/buy">Build</a>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex flex-row  items-center">
          <a href="/buy">Institutional</a>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex flex-row  items-center">
          <a href="/buy">Learn</a>
        </div>
        <div className="flex flex-row  items-center">
          <a href="/buy">More</a>
          <MdKeyboardArrowDown />
        </div>
      </div>
      <div>
        <button
          id="multiLevelDropdownButton"
          data-dropdown-toggle="multi-dropdown"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          <FaBars></FaBars>
        </button>

        <div
          id="multi-dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="multiLevelDropdownButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <button
                id="doubleDropdownButton"
                data-dropdown-toggle="doubleDropdown"
                data-dropdown-placement="right-start"
                type="button"
                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dropdown
                <svg
                  className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>
              <div
                id="doubleDropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="doubleDropdownButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Overview
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      My downloads
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Billing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Rewards
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row space-x-5 items-center font-semibold text-[14px]/[18.2px]">
        <Link href="/login" className={`${roboto.className} `}>
          Log In
        </Link>
        <Link
          className="px-[27.8px] py-[9px] bg-white text-[#080404] rounded-[90px] font-bold"
          href="/signup"
        >
          Sign Up
        </Link>
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.33324 4.00012C2.33324 3.55803 2.50886 3.13406 2.82146 2.82146C3.13406 2.50886 3.55803 2.33324 4.00012 2.33324H4.83324C5.0542 2.33324 5.26611 2.24547 5.42235 2.08923C5.57859 1.93298 5.66637 1.72108 5.66637 1.50012C5.66637 1.27916 5.57859 1.06725 5.42235 0.911009C5.26611 0.754768 5.0542 0.666992 4.83324 0.666992H4.00012C3.11612 0.666992 2.26832 1.01816 1.64324 1.64324C1.01816 2.26832 0.666992 3.11612 0.666992 4.00012V14.8332C0.666992 15.7172 1.01816 16.565 1.64324 17.1901C2.26832 17.8152 3.11612 18.1664 4.00012 18.1664H14.0001C14.8841 18.1664 15.7319 17.8152 16.357 17.1901C16.9821 16.565 17.3332 15.7172 17.3332 14.8332V4.00012C17.3332 3.11612 16.9821 2.26832 16.357 1.64324C15.7319 1.01816 14.8841 0.666992 14.0001 0.666992H13.0614C12.8404 0.666992 12.6285 0.754768 12.4723 0.911009C12.316 1.06725 12.2282 1.27916 12.2282 1.50012C12.2282 1.72108 12.316 1.93298 12.4723 2.08923C12.6285 2.24547 12.8404 2.33324 13.0614 2.33324H14.0001C14.4422 2.33324 14.8662 2.50886 15.1788 2.82146C15.4914 3.13406 15.667 3.55803 15.667 4.00012V14.8332C15.667 15.2753 15.4914 15.6993 15.1788 16.0119C14.8662 16.3245 14.4422 16.5001 14.0001 16.5001H4.00012C3.55803 16.5001 3.13406 16.3245 2.82146 16.0119C2.50886 15.6993 2.33324 15.2753 2.33324 14.8332V4.00012ZM8.99699 0.666992C9.45699 0.666992 9.83012 1.04012 9.83012 1.50012V11.1582L12.1607 8.82762C12.2381 8.75022 12.33 8.68882 12.4312 8.64694C12.5323 8.60505 12.6407 8.58349 12.7501 8.58349C12.8596 8.58349 12.968 8.60505 13.0691 8.64694C13.1702 8.68882 13.2621 8.75022 13.3395 8.82762C13.4169 8.90501 13.4783 8.9969 13.5202 9.09802C13.5621 9.19915 13.5836 9.30753 13.5836 9.41699C13.5836 9.52645 13.5621 9.63483 13.5202 9.73596C13.4783 9.83708 13.4169 9.92897 13.3395 10.0064L9.58949 13.7564C9.51193 13.8341 9.41975 13.8957 9.31828 13.9376C9.21681 13.9796 9.10804 14.001 8.99824 14.0007H8.99637C8.87635 14.0009 8.75773 13.975 8.64865 13.925C8.53958 13.8749 8.44264 13.8018 8.36449 13.7107L4.66074 10.007C4.58334 9.92959 4.52195 9.83771 4.48006 9.73658C4.43817 9.63546 4.41662 9.52707 4.41662 9.41762C4.41661 9.30816 4.43817 9.19977 4.48006 9.09865C4.52195 8.99752 4.58334 8.90564 4.66074 8.82824C4.73814 8.75084 4.83002 8.68945 4.93115 8.64756C5.03227 8.60567 5.14066 8.58411 5.25012 8.58411C5.35957 8.58411 5.46796 8.60567 5.56909 8.64756C5.67021 8.68945 5.76209 8.75084 5.83949 8.82824L8.16387 11.1526V1.50137C8.16387 1.04137 8.53699 0.668242 8.99699 0.668242V0.666992Z"
            fill="white"
          />
        </svg>

        <IoGlobeOutline className="w-5 h-5" />
        <a href="/" className=" font-bold">
          USD
        </a>
      </div>
    </div>
  );
};

export default NavbarAuth;

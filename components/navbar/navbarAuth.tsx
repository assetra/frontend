import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { BsBoxArrowInDown } from "react-icons/bs";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const NavbarAuth = () => {
  const pathName = usePathname();
  return (
    <div className="flex flex-row bg-background text-white text-xs justify-between items-center pl-[42px] pr-5  h-[70px]">
      <Image src={"/images/logo.png"} alt="GTX logo" width={70} height={70} />
      <div className="flex flex-row items-center gap-4 text-[13px]/[14px] hiddend xl:flex">
        <div className="flex flex-row items-center">
          <Link href="/buy">Buy crypto</Link>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex flex-row  items-center">
          <Link href="/buy">Discover</Link>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex flex-row  items-center">
          <Link href="/buy">Trade</Link>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex flex-row  items-center">
          <Link href="/buy">Grow</Link>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex flex-row  items-center">
          <Link href="/buy">Build</Link>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex flex-row  items-center">
          <Link href="/buy">Institutional</Link>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex flex-row  items-center">
          <Link href="/buy">Learn</Link>
        </div>
        <div className="flex flex-row  items-center">
          <Link href="/buy">More</Link>
          <MdKeyboardArrowDown />
        </div>
      </div>

      <div className="flex flex-row space-x-3 md:space-x-5 items-center font-semibold text-[14px]/[18.2px]">
        <div className="xl:hidden block">
          <button
            id="multiLevelDropdownButton"
            data-dropdown-toggle="multi-dropdown"
            className="text-white "
            type="button"
          >
            <FaBars className="w-5 h-5"></FaBars>
          </button>

          <div
            id="multi-dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
              <li className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <Link href="/buy">Buy crypto</Link>
                <MdKeyboardArrowRight />
              </li>
              <li className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <Link href="/buy">Discover</Link>
                <MdKeyboardArrowRight />
              </li>
              <li className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <Link href="/buy">Trade</Link>
                <MdKeyboardArrowRight />
              </li>
              <li className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <Link href="/buy">Grow</Link>
                <MdKeyboardArrowRight />
              </li>
              <li className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <Link href="/buy">Build</Link>
                <MdKeyboardArrowRight />
              </li>
              <li className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <Link href="/buy">Institutional</Link>
                <MdKeyboardArrowRight />
              </li>
              <li className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <Link href="/buy">Learn</Link>
              </li>
              <li className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <Link href="/buy">More</Link>
                <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>
        </div>
        <Link
          href="/login"
          className={`${
            pathName === "/signup" ? "px-[27.8px] py-[9px] bg-white text-[#080404] rounded-[90px] font-bold" : ""
          } ${roboto.className} `}
        >
          Log In
        </Link>
        <Link
          className={`${
            pathName === "/login" ? "px-[27.8px] py-[9px] bg-white text-[#080404] rounded-[90px] font-bold" : ""
          }`}
          href="/signup"
        >
          Sign Up
        </Link>
        <BsBoxArrowInDown size={20} />
        <IoGlobeOutline size={20} />
        <Link href="/" className=" font-bold">
          USD
        </Link>
      </div>
    </div>
  );
};

export default NavbarAuth;

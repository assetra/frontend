import React from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsBoxArrowInDown } from "react-icons/bs";
import { IoGlobeOutline } from "react-icons/io5";
import Link from "next/link";

const NavbarAuth = () => {
  return (
    <div className="flex flex-row bg-black text-white text-xs justify-between items-center px-4 py-5">
      <Image src={"/images/logo.png"} alt="GTX logo" width={70} height={70} />
      <div className="flex flex-row items-center gap-4">
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
      <div className="flex flex-row space-x-4 items-center font-semibold">
        <Link href="/dashboard">Dashboard</Link> {/* added for demo purposes */}
        <Link href="/login">Log In</Link>
        <Link
          className="px-4 py-1.5 bg-white text-black rounded-2xl font-semibold"
          href="/signup"
        >
          Sign Up
        </Link>
        <BsBoxArrowInDown />
        <IoGlobeOutline />
        <a href="/" className=" font-bold">
          USD
        </a>
      </div>
    </div>
  );
};

export default NavbarAuth;

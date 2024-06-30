import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarAuth = () => {
  return (
    <nav className="flex flex-row bg-black text-white text-xs justify-between items-center px-4 py-5 top-0 fixed w-[100svw] max-h-12 z-50">
      <a href="/">
        <Image src={"/images/logo.png"} alt="GTX logo" width={70} height={70} />
      </a>
      <div className="md:flex flex-row items-center gap-6 hidden md:display">
        <div className="flex flex-row  items-center hover:border-white hover:border-b-2 hover:pb-1">
          <a href="">Trade</a>
        </div>
        <div className="flex flex-row  items-center hover:border-white hover:border-b-2 hover:pb-1">
          <a href="">Market</a>
        </div>
        <div className="flex flex-row  items-center hover:border-white hover:border-b-2 hover:pb-1">
          <a href="">Transfer</a>
        </div>
        <div className="flex flex-row  items-center hover:border-white hover:border-b-2 hover:pb-1">
          <a href="">Wallet</a>
        </div>
        <div className="flex flex-row  items-center hover:border-white hover:border-b-2 hover:pb-1">
          <a href="">Invest</a>
        </div>
        <div className="flex flex-row  items-center hover:border-white hover:border-b-2 hover:pb-1">
          <a href="">Support</a>
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-center font-semibold">
        <Link
          href="/dashboard"
          className="hover:border-white hover:border-b-2 hover:pb-1"
        >
          Dashboard
        </Link>{" "}
        {/* added for demo purposes */}
        <Link
          href="/login"
          className="hover:border-white hover:border-b-2 hover:pb-1"
        >
          Log In
        </Link>
        <Link
          className="px-4 py-1.5 bg-white text-black rounded-2xl font-semibold"
          href="/signup"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default NavbarAuth;

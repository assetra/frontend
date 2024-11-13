"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = () => {
  const pathname = usePathname();
  return (
    <div id="nav-link" className="flex space-x-8 text-gray-400">
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
  );
};

export default NavLink;

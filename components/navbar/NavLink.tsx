"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import posthog from "posthog-js";

const NavLink = () => {
  const pathname = usePathname();
  return (
    <div id="nav-link" className="flex space-x-8 text-gray-400">
      <Link
        onClick={() => posthog.capture("dashboard", { property: "value" })}
        href="/dashboard"
        className={` ${pathname === "/dashboard" ? "font-bold text-gray-300" : "font-normal"} hover:border-white hover:border-b-2  inline-flex items-center px-1 pt-1 border-b-2 border-transparent  text-sm 
             `}
      >
        Dashboard
      </Link>
      <Link
        onClick={() => posthog.capture("Swaps page", { property: "value" })}
        href="/swaps"
        className={` ${pathname === "/swaps" ? "font-bold text-gray-300" : "font-normal"} hover:border-white hover:border-b-2  inline-flex items-center px-1 pt-1 border-b-2 border-transparent  text-sm`}
      >
        Swaps
      </Link>
      <Link
        onClick={() => posthog.capture("market", { property: "value" })}
        href="/market"
        className={` ${pathname === "/market" ? "font-bold text-gray-300" : "font-normal"} hover:border-white hover:border-b-2  inline-flex items-center px-1 pt-1 border-b-2 border-transparent  text-sm`}
      >
        Market
      </Link>
      <Link
        onClick={() => posthog.capture("wallet page", { property: "value" })}
        href="/wallet"
        className={` ${pathname === "/wallet" ? "font-bold text-gray-300" : "font-normal"} hover:border-white hover:border-b-2  inline-flex items-center px-1 pt-1 border-b-2 border-transparent  text-sm`}
      >
        Wallet
      </Link>
      <Link
        onClick={() => posthog.capture("exchange page", { property: "value" })}
        href="/exchange"
        className={` ${pathname === "/exchange" ? "font-bold text-gray-300" : "font-normal"} hover:border-white hover:border-b-2  inline-flex items-center px-1 pt-1 border-b-2 border-transparent  text-sm`}
      >
        Exchange
      </Link>
      <Link
        onClick={() => posthog.capture("forum page", { property: "value" })}
        href="/forum"
        className={` ${pathname === "/forum" ? "font-bold text-gray-300" : "font-normal"} hover:border-white hover:border-b-2  inline-flex items-center px-1 pt-1 border-b-2 border-transparent  text-sm`}
      >
        Forum
      </Link>
      <Link
        onClick={() => posthog.capture("blog page", { property: "value" })}
        href="/blog"
        className={` ${pathname === "/blog" ? "font-bold text-gray-300" : "font-normal"} hover:border-white hover:border-b-2  inline-flex items-center px-1 pt-1 border-b-2 border-transparent  text-sm`}
      >
        Blog
      </Link>
      <Link
        onClick={() => posthog.capture("news page", { property: "value" })}
        href="/news"
        className={` ${pathname === "/news" ? "font-bold text-gray-300" : "font-normal"} hover:border-white hover:border-b-2  inline-flex items-center px-1 pt-1 border-b-2 border-transparent  text-sm`}
      >
        News
      </Link>
    </div>
  );
};

export default NavLink;

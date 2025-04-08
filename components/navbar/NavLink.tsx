"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import posthog from "posthog-js";
import CustomConnectButton from "../wallet/ConnectWallet";
import { Menu } from "lucide-react";

const NavLink = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Dashboard", path: "/dashboard", event: "dashboard" },
    { name: "Swaps", path: "/swaps", event: "Swaps page" },
    { name: "Market", path: "/market", event: "market" },
    { name: "Wallet", path: "/wallet", event: "wallet page" },
    { name: "Exchange", path: "/exchange", event: "exchange page" },
    { name: "Forum", path: "/forum", event: "forum page" },
    { name: "Blog", path: "/blog", event: "blog page" },
    { name: "News", path: "/news", event: "news page" },
  ];

  const renderNavLink = (item: {
    name: string;
    path: string;
    event: string;
  }) => (
    <Link
      key={item.path}
      onClick={() => posthog.capture(item.event, { property: "value" })}
      href={item.path}
      className={`${
        pathname === item.path ? "font-bold text-gray-600" : "font-normal"
      } hover:border-white hover:border-b-2 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm`}
    >
      {item.name}
    </Link>
  );

  return (
    <div className="relative">
      <div
        className="flex hidden lg:flex space-x-4 xl:space-x-8 text-gray-600 items-center"
      >
        {navItems.map(renderNavLink)}
        <div className="ml-2">
          <CustomConnectButton />
        </div>
      </div>
    </div>
  );
};

export default NavLink;

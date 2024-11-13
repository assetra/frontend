"use client";
import { useState } from "react";
import Background from "../../public/assets/bg-image.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Hamburger = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div id="hamburger">
      <button
        id="btn-open"
        type="button"
        onClick={toggleMenu}
        className={`w-[40px] aspect-square ${isOpen ? "hidden" : ""}`}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 8H13.75M5 12H19M10.25 16L19 16"
            stroke="#464455"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`${
          isOpen
            ? "bg-white text-black w-[100dvw] h-[100dvh] absolute top-0 left-0 z-3 opacity-100"
            : "hidden"
        }`}
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-between align-middle top-0 fixed w-[100dvw] min-h-12 max-h-12 px-4 z-50 mx-auto">
          <div className="my-auto">
            <Link href={"/"}>
              <img
                className=""
                src={"/images/logo.png"}
                alt="Assetra logo"
                width={70}
                height={70}
              />
            </Link>
          </div>
          <button
            id="btn-close"
            type="button"
            onClick={toggleMenu}
            className={`w-[40px] aspect-square my-auto ${
              isOpen ? "" : "hidden"
            }`}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L16.8995 7.10051"
                stroke="#464455"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 7.00001L16.8995 16.8995"
                stroke="#464455"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <menu id="menu" className="flex flex-col items-center p-4 text-white">
          <span className="text-2xl mb-4">Menu</span>
          <ul className="flex flex-col items-center space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/dashboard", label: "Dashboard" },
              { href: "/swaps", label: "Swaps" },
              { href: "/market", label: "Market" },
              { href: "/wallet", label: "Wallet" },
              { href: "/exchange", label: "Exchange" },
              { href: "/forum", label: "Forum" },
              { href: "/blog", label: "Blog" },
              { href: "/news", label: "News" },
            ].map((link) => (
              <li
                key={link.href}
                onClick={toggleMenu}
                className="transition duration-300 transform translate-y-8 animate-slide-up"
              >
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "font-bold text-blue-800"
                      : "font-normal"
                  } hover:text-blue-800 inline-flex items-center px-1 pt-1 text-[1rem]`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </menu>
      </div>
    </div>
  );
};

export default Hamburger;

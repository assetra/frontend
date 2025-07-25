"use client";
import React, { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const themes = [
  "light",
  "dark",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "forest",
  "aqua",
  "black",
  "luxury",
  "business",
  "lemonade",
  "night",
  "coffee",
  "dim",
  "nord",
  "sunset",
];

const MultiLevelDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDoubleDropdownOpen, setIsDoubleDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [isThirdDropdownOpen, setIsThirdDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();

  const handleThemeChange = (themeName: string) => {
    setTheme(themeName);
  };

  const toTitleCase = (str: string) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsDoubleDropdownOpen(false);
      setIsSecondDropdownOpen(false);
      setIsThirdDropdownOpen(false);
    }
  };

  const toggleDoubleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDoubleDropdownOpen(!isDoubleDropdownOpen);
    setIsSecondDropdownOpen(false);
    setIsThirdDropdownOpen(false);
  };

  const toggleSecondDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSecondDropdownOpen(!isSecondDropdownOpen);
    setIsDoubleDropdownOpen(false);
    setIsThirdDropdownOpen(false);
  };

  const toggleThirdDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsThirdDropdownOpen(!isThirdDropdownOpen);
    setIsDoubleDropdownOpen(false);
    setIsSecondDropdownOpen(false);
  };

  return (
    <div className="relative text-base-content">
      <div
        id="multiLevelDropdownButton"
        onClick={toggleDropdown}
        className="cursor-pointer"
      >
        {isOpen ? (
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l4 4 4-4"
            />
          </svg>
        ) : (
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 9l4-4-4-4"
            />
          </svg>
        )}
      </div>
      {isOpen && (
        <div
          id="multi-dropdown"
          className="absolute right-0 mr-[1rem] top-12 w-44 rounded-xl shadow-lg bg-base-300"
        >
          <ul
            className="p-2 grid grid-cols-1 gap-1"
            aria-labelledby="multiLevelDropdownButton"
          >
            {/*  <li
              key={theme}
              onClick={() =>
                handleThemeChange(theme === "night" ? "light" : "night")
              }
              className="cursor-pointer rounded-xl px-4 py-2 text-center hover:opacity-75 hover:border-base-content border-transparent border-[1px]"
              data-theme={theme}
            >
              {toTitleCase(theme === "night" ? "Light Mode" : "Dark Mode")}
            </li>*/}

            {isAuthenticated ? (
              <li>
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm hover:opacity-75 hover:border-base-content border-transparent border-[1px] rounded-xl"
                >
                  Profile
                </a>
              </li>
            ) : null}
            {isAuthenticated ? (
              <li>
                <a
                  href="/loginstreak"
                  className="block px-4 py-2 text-sm hover:opacity-75 hover:border-base-content border-transparent border-[1px] rounded-xl"
                >
                  <span className="text-[13px]">Login Streak&nbsp;</span>
                  <span className="text-red-600 ">
                    {user?.loginstreak < 10
                      ? `0${user?.loginstreak}`
                      : user?.loginstreak}
                    🔥
                  </span>
                </a>
              </li>
            ) : null}
            {isAuthenticated ? (
              <li>
                <label
                  htmlFor="wallet_card"
                  className="cursor-pointer block pl-4 mx-auto text-sm  text-[10px] hover:opacity-75 border-transparent border-[1px] rounded-xl"
                >
                  <ConnectButton showBalance={false} chainStatus="none" />
                </label>
              </li>
            ) : null}
            <li className="relative">
              <div
                id="doubleDropdownButton"
                onClick={toggleDoubleDropdown}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:opacity-75 hover:border-base-content border-transparent border-[1px]  hover:cursor-pointer rounded-xl"
              >
                Themes
                {isDoubleDropdownOpen ? (
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l4 4 4-4"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-2.5 h-2.5 ms-3"
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
                      d="M1 9l4-4-4-4"
                    />
                  </svg>
                )}
              </div>
              {isDoubleDropdownOpen && (
                <div
                  id="doubleDropdown"
                  className="absolute right-full top-0 mr-4 z-10 w-64 bg-base-300 rounded-xl"
                >
                  <ul
                    className="p-2 grid grid-cols-2 gap-4"
                    aria-labelledby="doubleDropdownButton"
                  >
                    {themes.map((themeName) => (
                      <li
                        key={themeName}
                        onClick={() => handleThemeChange(themeName)}
                        className="cursor-pointer rounded-xl px-4 py-2 text-center hover:opacity-75 hover:border-base-content border-transparent border-[1px]"
                        data-theme={themeName}
                      >
                        {toTitleCase(themeName)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li className="relative">
              <div
                id="secondDropdownButton"
                onClick={toggleSecondDropdown}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:opacity-75 hover:border-base-content border-transparent border-[1px] rounded-xl hover:cursor-pointer"
              >
                Language
                {isSecondDropdownOpen ? (
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l4 4 4-4"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-2.5 h-2.5 ms-3"
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
                      d="M1 9l4-4-4-4"
                    />
                  </svg>
                )}
              </div>
              {isSecondDropdownOpen && (
                <div
                  id="secondDropdown"
                  className="absolute right-full top-0 mr-4 z-10 w-48 bg-base-300 rounded-xl"
                >
                  <ul
                    className="p-2 grid grid-cols-1 gap-4"
                    aria-labelledby="secondDropdownButton"
                  >
                    {/* Add items for the second dropdown here */}
                    <li className="cursor-pointer rounded-xl px-4 py-2 text-center hover:opacity-75 hover:border-base-content border-transparent border-[1px] ">
                      English
                    </li>
                    <li className="cursor-pointer rounded-xl px-4 py-2 text-center hover:opacity-75 hover:border-base-content border-transparent border-[1px] ">
                      Español
                    </li>
                    <li className="cursor-pointer rounded-xl px-4 py-2 text-center hover:opacity-75 hover:border-base-content border-transparent border-[1px] ">
                      Français
                    </li>
                    <li className="cursor-pointer rounded-xl px-4 py-2 text-center hover:opacity-75 hover:border-base-content border-transparent border-[1px] ">
                      Nederlands
                    </li>
                    <li className="cursor-pointer rounded-xl px-4 py-2 text-center hover:opacity-75 hover:border-base-content border-transparent border-[1px] ">
                      日本語
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="relative">
              <div
                id="thirdDropdownButton"
                onClick={toggleThirdDropdown}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:opacity-75 hover:border-base-content border-transparent border-[1px] rounded-xl hover:cursor-pointer"
              >
                Currency
                {isThirdDropdownOpen ? (
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l4 4 4-4"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-2.5 h-2.5 ms-3"
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
                      d="M1 9l4-4-4-4"
                    />
                  </svg>
                )}
              </div>
              {isThirdDropdownOpen && (
                <div
                  id="thirdDropdown"
                  className="absolute right-full top-0 mr-4 z-10 w-36 bg-base-300 rounded-xl"
                >
                  <ul
                    className="p-2 grid grid-cols-1 gap-2"
                    aria-labelledby="thirdDropdownButton"
                  >
                    <li className="cursor-pointer rounded-xl px-4 py-2 text-center hover:opacity-75 hover:border-base-content border-transparent border-[1px] ">
                      USD
                    </li>
                    <li className="cursor-pointer rounded-xl px-4 py-2 text-center hover:opacity-75 hover:border-base-content border-transparent border-[1px] ">
                      EURO
                    </li>
                    <li className="cursor-pointer rounded-xl px-4 py-2 text-center hover:opacity-75 hover:border-base-content border-transparent border-[1px] ">
                      CAD
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <button
                popoverTarget="feedback-presenter"
                type="button"
                className="block px-4 py-2 text-sm hover:opacity-75 hover:border-base-content border-transparent border-[1px] rounded-xl hover:cursor-pointer"
              >
                Feedback
              </button>
            </li>
            {isAuthenticated ? (
              <li>
                <label
                  htmlFor="referral"
                  className="cursor-pointer block px-4 py-2 text-sm hover:opacity-75 hover:border-base-content border-transparent border-[1px] rounded-xl"
                >
                  Referral
                </label>
              </li>
            ) : null}
            {isAuthenticated ? (
              <li>
                <div
                  onClick={logout}
                  className="block px-4 py-2 text-sm hover:opacity-75 hover:border-base-content border-transparent border-[1px] rounded-xl hover:cursor-pointer"
                >
                  Sign out
                </div>
              </li>
            ) : null}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiLevelDropdown;

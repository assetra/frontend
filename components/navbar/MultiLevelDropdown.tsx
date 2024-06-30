"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

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
  const { theme, setTheme } = useTheme();

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
    if (isOpen) {
      setIsDoubleDropdownOpen(false); // Close the second dropdown when closing the first dropdown
    }
    setIsOpen(!isOpen);
  };

  const toggleDoubleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDoubleDropdownOpen(!isDoubleDropdownOpen);
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

      {isOpen && (
        <div
          id="multi-dropdown"
          className="absolute right-0 mr-[1rem] top-10 w-44 rounded-md shadow-lg bg-base-300"
        >
          <ul className="py-1" aria-labelledby="multiLevelDropdownButton">
            <li>
              <a href="#" className="block px-4 py-2 text-sm hover:opacity-75">
                Dashboard
              </a>
            </li>
            <li className="relative">
              <div
                id="doubleDropdownButton"
                onClick={toggleDoubleDropdown}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:opacity-75"
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
                  className="absolute right-full top-0 mr-2 z-10 w-64 bg-base-300 rounded-md"
                >
                  <ul
                    className="p-2 grid grid-cols-2 gap-4"
                    aria-labelledby="doubleDropdownButton"
                  >
                    {themes.map((themeName) => (
                      <li
                        key={themeName}
                        onClick={() => handleThemeChange(themeName)}
                        className="cursor-pointer rounded-md px-4 py-2 text-center hover:opacity-75"
                        data-theme={themeName}
                      >
                        {toTitleCase(themeName)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm hover:opacity-75">
                Earnings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm hover:opacity-75">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiLevelDropdown;

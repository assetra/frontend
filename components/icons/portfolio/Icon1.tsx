// import { IconProps } from "@/app/Type";
import React from "react";

interface IIconProps {
  onClick: () => void;
  isActive: boolean;
}

const Icon1 = ({ onClick, isActive }: IIconProps) => {
  if (isActive)
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
      >
        <path
          d="M3 2H21"
          stroke="white"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6Z"
          stroke="white"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 22H21"
          stroke="white"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  else
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
      >
        <g opacity="0.23">
          <path
            d="M3 2H21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 22H21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
};

export default Icon1;

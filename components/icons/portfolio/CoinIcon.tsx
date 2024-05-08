import { IconProps } from "@/app/Type";
import React from "react";

const CoinIcon = ({ onClick, isActive }: IconProps) => {
  if (isActive)
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_14_4799)">
          <path
            d="M12 0C5.383 0 0 5.383 0 12C0.603 27.898 23.4 27.894 24 12C24 5.383 18.617 0 12 0ZM13 17V18C12.995 19.308 11.005 19.307 11 18V17H10.732C9.665 17 8.669 16.426 8.134 15.501C7.857 15.022 8.021 14.411 8.498 14.135C8.977 13.856 9.589 14.022 9.864 14.499C10.043 14.809 10.375 15 10.731 15H12.999C13.996 15.065 14.442 13.45 13.355 13.24L10.314 12.733C6.812 12.084 7.566 6.98 10.999 7V6C11.005 4.692 12.994 4.693 12.999 6V7H13.267C14.334 7 15.33 7.575 15.865 8.5C16.142 8.978 15.978 9.589 15.501 9.866C15.021 10.143 14.41 9.979 14.135 9.501C13.956 9.192 13.624 9.001 13.268 9.001H11C10.003 8.936 9.558 10.551 10.644 10.761L13.685 11.268C17.187 11.917 16.433 17.02 13 17Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_14_4799">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
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

export default CoinIcon;

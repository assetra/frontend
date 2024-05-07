interface IIconProps {
  onClick: () => void;
  isActive: boolean;
}
import React from "react";

const Icon4 = ({ isActive, onClick }: IIconProps) => {
  if (!isActive)
    return (
      <svg
        width="23"
        height="21"
        viewBox="0 0 23 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
      >
        <path
          opacity="0.2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.292 0.5L14.5303 6.76L21.772 7.77L16.532 12.64L17.7687 19.52L11.292 16.27L4.81537 19.52L6.05201 12.64L0.812012 7.77L8.05369 6.76L11.292 0.5Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  else
    return (
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5 0.5L13.59 6.76L20.5 7.77L15.5 12.64L16.68 19.52L10.5 16.27L4.32 19.52L5.5 12.64L0.5 7.77L7.41 6.76L10.5 0.5Z"
          fill="white"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
};

export default Icon4;

"use client";

import { useRouter } from "next/navigation";

interface IAccordianProps {
  title: string;
  placeholder: string;
  color: number;
  type?: string;
}

const colors = ["#0E0F18", "#13141D"];
export default function Accordion({
  title,
  placeholder,
  color,
  type,
}: IAccordianProps) {
  const router = useRouter();

  return (
    <div className={`py-2 px-3 bg-[${colors[color]}]`}>
      <button
        className={`flex items-center justify-between w-full text-left font-semibold py-2 `}
        onClick={(e) => {
          router.push(`/mobile/transaction/select/${type}`);
        }}
      >
        <div className="flex flex-col">
          <p className="text-[12px]/[14.32px] text-white/[.5]">{title}</p>
          <p className="mt-2 text-sm text-white">{placeholder}</p>
        </div>
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.56006 13.5L7.84806 7.5L1.56006 1.5"
            stroke="#666666"
            stroke-width="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

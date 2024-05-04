import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";

import QRIcon from "@/components/icons/QRIcon";
import Link from "next/link";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Scanned = () => {
  return (
    <div
      className={`scanned ${poppins.className} px-3 pt-[399px] min-h-screen`}
    >
      <div className="scanned-card bg-white rounded-t-[20px] p-5">
        <div className="title w-full flex justify-between items-center">
          <h2 className="text-[#171725] text-[18px]/[27px] font-bold">
            QR Code Scanned
          </h2>
          <RxCross1></RxCross1>
        </div>
        <p
          className={`description ${jakarta.className} text-[#78828a] text-[14px]/[22px] font-medium`}
        >
          Click the login button to continue
        </p>
        <div className="qrcode mt-[25px] flex justify-center w-full">
          <QRIcon></QRIcon>
        </div>
        <div className="button-wrapper flex justify-center w-full">
          <Link
            href="/mobile/auth/login"
            className="mt-5 bg-black text-white py-[13px] px-[50px] text-base rounded-[24px]"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Scanned;

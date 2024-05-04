import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import Navbar from "@/components/navbar";
import { Providers } from "@/context/providers";
import { AppWrapper } from "@/context/AddContext";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

const microsoft = localFont({ src: "../public/fonts/chinese.msyh.ttf" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GTX",
  description: "gtx",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className + " bg-black"}>
        <Providers>
          <AppWrapper>
            <Navbar />
            {children}
          </AppWrapper>
        </Providers>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"
          defer
        ></script>
      </body>
    </html>
  );
}

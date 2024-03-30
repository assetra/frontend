import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import NavbarAuth from "@/components/navbar/navbarAuth";
import NavbarDashboard from "@/components/navbar/navbarDashboard";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppWrapper } from "@/context/AddContext";

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
      <body className={poppins.className}>
        <AppWrapper>
          <Navbar />
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}

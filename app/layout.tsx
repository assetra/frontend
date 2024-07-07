import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from '../components/wallet/providers';

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import { AppWrapper } from "@/context/AddContext";

const microsoft = localFont({ src: "../public/fonts/chinese.msyh.ttf" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "GTX | %s",
    default: "GTX - Your Customizable Crypto Trading Platform",
  },
  description:
    "GTX is a top-tier crypto trading platform providing advanced customization features, designed to meet the unique needs of traders.",
  metadataBase: new URL("https://www.gtx.com.co"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
         <Providers>
          <ThemeProvider>
            <AppWrapper>
              <Navbar />
              {children}
            </AppWrapper>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}

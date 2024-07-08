import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from '../components/wallet/providers';

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";
//import { AppWrapper } from "@/contexts/AddContext";
import BotIcon from "@/components/gnosis/botIcon";
import { AuthProvider } from "@/contexts/AuthContext";
import { LoginPop } from "@/components/auth/loginPop";
import { SignupPop } from "@/components/auth/signupPop";

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
        <AuthProvider>
          <ThemeProvider>
            {/*  <AppWrapper>*/}
            <Navbar />
            <BotIcon />
            {children}
            <ConnectWallet />
            <Connect />
            <ConnectError />
            <Retry />
            <WalletDetails />
            {/* </AppWrapper>*/}
            <LoginPop />
            <SignupPop />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

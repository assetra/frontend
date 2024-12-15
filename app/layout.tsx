import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@rainbow-me/rainbowkit/styles.css";
import { CSPostHogProvider } from "@/components/posthog/PosthogProvider";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import BotIcon from "@/components/gnosis/botIcon";
import { AuthProvider } from "@/contexts/AuthContext";
import AuthPopups from "@/components/auth/authPopups";
import { Providers } from "@/components/wallet/providers";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ResponsiveNavbar from "@/components/navbar/ResponsiveNavbar";

const microsoft = localFont({ src: "../public/fonts/chinese.msyh.ttf" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "Assetra | %s",
    default: "Assetra - The New Asset Frontier",
  },
  description:
    "Assetra is a top-tier crypto trading platform providing advanced customization features, designed to meet the unique needs of traders.",
  metadataBase: new URL("https://www.assetra.xyz"),
};
const ClientWrapper = dynamic(() => import("@/components/ClientWrapper"), {
  ssr: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className}>
        <Providers>
          <AuthProvider>
            <ThemeProvider>
              <ClientWrapper>
                <ResponsiveNavbar />
                <BotIcon />
                <CSPostHogProvider>
                  <main>{children}</main>/
                </CSPostHogProvider>
                <AuthPopups />
              </ClientWrapper>
            </ThemeProvider>
          </AuthProvider>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

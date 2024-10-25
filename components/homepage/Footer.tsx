import React from "react";
import Image from "next/image";
import EmailInput from "./EmailInput";
import { IoGlobeOutline } from "react-icons/io5";
const communityLinks = [
  {
    href: "https://x.com/assetradotxyz",
    src: "/assets/x.png",
    alt: "X/Twitter",
  },
  {
    href: "https://www.instagram.com/assetradotxyz",
    src: "/assets/insta.png",
    alt: "Instagram",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61565050207514",
    src: "/assets/facebook.png",
    alt: "Facebook",
  },
  {
    href: "https://medium.com/@assetradotxyz",
    src: "/assets/image-11.png",
    alt: "Medium",
  },
  {
    href: "https://chat.whatsapp.com/DT7FIAWAJVgIRPHwkCfHfb",
    src: "/assets/whatsapp.png",
    alt: "WhatsApp",
  },
  {
    href: "https://www.linkedin.com/company/assetradotcom/",
    src: "/assets/linkedin.png",
    alt: "LinkedIn",
  },
  {
    href: "https://t.me/assetra_xyz",
    src: "/assets/telegram.png",
    alt: "Telegram",
  },
  {
    href: "https://discord.gg/yUHXSRDSvv",
    src: "/assets/discord.png",
    alt: "Discord",
  },
  {
    href: "https://www.reddit.com/r/Assetra",
    src: "/assets/reddit.png",
    alt: "Reddit",
  },
  {
    href: "https://www.crunchbase.com/organization/gtx-91c8",
    src: "/assets/cb.png",
    alt: "Crunchbase",
  },
  {
    href: "https://www.tiktok.com/@assetradotxyz",
    src: "/assets/tiktok.png",
    alt: "Tiktok",
  },
  {
    href: "mailto:info@assetra.xyz",
    src: "/assets/email.png",
    alt: "Email",
  },
];
const Footer = () => {
  return (
    <footer
      className="relative pt-16 bg-black"
      style={{
        backgroundImage: "url('/assets/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <div className="flex flex-col items-center sm:items-start">
            <a href="https://www.assetra.xyz" className="mb-4">
              <Image
                width={100}
                height={60}
                src="/assets/footer-logo.png"
                alt="footer-logo"
                className="mx-auto sm:mx-0"
              />
              <p className="text-[#6C6C6C] text-xs text-center sm:text-left">
                ©2024 Assetra Trading Group Ltd
              </p>
            </a>
            <button className="flex items-center gap-2 border-2 border-white py-1.5 px-3 rounded hover:bg-white/10 transition-colors">
              <IoGlobeOutline className="text-white" />
              <span className="text-white">English</span>
            </button>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="mb-4 text-sm font-semibold text-white uppercase">
              Company
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="/"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white hover:underline transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="mb-4 text-sm font-semibold text-white uppercase">
              Support
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@assetra.xyz"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Support center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Connect with Assetra
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="mb-4 text-sm font-semibold text-white uppercase">
              Legal
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="/policy"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  href="/disclosure"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Risk Disclosure
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="text-center lg:text-left">
              <p className="text-white mb-4">
                Stay updated on cryptocurrency developments to maintain a
                competitive edge.
              </p>
              <EmailInput />
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center">
          <h2 className="mb-6 text-base font-semibold text-white uppercase">
            Community
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {communityLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={18}
                  height={17}
                  src={social.src}
                  alt={social.alt}
                  className="w-5 h-5"
                />
              </a>
            ))}
          </div>

          <div className="text-sm text-[#484D63]">
            © 2024{" "}
            <a
              href="https://www.assetra.xyz"
              className="hover:text-white hover:underline transition-colors"
            >
              Assetra
            </a>
            . All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

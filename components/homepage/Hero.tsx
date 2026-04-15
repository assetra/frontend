import EmailInput from "./EmailInput";
import Image from "next/image";
import Divider from "./Divider";

export default function DigitalAssets() {
  const socialLinks = [
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
      href: "https://www.facebook.com/profile.php?id=61565050207514&mibextid=ZbWKwL",
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
      href: "https://www.youtube.com/@assetradotxyz",
      src: "/assets/youtube.svg",
      alt: "YouTube",
    },
    {
      href: "https://www.tiktok.com/@assetradotxyz",
      src: "/assets/tiktok.png",
      alt: "Tiktok",
    },
    { href: "mailto:info@assetra.xyz", src: "/assets/email.png", alt: "Email" },
  ];

  return (
    <section className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-[#E5E6ED] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[60px] max-w-4xl mx-auto">
            THE FUTURE OF EXCHANGING DIGITAL ASSETS.
          </h1>
        </div>

        <div className="mt-12 md:mt-20">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6 justify-items-center max-w-4xl mx-auto px-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <Image
                  width={40}
                  height={40}
                  src={link.src}
                  alt={link.alt}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 max-w-2xl mx-auto px-4">
          <div className="space-y-6 text-center">
            <p className="font-bold text-white text-lg sm:text-xl md:text-2xl">
              STAY UPDATED
            </p>
            <p className="text-white text-sm sm:text-base md:text-lg">
              Stay informed about the most recent developments in the
              cryptocurrency sector and maintain a competitive edge in the
              market.
            </p>

            <div className="max-w-md mx-auto">
              <EmailInput />
            </div>

            <p className="text-[#E5E6ED] text-sm sm:text-base">
              Join the decentralized movement with an ever-expanding network of
              connected apps powered by Assetra.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Divider />
      </div>
    </section>
  );
}

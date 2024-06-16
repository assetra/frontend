import EmailInput from "./EmailInput";
import Image from "next/image";
import React from "react";
import Background from "../../public/assets/background.png";

export default function DigitalAssets() {
  return (
    <div className="pt-[10rem] pb-8 p-4 h-[100svh]" style={{
      backgroundImage: `url(${Background.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div>
        <div className="text-[#E5E6ED] font-[700] text-3xl md:text-5xl text-center flex justify-center">
          <p className="w-[900px] leading-[60px]">
            THE FUTURE OF EXCHANGING DIGITAL ASSETS.
          </p>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="w-96 md:w-[1000px] flex flex-wrap gap-10 md:gap-0 justify-center md:justify-evenly">
            <a href="https://twitter.com/gtxdotcom">
              <Image
                width={45}
                height={40}
                src="/assets/x.png"
                alt="X/Twitter"
              />
            </a>
            <a href="https://www.instagram.com/gtxdotcom/">
              <Image
                width={45}
                height={40}
                src="/assets/insta.png"
                alt="Instagram"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100094228042198">
              <Image
                width={45}
                height={40}
                src="/assets/facebook.png"
                alt="Facebook"
              />
            </a>
            <a href="https://medium.com/@gtxdotcom">
              <Image
                width={45}
                height={40}
                src="/assets/image-11.png"
                alt="Medium"
              />
            </a>
            <a href="https://chat.whatsapp.com/DT7FIAWAJVgIRPHwkCfHfb">
              <Image
                width={45}
                height={40}
                src="/assets/whatsapp.png"
                alt="WhatsApp"
              />
            </a>
            <a href="https://www.linkedin.com/company/gtxdotcom/">
              <Image
                width={45}
                height={40}
                src="/assets/linkedin.png"
                alt="LinkedIn"
              />
            </a>
            <a href="https://t.me/gtxdotcom">
              <Image
                width={45}
                height={40}
                src="/assets/telegram.png"
                alt="Telegram"
              />
            </a>
            <a href="https://discord.gg/dVmMCdf9jx">
              <Image
                width={45}
                height={40}
                src="/assets/reddit.png"
                alt="Discord"
              />
            </a>
            <a href="https://www.crunchbase.com/organization/gtx-91c8">
              <Image
                width={45}
                height={40}
                src="/assets/cb.png"
                alt="Crunchbase"
              />
            </a>
            <a href="https://github.com/gtxdotcom">
              <Image
                width={45}
                height={40}
                src="/assets/github.png"
                alt="Github"
              />
            </a>
            <a href="mailto:info@gtx.com.co">
              <Image
                width={45}
                height={40}
                src="/assets/email.png"
                alt="Email"
              />
            </a>
          </div>
        </div>

        <div className="pt-20 flex justify-center">
          <div>
            <p className="font-bold text-[#FFFFFF] text-[20px] text-center">
              STAY UPDATED
            </p>
            <div className="flex justify-center mt-4">
              <p className="text-[#ffffff] w-[350px] md:w-[532px] text-center">
                Stay informed about the most recent developments in the
                cryptocurrency sector and maintain a competitive edge in the
                market.
              </p>
            </div>

            <EmailInput />

            <p className="flex justify-center text-center text-white mt-6">
              Join the decentralized movement with an ever-expanding network of
              connected apps powered by GTX.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

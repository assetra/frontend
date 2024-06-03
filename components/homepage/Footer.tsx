import React from "react";
import Image from "next/image";
import EmailInputSm from "./EmailInputSm";
import Background from "../../public/assets/background.png";

export default function Footer() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="pt-10 flex justify-center">
        <div className="max-w-[1024px] mt-20">
          <div className="flex flex-col items-center md:items-start">
            <Image
              width={80}
              height={60}
              src="/assets/footer-logo.png"
              alt="footer-logo"
            />
            <p className="text-[#e5e6ed] text-sm text-center md:text-left">
              ©2024 GTX Labs Ltd
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-14 mt-10">
            <div className="flex flex-col items-center md:items-start gap-6">
              <p className="font-[700] text-white">More about GTX</p>
              <p className="text-[#CCCCCC] text-[14px]">About Us</p>
              <p className="text-[#CCCCCC] text-[14px]">Careers</p>
              <p className="text-[#CCCCCC] text-[14px]">Contact Us</p>
              <p className="text-[#CCCCCC] text-[14px]">Terms of service</p>
              <p className="text-[#CCCCCC] text-[14px]">Privacy policy</p>
              <p className="text-[#CCCCCC] text-[14px]">Law enforcement</p>
              <p className="text-[#CCCCCC] text-[14px]">GTX App</p>
              <p className="font-[700] mt-6 md:mt-0 text-white">Support</p>
              <p className="text-[#CCCCCC] text-[14px]">Support center</p>
              <p className="text-[#CCCCCC] text-[14px]">Connect with GTX</p>
              <p className="text-[#CCCCCC] text-[14px]">Privacy Policy</p>
              <p className="text-[#CCCCCC] text-[14px]">Terms of Service</p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-6">
              <p className="font-[700] text-white">Products</p>
              <p className="text-[#CCCCCC] text-[14px]">Market</p>
              <p className="text-[#CCCCCC] text-[14px]">P2P trading</p>
              <p className="text-[#CCCCCC] text-[14px]">Convert</p>
              <p className="text-[#CCCCCC] text-[14px]">Trade</p>
              <p className="text-[#CCCCCC] text-[14px]">GTX Wallet</p>
              <p className="text-[#CCCCCC] text-[14px]">Web3 Marketplace</p>
              <p className="text-[#CCCCCC] text-[14px]">Crypto calculator</p>
              <p className="text-[#CCCCCC] text-[14px]">All cryptocurrencies</p>
              <p className="text-[#CCCCCC] text-[14px]">TradingView</p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-6">
              <p className="font-[700] text-white">Services</p>
              <p className="text-[#CCCCCC] text-[14px]">Affiliate</p>
              <p className="text-[#CCCCCC] text-[14px]">V5 API</p>
              <p className="text-[#CCCCCC] text-[14px]">
                Historical market data
              </p>
              <p className="text-[#CCCCCC] text-[14px]">Fee schedule</p>
              <p className="text-[#CCCCCC] text-[14px]">Listing application</p>
              <p className="text-[#CCCCCC] text-[14px]">P2P Advertiser</p>
              <p className="text-[#CCCCCC] text-[14px]">application</p>

              <p className="font-[700] mt-6 md:mt-0 text-white">
                Crypto Calculator
              </p>
              <p className="text-[#CCCCCC] text-[14px]">BTC to USD</p>
              <p className="text-[#CCCCCC] text-[14px]">ETH to USD</p>
              <p className="text-[#CCCCCC] text-[14px]">USDT to USD</p>
              <p className="text-[#CCCCCC] text-[14px]">SOL to USD</p>
              <p className="text-[#CCCCCC] text-[14px]">XRP to USD</p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row gap-14">
                <div className="flex flex-col items-center md:items-start gap-6">
                  <p className="font-[700] text-white">Buy crypto</p>
                  <p className="text-[#CCCCCC] text-[14px]">Buy Bitcoin</p>
                  <p className="text-[#CCCCCC] text-[14px]">Buy Ethereum</p>
                  <p className="text-[#CCCCCC] text-[14px]">Buy Solana</p>
                  <p className="text-[#CCCCCC] text-[14px]">Buy Cardano</p>
                  <p className="text-[#CCCCCC] text-[14px]">Buy Polygon</p>
                  <p className="text-[#CCCCCC] text-[14px]">Buy Ripple</p>
                  <p className="text-[#CCCCCC] text-[14px]">Buy Litecoin</p>
                </div>

                <div className="flex flex-col items-center md:items-start gap-6">
                  <p className="font-[700] text-white">Trade</p>
                  <p className="text-[#CCCCCC] text-[14px]">BTCUSDT</p>
                  <p className="text-[#CCCCCC] text-[14px]">ETHUSDT</p>
                  <p className="text-[#CCCCCC] text-[14px]">SOLUSDT</p>
                  <p className="text-[#CCCCCC] text-[14px]">XRPUSDT</p>
                  <p className="text-[#CCCCCC] text-[14px]">BNBUSDT</p>
                  <p className="text-[#CCCCCC] text-[14px]">ADAUSDT</p>
                </div>

                <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-[155px]">
                  <p className="font-[700] text-white">
                    Trade on the go with GTX
                  </p>
                  <button className="bg-white text-black rounded-full px-10 py-2">
                    Register
                  </button>
                  <Image
                    width={150}
                    height={150}
                    src="/assets/qr.svg"
                    alt="qr-image"
                  />
                  <p className="text-white font-[16px]">
                    Scan to download GTX App
                  </p>
                </div>
              </div>

              <div className="mt-20">
                <p className="font-[700] text-white text-lg text-center">
                  Subscribe for Updates
                </p>

                <EmailInputSm />

                <div className="mt-4 flex justify-center">
                  <p className="text-sm text-center text-white w-80">
                    Stay in the loop. Subscribe to our newsletter for the latest
                    updates and exclusive content
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="w-[1024px] flex flex-row-reverse">
          <div className="flex flex-wrap justify-center gap-4">
            <p className="text-white font-[700]">Community</p>
            <a href="https://twitter.com/gtxdotcom">
              <Image
                width={18}
                height={17}
                src="/assets/x.png"
                alt="X/Twitter"
              />
            </a>
            <a href="https://www.instagram.com/gtxdotcom/">
              <Image
                width={18}
                height={17}
                src="/assets/insta.png"
                alt="Instagram"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100094228042198">
              <Image
                width={18}
                height={17}
                src="/assets/facebook.png"
                alt="Facebook"
              />
            </a>
            <a href="https://medium.com/@gtxdotcom">
              <Image
                width={18}
                height={17}
                src="/assets/image-11.png"
                alt="Medium"
              />
            </a>
            <a href="https://chat.whatsapp.com/DT7FIAWAJVgIRPHwkCfHfb">
              <Image
                width={18}
                height={17}
                src="/assets/whatsapp.png"
                alt="WhatsApp"
              />
            </a>
            <a href="https://www.linkedin.com/company/gtxdotcom/">
              <Image
                width={18}
                height={17}
                src="/assets/linkedin.png"
                alt="LinkedIn"
              />
            </a>
            <a href="https://t.me/gtxdotcom">
              <Image
                width={18}
                height={17}
                src="/assets/telegram.png"
                alt="Telegram"
              />
            </a>
            <a href="https://discord.gg/dVmMCdf9jx">
              <Image
                width={18}
                height={17}
                src="/assets/reddit.png"
                alt="Discord"
              />
            </a>
            <a href="https://www.crunchbase.com/organization/gtx-91c8">
              <Image
                width={18}
                height={17}
                src="/assets/cb.png"
                alt="Crunchbase"
              />
            </a>
            <a href="https://github.com/gtxdotcom">
              <Image
                width={18}
                height={17}
                src="/assets/github.png"
                alt="Github"
              />
            </a>
            <a href="mailto:info@gtx.com.co">
              <Image
                width={18}
                height={17}
                src="/assets/email.png"
                alt="Email"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="leading-[100px]">
        <p className="text-white text-center">©2024 GTX Labs Ltd</p>
      </div>
    </div>
  );
}

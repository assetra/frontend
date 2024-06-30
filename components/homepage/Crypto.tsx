import React from "react";
import Image from "next/image";
import Background from "../../public/assets/background.png";

export default function Crypto() {
  return (
    <section
      className="flex justify-center pt-20 pb-16 mx-auto"
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1024px]">
        <div>
          <p className="text-white text-center font-[700] text-[20px]">
            WHY GTX?
          </p>
          <div className="flex justify-center mt-4">
            <p className="text-center text-white text-3xl w-80 md:w-[700px] leading-10">
              Why Choose GTX for Your Crypto Journey?
            </p>
          </div>
        </div>

        <div className="flex justify-center flex-col md:flex-row gap-6 md:gap-16 mt-16">
          <div className="w-96 md:w-[300px] bg-[#2F324180] rounded-lg p-12 bg-opacity-50">
            <div className="flex justify-center">
              <Image
                width={80}
                height={80}
                src="/assets/cr2.png"
                alt="crypto-img"
              />
            </div>
            <p className="text-white font-[700] mt-2 text-center">
              CUSTOMIZABLE <br /> INTERFACE
            </p>
            <p className="mt-4 text-[16px] text-white text-center">
              The exchange platform features a customizable interface, allowing
              users to personalize their trading experience based on their
              preferences and requirements.
            </p>
          </div>

          <div className="w-96 md:w-[300px] bg-[#2F324180] rounded-lg p-12 bg-opacity-50">
            <div className="flex justify-center">
              <Image
                width={80}
                height={80}
                src="/assets/cr3.png"
                alt="crypto-img"
              />
            </div>
            <p className="text-white font-[700] mt-2 text-center">
              CUSTOMIZABLE <br /> CHARTS & <br /> INDICATORS
            </p>
            <p className="mt-4 text-[16px] text-white text-center">
              Traders can benefit from customizable charts and indicators
              available on the exchange platform, enabling them to analyse
              market trends and make informed trading decisions based on their
              own strategies and preferences.
            </p>
          </div>
        </div>

        <div className="flex justify-center flex-col md:flex-row gap-6 md:gap-16 mt-16">
          <div className="w-96 md:w-[300px] bg-[#2F324180] rounded-lg p-12 bg-opacity-50">
            <div className="flex justify-center">
              <Image
                width={80}
                height={80}
                src="/assets/cr1.png"
                alt="crypto-img"
              />
            </div>
            <p className="text-white font-[700] mt-2 text-center">
              CRYPTO <br /> DERIVATIVES
            </p>
            <p className="mt-4 text-[16px] text-white text-center">
              Users can access a range of cryptocurrency derivatives, such as
              futures and options, through the exchange platform, providing
              additional flexibility and investment opportunities in the
              cryptocurrency market.
            </p>
          </div>

          <div className="w-96 md:w-[300px] bg-[#2F324180] rounded-lg p-12 bg-opacity-50">
            <div className="flex justify-center">
              <Image
                width={80}
                height={80}
                src="/assets/cr5.png"
                alt="crypto-img"
              />
            </div>
            <p className="text-white font-[700] mt-2 text-center">
              MULTIPLE ORDER <br /> TYPES
            </p>
            <p className="mt-4 text-[16px] text-white text-center">
              The exchange platform offers multiple order types, allowing
              traders to execute trades based on their specific needs and
              preferences.
            </p>
          </div>
        </div>

        <div className="flex justify-center flex-col md:flex-row gap-6 md:gap-16 mt-16">
          <div className="w-96 md:w-[300px] bg-[#2F324180] rounded-lg p-12 bg-opacity-50">
            <div className="flex justify-center">
              <Image
                width={80}
                height={80}
                src="/assets/cr7.png"
                alt="crypto-img"
              />
            </div>
            <p className="text-white font-[700] mt-2 text-center">
              AI POWERED <br /> TRADING
            </p>
            <p className="mt-4 text-[16px] text-white text-center">
              AI trading provides advanced algorithmic strategies, real-time
              market analysis, and automated trading, optimizing investment
              decisions and efficient execution for various digital assets.
            </p>
          </div>

          <div className="w-96 md:w-[300px] bg-[#2F324180] rounded-lg p-12 bg-opacity-50">
            <div className="flex justify-center">
              <Image
                width={80}
                height={80}
                src="/assets/cr4.png"
                alt="crypto-img"
              />
            </div>
            <p className="text-white font-[700] mt-2 text-center">
              VARIETY OF <br /> TRADING PAIRS
            </p>
            <p className="mt-4 text-[16px] text-white text-center">
              With a diverse selection of trading pairs for cryptocurrencies,
              the exchange platform caters to a broad range of traders seeking
              to invest in different digital assets.
            </p>
          </div>
        </div>

        <div className="flex justify-center flex-col md:flex-row gap-6 md:gap-16 mt-16">
          <div className="w-96 md:w-[300px] bg-[#2F324180] rounded-lg p-12 bg-opacity-50">
            <div className="flex justify-center">
              <Image
                width={80}
                height={80}
                src="/assets/cr6.png"
                alt="crypto-img"
              />
            </div>
            <p className="text-white font-[700] mt-2 text-center">
              LOW TRADING <br /> FEES
            </p>
            <p className="mt-4 text-[16px] text-white text-center">
              Traders can take advantage of low trading fees on the exchange
              platform, making it a cost-effective option for users looking to
              invest in cryptocurrencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

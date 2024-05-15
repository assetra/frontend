import React from "react";
import Image from "next/image";

export default function Crypto() {
  return (
    <div className="pt-32 flex justify-center p-4 md:p-0 bg-gradient-to-r from-black from-10% via-blue-800/35 via-50% to-black to-90%">
      <div className="max-w-[1024px]">
        <div>
          <p className="text-white font-[700] text-center">WHY GTX?</p>
          <div className="flex justify-center mt-4">
            <p className="text-white text-4xl md:w-[500px] text-center">Why Choose GTX for Your Crypto Journey?</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 mt-16">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="flex flex-col bg-[#2f3241] bg-opacity-[50%] md:w-1/3 rounded-md p-10">
              <div className="flex justify-center">
                <Image width={80} height={80} src="/assets/cr1.png" alt="crypto-img" />
              </div>
              <p className="text-white font-[700] mt-2 text-center">
                CRYPTO <br /> DERIVATIVES
              </p>
              <p className="mt-4 text-[16px] text-white text-center">
                Users can access a range of cryptocurrency derivatives, such as futures and options, through the
                exchange platform, providing additional flexibility and investment opportunities in the cryptocurrency
                market.
              </p>
            </div>

            <div className="flex flex-col bg-[#2f3241] bg-opacity-[50%] md:w-1/3 rounded-md p-10">
              <div className="flex justify-center">
                <Image width={80} height={80} src="/assets/cr2.png" alt="crypto-img" />
              </div>
              <p className="text-white font-[700] mt-2 text-center">
                CUSTOMIZABLE <br /> INTERFACE
              </p>
              <p className="mt-4 text-[16px] text-white text-center">
                The exchange platform features a customizable interface, allowing users to personalize their trading
                experience based on their preferences and requirements.
              </p>
            </div>

            <div className="flex flex-col bg-[#2f3241] bg-opacity-[50%] md:w-1/3 rounded-md p-10">
              <div className="flex justify-center">
                <Image width={80} height={80} src="/assets/cr3.png" alt="crypto-img" />
              </div>
              <p className="text-white font-[700] mt-2 text-center">CUSTOMIZABLE CHARTS & INDICATORS</p>
              <p className="mt-4 text-[16px] text-white text-center">
                Traders can benefit from customizable charts and indicators available on the exchange platform, enabling
                them to analyse market trends and make informed trading decisions based on their own strategies and
                preferences.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="flex flex-col bg-[#2f3241] bg-opacity-[50%] md:w-1/3 rounded-md p-10">
              <div className="flex justify-center">
                <Image width={80} height={80} src="/assets/cr4.png" alt="crypto-img" />
              </div>
              <p className="text-white font-[700] mt-2 text-center">
                VARIETY OF <br />
                TRADING PAIRS
              </p>
              <p className="mt-4 text-[16px] text-white text-center">
                With a diverse selection of trading pairs for cryptocurrencies, the exchange platform caters to a broad
                range of traders seeking to invest in different digital assets.
              </p>
            </div>

            <div className="flex flex-col bg-[#2f3241] bg-opacity-[50%] md:w-1/3 rounded-md p-10">
              <div className="flex justify-center">
                <Image width={80} height={80} src="/assets/cr5.png" alt="crypto-img" />
              </div>
              <p className="text-white font-[700] mt-2 text-center">
                MULTIPLE ORDER <br />
                TYPES
              </p>
              <p className="mt-4 text-[16px] text-white text-center">
                The exchange platform offers multiple order types, allowing traders to execute trades based on their
                specific needs and preferences.
              </p>
            </div>

            <div className="flex flex-col bg-[#2f3241] bg-opacity-[50%] md:w-1/3 rounded-md p-10">
              <div className="flex justify-center">
                <Image width={80} height={80} src="/assets/cr6.png" alt="crypto-img" />
              </div>
              <p className="text-white font-[700] mt-2 text-center">
                LOW TRADING <br />
                FEES
              </p>
              <p className="mt-4 text-[16px] text-white text-center">
                Traders can take advantage of low trading fees on the exchange platform, making it a cost-effective
                option for users looking to invest in cryptocurrencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

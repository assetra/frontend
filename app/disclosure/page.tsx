import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Disclosure Statement",
};

const page = () => {
  return (
    <div className="flex min-h-screen pt-12">
      <div className="w-full md:w-[80svw] p-6 rounded-md bg-base-300 m-auto">
        <h1 className="text-[24px] mb-5">Risk Disclosure Statement</h1>
        <p className="mb-[10px] leading-7">
          Trading or investing in digital assets such as cryptocurrencies
          carries substantial risk and may not be suitable for all investors.
          Factors contributing to these risks include, but are not limited to:
        </p>
        <ul className="m-0 pl-5">
          <li className="mb-[10px]">
            <span className="font-semibold">Market Volatility:</span> Digital
            asset prices can experience significant and sudden fluctuations due
            to market demand, regulatory developments, geopolitical events, and
            macroeconomic trends.
          </li>
          <li className="mb-[10px]">
            <span className="font-semibold">Liquidity Risks:</span> Some digital
            assets may have limited liquidity, meaning there may not be enough
            buyers or sellers at any given time to execute trades at desired
            prices.
          </li>
          <li className="mb-[10px]">
            <span className="font-semibold">Regulatory Changes:</span> Changes
            in regulatory frameworks in various jurisdictions, including Antigua
            and Barbuda, where GTX is headquartered, may impact the legality,
            use, and value of digital assets.
          </li>
          <li className="mb-[10px]">
            <span className="font-semibold">Technological Risks:</span>{" "}
            Blockchain technology, upon which digital assets are based,
            introduces risks such as network attacks, software vulnerabilities,
            and operational failures that could compromise the security and
            availability of digital assets.
          </li>
          <li className="mb-[10px]">
            <span className="font-semibold">Investment Losses:</span> Investors
            should be prepared for the possibility of losing their entire
            investment. The value of digital assets can decline rapidly, and
            past performance is not indicative of future results.
          </li>
        </ul>
        <p className="mb-[10px] leading-7">
          Investors should carefully consider their financial situation,
          investment objectives, risk tolerance, and seek advice from qualified
          professionals before participating in digital asset markets. GTX does
          not provide financial, tax, or legal advice. All investment decisions
          are made at the investor's own risk.
        </p>
      </div>
    </div>
  );
};

export default page;

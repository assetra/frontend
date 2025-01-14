"use client";
import { useEffect, useRef } from "react";
import { TbAffiliate } from "react-icons/tb";

const Affiliate = () => {
  const buttonRef1 = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);
  let timeoutId: NodeJS.Timeout;

  const onClick = () => {
    buttonRef1.current?.click();
    timeoutId = setTimeout(() => {
      buttonRef2.current?.click();
    }, 500);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <button
        popoverTarget="affiliate-presenter"
        className=" fixed bottom-[10rem]  right-6 p-4 rounded-full bg-gradient-to-br from-white/10 to-white/5  backdrop-blur-lg border border-white/10 cursor-pointer text-[#00ffab] shadow-lg z-[9999]"
        title="Affiliate Program"
        type="button"
      >
        <TbAffiliate />
      </button>
      <div
        popover="auto"
        id="affiliate-presenter"
        className="affiliate-presenter"
      >
        <div className="affiliate-body">
          <img src="/assets/black/logo.png" alt="" />
          <p className="title">Assetra Affiliate Program</p>
          <p>
            Earn commissions by promoting Assetra with your unique referral
            link. Get 5%+ of trade fees from your referrals, with higher rates
            as you grow. Track progress via the Affiliate Dashboard and receive
            monthly payouts in crypto or stablecoins. Simple, rewarding, and
            easy to start!
          </p>

          <div className="affiliatelogo">
            <img src="/assets/affiliate.png" alt="Assetra Badge" />
          </div>

          <p>Start earning with the Assetra Affiliate Program today!</p>

          <div className="flex justify-center gap-4">
            <button type="button" onClick={onClick} className="clicker">
              Start Earning
            </button>
          </div>
          <button
            {...({ popovertarget: "affiliate-presenter" } as any)}
            type="button"
            ref={buttonRef1}
          ></button>
          <button
            {...({ popovertarget: "affiliate-program-presenter" } as any)}
            type="button"
            ref={buttonRef2}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;

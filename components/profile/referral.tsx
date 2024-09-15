"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";
import { FaUserPlus, FaUserClock, FaUserCheck } from "react-icons/fa";
import Background from "@/public/assets/referralo.png";

export const Referral: React.FC = () => {
  const { user } = useAuth();
  const username: string | null = user?.username || null;
  const referralLink = username
    ? `https://assetra.xyz/signup?username=${username}`
    : "";

  const [totalReferrals, setTotalReferrals] = useState<number>(0);
  const [pendingReferrals, setPendingReferrals] = useState<number>(0);
  const [doneReferrals, setDoneReferrals] = useState<number>(0);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
  };

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gtx.pythonanywhere.com/referral",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("POST request successful", data);
        setTotalReferrals(data.total_referrals);
        setPendingReferrals(data.pending_referrals);
        setDoneReferrals(data.done_referrals);
      } catch (error) {
        console.error("Error making POST request:", error);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className="w-full pt-12 min-h-[100svh] grid px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto relative">
        <div
          className="m-auto"
          style={{
            backgroundImage: `url(${Background.src})`,
            backgroundSize: "50%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-2xl mb-5">
            Refer Friends. <br /> Earn Crypto Together.
          </h1>
          <p className="mb-[10px] leading-7">
            Invite friends to join Assetra and earn rewards!
          </p>
          <p className="mb-[10px] leading-7">How It Works: </p>
          <ul className="m-0 pl-5">
            <li className="mb-[10px]">
              <span className="font-semibold">Share Your Link: </span>
              Copy and share your referral link.
            </li>
            <li className="mb-[10px]">
              <span className="font-semibold">Friends Sign Up: </span>
              They sign up using your link.
            </li>
            <li className="mb-[10px]">
              <span className="font-semibold">Earn Rewards: </span>
              You both earn rewards when they complete their first transaction!
            </li>
          </ul>
        </div>
        <div className="m-auto relative">
          <h1 className="text-2xl mb-5">Start sharing now!</h1>
          <p className="mb-[10px] leading-7"> Referral ID: </p>
          <div className="flex justify-between gap-4 mb-4">
            <div className="flex bg-base-content text-base-200 rounded-md h-12 px-6 w-full max-w-[500px] overflow-hidden">
              <p className="my-auto text-lg overflow-hidden">{referralLink}</p>
            </div>
            <button
              type="button"
              className="rounded-md h-12 px-6 shadow border-2"
              onClick={copyToClipboard}
            >
              copy
            </button>
          </div>
          <div className="flex mt-6 sm:justify-center">
            <a
              className="shadow border-2 border-base-content p-2 rounded-md bg-black"
              href="https://twitter.com/Assetradotcom"
            >
              <Image
                width={18}
                height={17}
                src="/assets/x.png"
                alt="X/Twitter"
              />
            </a>
            <a
              className="shadow border-2 border-base-content p-2 rounded-md bg-black ms-5"
              href="https://www.instagram.com/Assetradotcom/"
            >
              <Image
                width={18}
                height={17}
                src="/assets/insta.png"
                alt="Instagram"
              />
            </a>
            <a
              className="shadow border-2 border-base-content p-2 rounded-md bg-black ms-5"
              href="https://www.facebook.com/profile.php?id=100094228042198"
            >
              <Image
                width={18}
                height={17}
                src="/assets/facebook.png"
                alt="Facebook"
              />
            </a>
            <a
              className="shadow border-2 border-base-content p-2 rounded-md bg-black ms-5"
              href="https://medium.com/@Assetradotcom"
            >
              <Image
                width={18}
                height={17}
                src="/assets/image-11.png"
                alt="Medium"
              />
            </a>
            <a
              className="shadow border-2 border-base-content p-2 rounded-md bg-black ms-5"
              href="https://chat.whatsapp.com/DT7FIAWAJVgIRPHwkCfHfb"
            >
              <Image
                width={18}
                height={17}
                src="/assets/whatsapp.png"
                alt="WhatsApp"
              />
            </a>
            <a
              className="shadow border-2 border-base-content p-2 rounded-md bg-black ms-5"
              href="https://www.linkedin.com/company/Assetradotcom/"
            >
              <Image
                width={18}
                height={17}
                src="/assets/linkedin.png"
                alt="LinkedIn"
              />
            </a>
            <a
              className="shadow border-2 border-base-content p-2 rounded-md bg-black ms-5"
              href="https://t.me/Assetradotcom"
            >
              <Image
                width={18}
                height={17}
                src="/assets/telegram.png"
                alt="Telegram"
              />
            </a>
            <a
              className="shadow border-2 border-base-content p-2 rounded-md bg-black ms-5"
              href="https://discord.gg/dVmMCdf9jx"
            >
              <Image
                width={18}
                height={17}
                src="/assets/reddit.png"
                alt="Discord"
              />
            </a>
            <a
              className="shadow border-2 border-base-content p-2 rounded-md bg-black ms-5"
              href="https://www.crunchbase.com/organization/Assetra-91c8"
            >
              <Image
                width={18}
                height={17}
                src="/assets/cb.png"
                alt="Crunchbase"
              />
            </a>
            <a
              className="shadow border-2 border-base-content p-2 rounded-md bg-black ms-5"
              href="https://github.com/Assetradotcom"
            >
              <Image
                width={18}
                height={17}
                src="/assets/github.png"
                alt="Github"
              />
            </a>
            <a
              className="shadow border-2 border-base-content p-2 rounded-md bg-black ms-5"
              href="mailto:info@Assetra.com.co"
            >
              <Image
                width={18}
                height={17}
                src="/assets/email.png"
                alt="Email"
              />
            </a>
          </div>
          <div className="grid grid-cols-10 mt-4">
            <div className="col-span-1"></div>
            <div className="grid aspect-square col-span-2 shadow border-2 border-base-content rounded-lg">
              <div className="m-auto">
                <FaUserPlus className="w-full h-6" />
                <p className="text-2xl mt-1 text-center -ml-2">
                  {doneReferrals}
                </p>
                <p className="text-[10px]">Referral Signup</p>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="grid aspect-square col-span-2 shadow border-2 border-base-content rounded-lg">
              <div className="m-auto">
                <FaUserCheck className="w-full h-6" />
                <p className="text-2xl mt-1 text-center -ml-2">
                  {totalReferrals}
                </p>
                <p className="text-[10px]">Total Referrals</p>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="grid aspect-square col-span-2 shadow border-2 border-base-content rounded-lg">
              <div className="m-auto">
                <FaUserClock className="w-full h-6" />
                <p className="text-2xl mt-1 text-center -ml-2">
                  {pendingReferrals}
                </p>
                <p className="text-[10px]">Pending Awards</p>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
        <div className="md:absolute md:inset-y-0 md:left-1/2 md:transform md:-translate-x-1/2 md:w-1 md:bg-base-content"></div>
      </div>
      <p className="mt-4 m-auto">
        Please note that some Terms & Conditions apply. Your friends will need
        to verify their identity before any rewards are given to your account.
      </p>
    </div>
  );
};

export default Referral;

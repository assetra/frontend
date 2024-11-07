"use client";
import { useState } from "react";
import localFont from "next/font/local";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

const microsoft = localFont({ src: "../../public/fonts/chinese.msyh.ttf" });

const Email = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const referrer = searchParams.get("username") ?? "";
  const [clicked, setClicked] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const { setUser, user } = useAuth();
  const [email, setEmail] = useState<string>("");

  // submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setClicked(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      try {
        const response = await fetch("https://gtx.pythonanywhere.com/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const result = await response.json();

        if (response.ok) {
          try {
            await fetch(
              "https://daily-darelle-claudez-0c3a7986.koyeb.app/send_email",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: email,
                  code: result.code,
                }),
              }
            );

            setEmail("");
            setFeedbackMessage(
              "Verification code sent. Please check your email and enter the verification code."
            );
            setIsSuccess(true);
            setUser(result.user);
            setTimeout(() => {
              router.push("/verification"); // Redirect to verification page if the response is OK
            }, 1000);
          } catch (error) {
            setFeedbackMessage(
              "An error occurred while sending verification email. Please try again."
            );
            setIsSuccess(false);
            setClicked(false);
          }
        } else {
          setFeedbackMessage(
            result.message || "Subscription failed. Please try again."
          );
          setIsSuccess(false);
          setClicked(false);
        }
      } catch (error) {
        setFeedbackMessage("An error occurred. Please try again.");
        setIsSuccess(false);
        setClicked(false);
      }
    } else {
      setFeedbackMessage("Please enter valid inputs.");
      setIsSuccess(false);
      setClicked(false);
    }
  };

  return (
    <div className="grid grid-cols-2 min-h-[100svh]">
      <div
        className={` ${microsoft.className} bg-black text-white pb-8 px-6 pt-32`}
      >
        <h1 className="text-3xl font-bold text-center">
          Trade securely and with peace of mind.
        </h1>
        <p className="text-[0.8rem] py-4 text-center">
          "We maintain a constant 1:1 backing of your funds on Assetra, and we
          routinely release Proof of Reserve audits to ensure transparency and
          accountability."
        </p>
      </div>
      <div className="bg-white text-black text-center px-6 pb-8 pt-32 flex justify-center items-center align-middle">
        <div className="border border-black min-h-20 min-w-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quis itaque quo sed voluptatum minus corporis corrupti facilis iste ullam eligendi adipisci aliquid magnam. Tempora exercitationem architecto, perspiciatis obcaecati doloremque ducimus velit et, voluptatum amet, quibusdam reiciendis nihil at ea. Veniam possimus dolorem eaque quae modi et voluptas tenetur error?
        </div>
      </div>
    </div>
  );
};

export default Email;

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import localFont from "next/font/local";
import Link from "next/link";

const microsoft = localFont({ src: "../../public/fonts/chinese.msyh.ttf" });


const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [clicked, setClicked] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { setUser } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setClicked(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      try {
        const response = await fetch("https://gtx.pythonanywhere.com/forget", {
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
              router.push("/reset");
            }, 500);
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
      setFeedbackMessage("Please enter a valid email address.");
      setIsSuccess(false);
      setClicked(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 min-h-[100svh]">
        <div
          className={` ${microsoft.className} bg-black text-white pb-8 px-6 pt-32`}
        >
          <h1 className="text-3xl font-bold text-center">
            Trade securely and with peace of mind.
          </h1>
          <p className="text-[0.8rem] py-4 text-center">
            "We maintain a constant 1:1 backing of your funds on GTX, and we
            routinely release Proof of Reserve audits to ensure transparency and
            accountability."
          </p>
        </div>
        <div className="bg-white text-black text-center px-6 pb-8 pt-36">
          <h1 className="text-xl text-[2rem]">Forgot Password</h1>
          <div className="mt-2 text-sm text-[#6978A0]">
            Enter your email to receive a verification code for resetting your
            password.
          </div>
          {feedbackMessage && (
            <div
              className={`mt-2 text-sm ${
                isSuccess ? "text-green-500" : "text-red-500"
              }`}
            >
              {feedbackMessage}
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mx-auto gap-7 py-6 w-full md:w-2/3 mt-2"
          >
            <div className="flex flex-col items-start">
              <label htmlFor="email" className="text-xs font-semibold">
                Email
              </label>
              <input
                type="text"
                name="email"
                title="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-black rounded-[7px] h-[50px] px-5 w-full bg-white text-black"
              />
            </div>
            {clicked ? (
              <button className="px-3 py-1.5 bg-blue-700 text-white flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </button>
            ) : (
              <button type="submit" className="px-3 py-1.5 bg-black text-white">
                Submit
              </button>
            )}
          </form>
          <div className="py-4 text-xs font-light">
            Return to? &nbsp;
            <span className="font-bold">
              <Link href="/login"> Log in</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;

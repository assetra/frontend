"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

const microsoft = localFont({ src: "../../public/fonts/chinese.msyh.ttf" });

const SignUp = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const referrer = searchParams.get("username") ?? "";
  const [clicked, setClicked] = useState(false);
  const [username, setUsername] = useState<string | number>("");
  const [password, setPassword] = useState<string | number>("");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const { setUser, user } = useAuth();
  const [email, setEmail] = useState<string>("");

  // submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setClicked(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email) && username && password) {
      try {
        const response = await fetch("https://gtx.pythonanywhere.com/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password, referrer }),
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
            setPassword("");
            setUsername("");
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
          "We maintain a constant 1:1 backing of your funds on GTX, and we
          routinely release Proof of Reserve audits to ensure transparency and
          accountability."
        </p>
      </div>
      <div className="bg-white text-black text-center px-6 pb-8 pt-32">
        <h1 className="text-xl text-[2rem]">Sign Up</h1>
        <div className="mt-2 text-sm text-[#6978A0]">
          Hello there! Create an account to get started
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
          className="flex flex-col mx-auto gap-4 py-6 w-full md:w-2/3"
        >
          <div className="flex flex-col items-start">
            <label htmlFor="email" className="text-xs font-semibold">
              Email
            </label>
            <input
              type="text"
              name="email"
              title="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-black rounded-[7px] h-[50px] px-5 w-full bg-white"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="username" className="text-xs font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
              title="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-black rounded-[7px] h-[50px] px-5 w-full bg-white"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="password" className="text-xs font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              title="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-black rounded-[7px] h-[50px] px-5 w-full bg-white"
            />
          </div>
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              required
              className="checkbox checkbox-info"
            />
            <span className="label-text text-black">
              I agree to the <a href="/policy">Privacy Policy</a>,
              <a href="/terms">Terms & Conditions</a>, and
              <a href="/disclosure">Risk Disclosure</a>.
            </span>
          </label>
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
              Sign In
            </button>
          )}
        </form>
        <div className="py-5 text-xs font-light">
          Already have an account? &nbsp;
          <span className=" font-bold">
            <Link href="/login"> Log In</Link>
          </span>
        </div>

        <div className="flex items-center justify-center gap-4 text-[#6E6E6E] text-center">
          <hr className=" w-40" />
          <span className=" text-[#6E6E6E] text-xs">or continue with</span>
          <hr className=" w-40" />
        </div>
        <div className="py-5 flex flex-row gap-8 items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-3 text-xs border px-5 py-3 rounded-md">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z"
                fill="#4285F4"
              />
              <path
                d="M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z"
                fill="#22C55E"
              />
              <path
                d="M5.10014 11.7306C4.91165 11.1862 4.80257 10.6028 4.80257 10C4.80257 9.39722 4.91165 8.81391 5.09022 8.26948L5.08523 8.15352L2.29464 6.02966L2.20333 6.07222C1.5982 7.25835 1.25098 8.59032 1.25098 10C1.25098 11.4098 1.5982 12.7417 2.20333 13.9278L5.10014 11.7306Z"
                fill="#FACC15"
              />
              <path
                d="M10.1789 4.63331C11.8554 4.63331 12.9864 5.37774 13.6605 6.00253L16.1515 3.61773C14.607 2.21052 12.5896 1.25 10.1789 1.25C6.6868 1.25 3.67094 3.21478 2.2027 6.07216L5.0903 8.26942C5.81385 6.15969 7.81779 4.63331 10.1789 4.63331Z"
                fill="#E6492D"
              />
            </svg>
            Sign up with Google
          </div>
          <div className="flex flex-row items-center justify-center gap-3 text-xs border px-5 py-3 rounded-md">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3013_24329)">
                <path
                  d="M17.5 9.06444C17.5 4.26778 13.92 0.5 9 0.5C4.08 0.5 0.5 4.26778 0.5 9.06444C0.5 13.0544 3.345 16.3822 7.205 17V11.3072H5.21001V9.06444H7.205V7.235C7.205 5.25556 8.365 4.16667 10.155 4.16667C10.959 4.16667 11.805 4.3 11.805 4.3V6.22722H10.795C9.8 6.22722 9.575 6.79444 9.575 7.38333V9.06444H11.715L11.35 11.3072H9.575V17C13.435 16.3822 16.28 13.0544 16.28 9.06444H17.5Z"
                  fill="#2563EB"
                />
              </g>
              <defs>
                <clipPath id="clip0_3013_24329">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Sign up with Facebook
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

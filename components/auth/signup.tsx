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
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[100svh]">
      <div
        className={`${microsoft.className}  bg-gradient-to-r from-black to-gray-800 text-white py-32 px-6 md:py-32 md:px-12 justify-center md:block hidden content-center`}
      >
        <div className="flex flex-col my-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Trade securely and with peace of mind.
          </h1>
          <p className="text-sm md:text-base py-4 text-center">
            "We maintain a constant 1:1 backing of your funds on Assetra, and we
            routinely release Proof of Reserve audits to ensure transparency and
            accountability."
          </p>
        </div>
      </div>

      <div className="bg-white text-black text-center px-6 md:px-12 py-12 md:py-32">
        <h1 className="text-2xl md:text-3xl font-bold">Sign Up</h1>
        <p className="mt-2 text-sm md:text-base text-[#6978A0]">
          Hello there! Create an account to get started
        </p>

        {feedbackMessage && (
          <div
            className={`mt-4 text-sm md:text-base ${isSuccess ? "text-green-500" : "text-red-500"} transition-all duration-300 ease-in-out`}
          >
            {feedbackMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col mx-auto gap-4 pt-6 w-full md:w-2/3"
        >
          <div className="flex flex-col items-start">
            <label
              htmlFor="email"
              className="text-sm md:text-base font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              title="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg h-[50px] md:h-[60px] px-5 w-full bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Your email"
            />
          </div>

          <div className="flex flex-col items-start">
            <label
              htmlFor="username"
              className="text-sm md:text-base font-semibold text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              title="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 rounded-lg h-[50px] md:h-[60px] px-5 w-full bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Your username"
            />
          </div>

          <div className="flex flex-col items-start">
            <label
              htmlFor="password"
              className="text-sm md:text-base font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              title="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg h-[50px] md:h-[60px] px-5 w-full bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Your password"
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
            <button className="px-4 py-2 bg-blue-700 text-white flex items-center justify-center rounded-lg mt-6">
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
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-lg mt-6 transition-all duration-300 hover:bg-gray-800"
            >
              Sign Up
            </button>
          )}
        </form>

        <div className="py-2 text-sm md:text-base font-light">
          Already have an account? &nbsp;
          <span className="font-semibold text-blue-600 hover:underline">
            <Link href="/login">Log In</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

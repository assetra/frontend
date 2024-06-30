"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import localFont from "next/font/local";
import Link from "next/link";
import { useRouter } from "next/navigation";

const microsoft = localFont({ src: "../../public/fonts/chinese.msyh.ttf" });

const Login = () => {
  const [clicked, setClicked] = useState(false);
  const [username, setUsername] = useState<string | number>("");
  const [password, setPassword] = useState<string | number>("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  // submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setClicked(true);

    if (username && password) {
      try {
        const response = await fetch("https://gtx.pythonanywhere.com/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        if (response.ok) {
          setUsername("");
          setPassword("");
          setFeedbackMessage("Login successful!");
          setIsSuccess(true);
          setTimeout(() => {
            router.push("/dashboard"); // Redirect to dashboard page if the response is OK
          }, 1000);
        } else {
          setFeedbackMessage(
            result.message || "Login failed. Please try again."
          );
          setIsSuccess(false);
          setClicked(false);
        }
      } catch (error) {
        setFeedbackMessage("An error occurred. Please try again.");
        setIsSuccess(false);
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
        <h1 className="text-xl text-[2rem]">Log In</h1>
        <div className="mt-2 text-sm text-[#6978A0]">
          Welcome back, you’ve been missed!
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
          className="flex flex-col mx-auto gap-7 py-6 w-full md:w-2/3"
        >
          <div className="flex flex-col items-start">
            <label htmlFor="username" className="text-xs font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
              title="Enter your username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border border-black rounded-[7px] h-[50px] px-5 w-full bg-white"
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
              </svg>{" "}
            </button>
          ) : (
            <button type="submit" className="px-3 py-1.5 bg-black text-white">
              Log In
            </button>
          )}
        </form>
        <div className="py-8 text-xs font-light">
          Don’t have an account? &nbsp;
          <span className="font-bold">
            <Link href="/signup"> Sign Up</Link>
          </span>
        </div>

        <div className="flex items-center justify-center gap-4 text-[#6E6E6E] text-center">
          <hr className="w-40" />{" "}
          <span className="text-[#6E6E6E] text-xs">or continue with</span>
          <hr className="w-40" />
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
                d="M10.1789 4.63331C11.6474 4.63331 12.6468 5.21387 13.2234 5.7435L16.1576 2.96367C14.608 1.56514 12.5895 0.625 10.1789 0.625C6.68685 0.625 3.67098 2.58922 2.20276 5.44746L5.08932 7.64467C5.81388 5.53495 7.81782 4.63331 10.1789 4.63331Z"
                fill="#EF4444"
              />
            </svg>
            Google
          </div>

          <div className="flex flex-row items-center justify-center gap-3 text-xs border px-5 py-3 rounded-md">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_102_125)">
                <path
                  d="M19.1483 0H0.851737C0.381579 0 0 0.378947 0 0.845263V19.1547C0 19.6211 0.381579 20 0.851737 20H19.1474C19.6175 20 20 19.6211 20 19.1547V0.845263C20 0.378947 19.6175 0 19.1483 0V0ZM6.66779 17.4379H3.33368V7.62526H6.66779V17.4379ZM5.00179 6.32842C3.89789 6.32842 3 5.42421 3 4.31474C3 3.20526 3.89789 2.30105 5.00179 2.30105C6.10568 2.30105 7.00358 3.20526 7.00358 4.31474C7.00358 5.42421 6.10568 6.32842 5.00179 6.32842V6.32842ZM17.5002 17.4379H14.1674V12.5305C14.1674 11.3063 14.1431 9.68211 12.4306 9.68211C10.6942 9.68211 10.416 11.0721 10.416 12.4463V17.4379H7.08289V7.62526H10.2611V8.98632H10.3063C10.7632 8.09684 11.8971 7.16105 13.5213 7.16105C16.8263 7.16105 17.5002 9.33842 17.5002 12.0158V17.4379Z"
                  fill="#2563EB"
                />
              </g>
              <defs>
                <clipPath id="clip0_102_125">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            LinkedIn
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import localFont from "next/font/local";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

const microsoft = localFont({ src: "../../public/fonts/chinese.msyh.ttf" });

const Login = () => {
  const [clicked, setClicked] = useState(false);
  const [username, setUsername] = useState<string | number>("");
  const [password, setPassword] = useState<string | number>("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUser, setIsAuthenticated } = useAuth();

  const redirectPath = searchParams.get("redirect") || "/dashboard";

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
          setUser(result.user);
          setIsAuthenticated(true);
          setTimeout(() => {
            router.push(redirectPath); // Redirect to intended route if login is successful
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
                d="M5.10014 11.7306C4.91165 11.1862 4.80257 10.6028 4.80257 10C4.80257 9.39722 4.91165 8.81391 5.09022 8.26948L5.08523 8.15352L2.29464 6.02966L2.20333 6.07222C1.5982 7.25835 1.25 8.58887 1.25 10C1.25 11.411 1.5982 12.7415 2.20333 13.9277L5.10014 11.7306Z"
                fill="#FBBC05"
              />
              <path
                d="M10.1787 4.63348C11.7212 4.63348 12.7367 5.27887 13.339 5.83001L16.1588 3.14519C14.6076 1.74519 12.5894 1.25 10.1787 1.25C6.68668 1.25 3.67082 3.21406 2.20259 6.07225L5.08993 8.2695C5.81373 6.15981 7.81768 4.63348 10.1787 4.63348Z"
                fill="#EA4335"
              />
            </svg>{" "}
            Google
          </div>
          <div className="flex flex-row items-center justify-center gap-3 text-xs border px-5 py-3 rounded-md">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_113_1092)">
                <path
                  d="M21.7695 10.1758C21.7695 4.55663 16.9092 0 11.0201 0C5.13092 0 0.270584 4.55663 0.270584 10.1758C0.270584 15.1964 3.99678 19.3955 8.74963 20V12.9812H6.40861V10.1758H8.74963V7.93682C8.74963 5.61026 10.2697 4.17756 12.4332 4.17756C13.4688 4.17756 14.5534 4.37027 14.5534 4.37027V6.64867H13.3262C12.1148 6.64867 11.7316 7.3898 11.7316 8.15191V10.1758H14.4404L13.9804 12.9812H11.7316V20C16.4844 19.3955 21.2106 15.1964 21.2106 10.1758H21.7695Z"
                  fill="#1877F2"
                />
                <path
                  d="M13.9803 12.9811L14.4403 10.1757H11.7315V8.15187C11.7315 7.38977 12.1147 6.64863 13.3262 6.64863H14.5534V4.37023C14.5534 4.37023 13.4688 4.17752 12.4332 4.17752C10.2697 4.17752 8.74963 5.61023 8.74963 7.93679V10.1757H6.40861V12.9811H8.74963V20C9.35747 20.1006 9.98049 20.1501 10.6131 20.1501C11.2458 20.1501 11.8688 20.1006 12.4767 20V12.9811H13.9803Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_113_1092">
                  <rect width="22" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Facebook
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

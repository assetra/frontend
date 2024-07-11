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
            <label
              htmlFor="sign_up"
              className="cursor-pointer flex items-center text-center hover:border-black w-fit mx-auto mt-2 hover:border-b-2 hover:pb-1"
            >
              Sign Up
            </label>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;

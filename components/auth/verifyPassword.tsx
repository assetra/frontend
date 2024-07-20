"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import localFont from "next/font/local";
import Link from "next/link";

const microsoft = localFont({ src: "../../public/fonts/chinese.msyh.ttf" });

interface CustomCSSProperties extends React.CSSProperties {
  "--value"?: string | number;
}

const VerifyPassword: React.FC = () => {
  const [view, setView] = useState(false);
  const [password, setPassword] = useState<string | number>("");
  const [clicked, setClicked] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [code, setCode] = useState<string[]>(new Array(6).fill(""));
  const [countdown, setCountdown] = useState(300);
  const [resendEnabled, setResendEnabled] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(true);
  const { user, setUser } = useAuth();
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const endTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!endTimeRef.current) {
      endTimeRef.current = Date.now() + countdown * 1000;
    }

    const updateCountdown = () => {
      const remainingTime = Math.max(0, endTimeRef.current! - Date.now());
      setCountdown(Math.floor(remainingTime / 1000));

      if (remainingTime > 0) {
        timerRef.current = setTimeout(updateCountdown, 1000);
      } else {
        setResendEnabled(true);
        setSubmitEnabled(false);
      }
    };

    updateCountdown();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleSubmitPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setClicked(true);

    try {
      const response = await fetch("https://gtx.pythonanywhere.com/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, username: user.username }),
      });

      const result = await response.json();

      if (response.ok) {
        setPassword("");
        setFeedbackMessage("Your password has been rest, Please login again.");
        setIsSuccess(true);
        setUser(result.user);
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      } else {
        setFeedbackMessage(
          result.message || "Password reset failed. Please try again."
        );
        setIsSuccess(false);
        setClicked(false);
      }
    } catch (error) {
      setFeedbackMessage("An error occurred. Please try again.");
      setIsSuccess(false);
      setClicked(false);
    }
  };

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (/[^0-9a-zA-Z]/.test(element.value)) return;
    const newCode = [...code];
    newCode[index] = element.value;
    setCode(newCode);

    if (element.nextSibling && element.value) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setClicked(true);
    const verificationCode = code.join("");
    try {
      const response = await fetch("https://gtx.pythonanywhere.com/password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          code: verificationCode,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setFeedbackMessage(
          "Verification successful, Please set your new password."
        );
        setIsSuccess(true);
        setTimeout(() => {
          setClicked(false);
          setView(true);
        }, 1000);
      } else {
        if (result.message === "Code has expired") {
          await handleResend();
          setFeedbackMessage("Code expired. A new code has been sent.");
          setCode(new Array(6).fill(""));
          endTimeRef.current = Date.now() + 300 * 1000;
          setIsSuccess(false);
        } else {
          setFeedbackMessage(
            result.message || "Verification failed. Please try again."
          );
          setIsSuccess(false);
          setClicked(false);
        }
      }
    } catch (error) {
      setFeedbackMessage("An error occurred. Please try again.");
      setIsSuccess(false);
      setClicked(false);
    }
  };

  const handleResend = async () => {
    setResendEnabled(false);
    endTimeRef.current = Date.now() + 300 * 1000;
    setSubmitEnabled(true);

    try {
      const response = await fetch(
        "https://gtx.pythonanywhere.com/resend_code",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: user.username }),
        }
      );

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
                email: user.email,
                code: result.code,
              }),
            }
          );
          setFeedbackMessage(
            "A new verification code has been sent to your email."
          );
          setIsSuccess(true);
        } catch (error) {
          setFeedbackMessage(
            "An error occurred while sending verification email. Please try again."
          );
          setIsSuccess(false);
          setClicked(false);
        }
      } else {
        setFeedbackMessage(
          result.message ||
            "Failed to resend the verification code. Please try again."
        );
        setIsSuccess(false);
      }
    } catch (error) {
      setFeedbackMessage("An error occurred. Please try again.");
      setIsSuccess(false);
    }
  };

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <>
      {view ? (
        <div className="grid grid-cols-2 min-h-[100svh]">
          <div
            className={` ${microsoft.className} bg-black text-white pb-8 px-6 pt-32`}
          >
            <h1 className="text-3xl font-bold text-center">
              Trade securely and with peace of mind.
            </h1>
            <p className="text-[0.8rem] py-4 text-center">
              "We maintain a constant 1:1 backing of your funds on GTX, and we
              routinely release Proof of Reserve audits to ensure transparency
              and accountability."
            </p>
          </div>
          <div className="bg-white text-black text-center px-6 pb-8 pt-36">
            <h1 className="text-xl text-[2rem]">Reset Password</h1>
            <div className="mt-2 text-sm text-[#6978A0]">
              Enter your new password to reset your password.
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
              onSubmit={handleSubmitPassword}
              className="flex flex-col mx-auto gap-7 py-6 w-full md:w-2/3 mt-2"
            >
              <div className="flex flex-col items-start">
                <label htmlFor="password" className="text-xs font-semibold">
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  title="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-black text-white"
                >
                  Reset
                </button>
              )}
            </form>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 min-h-[100svh]">
          <div
            className={` ${microsoft.className} bg-black text-white pb-8 px-6 pt-32`}
          >
            <h1 className="text-3xl font-bold text-center">
              Trade securely and with peace of mind.
            </h1>
            <p className="text-[0.8rem] py-4 text-center">
              "We maintain a constant 1:1 backing of your funds on GTX, and we
              routinely release Proof of Reserve audits to ensure transparency
              and accountability."
            </p>
          </div>
          <div className="bg-white text-black text-center px-6 pb-8 pt-32">
            <h1 className="text-xl text-[2rem]">Verify Email</h1>
            <div className="mt-4 text-sm text-[#6978A0]">
              Enter your verification code to reset your password.
            </div>
            {feedbackMessage && (
              <div
                className={`mt-4 text-sm ${
                  isSuccess ? "text-green-500" : "text-red-500"
                }`}
              >
                {feedbackMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-6 gap-4 py-6 px-16 mt-6">
                {code.map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    className="aspect-square border-2 max-w-16 border-green-300 rounded-lg bg-white text-center text-[2rem] font-medium text-blue-300"
                    maxLength={1}
                    value={code[index]}
                    onChange={(e) => handleChange(e.target, index)}
                  />
                ))}
              </div>
              {clicked ? (
                <button className="mt-6 px-3 py-1.5 w-[40%] bg-blue-700 text-white mx-auto">
                  <span className="loading loading-spinner loading-md"></span>
                </button>
              ) : (
                <button
                  type="submit"
                  className={`mt-6 px-3 py-1.5 w-[40%] bg-black text-white mx-auto ${
                    !submitEnabled ? "bg-blue-400 cursor-not-allowed" : ""
                  }`}
                  disabled={!submitEnabled}
                >
                  Submit
                </button>
              )}
            </form>
            <div className="justify-center mt-6">
              <div className="grid w-full">
                <span className="countdown font-mono text-xl mx-auto">
                  <span
                    style={{ "--value": minutes } as CustomCSSProperties}
                  ></span>
                  :
                  <span
                    style={{ "--value": seconds } as CustomCSSProperties}
                  ></span>
                </span>
                <button
                  onClick={handleResend}
                  disabled={!resendEnabled}
                  className={`mt-6 px-3 py-1.5 w-[40%] text-white mx-auto ${
                    resendEnabled
                      ? "bg-blue-300"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Resend Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyPassword;

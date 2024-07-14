"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import localFont from "next/font/local";
const microsoft = localFont({ src: "../../public/fonts/chinese.msyh.ttf" });

// Extending the CSSProperties interface to include the custom CSS variable --value
interface CustomCSSProperties extends React.CSSProperties {
  "--value"?: string | number;
}

export const Verification: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [code, setCode] = useState<string[]>(new Array(6).fill(""));
  const [countdown, setCountdown] = useState(300); // 5 minutes countdown
  const [resendEnabled, setResendEnabled] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(true);
  const { user, setIsAuthenticated } = useAuth();
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const verificationLabelRef = useRef<HTMLLabelElement>(null);
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
    console.log(verificationCode, user.username);

    try {
      const response = await fetch("https://gtx.pythonanywhere.com/verify", {
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
        setFeedbackMessage("Verification successful");
        setIsSuccess(true);
        setIsAuthenticated(true);
        setTimeout(() => {
          verificationLabelRef.current?.click();
          router.push("/profile");
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
        <h1 className="text-xl text-[2rem]">Email Verification!</h1>
        <div className="mt-4 text-sm text-[#6978A0]">
          Please verify your email address by entering the code sent to your
          inbox to continue.
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
              Verify
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
                resendEnabled ? "bg-blue-300" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Resend Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

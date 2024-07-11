"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

// Extending the CSSProperties interface to include the custom CSS variable --value
interface CustomCSSProperties extends React.CSSProperties {
  "--value"?: string | number;
}

export const VerificationPop: React.FC = () => {
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
    <>
      <label
        htmlFor="verification"
        ref={verificationLabelRef}
        className="hidden"
      ></label>
      <input type="checkbox" id="verification" className="modal-toggle" />
      <div className="modal text-black" role="dialog">
        <div className="modal-box bg-white">
          <label
            htmlFor="verification"
            className="border-0 focus:border-0 absolute right-8 top-6 text-[1.5rem] cursor-pointer"
          >
            X
          </label>
          <div className="flex justify-between p-4">
            <Image
              src={"/assets/black/logo.png"}
              alt="GTX logo"
              width={100}
              height={70}
              style={{ marginInline: "auto" }}
            />
          </div>
          <div className="flex-none items-center text-center mt-2">
            <h4 className="text-[18px]">Email Verification!</h4>
            <p className="mt-2">
              Please verify your email address by entering the code sent to your
              inbox to continue.
            </p>
            {feedbackMessage && (
              <div
                className={`mt-2 text-sm ${
                  isSuccess ? "text-green-500" : "text-red-500"
                }`}
              >
                {feedbackMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-6 gap-4 p-4">
                {code.map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    className="aspect-square border-2 border-green-300 rounded-lg bg-white text-center text-[2rem] font-medium text-blue-300"
                    maxLength={1}
                    value={code[index]}
                    onChange={(e) => handleChange(e.target, index)}
                  />
                ))}
              </div>
              {clicked ? (
                <button className="bg-blue-600 py-2 text-white flex items-center justify-center w-[40%] mx-auto rounded-full">
                  <span className="loading loading-spinner loading-md"></span>
                </button>
              ) : (
                <button
                  type="submit"
                  className={`py-2 bg-white text-black font-medium shadow border-2 w-[40%] mx-auto rounded-full ${
                    !submitEnabled ? "bg-gray-400 cursor-not-allowed" : ""
                  }`}
                  disabled={!submitEnabled}
                >
                  Verify
                </button>
              )}
            </form>
          </div>
          <div className="modal-action justify-center mt-6">
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
                className={`mt-2 px-4 py-2 w-[40%] text-white rounded-full mx-auto ${
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
    </>
  );
};

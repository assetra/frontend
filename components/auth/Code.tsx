"use client";
import { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";

const microsoft = localFont({ src: "../../public/fonts/chinese.msyh.ttf" });

// Extending the CSSProperties interface to include the custom CSS variable --value
interface CustomCSSProperties extends React.CSSProperties {
  "--value"?: string | number;
}

interface CodeProps {
  onSendData: (data: boolean) => void;
  email: string;
}

const Code: React.FC<CodeProps> = ({ onSendData, email }) => {
  const [clicked, setClicked] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [code, setCode] = useState<string[]>(new Array(6).fill(""));
  const [countdown, setCountdown] = useState(300); // 5 minutes countdown
  const [resendEnabled, setResendEnabled] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const verificationLabelRef = useRef<HTMLLabelElement>(null);
  const endTimeRef = useRef<number | null>(null);
  const [digit, setDigit] = useState<string>("");

  function generateRandomSixDigitNumber(): number {
    return Math.floor(100000 + Math.random() * 900000);
  }

  const sendMail = async () => {
    const code1 = generateRandomSixDigitNumber().toString();
    setDigit(code1);
    try {
      const response = await fetch(
        "https://daily-darelle-claudez-0c3a7986.koyeb.app/send_email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, code: code1 }),
        }
      );
      const result = await response.json();
      if (response.ok) {
        console.log(result);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log("Error sending email:", error);
    }
  };

  useEffect(() => {
    sendMail();
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
    if (verificationCode == digit) {
      onSendData(true);
    } else {
      setFeedbackMessage(
        "Oops! That code didn’t match. Please double-check and give it another go."
      );
      setIsSuccess(false);
      setClicked(false);
    }
  };

  const handleResend = async () => {
    setResendEnabled(false);
    endTimeRef.current = Date.now() + 300 * 1000;
    setSubmitEnabled(true);
    sendMail();
    setFeedbackMessage("A new verification code has been sent to your email.");
    setIsSuccess(true);
  };

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 min-h-[100svh]">
      <div
        className={`${microsoft.className}   bg-black text-white text-center px-4 md:px-12 justify-center items-center align-middle md:block hidden content-center`}
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
      <div className="bg-white text-black text-center px-4 md:px-20 flex justify-center items-center align-middle">
        <div className="relative border border-black min-h-20 min-w-16 px-6 pt-6 pb-4 rounded-xl">
          <div className="max-w-6 max-h-6 aspect-square overflow-hidden relative">
            <Image
              fill
              src={"/assets/assetra-logo.jpg"}
              alt={"logo"}
              className="object-fill"
            />
          </div>
          <h2 className="mt-4 font-semibold text-[20px] text-left">
            Verify Your Email
          </h2>
          <p className="mt-1 mb-6 text-left text-gray-500">
            Enter the code sent to your email to confirm your account and get
            started with Assetra.
          </p>
          {feedbackMessage && (
            <div
              className={`mb-4 text-left text-sm md:text-base ${isSuccess ? "text-green-500" : "text-red-500"} transition-all duration-300 ease-in-out`}
            >
              {feedbackMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-6 gap-4 py-6 px-16 mt-6">
              {code.map((_, index) => (
                <input
                  id="index"
                  key={index}
                  type="text"
                  title="code"
                  className="aspect-square border focus:border-blue-500 focus:outline-none max-w-16  rounded-lg bg-white text-center text-[2rem] font-medium text-black"
                  maxLength={1}
                  value={code[index]}
                  onChange={(e) => handleChange(e.target, index)}
                />
              ))}
            </div>
            {clicked ? (
              <button className="px-4 py-2 w-full bg-blue-700 text-white flex items-center justify-center rounded-lg mt-4">
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
                className="px-4 py-2 w-full bg-black text-white rounded-lg mt-4 transition-all duration-300 hover:bg-gray-800"
              >
                Next
              </button>
            )}
          </form>
          <div className="justify-center mt-4">
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
                className={`px-4 py-2 w-full bg-white border-black border text-black rounded-lg mt-4 transition-all duration-300 hover:bg-slate-100o ${
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
    </div>
  );
};

export default Code;

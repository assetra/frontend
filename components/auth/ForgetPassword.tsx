"use client";
import { useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";

const microsoft = localFont({ src: "../../public/fonts/chinese.msyh.ttf" });

interface ForgotProps {
  onSendData: (data: string) => void;
}
const ForgetPassword: React.FC<ForgotProps> = ({ onSendData }) => {
  const [email, setEmail] = useState<string>("");
  const [clicked, setClicked] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setClicked(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      try {
        const response = await fetch(
          `https://gtxadmin.pythonanywhere.com/api//email_exists/${email}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.exists) {
          onSendData(email);
        } else {
          setFeedbackMessage("No account found with that email address.");
          setIsSuccess(false);
          setClicked(false);
        }
        setClicked(false);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
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
          className={`${microsoft.className} bg-black text-white text-center px-4 md:px-12 justify-center items-center align-middle md:block hidden content-center`}
        >
          <div className="flex flex-col my-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Trade securely and with peace of mind.
            </h1>
            <p className="text-sm md:text-base py-4 text-center">
              "We maintain a constant 1:1 backing of your funds on Assetra, and
              we routinely release Proof of Reserve audits to ensure
              transparency and accountability."
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
              Forgot Password
            </h2>
            <p className="mt-1 mb-6 text-left text-gray-500">
              Enter your email to receive a verification code for resetting your
              password.
            </p>
            {feedbackMessage && (
              <div
                className={`mb-4 text-left text-sm md:text-base ${isSuccess ? "text-green-500" : "text-red-500"} transition-all duration-300 ease-in-out`}
              >
                {feedbackMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  title="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-lg h-[45px] px-5 w-full bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="youremail@example.com"
                />
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
            <div className="mt-4 text-sm md:text-base font-light text-gray-500">
              Return to? &nbsp;
              <span className="font-semibold text-black hover:underline">
                <Link href="/login"> Log in</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;

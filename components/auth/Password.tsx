"use client";
import { useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import PasswordStrengthBar from "react-password-strength-bar";

const microsoft = localFont({ src: "../../public/fonts/chinese.msyh.ttf" });

interface PasswordProps {
  onSendData: (data: string) => void;
}

const Password: React.FC<PasswordProps> = ({ onSendData }) => {
  const [clicked, setClicked] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [password, setPassword] = useState<string>("");

  // submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setClicked(true);
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (passwordRegex.test(password)) {
      onSendData(password);
    } else {
      setFeedbackMessage(
        "Your password must be at least 8 characters long and include uppercase, lowercase letters, a number, and a special character."
      );
      setIsSuccess(false);
      setClicked(false);
    }
  };

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
            Create Your Password
          </h2>
          <p className="mt-1 mb-6 text-left text-gray-500">
            For a secure password, please use at least 8 characters, with a mix
            of letters, numbers, and special characters.
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
                type="text"
                name="password"
                title="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength={16} // sets maximum length
                className="border border-gray-300 rounded-lg h-[45px] px-5 w-full bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="Enter your Password"
              />

              <PasswordStrengthBar
                password={password}
                className="w-full mt-4"
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
        </div>
      </div>
    </div>
  );
};

export default Password;

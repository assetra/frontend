"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";

export const SignupPop: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const verificationLabelRef = useRef<HTMLLabelElement>(null);
  const signUpLabelRef = useRef<HTMLLabelElement>(null);
  const { setUser } = useAuth();

  const handleProgrammaticClick = () => {
    signUpLabelRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setClicked(true);

    const { email, username, password } = formData;
    if (validateEmail(email) && username && password) {
      try {
        const response = await fetch("https://gtx.pythonanywhere.com/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
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

            setFormData({ username: "", email: "", password: "" });
            setFeedbackMessage(
              "Verification code sent. Please check your email and enter the verification code."
            );
            setIsSuccess(true);
            setUser(result.user);
            setTimeout(() => {
              handleProgrammaticClick();
              verificationLabelRef.current?.click();
            }, 1000);
          } catch (error) {
            setFeedbackMessage(
              "An error occurred while sending the verification email. Please try again."
            );
            setIsSuccess(false);
          }
        } else {
          setFeedbackMessage(
            result.message || "Subscription failed. Please try again."
          );
          setIsSuccess(false);
        }
      } catch (error) {
        setFeedbackMessage("An error occurred. Please try again.");
        setIsSuccess(false);
      } finally {
        setClicked(false);
      }
    } else {
      setFeedbackMessage("Please enter valid inputs.");
      setIsSuccess(false);
      setClicked(false);
    }
  };

  return (
    <>
      <input type="checkbox" id="sign_up" className="modal-toggle" />
      <div className="modal text-black" role="dialog">
        <div className="modal-box bg-white">
          <label
            htmlFor="sign_up"
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
            <h4 className="text-[18px]">Welcome!</h4>
            <p className="mt-2">
              Create an account to join our digital asset ecosystem.
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
            <form
              onSubmit={handleSubmit}
              className="grid p-6 max-w-[400px] mx-auto gap-4"
            >
              <label className="input input-bordered flex items-center gap-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="white"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow text-white"
                  placeholder="Email"
                  name="email"
                  title="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="white"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow text-white"
                  name="username"
                  title="Enter your username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="white"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  name="password"
                  className="grow text-white"
                  title="Enter your password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="checkbox checkbox-info"
                />
                <span className="label-text text-black">
                  I agree to the <a href="/policy">Privacy Policy</a>,{" "}
                  <a href="/terms">Terms & Conditions</a>, and{" "}
                  <a href="/disclosure">Risk Disclosure</a>.
                </span>
              </label>
              {clicked ? (
                <button className="bg-blue-600 py-2 text-white flex items-center justify-center w-1/2 mx-auto rounded-full">
                  <span className="loading loading-spinner loading-md"></span>
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-3 py-2 bg-white text-black font-medium shadow border-2 w-1/2 mx-auto rounded-full"
                >
                  Sign Up
                </button>
              )}
            </form>
          </div>
          <div className="modal-action justify-center -mt-2">
            <div
              onClick={handleProgrammaticClick}
              className="cursor-pointer font-medium px-2 hover:border-black hover:border-b-2 hover:pb-1"
            >
              Log In
            </div>
            <label htmlFor="sign_up" ref={signUpLabelRef} className="hidden">
              Connect
            </label>
            <label
              htmlFor="verification"
              ref={verificationLabelRef}
              className="hidden"
            >
              Connect
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

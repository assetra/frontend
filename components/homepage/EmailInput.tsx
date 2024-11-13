"use client";
import React, { FormEvent, useState } from "react";
import CustomModal from "./CustomModal";

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      try {
        const response = await fetch(
          "https://gtx.pythonanywhere.com/subscribe",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        const result = await response.json();
        if (response.ok) {
          setNotificationMessage(result.message);
          setEmail(""); // Clear email input
          setShowNotification(true);
          setTimeout(() => {
            setShowNotification(false);
          }, 1000); // Hide notification after a second
        } else {
          setNotificationMessage(result.message);
          setShowNotification(true);
          setTimeout(() => {
            setShowNotification(false);
          }, 3000); // Hide notification after 3 seconds
        }
      } catch (error) {
        setNotificationMessage("Server error. Please try again later.");
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 3000); // Hide notification after 3 seconds
      }
    } else {
      setNotificationMessage("Please enter a valid email address.");
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000); // Hide notification after 3 seconds
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <form
        className="flex md:w-[350px] border-[1px] border-[#000000] rounded-full p-2 bg-[#2F324180] max-h-12"
        onSubmit={handleSubmit}
      >
        <input
          className="ml-2 w-full outline-none bg-transparent text-[#9CA3AF] text-xs md:text-sm max-h-8"
          type="text"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <button
            type="submit"
            className="ml-2 text-[#FFFFFF] bg-[#1e68f6] px-4 py-[5px] rounded-full text-[1rem] max-h-8 w-[8rem]"
          >
            Get Started
          </button>
        </div>
      </form>
      {showNotification && (
        <CustomModal
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
};

export default EmailInput;

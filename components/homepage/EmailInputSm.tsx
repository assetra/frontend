"use client";
import React, { FormEvent, useState } from "react";
import CustomModal from "./CustomModal";

const EmailInputSm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");

  const handleSubmitSm = async (event: FormEvent) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      try {
        const response = await fetch("/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const result = await response.json();
        if (response.ok) {
          setNotificationMessage(result.message);
          setEmail(""); // Clear email input
        } else {
          setNotificationMessage(result.message);
        }
      } catch (error) {
        setNotificationMessage("Server error. Please try again later.");
      }
    } else {
      setNotificationMessage("Please enter a valid email address.");
    }

    setShowNotification(true);
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex mt-4 w-[340px] border-[1px] border-[#000000] rounded-full px-2 py-1 bg-[#34384c]"
        onSubmit={handleSubmitSm}
      >
        <input
          className="w-full ms-4 outline-none bg-[#34384c] text-[#9ca3af] text-sm"
          type="text"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <button
            type="submit"
            className="text-[#FFFFFF] bg-[#1e68f6] px-8 py-2 rounded-full text-sm"
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

export default EmailInputSm;

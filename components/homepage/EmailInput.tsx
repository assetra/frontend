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
    <div className="flex justify-center mt-6">
      <div className="flex md:w-[500px] border-[1px] border-[#000000] rounded-full px-4 py-2 bg-[#34384c]">
        <input
          className="w-full outline-none bg-[#34384c] text-[#9ca3af] text-xs md:text-sm"
          type="text"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <button
            onClick={handleSubmit}
            className="text-[#FFFFFF] bg-[#1e68f6] px-12 py-3 rounded-full text-xs md:text-sm"
          >
            Get Started
          </button>
        </div>
      </div>
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

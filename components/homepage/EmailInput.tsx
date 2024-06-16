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
      <form
        className="flex md:w-[500px] border-[1px] border-[#000000] rounded-full px-4 py-2 bg-[#34384C] h-16"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full outline-none bg-[#34384C] text-[#9CA3AF] text-[1rem] md:text-sm h-12"
          type="text"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <button
            type="submit"
            className="text-[#FFFFFF] bg-[#1e68f6] px-4 py-2 rounded-full text-[1rem] h-12 w-[8rem]"
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

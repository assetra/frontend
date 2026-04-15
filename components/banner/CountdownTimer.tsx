"use client";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // March 27, 2025, 08:00:00 Hong Kong time (UTC+8)
    const targetDate = new Date("2025-03-27T08:00:00+08:00");

    const calculateTimeLeft = () => {
      const now = new Date();

      const hkOffset = 8 * 60; // Hong Kong is UTC+8
      const localOffset = now.getTimezoneOffset();
      const totalOffset = hkOffset + localOffset;

      const adjustedNow = new Date(now.getTime() + totalOffset * 60 * 1000);
      const difference = targetDate.getTime() - adjustedNow.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 ">
      <div className="flex gap-8">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">
            {formatNumber(timeLeft.days)}
          </span>
          <span className="text-sm opacity-80">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">
            {formatNumber(timeLeft.hours)}
          </span>
          <span className="text-sm opacity-80">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className="text-sm opacity-80">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">
            {formatNumber(timeLeft.seconds)}
          </span>
          <span className="text-sm opacity-80">Seconds</span>
        </div>
      </div>
      <div className="mt-4 text-sm opacity-80">
        Current time in Hong Kong:{" "}
        {new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Hong_Kong" })}
      </div>
    </div>
  );
};

export default CountdownTimer;

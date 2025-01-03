"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useRef } from "react";

const EarlySupporter = () => {
  const { setUser, user } = useAuth();
  const buttonRef = useRef<HTMLButtonElement>(null);

  async function checkEarlySupporter() {
    if (user?.earlysupporter == "1") {
      try {
        const response = await fetch(
          "https://gtxadmin.pythonanywhere.com/api/earlysupporter/",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: user.username }),
          }
        );

        if (!response.ok)
          throw new Error("Failed to update early supporter status");

        const data = await response.json();
        if (data.user) {
          setUser(data.user);
          buttonRef.current?.click();
        } else {
          console.error("No user data returned");
        }
      } catch (error) {
        console.error("Early supporter update failed:", error);
      }
    }
  }

  useEffect(() => {
    if (user) checkEarlySupporter();
  }, [user]);

  return (
    <div>
      <button
        {...{ popovertarget: "supporter-presenter" } as any}
        type="button"
        ref={buttonRef}
      ></button>

      <div
        popover="auto"
        id="supporter-presenter"
        className="supporter-presenter"
      >
        <div className="supporter-body">
          <img src="/assets/black/logo.png" alt="Assetra Logo" />
          <p className="title">Congratulations!</p>
          <p>
            You've successfully completed all the steps and have officially
            earned the prestigious title of Founding Member of Assetra! As a
            trailblazer, you're unlocking exclusive benefits and leaving your
            mark on the future of digital asset trading.
          </p>
          <div className="earlyuserlogo">
            <img src="/assets/assetra-logo.jpg" alt="Assetra Badge" />
          </div>
          <p className="title">Assetra Founding Member Badge</p>
          <p>
            Welcome to the circle of pioneers—we're thrilled to have you with us
            on this exciting journey!
          </p>

          <a href="/profile">Visit Profile</a>
        </div>
      </div>
    </div>
  );
};

export default EarlySupporter;

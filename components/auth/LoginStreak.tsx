"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

const LoginStreak = () => {
  const { setUser, user } = useAuth();
  async function loadUserSession() {
    if (!user) {
      console.log("No user session found.");
      return;
    }

    try {
      const response = await fetch(
        "https://gtxadmin.pythonanywhere.com/api/loginstreak/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: user?.username }),
        }
      );

      if (!response.ok) {
        console.log(response);
        throw new Error("Invalid session");
      }

      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.error("Login streak update failed:", error);
    }
  }

  useEffect(() => {
    loadUserSession();
  }, []);

  return <></>;
};

export default LoginStreak;

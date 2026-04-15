"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Email from "./Email";
import Code from "./Code";
import Password from "./Password";
import Username from "./Username";
import posthog from "posthog-js";

const SignupProcess = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const referrer = searchParams.get("username") ?? "";
  const [component, setComponent] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleDataFromEmail = (data: string) => {
    if (data) {
      setEmail(data);
      setComponent(2);
    }
  };

  const handleDataFromCode = (data: boolean) => {
    if (data) {
      setComponent(3);
    }
  };

  const handleDataFromPassword = (data: string) => {
    if (data) {
      setPassword(data);
      setComponent(4);
    }
  };

  const handleDataFromUsername = async (data: string) => {
    if (data) {
      setUsername(data);
      handleFinal();
    }
  };

  const handleReferral = async () => {
    if (username && referrer) {
      try {
        const response = await fetch(
          `https://gtxadmin.pythonanywhere.com/api/referrals/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              referred_by: referrer,
              referred_user: username,
            }),
          }
        );

        if (response.ok) {
          router.push("/login");
        }
        throw new Error("Network response was not ok");
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  };

  const handleFinal = async () => {
    if (username && email && password) {
      try {
        const response = await fetch(
          `https://gtxadmin.pythonanywhere.com/api/signup/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, username, password }),
          }
        );

        if (response.ok) {
          posthog.capture("signup Done", { property: "value" });
          if (referrer) {
            handleReferral();
          } else {
            router.push("/login");
          }
        }
        throw new Error("Network response was not ok");
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  };

  return (
    <div>
      {component === 1 && <Email onSendData={handleDataFromEmail} />}
      {component === 2 && (
        <Code onSendData={handleDataFromCode} email={email} />
      )}
      {component === 3 && <Password onSendData={handleDataFromPassword} />}
      {component === 4 && <Username onSendData={handleDataFromUsername} />}
    </div>
  );
};

export default SignupProcess;

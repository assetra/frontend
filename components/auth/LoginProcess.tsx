"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Code from "./Code";
import Password from "./Password";
import Login from "./login";
import ForgetPassword from "./ForgetPassword";
import posthog from "posthog-js";

const LoginProcess = () => {
  const router = useRouter();
  const [component, setComponent] = useState<number>(1);
  const [email, setEmail] = useState<string>("");

  const handleDataFromLogin = (data: boolean) => {
    if (data) {
      setComponent(2);
    }
  };

  const handleDataFromForget = (data: string) => {
    if (data) {
      setEmail(data);
      setComponent(3);
    }
  };

  const handleDataFromCode = (data: boolean) => {
    if (data) {
      setComponent(4);
    }
  };

  const handleDataFromPassword = async (data: string) => {
    if (data) {
      handleFinal(data);
    }
  };

  const handleFinal = async (new_password: string) => {
    console.log(email, new_password);
    if (email && new_password) {
      try {
        const response = await fetch(
          `https://gtxadmin.pythonanywhere.com/api/reset_password/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, new_password }),
          }
        );

        console.log("done");
        if (response.ok) {
          posthog.capture("Login Done", { property: "value" });
          setComponent(1);
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  };

  return (
    <div>
      {component === 1 && <Login onSendData={handleDataFromLogin} />}
      {component === 2 && <ForgetPassword onSendData={handleDataFromForget} />}
      {component === 3 && (
        <Code onSendData={handleDataFromCode} email={email} />
      )}
      {component === 4 && <Password onSendData={handleDataFromPassword} />}
    </div>
  );
};

export default LoginProcess;

"use client";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import MultiLevelDropdown from "./MultiLevelDropdown";
<<<<<<< HEAD
import Image from "next/image";
=======
import posthog from "posthog-js";
>>>>>>> a7f8b50da65a32e67a1eb3c0803fe17305135637

const User = () => {
  const { user, isAuthenticated } = useAuth();
  return (
    <div className="my-auto">
      {isAuthenticated ? (
        <div className="flex items-center justify-between my-auto gap-2">
          <a className="avatar w-8 p-2 rounded-full" href="/customizer">
          <Image
            src={"/assets/customizer.png"}
            alt="customizer"
            width={70}
            height={70}
            title="customizer - beta"
          />
        </a>
          <span className="text-gray-300">{user?.username || "username"}</span>
          <a href="/profile" className="avatar">
            <div className="w-8 rounded-full hover:border-[3px] border-white">
              <img
                alt="Profile Picture"
                src={
                  user?.profile
                    ? `https://gtxadmin.pythonanywhere.com${user.profile}`
                    : "/assets/profile.png"
                }
              />
            </div>
          </a>
          <div className="dropdown dropdown-end">
            <MultiLevelDropdown />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between my-auto gap-2">
          <Link
            onClick={() =>
              posthog.capture("Login Page Clicked", { property: "value" })
            }
            href="/login"
            className="flex flex-row items-center px-4 py-1.5 text-gray-400 rounded-2xl font-semibold"
          >
            Log In
          </Link>
          <Link
            onClick={() =>
              posthog.capture("signup Page Clicked", { property: "value" })
            }
            href="/signup"
            className="flex flex-row items-center px-4 py-1.5 bg-white text-black rounded-2xl font-semibold"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default User;

"use client";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import MultiLevelDropdown from "./MultiLevelDropdown";

const User = () => {
  const { user, isAuthenticated } = useAuth();
  return (
    <div className="my-auto">
      {isAuthenticated ? (
        <div className="flex items-center justify-between my-auto gap-2">
          <span className="text-white">{user?.username || "username"}</span>
          <a href="/profile" className="avatar">
            <div className="w-8 rounded-full hover:border-[3px] border-white">
              <img
                alt="Profile Picture"
                src={user?.profilePicture || "/assets/profile.png"}
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
            href="/login"
            className="flex flex-row items-center px-4 py-1.5 text-gray-400 rounded-2xl font-semibold"
          >
            Log In
          </Link>
          <Link
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

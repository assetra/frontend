"use client";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import withAuth from "../auth/withAuth";
import { getData, getCode } from "country-list";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { User, Settings, Shield, Trash2, Edit2, Sun, Moon } from "lucide-react";

interface FormData {
  email: string;
  first_name: string;
  last_name: string;
  dob: string;
  country: string;
  mobile_number: string;
}

const formatDOB = (dob: string) => {
  if (!dob) return "";
  const date = new Date(dob);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const Profile: React.FC = () => {
  const { user, setUser } = useAuth();
  const [clicked, setClicked] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("profile");

  const [formData, setFormData] = useState<FormData>({
    email: user.email,
    first_name: user.first_name ?? "",
    last_name: user.last_name ?? "",
    dob: formatDOB(user.dob) ?? "",
    country: getCode(user.country) ?? "",
    mobile_number:
      parsePhoneNumberFromString(user.mobile ?? "")?.format("E.164") ?? "",
  });

  const countries = getData();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData((prevState) => ({ ...prevState, mobile_number: value || "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClicked(true);

    if (formData) {
      try {
        const response = await fetch(
          "https://gtxadmin.pythonanywhere.com/api/profile/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.email,
              first_name: formData.first_name,
              last_name: formData.last_name,
              dob: formData.dob,
              country: formData.country,
              mobile_number: formData.mobile_number,
            }),
          }
        );

        const result = await response.json();
        if (response.ok) {
          setFeedbackMessage("Profile update successful!");
          setIsSuccess(true);
          setClicked(false);
          setUser(result.user);
        } else {
          setFeedbackMessage(
            result.message || "Profile update failed. Please try again."
          );
          setIsSuccess(false);
          setClicked(false);
        }
      } catch (error) {
        setFeedbackMessage("An error occurred. Please try again.");
        setIsSuccess(false);
      }
    } else {
      setFeedbackMessage("Please enter valid inputs.");
      setIsSuccess(false);
      setClicked(false);
    }
  };

  const sidebarItems = [
    {
      id: "profile",
      label: "Profile Setup",
      icon: <User className="mr-2" />,
    },
    {
      id: "crypto",
      label: "Crypto Addresses",
      icon: <Settings className="mr-2" />,
    },
    {
      id: "security",
      label: "Account Security",
      icon: <Shield className="mr-2" />,
    },
    {
      id: "delete",
      label: "Delete Account",
      icon: <Trash2 className="mr-2" color="red" />,
    },
  ];

  return (
    <div
      className={`mt-12
        min-h-screen p-4 
        ${isDarkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}
        transition-colors duration-300 ease-in-out
        flex flex-col md:flex-row gap-4
      `}
    >
      <div
        className="
          w-full md:w-1/4 lg:w-1/5 
          bg-white/40 dark:bg-black/40 
          backdrop-blur-lg 
          rounded-2xl 
          p-6 
          shadow-lg 
          border 
          border-white/20 
          dark:border-black/20
        "
      >
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <Image
              width={120}
              height={120}
              src={
                user?.profile
                  ? `https://gtxadmin.pythonanywhere.com${user.profile}`
                  : "/assets/profile.png"
              }
              alt="member-logo"
              className="rounded-full border-4 border-white/50 dark:border-black/50"
            />
            <div
              className="
                absolute bottom-0 right-0 
                bg-blue-500 text-white 
                rounded-full p-1
              "
            >
              <Edit2 size={16} />
            </div>
          </div>
          <h2 className="text-xl font-bold">{user.username}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {user.email}
          </p>
        </div>

        <div className="space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`
                w-full flex items-center p-3 rounded-lg
                transition-all duration-300
                ${
                  activeSection === item.id
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }
              `}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className="
          flex-1 
          bg-white/40 dark:bg-black/40 
          backdrop-blur-lg 
          rounded-2xl 
          p-6 
          shadow-lg 
          border 
          border-white/20 
          dark:border-black/20
          overflow-y-auto
        "
      >
        {activeSection === "profile" && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={user.username}
                  className="
                    w-full p-3 rounded-lg 
                    bg-white/50 dark:bg-black/50
                    border border-gray-300 dark:border-gray-700
                    focus:ring-2 focus:ring-blue-500
                  "
                  disabled
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  className="
                    w-full p-3 rounded-lg 
                    bg-white/50 dark:bg-black/50
                    border border-gray-300 dark:border-gray-700
                    focus:ring-2 focus:ring-blue-500
                  "
                  disabled
                />
              </div>

              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="
                    w-full p-3 rounded-lg 
                    bg-white/50 dark:bg-black/50
                    border border-gray-300 dark:border-gray-700
                    focus:ring-2 focus:ring-blue-500
                  "
                  placeholder="First name"
                />
              </div>

              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="
                    w-full p-3 rounded-lg 
                    bg-white/50 dark:bg-black/50
                    border border-gray-300 dark:border-gray-700
                    focus:ring-2 focus:ring-blue-500
                  "
                  placeholder="Last name"
                />
              </div>

              <div>
                <label htmlFor="dob" className="block mb-2 text-sm font-medium">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="
                    w-full p-3 rounded-lg 
                    bg-white/50 dark:bg-black/50
                    border border-gray-300 dark:border-gray-700
                    focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block mb-2 text-sm font-medium"
                >
                  Country of Residence
                </label>
                <select
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="
                    w-full p-3 rounded-lg 
                    bg-white/50 dark:bg-black/50
                    border border-gray-300 dark:border-gray-700
                    focus:ring-2 focus:ring-blue-500
                  "
                >
                  <option disabled value="">
                    Choose a country
                  </option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="mobile_number"
                  className="block mb-2 text-sm font-medium"
                >
                  Mobile Number
                </label>
                <PhoneInput
                  international
                  className="
                    w-full
                    bg-black
                    rounded-lg
                    text-black
                  "
                  defaultCountry="US"
                  value={formData.mobile_number}
                  onChange={handlePhoneChange}
                />
              </div>

              <div>
                <label
                  htmlFor="creation"
                  className="block mb-2 text-sm font-medium"
                >
                  Account Creation Date
                </label>
                <input
                  type="text"
                  id="creation"
                  value={user.date_joined}
                  className="
                    w-full p-3 rounded-lg 
                    bg-white/50 dark:bg-black/50
                    border border-gray-300 dark:border-gray-700
                    focus:ring-2 focus:ring-blue-500
                  "
                  disabled
                />
              </div>
            </div>

            {feedbackMessage && (
              <div
                className={`
                  mt-4 p-3 rounded-lg text-center 
                  ${
                    isSuccess
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  }
                `}
              >
                {feedbackMessage}
              </div>
            )}

            <div className="flex justify-end mt-6">
              {clicked ? (
                <button
                  disabled
                  className="
                    btn btn-primary 
                    bg-blue-500 
                    text-white 
                    rounded-lg 
                    px-6 py-3 
                    opacity-50 
                    cursor-not-allowed
                  "
                >
                  <span className="loading loading-spinner loading-md"></span>
                </button>
              ) : (
                <button
                  type="submit"
                  className="
                    btn btn-primary 
                    bg-blue-500 
                    hover:bg-blue-600 
                    text-white 
                    rounded-lg 
                    px-6 py-3 
                    transition-colors 
                    duration-300
                  "
                >
                  Save Changes
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default withAuth(Profile);

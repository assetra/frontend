"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import withAuth from "../auth/withAuth";
import { getData } from "country-list";

interface FormData {
  email: string;
  first_name: string;
  last_name: string;
  dob: string;
  country: string;
  mobile_number: string;
}

const Profile: React.FC = () => {
  const { user, setUser } = useAuth();
  const [clicked, setClicked] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: user.email,
    first_name: user.first_name ?? "",
    last_name: user.last_name ?? "",
    dob: user.dob ?? "",
    country: user.country ?? "",
    mobile_number: user.mobile_number ?? "",
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
        const response = await fetch("https://gtx.pythonanywhere.com/profile", {
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
        });

        const result = await response.json();
        if (response.ok) {
          setFeedbackMessage("Profile update successful!");
          setIsSuccess(true);
          setClicked(false);
          setUser(result.user);
          setTimeout(() => {}, 1000);
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

  return (
    <div className="pt-16 bg-base-100 md:flex gap-4 text-base-content">
      <div className="flex justify-between md:grid gap-5 p-4 self-start mt-2 max-md:pr-5 border-base-content border-[1px] rounded-xl bg-base-200">
        <div className="grid gap-5 p-4 self-start mt-2 max-md:pr-5">
          <div className="relative mx-auto hover:border-base-content border-transparent border-[1px] rounded-full">
            <Image
              width={100}
              height={100}
              src={"/assets/profile.png"}
              alt="member-logo"
              className="rounded-full"
            />
          </div>
          <div className="text-2xl font-bold text-base-content">
            Profile and Settings
          </div>
        </div>
        <div className="">
          <div className="text-xl text-base-content p-2 hover:opacity-75 hover:border-base-content border-transparent border-[1px] rounded-lg">
            Setup your profile
          </div>
          <div className="text-xl text-base-content p-2 hover:opacity-75 hover:border-base-content border-transparent border-[1px] rounded-lg">
            Crypto addresses
          </div>
          <div className="text-xl text-base-content p-2 hover:opacity-75 hover:border-base-content border-transparent border-[1px] rounded-lg">
            Account Security
          </div>
          <div className="text-xl text-base-content p-2 hover:opacity-75 hover:border-base-content border-transparent border-[1px] rounded-lg">
            Delete Account
          </div>
        </div>
      </div>
      <div className="flex flex-col px-10 py-6 mt-2 md:w-[75svw] min-h-[87svh] overscroll-y-auto rounded-xl bg-base-200 max-md:px-5 max-md:max-w-full border-base-content border-[1px]">
        <form onSubmit={handleSubmit} className="my-auto">
          <div className="grid sm:grid-cols-2 gap-12 mb-4">
            <div
              className="w-full tooltip tooltip-warning"
              data-tip="You cannot change the username..!"
            >
              <label htmlFor="username" className="block mb-3 text-left">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="input rounded-full h-12 pl-6 w-full"
                value={user.username}
                placeholder={user.username}
                disabled
              />
            </div>
            <div
              className="w-full tooltip tooltip-warning"
              data-tip="You cannot change the email..!"
            >
              <label htmlFor="email" className="block mb-3 text-left">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="input rounded-full h-12 pl-6 w-full"
                placeholder="youremail@gmail.com"
                disabled
              />
            </div>
            <div className="w-full">
              <label htmlFor="first_name" className="block mb-3">
                First name
              </label>
              <input
                type="text"
                id="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="input rounded-full h-12 pl-6 w-full"
                placeholder="First name"
              />
            </div>
            <div className="w-full">
              <label htmlFor="last_name" className="block mb-3">
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="input rounded-full h-12 pl-6 w-full"
                placeholder="Last name"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="dob" className="block mb-3">
                Date of birth
              </label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                className="input rounded-full h-12 px-6 w-full"
              />
            </div>
            <div className="w-full">
              <label htmlFor="country" className="block mb-3">
                Country of residence
              </label>
              <select
                id="country"
                value={formData.country}
                onChange={handleChange}
                className="select rounded-full h-12 px-6 w-full bg-base-100"
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
            <div className="w-full">
              <label htmlFor="mobilenumber" className="block mb-3">
                Mobile Number
              </label>
              <PhoneInput
                international
                className="PhoneInput rounded-full h-12 px-6 w-full bg-base-100 input"
                defaultCountry="US"
                value={formData.mobile_number}
                onChange={handlePhoneChange}
              />
            </div>
            <div
              className="w-full tooltip tooltip-warning"
              data-tip="You cannot change the account creation date..!"
            >
              <label htmlFor="creation" className="block mb-3 text-left">
                Account Creation Date
              </label>
              <input
                type="text"
                id="creation"
                className="input rounded-full h-12 pl-6 w-full"
                value={user.created_date}
                placeholder={user.created_date}
                disabled
              />
            </div>
          </div>
          {feedbackMessage && (
            <div
              className={`mt-2 text-sm ${
                isSuccess ? "text-green-500" : "text-red-500"
              }`}
            >
              {feedbackMessage}
            </div>
          )}
          <div className="flex justify-end mt-6">
            {clicked ? (
              <button className="btn btn-outline bg-blue-700 text-white rounded-full flex items-center justify-center">
                <span className="loading loading-spinner loading-md"></span>
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-outline bg-blue-500 hover:bg-sky-500 rounded-full"
              >
                Save Changes
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default withAuth(Profile);

"use client";
import { useState } from "react";

const Application = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    primaryEmail: "",
    currentJurisdiction: "",
    telegramUsername: "",
    tiktokAccount: "",
    xAccount: "",
    linkedinAccount: "",
    instagramAccount: "",
    otherSocials: "",
    reasonForApply: "",
    additionalInfo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://daily-darelle-claudez-0c3a7986.koyeb.app/send_application_aap`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            application: formData,
          }),
        }
      );

      if (response.ok) {
        console.log("Application sent successfully");
        setFormData({
          firstName: "",
          lastName: "",
          primaryEmail: "",
          currentJurisdiction: "",
          telegramUsername: "",
          tiktokAccount: "",
          xAccount: "",
          linkedinAccount: "",
          instagramAccount: "",
          otherSocials: "",
          reasonForApply: "",
          additionalInfo: "",
        });
        return;
      }
      throw new Error("Network response was not ok");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="main-container">
      <form className="main-body" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 mt-2 sm:mt-0 sm:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="firstName">
              First Name
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="primaryEmail">
              Primary Email
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="email"
              id="primaryEmail"
              name="primaryEmail"
              placeholder="Enter your primary email"
              value={formData.primaryEmail}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="currentJurisdiction">
              Current Jurisdiction
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="currentJurisdiction"
              name="currentJurisdiction"
              placeholder="Enter your current jurisdiction"
              value={formData.currentJurisdiction}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="telegramUsername">
              Telegram Username
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="telegramUsername"
              name="telegramUsername"
              placeholder="Enter your Telegram username"
              value={formData.telegramUsername}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="tiktokAccount">
              TikTok Account
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="tiktokAccount"
              name="tiktokAccount"
              placeholder="Enter your TikTok account"
              value={formData.tiktokAccount}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="xAccount">
              X Account
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="xAccount"
              name="xAccount"
              placeholder="Enter your X account"
              value={formData.xAccount}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="linkedinAccount">
              LinkedIn Account
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="linkedinAccount"
              name="linkedinAccount"
              placeholder="Enter your LinkedIn account"
              value={formData.linkedinAccount}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="instagramAccount">
              Instagram Account
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="instagramAccount"
              name="instagramAccount"
              placeholder="Enter your Instagram account"
              value={formData.instagramAccount}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="otherSocials">
              Other Socials
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="otherSocials"
              name="otherSocials"
              placeholder="Enter other social media links"
              value={formData.otherSocials}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2 sm:col-span-2">
            <label className="text-[10px]" htmlFor="reasonForApply">
              Reason for Apply
            </label>
            <input
              className="w-[45dvw] max-w-[350px] sm:w-[100%] sm:max-w-[100%] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="reasonForApply"
              name="reasonForApply"
              placeholder="Enter your reason for applying"
              value={formData.reasonForApply}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2 sm:col-span-2">
            <label className="text-[10px]" htmlFor="additionalInfo">
              Anything Else We Should Know?
            </label>
            <input
              className="w-[45dvw] max-w-[350px] sm:w-[100%] sm:max-w-[100%] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="additionalInfo"
              name="additionalInfo"
              placeholder="Add any additional information"
              value={formData.additionalInfo}
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary py-3 px-16 max-w-32 mx-auto my-4 min-h-4 max-h-10 rounded-box"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default Application;

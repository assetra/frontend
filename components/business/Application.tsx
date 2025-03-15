"use client";
import { useState } from "react";


const Application = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    companyName: "",
    companyEmail: "",
    countryOfIncorporation: "",
    dateOfIncorporation: "",
    twitterProfile: "",
    linkedinProfile: "",
    communityChannels: "",
    otherSocials: "",
    supportingDocuments: "",
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
        `https://daily-darelle-claudez-0c3a7986.koyeb.app/send_application`,
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
          fullName: "",
          phoneNumber: "",
          companyName: "",
          companyEmail: "",
          countryOfIncorporation: "",
          dateOfIncorporation: "",
          twitterProfile: "",
          linkedinProfile: "",
          communityChannels: "",
          otherSocials: "",
          supportingDocuments: "",
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
            <label className="text-[10px]" htmlFor="fullName">
              Full Name (e.g., John Doe)
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="phoneNumber">
              Phone Number (e.g., +1 234 567 890)
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your contact number"
              value={formData.phoneNumber}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="companyName">
              Company Name (e.g., XYZ Technologies)
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Enter your company name"
              value={formData.companyName}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="companyEmail">
              Company Email (e.g., contact@xyz.com)
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="email"
              id="companyEmail"
              name="companyEmail"
              placeholder="Enter your official company email"
              value={formData.companyEmail}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="countryOfIncorporation">
              Country of Incorporation (e.g., United States)
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="countryOfIncorporation"
              name="countryOfIncorporation"
              placeholder="Enter the country where your company is registered"
              value={formData.countryOfIncorporation}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="dateOfIncorporation">
              Date of Incorporation (e.g., YYYY-MM-DD)
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="date"
              id="dateOfIncorporation"
              name="dateOfIncorporation"
              placeholder="Enter the company's registration date"
              value={formData.dateOfIncorporation}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="twitterProfile">
              X (Twitter) Profile (e.g., https://twitter.com/yourhandle)
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="twitterProfile"
              name="twitterProfile"
              placeholder="Enter your Twitter profile link"
              value={formData.twitterProfile}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="linkedinProfile">
              LinkedIn Profile (e.g., https://linkedin.com/in/yourname)
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="linkedinProfile"
              name="linkedinProfile"
              placeholder="Enter your LinkedIn profile link"
              value={formData.linkedinProfile}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="communityChannels">
              Community Channels (e.g., Telegram, Discord, etc.)
            </label>
            <input
              className="w-[45dvw] max-w-[350px] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="communityChannels"
              name="communityChannels"
              placeholder="Provide links to your community groups"
              value={formData.communityChannels}
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-[10px]" htmlFor="otherSocials">
              Other Socials (e.g., Instagram, Facebook, YouTube)
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
            <label className="text-[10px]" htmlFor="supportingDocuments">
              Supporting Documents (e.g., whitepapers, pitch decks)
            </label>
            <input
              className="w-[45dvw] max-w-[350px] sm:w-[100%] sm:max-w-[100%] min-w-[300px] px-4 py-2 rounded-box placeholder:text-[12px]"
              type="text"
              id="supportingDocuments"
              name="supportingDocuments"
              placeholder="Provide document links separated by commas"
              value={formData.supportingDocuments}
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

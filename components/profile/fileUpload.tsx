import React, { useRef } from "react";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";

const FileUpload: React.FC = () => {
  const { user, setUser } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("email", user.email);
      formData.append("profilePic", file);

      try {
        const response = await fetch(
          "https://gtx.pythonanywhere.com/profile/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const result = await response.json();
        if (response.ok) {
          setUser(result.user);
          console.log(result);
        } else {
          console.log(result);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("error");
    }
  };

  return (
    <>
      <div
        className="relative mx-auto hover:border-base-content border-transparent border-[1px] rounded-full"
        onClick={handleDivClick}
      >
        <Image
          width={100}
          height={100}
          src={user.profile_picture ? `https://www.pythonanywhere.com/user/gtx/files/home/gtx/static/uploads/${user.profile_picture}` : "/assets/profile.png"}
          alt="member-logo"
          className="rounded-full"
        />
        <label
          htmlFor="pic"
          className="absolute bottom-0 left-0 w-full text-center bg-opacity-25 bg-base-content text-base-200 pt-2 pb-4 rounded-b-full"
        >
          Edit
        </label>
        <input
          id="pic"
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </>
  );
};

export default FileUpload;

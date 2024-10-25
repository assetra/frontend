"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";

const PopUP: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [email, setEmail] = useState<string>("");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      try {
        const response = await fetch("https://gtx.pythonanywhere.com/notify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const result = await response.json();
        if (response.ok) {
          setEmail(""); // Clear email input
          setFeedbackMessage("Subscription successful!");
          setIsSuccess(true);
          setTimeout(() => {
            closeModal();
          }, 1000); // Close modal after a second
        } else {
          setFeedbackMessage(
            result.message || "Subscription failed. Please try again."
          );
          setIsSuccess(false);
        }
      } catch (error) {
        setFeedbackMessage("An error occurred. Please try again.");
        setIsSuccess(false);
      }
    } else {
      setFeedbackMessage("Please enter a valid email address.");
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, []);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <div className="text-[#000000]">
      <dialog ref={modalRef} className="modal">
        <div className="modal-box min-w-[70svw] bg-white overflow-hidden p-0">
          <div className="flex bg-white">
            <div className="w-0 md:w-1/2">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                src="/assets/popup.png"
                alt="popup"
              />
            </div>
            <div className="w-[100%] md:w-1/2 max-w-[500px] max-h-[560px]">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <div
                  className="border-0 focus:border-0 absolute right-8 top-6 text-[1.5rem] cursor-pointer"
                  onClick={closeModal}
                >
                  ✕
                </div>
              </form>
              <div className="mt-12 items-center text-center min-h-[100%] px-6">
                <Image
                  src={"/assets/black/logo.png"}
                  alt="GTX logo"
                  width={100}
                  height={70}
                  style={{ marginInline: "auto" }}
                />
                <h2 className="font-bold text-[1.5rem] mt-4">
                  JOIN TEAM ASSETRA
                </h2>
                <p className="mt-12">
                  Stay Connected with Assetra: Subscribe for Updates
                </p>

                <form
                  className="flex md:w-[350px] border-[1px] border-[#000000] rounded-full p-2 bg-[#34384C] bg-opacity-50 max-h-12 mx-auto mt-6"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="ml-2 w-full outline-none bg-transparent text-black text-[1rem] placeholder:text-black md:text-sm max-h-8"
                    type="text"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div>
                    <button
                      type="submit"
                      className="ml-2 text-[#FFFFFF] bg-[#1e68f6] px-4 py-[5px] rounded-full text-[1rem] max-h-8 w-[8rem]"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                {feedbackMessage && (
                  <p
                    className={`mt-4 ${
                      isSuccess ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {feedbackMessage}
                  </p>
                )}

                <p className="mt-6">
                  By subscribing, you consent to receiving emails from Assetra.
                  You can revoke your consent at any time.
                </p>

                <div className="flex mt-6 sm:justify-center mb-12">
                  <a href="https://x.com/assetradotxyz">
                    <Image
                      width={18}
                      height={17}
                      src="/assets/black/x.png"
                      alt="X/Twitter"
                    />
                  </a>
                  <a
                    className="ms-2"
                    href="https://www.instagram.com/assetradotxyz"
                  >
                    <Image
                      width={18}
                      height={17}
                      src="/assets/black/insta.png"
                      alt="Instagram"
                    />
                  </a>
                  <a
                    className="ms-2"
                    href="https://www.facebook.com/profile.php?id=61565050207514&mibextid=ZbWKwL"
                  >
                    <Image
                      width={18}
                      height={17}
                      src="/assets/black/facebook.png"
                      alt="Facebook"
                    />
                  </a>
                  <a className="ms-2" href="https://medium.com/@assetradotxyz">
                    <Image
                      width={18}
                      height={17}
                      src="/assets/black/image-11.png"
                      alt="Medium"
                    />
                  </a>
                  <a
                    className="ms-2"
                    href="https://chat.whatsapp.com/DT7FIAWAJVgIRPHwkCfHfb"
                  >
                    <Image
                      width={18}
                      height={17}
                      src="/assets/black/whatsapp.png"
                      alt="WhatsApp"
                    />
                  </a>
                  <a
                    className="ms-2"
                    href="https://www.linkedin.com/company/assetradotcom/"
                  >
                    <Image
                      width={18}
                      height={17}
                      src="/assets/black/linkedin.png"
                      alt="LinkedIn"
                    />
                  </a>
                  <a className="ms-2" href="https://t.me/assetra_xyz">
                    <Image
                      width={18}
                      height={17}
                      src="/assets/black/telegram.png"
                      alt="Telegram"
                    />
                  </a>
                  <a className="ms-2" href="https://discord.gg/yUHXSRDSvv">
                    <Image
                      width={18}
                      height={17}
                      src="/assets/black/discord.png"
                      alt="Discord"
                    />
                  </a>
                  <a className="ms-2" href=" https://www.reddit.com/r/Assetra">
                    <Image
                      width={18}
                      height={17}
                      src="/assets/black/reddit.png"
                      alt="Reddit"
                    />
                  </a>
                  <a
                    className="ms-2"
                    href="https://www.crunchbase.com/organization/gtx-91c8"
                  >
                    <Image
                      width={18}
                      height={17}
                      src="/assets/black/cb.png"
                      alt="Crunchbase"
                    />
                  </a>
                  <a className="ms-2" href="https://www.tiktok.com/@assetradotxyz">
                    <Image
                      width={18}
                      height={17}
                      src="/assets/black/tiktok.png"
                      alt="Tiktok"
                    />
                  </a>
                  <a className="ms-2" href="mailto:info@assetra.xyz">
                    <Image
                      width={18}
                      height={17}
                      src="/assets/black/email.png"
                      alt="Email"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PopUP;

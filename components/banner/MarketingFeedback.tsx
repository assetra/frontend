"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const MarketingFeedback: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    search_engine: false,
    social_media: false,
    video_audio: false,
    blog_articles: false,
    forums_communities: false,
    email_campaigns: false,
    online_ads: false,
    events_conferences: false,
    friend_recommendation: false,
    assetra_referral: false,
    assetra_referral_text: "",
    other: false,
    other_text: "",
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log("Form Data:", formData);

    try {
      const response = await fetch("https://gtx.pythonanywhere.com/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      await response.json();
      if (response.ok) {
        closeModal();
        setTimeout(() => {
          openPopover();
        }, 500);
      } else {
        closeModal();
      }
    } catch (error) {
      console.log(error);
      closeModal();
    }
  };

  useEffect(() => {
    if (user) {
      return;
    }

    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, [user]);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const openPopover = () => {
    if (buttonRef.current) {
      buttonRef.current?.click();
    }
  };

  return (
    <div>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box ">
          <div>
            <div className="flex justify-end">
              <form method="dialog">
                <div
                  className="text-[1.5rem] cursor-pointer pr-2"
                  onClick={closeModal}
                >
                  ✕
                </div>
              </form>
            </div>
            <form onSubmit={handleSubmit} className="marketing-body">
              <img src="/assets/black/logo.png" alt="" />
              <p className="title">How Did You Hear About Assetra?</p>
              <p>
                We value your feedback! It helps us understand how well we're
                connecting with people like you.
              </p>
              <div className="marketing">
                <p className="title">Please select one or more options:</p>
                <label>
                  <input
                    type="checkbox"
                    name="search_engine"
                    checked={formData.search_engine}
                    onChange={handleCheckboxChange}
                  />
                  Search Engine (e.g., Google, Bing)
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="social_media"
                    checked={formData.social_media}
                    onChange={handleCheckboxChange}
                  />
                  Social Media (e.g., Instagram, LinkedIn, Facebook)
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="video_audio"
                    checked={formData.video_audio}
                    onChange={handleCheckboxChange}
                  />
                  Video/Audio Platforms (e.g., TikTok, YouTube, Podcast)
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="blog_articles"
                    checked={formData.blog_articles}
                    onChange={handleCheckboxChange}
                  />
                  Medium or Blog Articles
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="forums_communities"
                    checked={formData.forums_communities}
                    onChange={handleCheckboxChange}
                  />
                  Forums or Communities (e.g., Reddit, Discord)
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="email_campaigns"
                    checked={formData.email_campaigns}
                    onChange={handleCheckboxChange}
                  />
                  Email Campaigns or Newsletters
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="online_ads"
                    checked={formData.online_ads}
                    onChange={handleCheckboxChange}
                  />
                  Online Ads (e.g., Google Ads, Social Media Ads)
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="events_conferences"
                    checked={formData.events_conferences}
                    onChange={handleCheckboxChange}
                  />
                  Events or Conferences
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="friend_recommendation"
                    checked={formData.friend_recommendation}
                    onChange={handleCheckboxChange}
                  />
                  Recommendation from a Friend or Colleague
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="assetra_referral"
                    checked={formData.assetra_referral}
                    onChange={handleCheckboxChange}
                  />
                  Referral from Someone at Assetra (please specify)
                </label>
                <br />
                <input
                  type="text"
                  name="assetra_referral_text"
                  value={formData.assetra_referral_text}
                  onChange={handleTextChange}
                  placeholder="Enter Text Here"
                />
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="other"
                    checked={formData.other}
                    onChange={handleCheckboxChange}
                  />
                  Other (please specify)
                </label>
                <br />
                <input
                  type="text"
                  name="other_text"
                  value={formData.other_text}
                  onChange={handleTextChange}
                  placeholder="Enter Text Here"
                />
              </div>

              <div className="flex justify-center gap-4">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>

      <div>
        <div
          popover="auto"
          id="marketing-feedback-presenter"
          className="marketing-feedback-presenter"
        >
          <div className="feedback-body">
            <img src="/assets/black/logo.png" alt="" />
            <p className="title">Thank You for Your Feedback!</p>
            <p>
              We truly appreciate you taking the time to share your thoughts
              with us. Your insights help us grow and improve as we strive to
              connect with incredible individuals like you. Now, let’s embark on
              a transformative journey where digital assets unlock limitless
              possibilities. Together, we’ll shape a future full of innovation
              and opportunity.
            </p>
            <p className="title">Ready to take the next step?</p>
            <p>Stay connected and be part of something extraordinary! 🚀</p>

            <div className="flex justify-center gap-4">
              <button
                {...({ popoverTarget: "marketing-feedback-presenter" } as any)}
                type="button"
                ref={buttonRef}
              >
                Explore Assetra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingFeedback;

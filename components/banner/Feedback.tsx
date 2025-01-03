import { MdOutlineFeedback } from "react-icons/md";

const Feedback = () => {
  return (
    <div>
      <button
        popoverTarget="feedback-presenter"
        className=" fixed bottom-[6rem]  right-6 p-4 rounded-full bg-gradient-to-br from-white/10 to-white/5  backdrop-blur-lg border border-white/10 cursor-pointer text-red-500 shadow-lg z-[9999]"
        title="User FeedBack"
        type="button"
      >
        <MdOutlineFeedback />
      </button>
      <div
        popover="auto"
        id="feedback-presenter"
        className="feedback-presenter"
      >
        <div className="feedback-body">
          <img src="/assets/black/logo.png" alt="" />
          <p className="title">Help Shape the Future of Assetra!</p>
          <p>
            We're building exciting new features to enhance your trading
            experience, and your input means the world to us. Could you take a
            moment to answer a few quick questions? Your feedback will help us
            make Assetra even better!
          </p>

          <div className="flex justify-center gap-4">
            <button type="button" popoverTarget="feedback-presenter">
              Continue Trading
            </button>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfdD4R9F11iz4WoXezSU6s8FAQu7B1y595VDRKVzhp1y53Yuw/viewform?usp=sf_link">
              Give Feedback
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

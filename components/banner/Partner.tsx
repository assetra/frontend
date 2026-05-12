import { GrAnnounce } from "react-icons/gr";

const Partner = () => {
  return (
    <div>
      <button
        popoverTarget="partner-presenter"
        className="fixed bottom-[18rem] right-6 p-4 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 cursor-pointer text-[#ffd700] shadow-lg z-[9999] test"
        title="Announcements"
        type="button"
      >
        <GrAnnounce />
      </button>
      <div popover="auto" id="partner-presenter" className="partner-presenter">
        <div className="partner-body inner-gradient-partner">
          
            href="https://www.youtube.com/playlist?list=PLoBLbfUyF4PHzJU1Mxq3t323U9EazZKpw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="main-image"
              src="/assets/partner/podcast.png"
              alt="Crypto & Coffee Podcast"
              style={{ cursor: "pointer", width: "100%" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partner;
import Background from "../../public/assets/partner/background.png";
import { TfiLocationPin } from "react-icons/tfi";
import { GrAnnounce } from "react-icons/gr";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import CountdownTimer from "./CountdownTimer";

const Partner = () => {
  return (
    <div>
      <button
        popoverTarget="partner-presenter"
        className="fixed bottom-[18rem] right-6 p-4 rounded-full bg-gradient-to-br from-white/10 to-white/5  backdrop-blur-lg border border-white/10 cursor-pointer text-[#ffd700] shadow-lg z-[9999] test"
        title="Announcements"
        type="button"
      >
        <GrAnnounce />
      </button>
      <div popover="auto" id="partner-presenter" className="partner-presenter">
        <div className="partner-body inner-gradient-partner">
          <div className="flex justify-center">
            <img src="/assets/partner/assetra.png" alt="" />
            <svg
              width="100"
              height="100"
              viewBox="0 0 142 142"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.4512 106.162L106.162 35.4517"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M105.97 106.162L35.259 35.4517"
                stroke="white"
                strokeWidth="5"
              />
            </svg>
            <img src="/assets/partner/wikiexpo.png" alt="" />
          </div>
          <img
            className="main-image"
            src="/assets/partner/assetraxwiki.png"
            alt=""
          />
          <div className="details-div">
            <div className="flex justify-start gap-2">
              <HiOutlineCalendarDays />
              <p>March 27th, 2025, 8:00 AM (HKT)</p>
            </div>

            <div className="flex justify-start gap-2">
              <TfiLocationPin />
              <p>
                Sky 100 - No. 1, Austin Rd W, International Commerce Center
                (ICC)
              </p>
            </div>
          </div>

          <CountdownTimer />

          <div className="flex justify-center gap-4">
            <a href="https://apply.wikiexpo.com/en/?c=z7OJEPuQ">Get Tickets</a>
          </div>
          <div
            className="body-image"
            style={{
              backgroundImage: `url(${Background.src})`,
              backgroundColor: "black",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Partner;

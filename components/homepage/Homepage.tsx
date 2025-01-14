import Background from "../../public/assets/bg-image.png";
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Team from "./Team";
import Crypto from "./Crypto";
import MarketingFeedback from "../banner/MarketingFeedback";

const Homepage = () => {
  return (
    <div className="relative w-[100dvw] h-[100dvh] overflow-hidden">
      <div className="w-[100dvw] h-[100dvh] z-50 overflow-x-hidden overflow-y-scroll scrollbar-hide">
        <main className="pt-16 mx-auto">
          <MarketingFeedback />
          <Hero />
          <About />
          <Crypto />
          <Team />
        </main>
        <Footer />
      </div>
      <div
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100dvw",
          height: "100dvh",
        }}
      ></div>
    </div>
  );
};

export default Homepage;

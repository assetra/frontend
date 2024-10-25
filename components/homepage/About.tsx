import React from "react";
import Background from "../../public/assets/background.png";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center min-h-screen w-full px-4 sm:px-6 lg:px-8 py-16"
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-white font-bold text-xl sm:text-2xl text-center">
            ABOUT ASSETRA
          </h2>

          <div className="text-center">
            <h1 className="text-white font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight md:leading-[60px] max-w-4xl mx-auto px-4">
              Unveiling Our Journey, Vision, and Commitment
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mt-8 md:mt-16">
            <div className="group transform hover:scale-[1.02] transition-all duration-300">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl backdrop-blur-lg border border-white/10 shadow-xl" />

                <div className="relative h-full p-6 sm:p-8 lg:p-10 rounded-xl overflow-hidden">
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      WHAT IS ASSETRA?
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                      "Assetra simplifies crypto for all. Our user-friendly
                      ecosystem eases blockchain interactions, catering to
                      novices and experts alike. We're dedicated to creating
                      intuitive tools, making crypto investment accessible and
                      efficient."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group transform hover:scale-[1.02] transition-all duration-300">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl backdrop-blur-lg border border-white/10 shadow-xl" />

                <div className="relative h-full p-6 sm:p-8 lg:p-10 rounded-xl overflow-hidden">
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      OUR MISSION
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                      Our goal is to empower people to participate in the
                      exciting world of cryptocurrencies with confidence and
                      ease, and to help bridge the gap between traditional
                      finance and the emerging digital economy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

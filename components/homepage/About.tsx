import React from "react";
import Background from "../../public/assets/background.png";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center min-h-[100svh] pt-16"
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1024px]">
        <div className="text-[#ffffff] font-[700] text-[20px] text-center">
          ABOUT GTX
        </div>

        <div className="text-white font-[400] text-3xl md:text-[45px] flex justify-center mt-4 md:mt-0">
          <p className="w-3/4 text-center leading-10 md:leading-[60px]">
            Unveiling Our Journey, Vision, and Commitment
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 mt-16 p-4">
          <div className="flex flex-col gap-6 bg-[#1b1b24] rounded-lg p-10">
            <p className="text-[17px] font-[700] text-white">WHAT IS GTX?</p>
            <p className="text-white">
              "GTX simplifies crypto for all. Our user-friendly ecosystem eases
              blockchain interactions, catering to novices and experts alike.
              We're dedicated to creating intuitive tools, making crypto
              investment accessible and efficient."
            </p>
          </div>

          <div className="flex flex-col gap-6 border-[1px] border-white rounded-lg p-10">
            <p className="text-[17px] font-[700] text-white">OUR MISSION</p>
            <p className="text-white">
              Our goal is to empower people to participate in the exciting world
              of cryptocurrencies with confidence and ease, and to help bridge
              the gap between traditional finance and the emerging digital
              economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

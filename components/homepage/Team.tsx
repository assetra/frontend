import React from "react";
import Image from "next/image";
import Background from "../../public/assets/background.png";

export default function Team() {
  return (
    <section
      className="flex justify-center pt-20 pb-16"
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1024px]">
        <div>
          <p className="text-white text-center font-[700] text-[20px] ">
            OUR TEAM
          </p>
          <div className="flex justify-center mt-4">
            <p className="text-center text-white text-3xl w-80 md:w-[700px] leading-10">
              The GTX team excels in innovation and is dedicated to excellence
            </p>
          </div>
        </div>

        <div className="flex justify-center flex-col md:flex-row gap-6 md:gap-16 mt-20">
          <div className="w-96 md:w-[450px] bg-[#1b1b24] rounded-lg p-8">
            <div className="flex gap-4">
              <Image
                width={70}
                height={70}
                src="/assets/Giordano.png"
                alt="member-logo"
              />
              <div className="text-white flex flex-col justify-center">
                <p className="text-[16px] font-[700]">
                  Giordano Bertin-Maurice
                </p>
                <p className="text-[14px] text-[#1e68f6] font-[700]">
                  Chief Executive Officer
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-white text-sm">
                A digital asset trader with almost 5 years of experience looking
                to change the digital asset landscape.
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <a href="https://www.linkedin.com/in/giordano-bertin-maurice-52ba2a236/">
                <Image
                  width={18}
                  height={18}
                  src="/assets/linkedin.png"
                  alt="img"
                />
              </a>
              <a href="https://t.me/jeeordahnoh">
                <Image
                  width={17}
                  height={17}
                  src="/assets/telegram.png"
                  alt="img"
                />
              </a>
            </div>
          </div>

          <div className="w-96 md:w-[450px] bg-[#1b1b24] rounded-lg p-8">
            <div className="flex gap-4">
              <Image
                width={70}
                height={70}
                src="/assets/Ashmeet.png"
                alt="cr-logo"
              />
              <div className="text-white flex flex-col justify-center">
                <p className="text-[16px] font-[700]">Ashmeet Singh</p>
                <p className="text-[14px] text-[#1e68f6] font-[700]">
                  Chief Technology Officer
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-white text-sm">
                Innovating for Building web3 more secure and adoptable.
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <a href="https://www.linkedin.com/in/singhashmeet/">
                <Image
                  width={18}
                  height={18}
                  src="/assets/linkedin.png"
                  alt="img"
                />
              </a>
              <a href="https://twitter.com/Ashmeet70884617">
                <Image width={17} height={17} src="/assets/x.png" alt="img" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-col md:flex-row gap-8 md:gap-16 mt-8">
          <div className="w-96 md:w-[450px] bg-[#1b1b24] rounded-lg p-8">
            <div className="flex gap-4">
              <Image
                width={70}
                height={70}
                src="/assets/Mulaye.png"
                alt="cr-logo"
              />
              <div className="text-white flex flex-col justify-center">
                <p className="text-[16px] font-[700]">Mulaye Subakanya</p>
                <p className="text-[14px] text-[#1e68f6] font-[700]">
                  Contributor
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-white text-sm">
                An open-minded developer ready to reinvent the wheel
              </p>
            </div>

            <div className="mt-4">
              <a href="https://www.linkedin.com/in/mulaye-s-14a5531b6">
                <Image
                  width={18}
                  height={18}
                  src="/assets/linkedin.png"
                  alt="img"
                />
              </a>
            </div>
          </div>

          <div className="w-96 md:w-[450px] bg-[#1b1b24] rounded-lg p-8">
            <div className="flex gap-4">
              <Image
                width={70}
                height={70}
                src="/assets/Claude.png"
                alt="team-logo"
              />
              <div className="text-white flex flex-col justify-center">
                <p className="text-[16px] font-[700]">Claude Zion</p>
                <p className="text-[14px] text-[#1e68f6] font-[700]">
                  Chief Operating Officer
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-white text-sm">
                A passionate Software Engineer on an exhilarating journey
                through the vast cosmos of computer science.
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <a href="https://www.linkedin.com/in/claudezion/">
                <Image
                  width={18}
                  height={18}
                  src="/assets/linkedin.png"
                  alt="img"
                />
              </a>
              <a href="https://github.com/claudezion">
                <Image
                  width={16}
                  height={16}
                  src="/assets/github.png"
                  alt="img"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-col md:flex-row gap-8 md:gap-16 mt-8">
          <div className="w-96 md:w-[450px] bg-[#1b1b24] rounded-lg p-8">
            <div className="flex gap-4">
              <Image
                width={70}
                height={70}
                src="/assets/Jahmarley.png"
                alt="cr-logo"
              />
              <div className="text-white flex flex-col justify-center">
                <p className="text-[16px] font-[700]">Jahmarley Henry</p>
                <p className="text-[14px] text-[#1e68f6] font-[700]">
                  Executive Director
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-white text-sm">
                A WEB3 and blockchain enthusiast that is always researching and
                keeping up with new trends
              </p>
            </div>

            <div className="mt-4">
              <a href="https://www.linkedin.com/in/jahmarleyhenry/">
                <Image
                  width={18}
                  height={18}
                  src="/assets/linkedin.png"
                  alt="img"
                />
              </a>
            </div>
          </div>

          <div className="w-96 md:w-[450px] bg-[#1b1b24] rounded-lg p-8">
            <div className="flex gap-4 ">
              <div className=" flex w-[70px] p-4 items-center rounded-full bg-[#121212]">
                <Image
                  width={70}
                  height={70}
                  src="/assets/Gnosis.png"
                  alt="cr-logo"
                />
              </div>
              <div className="text-white flex flex-col justify-center">
                <p className="text-[16px] font-[700]">Gnosis</p>
                <p className="text-[14px] text-[#1e68f6] font-[700]">
                  AI Trading Assistant
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-white text-sm">
                I'm Gnosis, your AI trading ally
              </p>
            </div>

            <div className="mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

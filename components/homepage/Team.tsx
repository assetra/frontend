import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <div className="flex justify-center pt-32 pb-10 bg-gradient-to-r from-black from-10% via-blue-800/30 via-50% to-black to-90%">
      <div className="max-w-[1024px] ">
        <div>
          <p className="text-white text-center font-[700]">OUR TEAM</p>
          <div className="flex justify-center mt-4">
            <p className="text-center text-white text-3xl w-80 md:w-[700px] leading-10">
              The GTX team excels in innovation and is dedicated to excellence
            </p>
          </div>
        </div>

        <div className="flex justify-center flex-col md:flex-row gap-6 md:gap-16 mt-20">
          <div className="w-96 md:w-[450px] bg-[#1b1b24] rounded-lg p-8">
            <div className="flex gap-4">
              <Image width={70} height={70} src="/assets/avatar-1.png" alt="member-logo" />
              <div className="text-white flex flex-col justify-center">
                <p className="text-[16px] font-[700]">Giordano Bertin-Maurice</p>
                <p className="text-[14px] text-[#1e68f6] font-[700]">Chief Executive Officer</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-white text-sm">
                A digital asset trader with almost 5 years of experience looking to change the digital asset landscape.
              </p>
            </div>

            <div className="mt-4">
              <Image width={18} height={18} src="/assets/linkedin.png" alt="img" />
            </div>
          </div>

          <div className="w-96 md:w-[450px] bg-[#1b1b24] rounded-lg p-8">
            <div className="flex gap-4">
              <Image width={70} height={70} src="/assets/avatar-2.png" alt="team-logo" />
              <div className="text-white flex flex-col justify-center">
                <p className="text-[16px] font-[700]">Jahmarley Henry</p>
                <p className="text-[14px] text-[#1e68f6] font-[700]">Chief Marketing Officer</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-white text-sm">
                A WEB3 and blockchain enthusiatist that is always researching and keeping up with new trends
              </p>
            </div>

            <div className="mt-4">
              <Image width={18} height={18} src="/assets/linkedin.png" alt="img" />
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-col md:flex-row gap-8 md:gap-16 mt-8">
          <div className="w-96 md:w-[450px] bg-[#1b1b24] rounded-lg p-8">
            <div className="flex gap-4">
              <Image width={70} height={70} src="/assets/avatar-3.png" alt="cr-logo" />
              <div className="text-white flex flex-col justify-center">
                <p className="text-[16px] font-[700]">Salimzhan Shaimerdenov</p>
                <p className="text-[14px] text-[#1e68f6] font-[700]">Executive Director</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-white text-sm">An aspiring developer always looking to work or build something new</p>
            </div>

            <div className="mt-4">
              <Image width={18} height={18} src="/assets/linkedin.png" alt="img" />
            </div>
          </div>

          <div className="w-96 md:w-[450px] bg-[#1b1b24] rounded-lg p-8">
            <div className="flex gap-4">
              <Image width={70} height={70} src="/assets/avatar-4.png" alt="cr-logo" />
              <div className="text-white flex flex-col justify-center">
                <p className="text-[16px] font-[700]">Mulaye Subakanya</p>
                <p className="text-[14px] text-[#1e68f6] font-[700]">Chief Technology Officer</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-white text-sm">An open-minded developer ready to reinvent the wheel</p>
            </div>

            <div className="mt-4">
              <Image width={18} height={18} src="/assets/linkedin.png" alt="img" />
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-col md:flex-row gap-8 md:gap-16 mt-8">
          <div className="w-96 md:w-[450px] bg-[#1b1b24] rounded-lg p-8">
            <div className="flex gap-4">
              <Image width={70} height={70} src="/assets/avatar-5.png" alt="cr-logo" />
              <div className="text-white flex flex-col justify-center">
                <p className="text-[16px] font-[700]">Nitin Kumar</p>
                <p className="text-[14px] text-[#1e68f6] font-[700]">Chief Financial Officer</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-white text-sm">Business savvy individual</p>
            </div>

            <div className="mt-4">
              <Image width={18} height={18} src="/assets/linkedin.png" alt="img" />
            </div>
          </div>

          <div className="w-96 md:w-[450px] bg-[#1b1b24] rounded-lg p-8">
            <div className="flex gap-4">
              <Image width={70} height={70} src="/assets/avatar-6.png" alt="cr-logo" />
              <div className="text-white flex flex-col justify-center">
                <p className="text-[16px] font-[700]">Tammy Hans</p>
                <p className="text-[14px] text-[#1e68f6] font-[700]">Chief Security Officer</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-white text-sm">
                Certified full-stack engineer with expertise in full-stack, blockchain and smart contract development
              </p>
            </div>

            <div className="mt-4">
              <Image width={18} height={18} src="/assets/linkedin.png" alt="img" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="w-96 md:w-[450px] bg-[#1b1b24] rounded-lg p-8">
            <div className="flex gap-4">
              <Image width={70} height={70} src="/assets/avatar-7.png" alt="cr-logo" />
              <div className="text-white flex flex-col justify-center">
                <p className="text-[16px] font-[700]">Ashmeet Singh</p>
                <p className="text-[14px] text-[#1e68f6] font-[700]">Chief Operating Officer</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-white text-sm">Innovating for Building web3 more secure and adoptable.</p>
            </div>

            <div className="mt-4">
              <Image width={18} height={18} src="/assets/linkedin.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

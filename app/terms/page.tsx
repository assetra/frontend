import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

const page = () => {
  return (
    <div className="flex min-h-screen pt-12">
      <div className="w-full md:w-[80svw] p-6 rounded-md bg-base-300 m-auto">
        <h1 className="text-[24px] mb-5">Terms of Service</h1>
        <p className="mb-[10px] leading-7">
          Welcome to GTX! By accessing and using our digital asset ecosystem,
          including our cryptocurrency exchange, NFT marketplace, and
          portfolio-tracking wallet services, you agree to the following terms
          and conditions:
        </p>
        <ul className="m-0 pl-5">
          <li className="mb-[10px]">
            <span className="font-semibold">
              User Eligibility and Responsibilities:
            </span>
            You must be of legal age and capacity to enter into agreements and
            comply with all applicable laws and regulations, including those in
            Antigua and Barbuda, where GTX is headquartered. You are responsible
            for maintaining the confidentiality and security of your account
            credentials and agree to notify us immediately of any unauthorized
            use or security breach.
          </li>
          <li className="mb-[10px]">
            <span className="font-semibold">
              Service Availability and Modifications:
            </span>
            While GTX strives to provide reliable and uninterrupted services, we
            do not guarantee continuous availability. We reserve the right to
            modify, suspend, or discontinue any part of our services at any time
            without prior notice.
          </li>
          <li className="mb-[10px]">
            <span className="font-semibold">
              Account Suspension and Termination:
            </span>
            GTX may suspend or terminate your access to our services if we
            suspect fraudulent activity, violations of our terms of service, or
            for any other reason at our discretion. You agree that GTX shall not
            be liable for any losses or damages resulting from such actions.
          </li>
          <li className="mb-[10px]">
            <span className="font-semibold">Disclaimer of Warranties: </span>
            Our services are provided "as is" and "as available" without
            warranties of any kind, whether express or implied. We do not
            warrant the accuracy, completeness, or reliability of any
            information obtained through our services or the suitability of our
            services for your particular purposes.
          </li>
          <li className="mb-[10px]">
            <span className="font-semibold">Limitation of Liability: </span>
            In no event shall GTX, its affiliates, directors, officers,
            employees, or agents be liable for any indirect, incidental,
            special, consequential, or punitive damages arising out of or
            related to your use of our services, even if advised of the
            possibility of such damages.
          </li>
          <li className="mb-[10px]">
            <span className="font-semibold"> Changes to Terms:</span>
            We may update these terms from time to time to reflect changes in
            our services or legal requirements. Your continued use of our
            services constitutes acceptance of these changes.
          </li>
          <li className="mb-[10px]">
            <span className="font-semibold">
              Governing Law and Dispute Resolution:
            </span>
            These terms of service shall be governed by and construed in
            accordance with the laws of Antigua and Barbuda. Any dispute arising
            out of or in connection with these terms shall be resolved
            exclusively through arbitration administered by Antigua & Barbuda in
            St. Johns, in accordance with its rules and procedures.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;

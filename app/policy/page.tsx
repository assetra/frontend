import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
};

const page = () => {
  return (
    <div className="flex min-h-screen mt-16">
      <div className="w-full md:w-[80svw] p-6 rounded-md bg-base-300 m-auto">
        <h1 className="text-[24px] mb-5">Privacy Notice</h1>
        <p className="mb-[10px] leading-7">
          Protecting your privacy and maintaining the confidentiality of your
          personal information is a top priority at Assetra. This privacy notice
          outlines how we collect, use, disclose, and protect your personal
          information when you use our services:
        </p>
        <ul className="m-0 pl-5">
          <li className="mb-[10px]">
            <span className="font-semibold">Information We Collect:</span> We
            collect personal information you provide to us, such as your name,
            contact details, financial information, and identification
            documents, to establish and maintain your account, verify your
            identity, process transactions, and comply with legal obligations in
            Antigua and Barbuda and other jurisdictions where we operate.
          </li>
          <li className="mb-[10px]">
            <span className="font-semibold">Usage Of Your Information:</span>
            We use your information to provide, personalize, and improve our
            services, including customer support, fraud prevention, and
            operational purposes. We may also use aggregated and anonymized data
            for statistical analysis and business insights.
          </li>
          <li className="mb-[10px]">
            <span className="font-semibold">Information Sharing:</span> Assetra may
            share your personal information with trusted service providers,
            financial institutions, regulatory authorities, and affiliates as
            necessary to operate our business, process transactions, comply with
            legal obligations, and protect against fraud and security risks.
          </li>
          <li className="mb-[10px]">
            <span className="font-semibold">Data Security:</span>
            We implement technical and organizational measures to protect your
            personal information from unauthorized access, use, or disclosure.
            These measures include encryption, access controls, and regular
            security assessments.
          </li>
          <li className="mb-[10px]">
            <span className="font-semibold">Your Choices and Rights:</span>
            You have the right to access, correct, or delete your personal
            information. You may also have the right to object to or restrict
            certain processing activities. Please contact us at info@Assetra.com.co
            if you wish to exercise any of these rights or have questions about
            our privacy practices.
          </li>
          <li className="mb-[10px]">
            <span className="font-semibold"> Retention of Information:</span>
            We retain your personal information only for as long as necessary to
            fulfill the purposes outlined in this notice, unless a longer
            retention period is required or permitted by law.
          </li>
          <li className="mb-[10px]">
            <span className="font-semibold">International Data Transfers:</span>
            Your personal information may be transferred to and processed in
            countries outside of your jurisdiction, where data protection laws
            may differ. We will take appropriate measures to ensure that your
            personal information remains protected in accordance with applicable
            laws.
          </li>
          <li className="mb-[10px]">
            <span className="font-semibold">Contact Us:</span>
            If you have questions, concerns, or complaints about our privacy
            practices or this notice, or if you wish to exercise your rights
            regarding your personal information, please contact us at
            info@Assetra.com.co.
          </li>
        </ul>
        <p className="mb-[10px] leading-7">
          These expanded versions provide comprehensive information to users
          about the risks associated with using Assetra's services, their rights and
          responsibilities, and how their personal information is handled and
          protected. It's crucial to review and customize these drafts based on
          Assetra's specific operational practices and legal requirements and seek
          guidance from legal professionals to ensure compliance with applicable
          laws and regulations.
        </p>
      </div>
    </div>
  );
};

export default page;

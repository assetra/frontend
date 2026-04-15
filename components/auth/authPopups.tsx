import React from "react";
import { LoginPop } from "./loginPop";
import { SignupPop } from "./signupPop";
import { VerificationPop } from "./verificationPop";
import { ReferralPop } from "../profile/referralPop";

const AuthPopups = () => (
  <>
    <LoginPop />
    <SignupPop />
    <VerificationPop />
    <ReferralPop />
  </>
);

export default AuthPopups;

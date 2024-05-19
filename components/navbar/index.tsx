"use client";

import React, { useContext } from "react";
import NavbarAuth from "./navbarAuth";
import NavbarDashboard from "./navbarDashboard";
import { AuthContext } from "@/context/AddContext";
import NavbarMobile from "./navbarMobile";

const Navbar = () => {
  const appContext = useContext(AuthContext);

  return (
    <div>
      {appContext.navbarState === 0 ? (
        <NavbarAuth />
      ) : appContext.navbarState === 1 ? (
        <NavbarDashboard />
      ) : (
        <NavbarMobile />
      )}
    </div>
  );
};

export default Navbar;

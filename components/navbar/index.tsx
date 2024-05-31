"use client";

import React, { useContext } from "react";
import NavbarAuth from "./navbarAuth";
import NavbarDashboard from "./navbarDashboard";
import { AuthContext } from "@/context/AddContext";

const Navbar = () => {
  const appContext = useContext(AuthContext);

  return (
    <div>{!appContext.navbarState ? <NavbarAuth /> : <NavbarDashboard />}</div>
  );
};

export default Navbar;

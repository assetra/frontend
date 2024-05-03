"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface IAuthContextProps {
  dashboardState: number;
  setDashboardState: (_: number) => void;
  navbarState: number;
  setNavbarState: (_: number) => void;
}

const defaultValue: IAuthContextProps = {
  dashboardState: 1,
  setDashboardState: (_: number) => {},
  navbarState: 0,
  setNavbarState: (_: number) => {},
};

export const AuthContext = createContext<IAuthContextProps>(defaultValue);

interface IAppWrapperProps {
  children: React.ReactNode;
}

export function AppWrapper({ children }: IAppWrapperProps) {
  const [dashboardState, setDashboardState] = useState<number>(1);
  const [navbarState, setNavbarState] = useState<number>(2);

  const sharedState = {
    dashboardState: dashboardState,
    setDashboardState: setDashboardState,
    navbarState: navbarState,
    setNavbarState: setNavbarState,
  };

  return (
    <AuthContext.Provider value={sharedState}>{children}</AuthContext.Provider>
  );
}

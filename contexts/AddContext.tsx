"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface IAuthContextProps {
  dashboardState: number;
  setDashboardState: (_: number) => void;
  navbarState: boolean;
  setNavbarState: (_: boolean) => void;
}

const defaultValue: IAuthContextProps = {
  dashboardState: 1,
  setDashboardState: (_: number) => {},
  navbarState: false,
  setNavbarState: (_: boolean) => {},
};

export const AuthContext = createContext<IAuthContextProps>(defaultValue);

interface IAppWrapperProps {
  children: React.ReactNode;
}

export function AppWrapper({ children }: IAppWrapperProps) {
  const [dashboardState, setDashboardState] = useState<number>(() => {
    // Retrieve the state from local storage or default to 1
    if (typeof window !== 'undefined') {
      return Number(localStorage.getItem('dashboardState')) || 1;
    }
    return 1;
  });

  const [navbarState, setNavbarState] = useState<boolean>(false);

  useEffect(() => {
    // Save the state to local storage whenever it changes
    localStorage.setItem('dashboardState', String(dashboardState));
  }, [dashboardState]);

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

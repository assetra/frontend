"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
  setUser: (user: any) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  setUser: () => {},
  setIsAuthenticated: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          return JSON.parse(storedUser);
        } catch (error) {
          console.error("Failed to parse stored user", error);
          return null;
        }
      }
    }
    return null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== "undefined") {
      const storedIsAuthenticated = localStorage.getItem("isAuthenticated");
      return storedIsAuthenticated === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isAuthenticated", isAuthenticated.toString());
  }, [user, isAuthenticated]);

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, setUser, setIsAuthenticated, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

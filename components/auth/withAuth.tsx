"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

const withAuth = (Component: React.ComponentType) => {
  return (props: any) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        const intendedRoute =
          typeof window !== "undefined" ? window.location.pathname : "/";
        router.push(`/login?redirect=${intendedRoute}`);
      }
    }, [isAuthenticated, router]);

    return isAuthenticated ? <Component {...props} /> : null;
  };
};

export default withAuth;

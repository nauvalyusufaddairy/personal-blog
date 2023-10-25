"use client";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext) as any;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

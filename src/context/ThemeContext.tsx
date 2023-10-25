// "use client";
// import { createContext, useState } from "react";

// // @ts-ignore
// export const ThemeContext = createContext();
// const getFromLocalStorage = () => {
//   if (typeof window !== undefined) {
//     const value = localStorage.getItem("theme");

//     return value || "light";
//   }
// };
// export const ThemeContextProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [theme, setTheme] = useState(() => {
//     return getFromLocalStorage();
//   });
//   return (
//     <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
//   );
// };

"use client";

import React, { createContext, useEffect, useState } from "react";

//@ts-ignore
export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");

    return value || "dark";
  }
};

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage() as string;
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

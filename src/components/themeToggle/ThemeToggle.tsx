"use client";
import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext, ThemeContextProvider } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext) as any;

  return (
    <div
      onClick={() => toggle()}
      className={styles.container}
      style={
        theme === "dark"
          ? { background: "#c7c4c4e7" }
          : { background: "#0f172a" }
      }>
      <Image src={"/moon.png"} alt="moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }></div>
      <Image src={"/sun.png"} alt="sun" width={14} height={14} />
    </div>
  );
}

"use client";
import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext, ThemeContextProvider } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext) as any;

  console.log(theme);

  return (
    <div onClick={() => toggle()} className={styles.container}>
      <Image src={"/moon.png"} alt="moon" width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src={"/sun.png"} alt="sun" width={14} height={14} />
    </div>
  );
}

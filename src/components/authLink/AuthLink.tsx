"use client";
import Link from "next/link";
import styles from "./authLink.module.css";
import { useState } from "react";

export default function AuthLink() {
  const status = "notauthenticated";
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* @ts-ignore */}
      {status === "notauthenticated" ? (
        <Link href={"/login"}>Login</Link>
      ) : (
        <>
          <Link href={"/write"}>Write</Link>
          <span className={styles.link}>logout</span>
        </>
      )}
      <div className={styles.burger}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

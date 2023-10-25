import Link from "next/link";
import styles from "./authLink.module.css";

export default function AuthLink() {
  const status = "notauthenticated";

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
    </div>
  );
}

"use client";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const LoginPage = () => {
  const { status, data } = useSession();

  console.log("status", status, "data", data);
  const router = useRouter();
  // @ts-ignore
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  // @ts-ignore
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>Sign in with Google</div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;

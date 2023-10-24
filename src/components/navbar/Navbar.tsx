import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLink from "../authLink/AuthLink";
export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" width={24} height={24} alt="facebook" />
        <Image src="/instagram.png" width={24} height={24} alt="facebook" />
        <Image src="/youtube.png" width={24} height={24} alt="facebook" />
        <Image src="/tiktok.png" width={24} height={24} alt="facebook" />
      </div>
      <div className={styles.logo}>Nauval Blogs</div>
      <div className={styles.link}>
        <ThemeToggle />
        <Link href={"/"}> Homepage</Link>
        <Link href={"/"}> Contact</Link>
        <Link href={"/"}> About</Link>

        <AuthLink />
      </div>
    </div>
  );
}

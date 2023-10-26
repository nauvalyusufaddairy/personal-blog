import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import styles from "./cardlist.module.css";
import Image from "next/image";

export default function Cardlist() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
}

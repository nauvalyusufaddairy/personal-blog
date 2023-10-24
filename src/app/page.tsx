import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import styles from "./home.module.css";
import Link from "next/link";
import Cardlist from "@/components/cardlist/CardList";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <Cardlist />
        <Menu />
      </div>
    </div>
  );
}

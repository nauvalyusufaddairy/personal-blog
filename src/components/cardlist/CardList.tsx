import Pagination from "../pagination/Pagination";
import styles from "./cardlist.module.css";

export default function Cardlist() {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  );
}

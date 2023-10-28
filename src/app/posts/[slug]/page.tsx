import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
export default function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              {" "}
              <Image src={"/p1.jpeg"} alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              {" "}
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024 </span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          {" "}
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor hic
              praesentium quae dicta amet? Commodi quod consequuntur dolorem
              aspernatur, porro nam esse modi maxime dolorum asperiores fuga
              sapiente vel. Nulla.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              maiores minus ipsum ullam amet iusto perferendis reprehenderit
              similique nisi dolores laudantium fuga placeat, deserunt
              dignissimos eveniet dolore illo deleniti! Numquam?
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );

  // {dsmd  knkakakaakak}
}

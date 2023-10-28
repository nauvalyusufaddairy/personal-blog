"use client";
import Image from "next/image";
import styles from "./write.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
export default function Write() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button}>
          <Image
            src={"/plus.png"}
            alt=""
            width={16}
            height={16}
            onClick={() => setOpen(!open)}
          />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addbutton}>
              <Image src={"/image.png"} alt="" width={16} height={16} />
            </button>
            <button className={styles.addbutton}>
              <Image src={"/external.png"} alt="" width={16} height={16} />
            </button>
            <button className={styles.addbutton}>
              <Image src={"/video.png"} alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your stories..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
}

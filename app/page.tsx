import Image from "next/image";
import styles from "./styles/page.module.css";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <div className={styles.pageContent}>
      <main className={styles.pageMain}>
        <div className={styles.center}></div>
        <Hero />
      </main>
      <div className={styles.pageImage}>
        <Image
          className={styles.treeImage}
          src="/tree_3.png"
          alt="tech-tree-image"
          fill
          style={{
            opacity: "100%",
            zIndex: 0,
            objectFit: "contain",
            objectPosition: "right",
          }}
        />
      </div>
      <About />
    </div>
  );
}

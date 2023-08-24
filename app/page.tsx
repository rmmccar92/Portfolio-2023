import Image from "next/image";
import styles from "./styles/page.module.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

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
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

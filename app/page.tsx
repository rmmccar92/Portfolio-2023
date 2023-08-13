import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./styles/page.module.css";
import Hero from "./components/Hero";
import About from "./components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <Hero />
        </div>
        <About />
      </main>
    </>
  );
}

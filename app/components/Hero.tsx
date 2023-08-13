import type { FC } from "react";
import styles from "../styles/Hero.module.css";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroShapes}>
            <div className={styles.heroElement} />
            <div className={styles.heroLine} />
          </div>
          <div>
            <h1>
              Hi, I'm
              <span className={styles.heroTitleSpan}> Ryan</span>
            </h1>
            <p>I'm a full-stack developer and designer in training.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

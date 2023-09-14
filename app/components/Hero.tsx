import type { FC } from "react";
import styles from "../styles/Hero.module.css";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <>
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
              <p className={styles.heroIntro}>
                I'm a full-stack developer. Feel free to take a look at some of
                my
                <span className={styles.heroStyledText}>
                  <a href="#work"> projects</a>
                </span>
                , or just stick around and watch the
                <span className={styles.heroStyledText}> colors </span>
                change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;

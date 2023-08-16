import type { FC } from "react";
import styles from "../styles/About.module.css";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <div className={styles.aboutMain}>
      <h1>About</h1>
      <p>
        I started my programming journey in 2021 after pivoting from the A/V
        events industry. <br />
        Right now I help to teach coding in the boot camp that I graduated from.{" "}
        <br />
        I love to learn and help others learn. <br />
        I have spent much of my own time learning about React, Next.js, and
        TypeScript. <br />
      </p>
    </div>
  );
};
export default About;

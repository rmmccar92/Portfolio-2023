import type { FC } from "react";
import styles from "../styles/About.module.css";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <div className={styles.aboutMain}>
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
  );
};
export default About;

import type { FC } from "react";
import styles from "../styles/Resume.module.css";

interface ResumeProps {}

const Resume: FC<ResumeProps> = ({}) => {
  return (
    <div className={styles.resumeMain}>
      <h1>Resume</h1>
    </div>
  );
};
export default Resume;

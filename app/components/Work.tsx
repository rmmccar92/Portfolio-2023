import type { FC } from "react";
import styles from "../styles/Work.module.css";

interface WorkProps {}

const Work: FC<WorkProps> = ({}) => {
  return (
    <div className={styles.workMain}>
      <h1>Work</h1>
    </div>
  );
};
export default Work;

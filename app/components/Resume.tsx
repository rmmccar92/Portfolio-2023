import type { FC } from "react";
import styles from "../styles/Resume.module.css";
import data from "../data/technologies";
import Image from "next/image";
interface ResumeProps {}

const Resume: FC<ResumeProps> = ({}) => {
  return (
    <div className={styles.resumeMain}>
      <h1>Skills</h1>
      <div className={styles.skillsContainer}>
        {data.images.map((skill: any) => (
          <div className={styles.skillCard}>
            <div className={styles.skillImage}>
              <Image
                src={skill.url}
                width={75}
                height={75}
                alt={skill.name}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Resume;

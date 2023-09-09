"use client";

import type { FC } from "react";
import { useState } from "react";
import styles from "../styles/Resume.module.css";
import data from "../data/technologies";
import Image from "next/image";
interface ResumeProps {}

const Resume: FC<ResumeProps> = ({}) => {
  const [currentSkill, setCurrentSkill] = useState("");

  return (
    <div className={styles.resumeMain}>
      <h1>Skills</h1>
      <div className={styles.skillsContainer}>
        <div className={styles.skillList}>
          {data.images.map((skill: any, i: number) => (
            <div
              key={i}
              className={styles.skillCard}
              onMouseEnter={() => setCurrentSkill(skill.name)}
              onMouseLeave={() => setCurrentSkill("")}
              style={{ zIndex: 100 }}
            >
              <div className={styles.skillImage}>
                <Image
                  className={styles.skillImage}
                  src={skill.url}
                  width={60}
                  height={60}
                  alt={skill.name}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.skillDisplay}>
          {currentSkill !== "" && (
            <p className={styles.visible}>{currentSkill}</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Resume;
